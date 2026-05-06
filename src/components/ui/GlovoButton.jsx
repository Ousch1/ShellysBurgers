import { LINKS } from '../../utils/constants'

export default function GlovoButton({ url, size = 'md', className = '' }) {
  const href = url || LINKS.glovo

  const sizes = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir en Glovo"
      className={`
        inline-flex items-center justify-center font-body font-semibold
        bg-brand-blue text-white rounded-full
        transition-all duration-300
        hover:bg-brand-blue-dark hover:shadow-blue hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
        ${sizes[size]} ${className}
      `}
    >
      {/* Glovo logo icon inline SVG */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
      Pedir en Glovo
    </a>
  )
}
