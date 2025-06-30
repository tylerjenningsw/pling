import { RadioGroup } from '../../common'
import { DIET_TYPES } from '../../../utils/constants'

interface DietTypeSelectionProps {
  selectedDiet: string
  onUpdate: (diet: string) => void
}

export function DietTypeSelection({
  selectedDiet,
  onUpdate,
}: DietTypeSelectionProps) {
  const options = DIET_TYPES.map((diet) => ({
    value: diet.id,
    label: diet.name,
    description: diet.description,
  }))
  
  return (
    <>
      <div>
        <h1 className="text-title-2 text-gray-900 mb-2">
          What's your diet type?
        </h1>
        <p className="text-body text-gray-500">Select what fits best:</p>
      </div>
      
      <div className="mt-6">
        <RadioGroup
          name="diet-type"
          value={selectedDiet}
          onChange={onUpdate}
          options={options}
        />
      </div>
    </>
  )
}