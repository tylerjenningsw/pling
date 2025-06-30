import { useState } from 'react'
import { RadioGroup } from '../../common'

interface HealthProblemsQuestionProps {
  hasHealthProblems: boolean
  description?: string
  onUpdate: (hasProblems: boolean, description?: string) => void
}

export function HealthProblemsQuestion({
  hasHealthProblems,
  description = '',
  onUpdate,
}: HealthProblemsQuestionProps) {
  const [localHasProblems, setLocalHasProblems] = useState(
    hasHealthProblems ? 'yes' : 'no'
  )
  const [localDescription, setLocalDescription] = useState(description)
  
  const options = [
    { value: 'no', label: "No, I don't have" },
    { value: 'yes', label: 'Yes, I have' },
  ]
  
  // Update parent state when values change
  const handleRadioChange = (value: string) => {
    setLocalHasProblems(value)
    onUpdate(value === 'yes', localDescription)
  }
  
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value
    setLocalDescription(newDescription)
    onUpdate(localHasProblems === 'yes', newDescription)
  }
  
  return (
    <>
      <div>
        <h1 className="text-title-2 text-gray-900 mb-2">
          Do you have any health problems that can affect your trainings?
        </h1>
        <p className="text-body text-gray-500">Select what fits best:</p>
      </div>
      
      <div className="mt-6">
        <RadioGroup
          name="health-problems"
          value={localHasProblems}
          onChange={handleRadioChange}
          options={options}
        />
      </div>
      
      {localHasProblems === 'yes' && (
        <div className="space-y-2 mt-6">
          <label
            htmlFor="health-description"
            className="block text-body font-medium text-gray-700"
          >
            Tell us more about your condition
          </label>
          <textarea
            id="health-description"
            value={localDescription}
            onChange={handleDescriptionChange}
            placeholder="Suggested"
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-[var(--radius-ios-card)] focus:border-primary focus:ring-0 resize-none text-body"
          />
          <p className="text-right text-caption text-gray-500">
            {localDescription.length}/250
          </p>
        </div>
      )}
    </>
  )
}