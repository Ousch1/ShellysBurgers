import sharp from 'sharp'
import { readdir, unlink } from 'fs/promises'
import { join, extname, basename } from 'path'

const dir = 'public/images/productos'

const files = await readdir(dir)
const images = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f))

console.log(`Convirtiendo ${images.length} imágenes a WebP...`)

for (const file of images) {
  const input  = join(dir, file)
  const output = join(dir, basename(file, extname(file)) + '.webp')

  await sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(output)

  const { size: before } = await import('fs').then(m => m.promises.stat(input))
  const { size: after  } = await import('fs').then(m => m.promises.stat(output))

  console.log(`  ${file} → ${basename(output)}  (${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB, -${Math.round((1-after/before)*100)}%)`)

  // Borrar el original
  await unlink(input)
}

console.log('\nListo. Actualiza las referencias .jpeg/.jpg → .webp en los JSON.')
