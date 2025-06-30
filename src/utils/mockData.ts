export const mockActivities = [
  { id: 'running', name: 'Running', icon: '🏃' },
  { id: 'cycling', name: 'Cycling', icon: '🚴' },
  { id: 'yoga', name: 'Yoga', icon: '🧘' },
]

export const mockHabits = {
  goals: {
    icon: '🎯',
    title: 'Goals',
    progress: 73,
    subtitle: '73% achieved',
  },
  nutrition: {
    icon: '🥑',
    title: 'Nutrition',
    progress: null,
    subtitle: '3 hours of fasting',
  },
  challenges: {
    icon: '⛰️',
    title: 'Challenges',
    progress: 73,
    subtitle: '73% achieved',
  },
}

export const mockDailyReports = {
  title: 'Daily Reports',
  description: 'All your details in a single place.',
}

export const mockRunData = {
  id: '1',
  type: 'running',
  title: 'Running to Hyde Park',
  date: new Date('2023-03-05'),
  time: '11:00 AM',
  distance: 10.4,
  duration: '2:23:45',
  route: {
    startPoint: { lat: 51.507351, lng: -0.127758 },
    endPoint: { lat: 51.507351, lng: -0.165757 },
    waypoints: [
      { lat: 51.507351, lng: -0.127758 },
      { lat: 51.509351, lng: -0.137758 },
      { lat: 51.511351, lng: -0.147758 },
      { lat: 51.507351, lng: -0.165757 },
    ],
  },
  metrics: {
    calories: 310,
    heartRate: 98,
    steps: 2560,
  },
}