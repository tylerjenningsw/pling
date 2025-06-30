import { Card } from '../../common'
import { GOALS } from '../../../utils/constants'

interface GoalSelectionProps {
  selectedGoals: string[]
  onUpdate: (goals: string[]) => void
}

export function GoalSelection({
  selectedGoals,
  onUpdate,
}: GoalSelectionProps) {
  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      onUpdate(selectedGoals.filter((id) => id !== goalId))
    } else {
      onUpdate([...selectedGoals, goalId])
    }
  }
  
  return (
    <>
      <div>
        <h1 className="text-title-2 text-gray-900 mb-2">
          What do you want to improve?
        </h1>
        <p className="text-body text-gray-500">Select all that applies:</p>
      </div>
      
      <div className="space-y-3 mt-6">
        {GOALS.map((goal) => (
          <Card
            key={goal.id}
            selected={selectedGoals.includes(goal.id)}
            onClick={() => toggleGoal(goal.id)}
            image={
              goal.image && (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl">{goal.image}</span>
                </div>
              )
            }
            title={goal.title}
            subtitle={goal.description}
            className="h-auto"
          />
        ))}
      </div>
    </>
  )
}