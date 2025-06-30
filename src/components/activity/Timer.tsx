import { useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { IoPause, IoPlay, IoStop } from 'react-icons/io5'
import { motion } from 'framer-motion'

interface TimerProps {
  onStop?: (duration: number) => void
  initialTime?: number
}

export function Timer({ onStop, initialTime = 0 }: TimerProps) {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])
  
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  const handleToggle = () => {
    setIsRunning(!isRunning)
  }
  
  const handleStop = () => {
    setIsRunning(false)
    if (onStop) {
      onStop(time)
    }
    setTime(0)
  }
  
  const distanceKm = (time / 360).toFixed(2) // Mock calculation
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-t-3xl shadow-ios-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-caption text-gray-500 dark:text-gray-400">Timer</p>
          <p className="text-heading-1 font-bold text-gray-900 dark:text-white">
            {formatTime(time)}
          </p>
        </div>
        
        <div className="text-right">
          <p className="text-body-small text-gray-500 dark:text-gray-400">
            {distanceKm} km
          </p>
          <p className="text-caption text-success">
            {format(new Date(), 'h:mm a')}
          </p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleToggle}
          className="flex-1 bg-primary text-white py-4 rounded-ios-btn flex items-center justify-center gap-2 font-medium"
        >
          {isRunning ? (
            <>
              <IoPause className="w-5 h-5" />
              Pause
            </>
          ) : (
            <>
              <IoPlay className="w-5 h-5" />
              {time > 0 ? 'Resume' : 'Start'}
            </>
          )}
        </motion.button>
        
        {time > 0 && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleStop}
            className="px-6 bg-error text-white py-4 rounded-ios-btn flex items-center justify-center"
          >
            <IoStop className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </div>
  )
}