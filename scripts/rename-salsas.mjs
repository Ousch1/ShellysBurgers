import sharp from 'sharp'
import { unlink } from 'fs/promises'
import { join } from 'path'

const dir = 'public/images/productos'

const map = [
  ['salsa1.webp.jpeg', 'miel-mostaza.webp'],
  ['salsa2.webp.jpeg', 'salsa-frutos-rojos.webp'],
  ['salsa3.webp.jpeg', 'sweet-chilly.webp'],
  ['salsa4.webp.jpeg', 'relish.webp'],
  ['salsa5.webp.jpeg', 'alioli.webp'],
  ['salsa6.webp.jpeg', 'salsa-cheddar.webp'],
  ['salsa7.webp.jpeg', 'salsa-bbq.webp'],
  ['salsa8.webp.jpeg', 'mayonesa.webp'],
]

for (const [src, dest] of map) {
  await sharp(join(dir, src)).webp({ quality: 82 }).toFile(join(dir, dest))
  await unlink(join(dir, src))
  console.log(`${src} → ${dest}`)
}
console.log('Listo.')
