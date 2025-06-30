import { motion } from 'framer-motion'

interface HabitCardProps {
  icon: string
  title: string
  subtitle: string
  progress?: number | null
}

export function HabitCard({ icon, title, subtitle, progress }: HabitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-ios-card p-6 shadow-ios-sm"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        
        <div className="flex-1">
          <h3 className="text-body font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-body-small text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
          
          {progress !== null && progress !== undefined && (
            <div className="mt-3">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}