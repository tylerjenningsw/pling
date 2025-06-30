import { clsx } from 'clsx'

interface MetricDisplayProps {
  icon: React.ReactNode
  label: string
  value: string | number
  unit?: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export function MetricDisplay({
  icon,
  label,
  value,
  unit,
  isActive = false,
  onClick,
  className,
}: MetricDisplayProps) {
  const Component = onClick ? 'button' : 'div'
  
  return (
    <Component
      onClick={onClick}
      className={clsx(
        'rounded-ios-card p-4 transition-all duration-200',
        isActive
          ? 'bg-primary text-white shadow-ios'
          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
        onClick && 'cursor-pointer hover:scale-105 active:scale-95',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className={clsx(
          'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
          isActive ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'
        )}>
          {icon}
        </div>
        
        <div className="flex-1">
          <p className={clsx(
            'text-caption',
            isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
          )}>
            {label}
          </p>
          <p className="text-heading-3 font-bold">
            {value}
            {unit && <span className="text-body font-normal ml-1">{unit}</span>}
          </p>
        </div>
      </div>
    </Component>
  )
}