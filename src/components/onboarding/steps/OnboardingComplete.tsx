import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'
import { useUser } from '../../../contexts/UserContext'
import type { OnboardingData } from '../../../types'

interface OnboardingCompleteProps {
  data: OnboardingData
}

export function OnboardingComplete({ data }: OnboardingCompleteProps) {
  const navigate = useNavigate()
  const { updateOnboardingData, completeOnboarding } = useUser()
  
  const handleComplete = () => {
    updateOnboardingData(data)
    completeOnboarding()
    navigate('/dashboard')
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-[var(--radius-ios-card)] p-8 shadow-[var(--shadow-ios)] text-center">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          <h1 className="text-large-title text-gray-900 mb-4">
            All Set!
          </h1>
          
          <p className="text-body text-gray-600 mb-8">
            Your personalized workout plan is ready. Let's start your fitness journey!
          </p>
          
          <div className="space-y-4">
            <Button onClick={handleComplete} fullWidth size="large">
              Go to Dashboard
            </Button>
            
            <button
              onClick={() => navigate('/onboarding/step-1')}
              className="text-primary hover:text-primary-hover text-body transition-colors cursor-pointer"
            >
              Review your selections
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}