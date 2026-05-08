import sharp from 'sharp'
import { writeFile } from 'fs/promises'
import { join } from 'path'

const dir = 'public/images/productos'

// Barcodes from Open Food Facts (openfoodfacts.org — open data CC BY-SA)
const drinks = [
  { file: 'coca-cola-original.webp',   barcode: '5449000000996' },
  { file: 'coca-cola-zero.webp',        barcode: '5449000131898' },
  { file: 'coca-cola-zero-cafeina.webp',barcode: '5449000214218' },
  { file: 'fanta-limon.webp',           barcode: '5449000054227' },
  { file: 'fanta-naranja.webp',         barcode: '5449000054173' },
  { file: 'fuze-tea-limon.webp',        barcode: '5449000225474' },
  { file: 'fuze-tea-maracuya.webp',     barcode: '5449000267139' },
  { file: 'aquarius-naranja.webp',      barcode: '5449000118714' },
  { file: 'aquarius-limon.webp',        barcode: '5449000054951' },
  { file: 'agua.webp',                  barcode: '8410261010015' },
]

let ok = 0
for (const { file, barcode } of drinks) {
  try {
    const api = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    const data = await api.json()
    const imgUrl = data?.product?.image_front_url || data?.product?.image_url
    if (!imgUrl) { console.log(`  ✗ Sin imagen: ${file}`); continue }

    const res = await fetch(imgUrl)
    if (!res.ok) throw new Error(res.status)
    const buf = Buffer.from(await res.arrayBuffer())

    await sharp(buf).resize(400, 400, { fit: 'contain', background: { r:6,g:9,b:26,alpha:1 } }).webp({ quality: 82 }).toFile(join(dir, file))
    console.log(`  ✓ ${file}`)
    ok++
  } catch (e) {
    console.log(`  ✗ Error ${file}: ${e.message}`)
  }
}
console.log(`\n${ok}/${drinks.length} imágenes descargadas.`)
