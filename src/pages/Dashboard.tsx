import { useTheme } from '../contexts/ThemeContext'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import { WorkoutPlanCTA } from '../components/dashboard/WorkoutPlanCTA'
import { ActivityCard } from '../components/dashboard/ActivityCard'
import { HabitCard } from '../components/dashboard/HabitCard'
import { HealthMetricsCard } from '../components/dashboard/HealthMetricsCard'
import { DailyReportsSection } from '../components/dashboard/DailyReportsSection'
import { mockActivities, mockHabits } from '../utils/mockData'

export function Dashboard() {
  const { theme } = useTheme()
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors">
      <DashboardHeader />
      
      <main className="px-4 py-6">
        {/* Health Metrics Card - Only show in dark mode */}
        {theme === 'dark' && <HealthMetricsCard />}
        
        {/* Workout Plan CTA */}
        <WorkoutPlanCTA />
        
        {/* Activities Section */}
        <section className="mt-8">
          <h2 className="text-body font-semibold text-gray-900 dark:text-white mb-4">
            What are you up to today?
          </h2>
          
          <div className="grid grid-cols-3 gap-3">
            {mockActivities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                {...activity}
                isSelected={index === 0}
              />
            ))}
          </div>
        </section>
        
        {/* Habits Section */}
        <section className="mt-8">
          <h2 className="text-body font-semibold text-gray-900 dark:text-white mb-4">
            Your habits
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <HabitCard {...mockHabits.goals} />
            <HabitCard {...mockHabits.nutrition} />
            {theme === 'dark' && (
              <HabitCard {...mockHabits.challenges} />
            )}
          </div>
        </section>
        
        {/* Daily Reports */}
        <DailyReportsSection />
      </main>
      
      {/* Bottom safe area */}
      <div className="pb-safe" />
    </div>
  )
}