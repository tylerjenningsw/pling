import { Card } from '../../common'
import { SPORTS } from '../../../utils/constants'

interface SportSelectionProps {
  selectedSports: string[]
  onUpdate: (sports: string[]) => void
}

export function SportSelection({
  selectedSports,
  onUpdate,
}: SportSelectionProps) {
  const toggleSport = (sportId: string) => {
    if (selectedSports.includes(sportId)) {
      onUpdate(selectedSports.filter((id) => id !== sportId))
    } else {
      onUpdate([...selectedSports, sportId])
    }
  }
  
  return (
    <>
      <div>
        <h1 className="text-title-2 text-gray-900 mb-2">
          First up, which sports do you enjoy the most?
        </h1>
        <p className="text-body text-gray-500">Select all that applies:</p>
      </div>
      
      <div className="space-y-3 mt-6">
        {SPORTS.map((sport) => (
          <Card
            key={sport.id}
            selected={selectedSports.includes(sport.id)}
            onClick={() => toggleSport(sport.id)}
            image={<span className="text-4xl">{sport.icon}</span>}
            title={sport.name}
            subtitle={`${sport.availablePractices} available practices`}
          />
        ))}
      </div>
    </>
  )
}