interface RadioButtonProps {
  selected: boolean
  disabled?: boolean
  className?: string
}

export function RadioButton({ selected, disabled = false, className = '' }: RadioButtonProps) {
  const outerClasses = [
    'w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center transition-colors duration-200',
    disabled ? 'border-gray-300' : 'border-primary',
    className
  ].filter(Boolean).join(' ')
  
  const innerClasses = [
    'w-3 h-3 rounded-full transition-transform duration-200',
    disabled ? 'bg-gray-300' : 'bg-primary',
    selected ? 'scale-100' : 'scale-0'
  ].filter(Boolean).join(' ')
  
  return (
    <div className={outerClasses}>
      <div className={innerClasses} />
    </div>
  )
}