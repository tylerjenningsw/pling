import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { 
  IoFlame, 
  IoPulse, 
  IoFootsteps,
  IoLocation,
  IoTime,
  IoChevronForward,
  IoExpand
} from 'react-icons/io5'
import { ActivityHeader } from '../components/activity/ActivityHeader'
import { MapView } from '../components/activity/MapView'
import { MetricDisplay } from '../components/activity/MetricDisplay'
import { Timer } from '../components/activity/Timer'
import { mockRunData } from '../utils/mockData'

export function ActivityTracking() {
  const { type } = useParams<{ type: string }>()
  const [isMapFullScreen, setIsMapFullScreen] = useState(false)
  const [activeMetric, setActiveMetric] = useState('calories')
  
  // In a real app, this would come from the API based on the activity type
  const activityData = mockRunData
  
  const metrics = [
    {
      id: 'calories',
      icon: <IoFlame className="w-5 h-5" />,
      label: 'Calories Burn',
      value: activityData.metrics.calories,
      unit: 'kcal',
    },
    {
      id: 'heartRate',
      icon: <IoPulse className="w-5 h-5" />,
      label: 'Heart Rate',
      value: activityData.metrics.heartRate,
      unit: 'bpm',
    },
    {
      id: 'steps',
      icon: <IoFootsteps className="w-5 h-5" />,
      label: 'Steps',
      value: activityData.metrics.steps.toLocaleString(),
      unit: '',
    },
  ]
  
  if (isMapFullScreen) {
    return (
      <div className="relative">
        <MapView
          center={[activityData.route.startPoint.lat, activityData.route.startPoint.lng]}
          waypoints={activityData.route.waypoints}
          showFullScreen
        />
        
        {/* Map overlay UI */}
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-t-3xl shadow-ios p-4">
            {/* Metrics bar */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className={`text-center p-3 rounded-ios-card ${
                    activeMetric === metric.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <p className="text-heading-2 font-bold">
                    {metric.value}
                  </p>
                  <p className="text-caption opacity-80">{metric.label}</p>
                </div>
              ))}
            </div>
            
            <Timer
              onStop={() => {
                setIsMapFullScreen(false)
              }}
            />
          </div>
        </div>
        
        {/* Close full screen button */}
        <button
          onClick={() => setIsMapFullScreen(false)}
          className="fixed top-16 right-4 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-ios"
          aria-label="Exit full screen"
        >
          <IoExpand className="w-6 h-6" />
        </button>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <ActivityHeader
        title={activityData.title}
        subtitle={format(activityData.date, 'EEEE, d MMMM yyyy')}
      />
      
      <main className="px-4 py-6">
        {/* Title */}
        <h1 className="text-heading-2 font-semibold text-gray-900 dark:text-white mb-4">
          Enjoy your {type} routine
        </h1>
        
        {/* Date selector */}
        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
          <IoTime className="w-5 h-5" />
          <span className="text-body">
            {format(activityData.date, 'EEEE, d MMMM yyyy')}
          </span>
          <IoChevronForward className="w-4 h-4" />
        </button>
        
        {/* Map */}
        <div className="mb-6 relative">
          <MapView
            center={[activityData.route.startPoint.lat, activityData.route.startPoint.lng]}
            waypoints={activityData.route.waypoints}
            className="h-64"
          />
          
          {/* Expand button */}
          <button
            onClick={() => setIsMapFullScreen(true)}
            className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-ios"
            aria-label="View full screen map"
          >
            <IoExpand className="w-5 h-5" />
          </button>
          
          {/* User avatar on map */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://ui-avatars.com/api/?name=Thomas&background=007AFF&color=fff"
              alt="Your location"
              className="w-12 h-12 rounded-full border-3 border-white shadow-ios"
            />
          </div>
        </div>
        
        {/* Today's run card */}
        <div className="bg-white dark:bg-gray-800 rounded-ios-card p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <IoLocation className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-caption text-gray-500 dark:text-gray-400">
                Today Run
              </p>
              <p className="text-body font-semibold text-gray-900 dark:text-white">
                {activityData.distance} km
              </p>
            </div>
            <div className="text-right">
              <p className="text-body font-semibold text-gray-900 dark:text-white">
                {activityData.duration}
              </p>
              <p className="text-caption text-gray-500 dark:text-gray-400">
                time
              </p>
            </div>
            <IoChevronForward className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Habits section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-body font-semibold text-gray-900 dark:text-white">
              Your habits
            </h2>
            <button className="text-primary text-body-small">
              See all
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <MetricDisplay
                key={metric.id}
                {...metric}
                isActive={activeMetric === metric.id}
                onClick={() => setActiveMetric(metric.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}