export interface Sport {
  id: string
  name: string
  availablePractices: number
  icon: string
}

export interface WorkoutType {
  id: string
  name: string
  icon: string
}

export interface TrainingLocation {
  id: string
  name: string
  icon: string
}

export interface TrainingFrequency {
  id: string
  label: string
  value: number
}

export interface DietType {
  id: string
  name: string
  description: string
}

export interface Goal {
  id: string
  title: string
  description: string
  image?: string
}

export interface OnboardingData {
  sports: string[]
  workoutTypes: string[]
  trainingLocations: string[]
  trainingFrequency: string
  hasHealthProblems: boolean
  healthProblemsDescription?: string
  dietType: string
  goals: string[]
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  onboardingCompleted: boolean
  onboardingData?: OnboardingData
  metrics?: UserMetrics
}

export interface UserMetrics {
  weight?: number
  steps?: number
  heartRate?: number
}