import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressBar } from '../common'

interface OnboardingLayoutProps {
  children: ReactNode
  footer?: ReactNode
  currentStep: number
  totalSteps: number
  onBack?: () => void
  onSkip?: () => void
}

export function OnboardingLayout({
  children,
  footer,
  currentStep,
  totalSteps,
  onBack,
  onSkip,
}: OnboardingLayoutProps) {
  const navigate = useNavigate()
  
  const handleBack = () => {
    if (onBack) {
      onBack()
    } else if (currentStep > 1) {
      navigate(-1)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-[var(--shadow-ios-sm)] sticky top-0 z-10">
        <div className="px-4 pt-safe">
          {/* Status bar placeholder */}
          <div className="h-11 flex items-center justify-center">
            <span className="text-sm font-medium">09:41</span>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between py-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-primary hover:text-primary-hover transition-colors"
              aria-label="Go back"
            >
              <span className="w-6 h-6 inline-flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <span className="text-body">Step {currentStep}</span>
            </button>
            
            {onSkip && (
              <button
                onClick={onSkip}
                className="text-gray-500 hover:text-gray-700 text-body transition-colors cursor-pointer"
              >
                Skip question
              </button>
            )}
          </div>
          
          {/* Progress bar */}
          <div className="pb-4">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        </div>
      </header>
      
      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 py-8 max-w-md mx-auto w-full">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      {footer && (
        <footer className="sticky bottom-0 bg-white border-t border-gray-100 shadow-[var(--shadow-ios-sm)]">
          <div className="px-4 py-4 pb-8 max-w-md mx-auto w-full">
            {footer}
          </div>
        </footer>
      )}
    </div>
  )
}