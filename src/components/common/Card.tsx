import type { ReactNode } from 'react'
import { RadioButton } from './RadioButton'

interface CardProps {
  selected?: boolean
  onClick?: () => void
  image?: ReactNode
  title: string
  subtitle?: string
  badge?: string | number
  disabled?: boolean
  className?: string
}

export function Card({
  selected = false,
  onClick,
  image,
  title,
  subtitle,
  badge,
  disabled = false,
  className,
}: CardProps) {
  const isClickable = onClick && !disabled
  
  const baseClasses = 'relative rounded-[var(--radius-ios-card)] p-4 transition-all duration-200'
  const interactiveClasses = isClickable ? 'cursor-pointer' : ''
  const stateClasses = selected
    ? 'bg-accent text-white shadow-[var(--shadow-ios-active)]'
    : 'bg-white border-2 border-gray-100 hover:border-gray-200 shadow-[var(--shadow-ios-sm)]'
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  const classes = [
    baseClasses,
    interactiveClasses,
    stateClasses,
    disabledClasses,
    className || ''
  ].filter(Boolean).join(' ')
  
  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={classes}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
      aria-pressed={isClickable ? selected : undefined}
      aria-disabled={disabled}
    >
      <div className="flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium text-[18px] leading-[24px] ${selected ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
          {subtitle && (
            <div className="flex items-center gap-2 mt-1">
              <RadioButton selected={selected} disabled={disabled} />
              <p className={`text-footnote ${selected ? 'text-white/90' : 'text-gray-500'}`}>
                {subtitle}
              </p>
            </div>
          )}
        </div>
        
        {badge !== undefined && (
          <div className="flex-shrink-0">
            <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              selected ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
            }`}>
              {badge}
            </span>
          </div>
        )}
        
        {image && (
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
            {image}
          </div>
        )}
      </div>
    </div>
  )
}