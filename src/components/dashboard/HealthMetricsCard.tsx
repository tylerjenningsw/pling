import { motion } from 'framer-motion'
import { useUser } from '../../contexts/UserContext'
import { IoScale, IoFootsteps, IoPulse } from 'react-icons/io5'

export function HealthMetricsCard() {
  const { user } = useUser()
  const metrics = user?.metrics
  
  const metricsData = [
    {
      icon: IoScale,
      label: 'Weight',
      value: metrics?.weight ? `${metrics.weight} kg` : '--',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: IoFootsteps,
      label: 'Step',
      value: metrics?.steps ? `${metrics.steps} steps` : '--',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: IoPulse,
      label: 'Heart Rate',
      value: metrics?.heartRate ? `${metrics.heartRate} bpm` : '--',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
  ]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-ios-card p-4 mb-6"
    >
      <div className="grid grid-cols-3 gap-4">
        {metricsData.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className={`w-10 h-10 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
            </div>
            <p className="text-caption text-gray-400">{metric.label}</p>
            <p className="text-body font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}