import { CheckboxGroup } from '../../common'
import { TRAINING_LOCATIONS } from '../../../utils/constants'

interface TrainingLocationSelectionProps {
  selectedLocations: string[]
  onUpdate: (locations: string[]) => void
}

export function TrainingLocationSelection({
  selectedLocations,
  onUpdate,
}: TrainingLocationSelectionProps) {
  const options = TRAINING_LOCATIONS.map((location) => ({
    value: location.id,
    label: location.name,
    icon: <span className="text-2xl">{location.icon}</span>,
  }))
  
  return (
    <>
      <div>
        <h1 className="text-title-2 text-gray-900 mb-2">
          Where do you enjoy the most to train?
        </h1>
        <p className="text-body text-gray-500">Select all that applies:</p>
      </div>
      
      <div className="mt-6">
        <CheckboxGroup
          values={selectedLocations}
          onChange={onUpdate}
          options={options}
        />
      </div>
    </>
  )
}