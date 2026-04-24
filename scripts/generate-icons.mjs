import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const projectRoot = process.cwd();
const sourcePng = path.join(projectRoot, "src", "assets", "Favicon.png");
const publicDir = path.join(projectRoot, "public");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writePng({ size, outFile }) {
  const outPath = path.join(publicDir, outFile);
  await sharp(sourcePng)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

async function writeIco({ outFile, sizes }) {
  const outPath = path.join(publicDir, outFile);
  const buffers = await Promise.all(
    sizes.map((size) =>
      sharp(sourcePng)
        .resize(size, size, { fit: "cover" })
        .png({ compressionLevel: 9 })
        .toBuffer()
    )
  );

  const ico = await toIco(buffers);
  await fs.writeFile(outPath, ico);
}

async function main() {
  await ensureDir(publicDir);

  await writePng({ size: 32, outFile: "favicon-32x32.png" });
  await writePng({ size: 16, outFile: "favicon-16x16.png" });
  await writePng({ size: 180, outFile: "apple-touch-icon.png" });
  await writePng({ size: 192, outFile: "icon-192.png" });
  await writePng({ size: 512, outFile: "icon-512.png" });
  await writePng({ size: 48, outFile: "favicon.png" });

  await writeIco({ outFile: "favicon.ico", sizes: [16, 32, 48] });

  console.log("Generated icons in /public from src/assets/Favicon.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

