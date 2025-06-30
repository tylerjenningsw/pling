import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'

interface ActivityCardProps {
  id: string
  name: string
  icon: string
  isSelected?: boolean
}

export function ActivityCard({ id, name, icon, isSelected = false }: ActivityCardProps) {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/activity/${id}`)
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={clsx(
        'flex flex-col items-center justify-center p-4 rounded-ios-card transition-all duration-200',
        isSelected
          ? 'bg-primary text-white shadow-ios'
          : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      )}
    >
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-body-small font-medium">{name}</span>
    </motion.button>
  )
}