import type { Sport, WorkoutType, TrainingLocation, TrainingFrequency, DietType, Goal } from '../types'

export const SPORTS: Sport[] = [
  { id: 'basketball', name: 'Basketball', availablePractices: 4, icon: '🏀' },
  { id: 'football', name: 'Football', availablePractices: 6, icon: '⚽' },
  { id: 'tennis', name: 'Tennis', availablePractices: 2, icon: '🎾' },
  { id: 'volleyball', name: 'Volleyball', availablePractices: 3, icon: '🏐' },
]

export const WORKOUT_TYPES: WorkoutType[] = [
  { id: 'strength', name: 'Strength training', icon: '💪' },
  { id: 'cardio', name: 'Cardio', icon: '❤️' },
  { id: 'yoga', name: 'Yoga', icon: '🧘' },
  { id: 'low-impact', name: 'Low impact exercise', icon: '🚶' },
]

export const TRAINING_LOCATIONS: TrainingLocation[] = [
  { id: 'outdoor', name: 'Outdoor', icon: '🌳' },
  { id: 'indoor', name: 'Indoor', icon: '🏠' },
  { id: 'home', name: 'Home', icon: '🏡' },
  { id: 'gym', name: 'At the gym', icon: '🏋️' },
  { id: 'park', name: 'In the park', icon: '🌲' },
]

export const TRAINING_FREQUENCIES: TrainingFrequency[] = [
  { id: 'once', label: '1 time per week', value: 1 },
  { id: 'twice', label: '2 times per week', value: 2 },
  { id: 'thrice', label: '3 times per week', value: 3 },
  { id: 'more', label: 'more than 3 times per week', value: 4 },
]

export const DIET_TYPES: DietType[] = [
  { id: 'standard', name: 'Standard', description: 'Nothing special' },
  { id: 'pescetarian', name: 'Pescetarian', description: 'No meat, but fish' },
  { id: 'vegetarian', name: 'Vegetarian', description: 'No meat' },
  { id: 'vegan', name: 'Vegan', description: 'No animal products' },
]

export const GOALS: Goal[] = [
  {
    id: 'reduce-stress',
    title: 'Reduce stress',
    description: 'Sports help you manage stress. Exercise causes your body to release endorphins, the chemicals that relieve pain and stress.',
    image: '🧘‍♂️',
  },
  {
    id: 'lose-weight',
    title: 'Lose weight',
    description: 'Regular physical activity can help you lose weight and keep it off by burning calories and building muscle.',
    image: '⚖️',
  },
  {
    id: 'build-muscle',
    title: 'Build muscle',
    description: 'Strength training exercises can help you increase muscle mass and improve your overall body composition.',
    image: '💪',
  },
  {
    id: 'improve-health',
    title: 'Improve health',
    description: 'Exercise strengthens your heart, improves circulation, and can help prevent chronic diseases.',
    image: '❤️',
  },
]