# Shelly's Burgers — Web Oficial

Web profesional para **Shelly's Burgers**, hamburguesería de Smash Burgers en Ciudad Real.

Stack: React 18 + Vite · Tailwind CSS · React Router DOM · Framer Motion

---

## Arrancar el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo (abre en http://localhost:3000)
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

---

## Añadir una hamburguesa nueva

**Paso 1** — Sube la foto a:
```
public/images/productos/mi-burger.jpg
```
Formato recomendado: JPG o WebP · Máx. 500 KB · Tamaño: 800×600 px

**Paso 2** — Abre `public/data/productos.json` y añade al final del array:
```json
{
  "id": 16,
  "nombre": "Mi Nueva Burger",
  "descripcion": "Ingrediente 1, ingrediente 2, salsa especial",
  "precio": "10.90€",
  "imagen": "mi-burger.jpg",
  "categoria": "hamburguesas",
  "glovo_url": "https://glovoapp.com/es/es/ciudad-real/shellys-burgers/"
}
```

**Categorías disponibles:** `hamburguesas` · `complementos` · `postres` · `bebidas`

Guarda el archivo y la hamburguesa aparece automáticamente en la carta.

---

## Cambiar la hamburguesa del mes

Abre `public/data/hamburguesa-mes.json` y edita los campos:

```json
{
  "nombre": "Nombre de la burger",
  "mes": "Junio 2026",
  "descripcion": "Descripción completa de ingredientes...",
  "ingredientes": [
    "Ingrediente 1",
    "Ingrediente 2"
  ],
  "precio": "12.50€",
  "imagen": "nombre-foto.jpg",
  "destacado": "Texto promocional opcional",
  "glovo_url": "https://glovoapp.com/..."
}
```

La foto debe estar en `public/images/hamburguesa-mes/`.

---

## Cambiar el enlace de Glovo

Abre `src/utils/constants.js`:

```js
export const LINKS = {
  glovo: "https://glovoapp.com/es/es/ciudad-real/shellys-burgers/",
  // ...
}
```

Sustituye la URL por la de tu restaurante en Glovo. Este valor se usa en TODOS los botones de la web automáticamente.

---

## Cambiar los colores de la marca

Abre `tailwind.config.js`:

```js
colors: {
  'brand-blue':       '#0066FF',  // Azul principal (botones, acentos)
  'brand-blue-light': '#3B82F6',  // Azul claro (hover)
  'brand-blue-dark':  '#0040CC',  // Azul oscuro (hover de botones)
  'brand-dark':       '#0A0A0A',  // Fondo oscuro
  'brand-gray':       '#111111',  // Gris muy oscuro
},
```

Cambia los valores hexadecimales. Los cambios se aplican en toda la web.

También puedes modificar las variables en `src/styles/variables.css` si prefieres CSS nativo.

---

## Imágenes — guía rápida

| Carpeta                            | Uso                          | Tamaño rec. |
|------------------------------------|------------------------------|-------------|
| `public/images/productos/`         | Fotos de la carta            | 800×600 px  |
| `public/images/hamburguesa-mes/`   | Foto hamburguesa del mes     | 800×800 px  |
| `public/images/hero/`              | Fondo del hero               | 1920×1080 px |
| `public/images/local/`             | Fotos del local              | 1200×800 px |

- **Formato:** WebP (mejor) o JPG
- **Peso máximo:** 500 KB por imagen
- Si no hay imagen, se muestra `public/images/placeholder.svg` automáticamente

### Activar imagen de fondo en el Hero

En `src/components/home/Hero.jsx`, descomenta esta línea:
```jsx
{/* <img src="/images/hero/hero-bg.jpg" alt="" className="..." /> */}
```
Y sube tu foto a `public/images/hero/hero-bg.jpg`.

---

## Estructura del proyecto

```
Hamburgueseria/
├── public/
│   ├── data/
│   │   ├── productos.json          ← CARTA (editar aquí)
│   │   └── hamburguesa-mes.json    ← BURGER DEL MES (editar aquí)
│   └── images/
│       ├── placeholder.svg         ← Imagen de reserva automática
│       ├── productos/              ← Fotos de la carta
│       ├── hamburguesa-mes/        ← Foto del mes
│       ├── hero/                   ← Fondo del hero
│       └── local/                  ← Fotos del local
└── src/
    ├── components/
    │   ├── layout/    Navbar, Header, Footer
    │   ├── home/      Hero, HamburguesaDelMes, About, Location
    │   ├── menu/      MenuSection, ProductCard, CategoryFilter
    │   └── ui/        Button, GlovoButton
    ├── pages/         Home, Menu, About, Contact, BurgerDelMes
    ├── hooks/         useProducts, useBurgerOfMonth
    ├── utils/         constants.js, imageHelper.js
    └── styles/        globals.css, variables.css
```

---

## Desplegar en producción

### Vercel (recomendado — gratis)
1. Sube el proyecto a GitHub
2. Entra en [vercel.com](https://vercel.com) y conecta el repositorio
3. Vercel detecta Vite automáticamente · Haz clic en **Deploy**

### Netlify (alternativa gratis)
1. `npm run build` → genera la carpeta `dist/`
2. Arrastra la carpeta `dist/` a [netlify.com/drop](https://netlify.com/drop)

### Hosting tradicional (FTP/cPanel)
1. `npm run build` → genera `dist/`
2. Sube el contenido de `dist/` a la carpeta `public_html/` de tu hosting
3. Crea un fichero `.htaccess` con:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Datos del negocio

Para cambiar dirección, teléfonos, redes sociales o cualquier dato del negocio, edita `src/utils/constants.js`.
