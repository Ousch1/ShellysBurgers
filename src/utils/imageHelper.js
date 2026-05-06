const PLACEHOLDER = '/images/placeholder.svg'

export const getProductImage = (filename) => {
  if (!filename) return PLACEHOLDER
  return `/images/productos/${filename}`
}

export const getBurgerOfMonthImage = (filename) => {
  if (!filename) return PLACEHOLDER
  return `/images/hamburguesa-mes/${filename}`
}

export const getHeroImage = (filename) => {
  if (!filename) return PLACEHOLDER
  return `/images/hero/${filename}`
}

export const getLocalImage = (filename) => {
  if (!filename) return PLACEHOLDER
  return `/images/local/${filename}`
}

export const handleImageError = (e) => {
  if (e.target.src !== window.location.origin + PLACEHOLDER) {
    e.target.src = PLACEHOLDER
  }
}
