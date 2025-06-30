import { CheckboxGroup } from '../../common'
import { WORKOUT_TYPES } from '../../../utils/constants'

interface WorkoutTypeSelectionProps {
  selectedTypes: string[]
  onUpdate: (types: string[]) => void
}

export function WorkoutTypeSelection({
  selectedTypes,
  onUpdate,
}: WorkoutTypeSelectionProps) {
  const options = WORKOUT_TYPES.map((type) => ({
    value: type.id,
    label: type.name,
    icon: <span className="text-2xl">{type.icon}</span>,
  }))
  
  return (
    <>
      <div>
        <h1 className="text-title-2 text-gray-900 mb-2">
          Which sport activity gives the best workout?
        </h1>
        <p className="text-body text-gray-500">Select all that applies:</p>
      </div>
      
      <div className="mt-6">
        <CheckboxGroup
          values={selectedTypes}
          onChange={onUpdate}
          options={options}
        />
      </div>
    </>
  )
}