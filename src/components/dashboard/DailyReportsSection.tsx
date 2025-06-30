import { motion } from 'framer-motion'
import { IoChevronForward } from 'react-icons/io5'

export function DailyReportsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-body font-semibold text-gray-900 dark:text-white">
            Daily Reports
          </h3>
          <p className="text-body-small text-gray-500 dark:text-gray-400">
            All your details in a single place.
          </p>
        </div>
        
        <button
          className="p-2 text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="View all reports"
        >
          <IoChevronForward className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  )
}