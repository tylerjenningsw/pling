interface CheckboxOption {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
}

interface CheckboxGroupProps {
  values: string[]
  onChange: (values: string[]) => void
  options: CheckboxOption[]
  className?: string
  label?: string
  required?: boolean
}

export function CheckboxGroup({
  values,
  onChange,
  options,
  className,
  label,
  required,
}: CheckboxGroupProps) {
  const handleToggle = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value))
    } else {
      onChange([...values, value])
    }
  }
  
  return (
    <fieldset className={className}>
      {label && (
        <legend className="text-title-3 text-gray-900 mb-4">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </legend>
      )}
      
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => {
          const isChecked = values.includes(option.value)
          const labelClasses = [
            'relative rounded-[var(--radius-ios-card)] p-4 cursor-pointer transition-all duration-200',
            isChecked
              ? 'bg-accent text-white shadow-[var(--shadow-ios)]'
              : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-100'
          ].join(' ')
          
          return (
            <label
              key={option.value}
              className={labelClasses}
            >
              <input
                type="checkbox"
                value={option.value}
                checked={isChecked}
                onChange={() => handleToggle(option.value)}
                className="sr-only"
                aria-describedby={option.description ? `checkbox-${option.value}-desc` : undefined}
              />
              
              <div className="flex flex-col items-center text-center">
                {option.icon && (
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    {option.icon}
                  </div>
                )}
                
                <span className={`font-medium text-body ${isChecked ? 'text-white' : 'text-gray-900'}`}>
                  {option.label}
                </span>
                
                {option.description && (
                  <p
                    id={`checkbox-${option.value}-desc`}
                    className={`mt-1 text-caption ${isChecked ? 'text-white/90' : 'text-gray-500'}`}
                  >
                    {option.description}
                  </p>
                )}
              </div>
              
              {isChecked && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}