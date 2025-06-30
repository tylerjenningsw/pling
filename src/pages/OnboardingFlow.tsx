import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { OnboardingLayout } from '../components/onboarding/OnboardingLayout'
import { SportSelection } from '../components/onboarding/steps/SportSelection'
import { WorkoutTypeSelection } from '../components/onboarding/steps/WorkoutTypeSelection'
import { TrainingLocationSelection } from '../components/onboarding/steps/TrainingLocationSelection'
import { TrainingFrequencySelection } from '../components/onboarding/steps/TrainingFrequencySelection'
import { HealthProblemsQuestion } from '../components/onboarding/steps/HealthProblemsQuestion'
import { DietTypeSelection } from '../components/onboarding/steps/DietTypeSelection'
import { GoalSelection } from '../components/onboarding/steps/GoalSelection'
import { OnboardingComplete } from '../components/onboarding/steps/OnboardingComplete'
import { Button } from '../components/common'
import type { OnboardingData } from '../types'

const TOTAL_STEPS = 7

export function OnboardingFlow() {
  const navigate = useNavigate()
  const [data, setData] = useState<OnboardingData>({
    sports: [],
    workoutTypes: [],
    trainingLocations: [],
    trainingFrequency: '',
    hasHealthProblems: false,
    healthProblemsDescription: '',
    dietType: '',
    goals: [],
  })
  
  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }
  
  const handleNext = (currentStep: number) => {
    if (currentStep < TOTAL_STEPS) {
      navigate(`/onboarding/step-${currentStep + 1}`)
    } else {
      navigate('/onboarding/complete')
    }
  }
  
  const handleBack = (currentStep: number) => {
    if (currentStep > 1) {
      navigate(`/onboarding/step-${currentStep - 1}`)
    }
  }
  
  const handleSkip = (currentStep: number) => {
    handleNext(currentStep)
  }
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/onboarding/step-1" replace />} />
      
      <Route
        path="/step-1"
        element={
          <OnboardingLayout
            currentStep={1}
            totalSteps={TOTAL_STEPS}
            onSkip={() => handleSkip(1)}
            footer={
              <Button
                onClick={() => handleNext(1)}
                disabled={data.sports.length === 0}
                fullWidth
                size="large"
              >
                Continue
              </Button>
            }
          >
            <SportSelection
              selectedSports={data.sports}
              onUpdate={(sports) => updateData({ sports })}
            />
          </OnboardingLayout>
        }
      />
      
      <Route
        path="/step-2"
        element={
          <OnboardingLayout
            currentStep={2}
            totalSteps={TOTAL_STEPS}
            onBack={() => handleBack(2)}
            onSkip={() => handleSkip(2)}
            footer={
              <Button
                onClick={() => handleNext(2)}
                disabled={data.workoutTypes.length === 0}
                fullWidth
                size="large"
              >
                Continue
              </Button>
            }
          >
            <WorkoutTypeSelection
              selectedTypes={data.workoutTypes}
              onUpdate={(workoutTypes) => updateData({ workoutTypes })}
            />
          </OnboardingLayout>
        }
      />
      
      <Route
        path="/step-3"
        element={
          <OnboardingLayout
            currentStep={3}
            totalSteps={TOTAL_STEPS}
            onBack={() => handleBack(3)}
            onSkip={() => handleSkip(3)}
            footer={
              <Button
                onClick={() => handleNext(3)}
                disabled={data.trainingLocations.length === 0}
                fullWidth
                size="large"
              >
                Continue
              </Button>
            }
          >
            <TrainingLocationSelection
              selectedLocations={data.trainingLocations}
              onUpdate={(trainingLocations) => updateData({ trainingLocations })}
            />
          </OnboardingLayout>
        }
      />
      
      <Route
        path="/step-4"
        element={
          <OnboardingLayout
            currentStep={4}
            totalSteps={TOTAL_STEPS}
            onBack={() => handleBack(4)}
            onSkip={() => handleSkip(4)}
            footer={
              <Button
                onClick={() => handleNext(4)}
                disabled={!data.trainingFrequency}
                fullWidth
                size="large"
              >
                Continue
              </Button>
            }
          >
            <TrainingFrequencySelection
              selectedFrequency={data.trainingFrequency}
              onUpdate={(trainingFrequency) => updateData({ trainingFrequency })}
            />
          </OnboardingLayout>
        }
      />
      
      <Route
        path="/step-5"
        element={
          <OnboardingLayout
            currentStep={5}
            totalSteps={TOTAL_STEPS}
            onBack={() => handleBack(5)}
            onSkip={() => handleSkip(5)}
            footer={
              <Button
                onClick={() => handleNext(5)}
                fullWidth
                size="large"
              >
                Continue
              </Button>
            }
          >
            <HealthProblemsQuestion
              hasHealthProblems={data.hasHealthProblems}
              description={data.healthProblemsDescription}
              onUpdate={(hasHealthProblems, healthProblemsDescription) =>
                updateData({ hasHealthProblems, healthProblemsDescription })
              }
            />
          </OnboardingLayout>
        }
      />
      
      <Route
        path="/step-6"
        element={
          <OnboardingLayout
            currentStep={6}
            totalSteps={TOTAL_STEPS}
            onBack={() => handleBack(6)}
            onSkip={() => handleSkip(6)}
            footer={
              <Button
                onClick={() => handleNext(6)}
                disabled={!data.dietType}
                fullWidth
                size="large"
              >
                Continue
              </Button>
            }
          >
            <DietTypeSelection
              selectedDiet={data.dietType}
              onUpdate={(dietType) => updateData({ dietType })}
            />
          </OnboardingLayout>
        }
      />
      
      <Route
        path="/step-7"
        element={
          <OnboardingLayout
            currentStep={7}
            totalSteps={TOTAL_STEPS}
            onBack={() => handleBack(7)}
            onSkip={() => handleSkip(7)}
            footer={
              <Button
                onClick={() => handleNext(7)}
                disabled={data.goals.length === 0}
                fullWidth
                size="large"
              >
                Continue
              </Button>
            }
          >
            <GoalSelection
              selectedGoals={data.goals}
              onUpdate={(goals) => updateData({ goals })}
            />
          </OnboardingLayout>
        }
      />
      
      <Route
        path="/complete"
        element={<OnboardingComplete data={data} />}
      />
    </Routes>
  )
}