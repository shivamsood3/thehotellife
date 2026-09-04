import sharp from "sharp";
import { fileURLToPath } from "node:url";

const plum = "#4A1D34";
const cyan = "#00A6DE";

function artwork(maskable) {
  const mark = maskable
    ? { x: 347, y: 250, width: 330, height: 523, radius: 94, slotX: 466, slotWidth: 92, cutY: 397, cutR: 69, dotY: 642, dotR: 39 }
    : { x: 332, y: 227, width: 360, height: 570, radius: 102, slotX: 462, slotWidth: 100, cutY: 387, cutR: 74, dotY: 653, dotR: 44 };

  return `<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" fill="${plum}"/>
    <rect x="${mark.x}" y="${mark.y}" width="${mark.width}" height="${mark.height}" rx="${mark.radius}" fill="#fff"/>
    <circle cx="512" cy="${mark.cutY}" r="${mark.cutR}" fill="${plum}"/>
    <rect x="${mark.slotX}" y="${mark.y - 1}" width="${mark.slotWidth}" height="${mark.cutY - mark.y + 4}" rx="${mark.slotWidth / 2}" fill="${plum}"/>
    <circle cx="512" cy="${mark.dotY}" r="${mark.dotR}" fill="${cyan}"/>
  </svg>`;
}

async function writeIcon(filename, size, maskable) {
  await sharp(Buffer.from(artwork(maskable)))
    .resize(size, size)
    .png({ compressionLevel: 9, palette: true })
    .toFile(fileURLToPath(new URL(`../public/${filename}`, import.meta.url)));
}

await Promise.all([
  writeIcon("pwa-icon-192.png", 192, false),
  writeIcon("pwa-icon-512.png", 512, false),
  writeIcon("pwa-maskable-192.png", 192, true),
  writeIcon("pwa-maskable-512.png", 512, true),
  writeIcon("apple-touch-icon.png", 180, false),
]);
