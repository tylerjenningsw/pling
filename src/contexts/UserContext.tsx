import { createContext, useContext, useState, type ReactNode } from 'react'
import type { User, OnboardingData } from '../types'

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  updateOnboardingData: (data: OnboardingData) => void
  completeOnboarding: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

// Mock user data for development
const mockUser: User = {
  id: '1',
  name: 'Thomas',
  email: 'thomas@example.com',
  avatar: 'https://ui-avatars.com/api/?name=Thomas&background=007AFF&color=fff',
  onboardingCompleted: false,
  metrics: {
    weight: 86.5,
    steps: 1428,
    heartRate: 80,
  },
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for saved user
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      return JSON.parse(savedUser) as User
    }
    return mockUser
  })
  
  const updateUser = (updatedUser: User | null) => {
    setUser(updatedUser)
    if (updatedUser) {
      localStorage.setItem('user', JSON.stringify(updatedUser))
    } else {
      localStorage.removeItem('user')
    }
  }
  
  const updateOnboardingData = (data: OnboardingData) => {
    if (!user) return
    
    const updatedUser: User = {
      ...user,
      onboardingData: data,
    }
    updateUser(updatedUser)
  }
  
  const completeOnboarding = () => {
    if (!user) return
    
    const updatedUser: User = {
      ...user,
      onboardingCompleted: true,
    }
    updateUser(updatedUser)
  }
  
  return (
    <UserContext.Provider 
      value={{ 
        user, 
        setUser: updateUser, 
        updateOnboardingData,
        completeOnboarding,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}