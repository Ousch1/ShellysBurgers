const VARIANTS = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  white:   'btn-white',
}

const SIZES = {
  sm: 'text-sm px-4 py-2',
  md: '',
  lg: 'text-lg px-8 py-4',
}

export default function Button({
  children,
  variant = 'primary',
  size    = 'md',
  href,
  target,
  onClick,
  className = '',
  ...props
}) {
  const classes = `${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
