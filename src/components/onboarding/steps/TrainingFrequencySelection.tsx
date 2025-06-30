import { RadioGroup } from '../../common'
import { TRAINING_FREQUENCIES } from '../../../utils/constants'

interface TrainingFrequencySelectionProps {
  selectedFrequency: string
  onUpdate: (frequency: string) => void
}

export function TrainingFrequencySelection({
  selectedFrequency,
  onUpdate,
}: TrainingFrequencySelectionProps) {
  const options = TRAINING_FREQUENCIES.map((freq) => ({
    value: freq.id,
    label: freq.label,
  }))
  
  return (
    <>
      <div>
        <h1 className="text-title-2 text-gray-900 mb-2">
          How often do you train?
        </h1>
        <p className="text-body text-gray-500">Select what fits best:</p>
      </div>
      
      <div className="mt-6">
        <RadioGroup
          name="training-frequency"
          value={selectedFrequency}
          onChange={onUpdate}
          options={options}
        />
      </div>
    </>
  )
}