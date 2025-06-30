import { RadioButton } from './RadioButton'

interface RadioOption {
  value: string
  label: string
  description?: string
}

interface RadioGroupProps {
  name: string
  value: string
  onChange: (value: string) => void
  options: RadioOption[]
  className?: string
  label?: string
  required?: boolean
}

export function RadioGroup({
  name,
  value,
  onChange,
  options,
  className,
  label,
  required,
}: RadioGroupProps) {
  return (
    <fieldset className={className}>
      {label && (
        <legend className="text-title-3 text-gray-900 mb-4">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </legend>
      )}
      
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = value === option.value
          const labelClasses = [
            'block relative rounded-[var(--radius-ios-card)] p-4 cursor-pointer transition-all duration-200',
            isSelected
              ? 'bg-accent text-white shadow-[var(--shadow-ios)]'
              : 'bg-gray-50 hover:bg-gray-100'
          ].join(' ')
          
          return (
            <label
              key={option.value}
              htmlFor={`${name}-${option.value}`}
              className={labelClasses}
            >
              <input
                type="radio"
                id={`${name}-${option.value}`}
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
                aria-describedby={option.description ? `${name}-${option.value}-desc` : undefined}
              />
              
              <div className="flex items-center">
                <div className="flex-1">
                  <span className={`font-medium text-body ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                    {option.label}
                  </span>
                  {option.description && (
                    <p
                      id={`${name}-${option.value}-desc`}
                      className={`mt-1 text-body-small ${isSelected ? 'text-white/90' : 'text-gray-500'}`}
                    >
                      {option.description}
                    </p>
                  )}
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <RadioButton selected={isSelected} />
                </div>
              </div>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}