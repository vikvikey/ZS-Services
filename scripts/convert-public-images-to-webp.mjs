/**
 * Перед production-сборкой:
 * - .jpg / .jpeg / .png → WebP с ресайзом и сжатием, исходник удаляется
 * - уже существующие .webp в public/ перекодируются и при необходимости уменьшаются
 *
 * Лимиты (fit: inside, длинная сторона):
 * - слайды галереи (кроме example-photo) — 800 px, quality 72
 * - example-photo (колонка ~280px) — 560 px, quality 72
 * - прочие растры — 720 px, quality 78
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");
const RASTER_IN = /\.(jpe?g|png)$/i;
const WEBP = /\.webp$/i;

const QUALITY_DEFAULT = 78;
const QUALITY_GALLERY = 72;
const MAX_CAROUSEL = 800;
const MAX_COL_PHOTO = 560;
const MAX_DEFAULT = 720;

function isGalleryExample(relPosix) {
  return /(^|\/)example-photo\.webp$/i.test(relPosix);
}

function maxEdgeForRel(relPosix) {
  if (isGalleryExample(relPosix)) return MAX_COL_PHOTO;
  if (relPosix.includes("gallery/")) return MAX_CAROUSEL;
  return MAX_DEFAULT;
}

function qualityForRel(relPosix) {
  if (relPosix.includes("gallery/")) return QUALITY_GALLERY;
  return QUALITY_DEFAULT;
}

/**
 * @param {import("sharp").Sharp} pipeline
 * @param {import("sharp").Metadata} meta
 * @param {number} maxEdge
 */
function resizeIfNeeded(pipeline, meta, maxEdge) {
  if (!meta.width || !meta.height) return pipeline;
  if (meta.width <= maxEdge && meta.height <= maxEdge) return pipeline;
  return pipeline.resize({
    width: maxEdge,
    height: maxEdge,
    fit: "inside",
    withoutEnlargement: true,
  });
}

async function writeWebpToTemp(pipeline, tmpPath, quality) {
  await pipeline.webp({ quality, effort: 5 }).toFile(tmpPath);
}

async function convertRasterToWebp(filePath) {
  const rel = path.relative(publicDir, filePath).split(path.sep).join("/");
  const outPath = filePath.replace(RASTER_IN, ".webp");
  const q = qualityForRel(rel);
  let pipeline = sharp(filePath).rotate();
  const meta = await pipeline.metadata();
  pipeline = resizeIfNeeded(pipeline, meta, maxEdgeForRel(rel));
  const tmp = `${outPath}.tmp`;
  await writeWebpToTemp(pipeline, tmp, q);
  await fs.rename(tmp, outPath);
  await fs.unlink(filePath);
  console.log("[webp]", rel, "→", path.relative(publicDir, outPath).split(path.sep).join("/"));
}

async function reoptimizeWebp(filePath) {
  const rel = path.relative(publicDir, filePath).split(path.sep).join("/");
  const q = qualityForRel(rel);
  const meta = await sharp(filePath).metadata();
  let pipeline = sharp(filePath).rotate();
  pipeline = resizeIfNeeded(pipeline, meta, maxEdgeForRel(rel));
  const tmp = `${filePath}.tmp`;
  await writeWebpToTemp(pipeline, tmp, q);
  await fs.rename(tmp, filePath);
  console.log("[webp-optimize]", rel);
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
