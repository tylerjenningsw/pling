import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fitnessAPI } from '../../services/api'

export function WorkoutPlanCTA() {
  const [description, setDescription] = useState('Training&Nutrition')
  
  useEffect(() => {
    fitnessAPI.getWorkoutPlan().then(setDescription).catch(console.error)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-hover rounded-ios-card p-6 text-white"
    >
      <div className="relative z-10">
        <h2 className="text-heading-3 font-semibold mb-1">
          Create your Custom Workout Plan
        </h2>
        <p className="text-body-small opacity-90 line-clamp-2">
          {description}
        </p>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Yoga illustration placeholder */}
      <div className="absolute right-4 bottom-0 w-24 h-24 flex items-center justify-center">
        <span className="text-6xl">🧘‍♀️</span>
      </div>
    </motion.div>
  )
}