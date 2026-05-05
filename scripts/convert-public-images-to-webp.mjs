/**
 * Перед production-сборкой: все .jpg / .jpeg / .png в public/
 * конвертируются в WebP (quality 85), исходные растровые файлы удаляются.
 * Повторный запуск безопасен (остаются только .webp и прочие форматы).
 *
 * Запуск: npm run optimize-images (или автоматически из npm run build)
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");
const RASTER = /\.(jpe?g|png)$/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full);
    } else if (RASTER.test(e.name)) {
      await convertOne(full);
    }
  }
}

async function convertOne(filePath) {
  const outPath = filePath.replace(RASTER, ".webp");
  await sharp(filePath).rotate().webp({ quality: 85, effort: 6 }).toFile(outPath);
  await fs.unlink(filePath);
  console.log("[webp]", path.relative(publicDir, filePath), "→", path.relative(publicDir, outPath));
}

try {
  await fs.access(publicDir);
} catch {
  console.error("public/ not found");
  process.exit(1);
}

await walk(publicDir);
console.log("optimize-images: done");
