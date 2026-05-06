/**
 * Перед production-сборкой:
 * - .jpg / .jpeg / .png → WebP, исходный растр удаляется
 * - существующие .webp → перекодируются
 *
 * Цель по размеру: не больше TARGET_KB KiB на файл (подбор quality, при необходимости —
 * уменьшение длинной стороны). Фиксированное «целевое разрешение в пикселях» не задаётся.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");
const RASTER_IN = /\.(jpe?g|png)$/i;
const WEBP = /\.webp$/i;

/** Целевой потолок размера файла (KiB). */
const TARGET_KB = 150;
const MAX_BYTES = Math.round(TARGET_KB * 1024);

const QUALITY_MIN = 35;
const QUALITY_MAX = 95;
/** Одинаковый effort при поиске quality и в финальном файле — без скачка размера из-за другого effort. */
const WEBP_EFFORT = 5;
/** Минимальная длинная сторона при сжатии «до упора». */
const MIN_LONG_EDGE = 320;
const SCALE_FACTOR = 0.87;

/**
 * @param {string} inputPath
 * @param {number} longEdgeCap ограничение длинной стороны (px), не больше исходной
 * @param {number} naturalW
 * @param {number} naturalH
 */
function makePipeline(inputPath, longEdgeCap, naturalW, naturalH) {
  let p = sharp(inputPath).rotate();
  const naturalLong = Math.max(naturalW, naturalH);
  if (longEdgeCap < naturalLong) {
    p = p.resize({
      width: longEdgeCap,
      height: longEdgeCap,
      fit: "inside",
      withoutEnlargement: true,
    });
  }
  return p;
}

async function binarySearchQuality(inputPath, longEdgeCap, naturalW, naturalH, maxBytes) {
  let lo = QUALITY_MIN;
  let hi = QUALITY_MAX;
  let best = QUALITY_MIN;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const buf = await makePipeline(inputPath, longEdgeCap, naturalW, naturalH)
      .webp({ quality: mid, effort: WEBP_EFFORT })
      .toBuffer();
    if (buf.length <= maxBytes) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best;
}

/**
 * @returns {Promise<{ buffer: Buffer, quality: number, longEdgeCap: number }>}
 */
async function encodeUnderBudget(inputPath) {
  const meta = await sharp(inputPath).metadata();
  const naturalW = meta.width ?? 0;
  const naturalH = meta.height ?? 0;
  const naturalLong = Math.max(naturalW, naturalH);
  if (naturalLong === 0) {
    throw new Error(`Нет размеров: ${inputPath}`);
  }

  let longEdgeCap = naturalLong;

  while (longEdgeCap >= MIN_LONG_EDGE) {
    let q = await binarySearchQuality(inputPath, longEdgeCap, naturalW, naturalH, MAX_BYTES);
    let buf = await makePipeline(inputPath, longEdgeCap, naturalW, naturalH)
      .webp({ quality: q, effort: WEBP_EFFORT })
      .toBuffer();
    while (buf.length > MAX_BYTES && q > QUALITY_MIN) {
      q -= 1;
      buf = await makePipeline(inputPath, longEdgeCap, naturalW, naturalH)
        .webp({ quality: q, effort: WEBP_EFFORT })
        .toBuffer();
    }

    if (buf.length <= MAX_BYTES) {
      return { buffer: buf, quality: q, longEdgeCap };
    }
    longEdgeCap = Math.floor(longEdgeCap * SCALE_FACTOR);
  }

  const buf = await makePipeline(inputPath, MIN_LONG_EDGE, naturalW, naturalH)
    .webp({ quality: QUALITY_MIN, effort: WEBP_EFFORT })
    .toBuffer();
  return { buffer: buf, quality: QUALITY_MIN, longEdgeCap: MIN_LONG_EDGE };
}

async function writeBufferToFile(buffer, destPath) {
  const tmp = `${destPath}.tmp`;
  await fs.writeFile(tmp, buffer);
  await fs.rename(tmp, destPath);
}

async function convertRasterToWebp(filePath) {
  const rel = path.relative(publicDir, filePath).split(path.sep).join("/");
  const outPath = filePath.replace(RASTER_IN, ".webp");
  const { buffer, quality, longEdgeCap } = await encodeUnderBudget(filePath);
  await writeBufferToFile(buffer, outPath);
  await fs.unlink(filePath);
  const kb = (buffer.length / 1024).toFixed(1);
  console.log(
    "[webp]",
    rel,
    "→",
    path.relative(publicDir, outPath).split(path.sep).join("/"),
    `| ${kb} KiB, q=${quality}, long≤${longEdgeCap}`
  );
}

async function reoptimizeWebp(filePath) {
  const rel = path.relative(publicDir, filePath).split(path.sep).join("/");
  const { buffer, quality, longEdgeCap } = await encodeUnderBudget(filePath);
  await writeBufferToFile(buffer, filePath);
  const kb = (buffer.length / 1024).toFixed(1);
  if (buffer.length > MAX_BYTES) {
    console.warn(
      `[webp-optimize] ${rel} | ${kb} KiB > ${TARGET_KB} KiB после мин. размера (q=${quality}, long≤${longEdgeCap})`
    );
  } else {
    console.log(`[webp-optimize] ${rel} | ${kb} KiB, q=${quality}, long≤${longEdgeCap}`);
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full);
    } else if (RASTER_IN.test(e.name)) {
      await convertRasterToWebp(full);
    } else if (WEBP.test(e.name)) {
      await reoptimizeWebp(full);
    }
  }
}

try {
  await fs.access(publicDir);
} catch {
  console.error("public/ not found");
  process.exit(1);
}

await walk(publicDir);
console.log("optimize-images: done");
