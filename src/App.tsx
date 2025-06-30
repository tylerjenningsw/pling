import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider, useUser } from './contexts/UserContext'
import { OnboardingFlow } from './pages/OnboardingFlow'
import { Dashboard } from './pages/Dashboard'
import { ActivityTracking } from './pages/ActivityTracking'

function AppRoutes() {
  const { user } = useUser()
  const hasCompletedOnboarding = user?.onboardingCompleted ?? false
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          hasCompletedOnboarding ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/onboarding" replace />
          )
        }
      />
      <Route path="/onboarding/*" element={<OnboardingFlow />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/activity/:type" element={<ActivityTracking />} />
    </Routes>
  )
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <AppRoutes />
        </Router>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
