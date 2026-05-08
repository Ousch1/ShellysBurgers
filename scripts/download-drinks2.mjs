import sharp from 'sharp'
import { join } from 'path'

const dir = 'public/images/productos'

const searches = [
  { file: 'coca-cola-zero-cafeina.webp', query: 'coca cola zero zero cafeina lata 330' },
  { file: 'fanta-naranja.webp',           query: 'fanta naranja lata 330ml' },
  { file: 'fuze-tea-limon.webp',          query: 'fuze tea limon lata 330' },
  { file: 'fuze-tea-maracuya.webp',       query: 'fuze tea maracuya lata 330' },
  { file: 'aquarius-naranja.webp',        query: 'aquarius naranja lata 330' },
  { file: 'aquarius-limon.webp',          query: 'aquarius limon lata 330' },
  { file: 'agua.webp',                    query: 'agua mineral 500ml botella' },
]

let ok = 0
for (const { file, query } of searches) {
  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=5`
    const res = await fetch(url)
    const data = await res.json()
    const product = data?.products?.find(p => p.image_front_url)
    if (!product) { console.log(`  ✗ No encontrado: ${file}`); continue }

    const imgRes = await fetch(product.image_front_url)
    if (!imgRes.ok) throw new Error(imgRes.status)
    const buf = Buffer.from(await imgRes.arrayBuffer())

    await sharp(buf).resize(400, 400, { fit: 'contain', background: { r:6,g:9,b:26,alpha:1 } }).webp({ quality: 82 }).toFile(join(dir, file))
    console.log(`  ✓ ${file}  (${product.product_name || ''})`)
    ok++
  } catch (e) {
    console.log(`  ✗ Error ${file}: ${e.message}`)
  }
}
console.log(`\n${ok}/${searches.length} imágenes adicionales.`)
