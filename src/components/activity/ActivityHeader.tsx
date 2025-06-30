import { useNavigate } from 'react-router-dom'
import { IoChevronBack, IoEllipsisHorizontal } from 'react-icons/io5'

interface ActivityHeaderProps {
  title: string
  subtitle?: string
}

export function ActivityHeader({ title, subtitle }: ActivityHeaderProps) {
  const navigate = useNavigate()
  
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-10 shadow-ios-sm">
      <div className="px-4 pt-safe">
        {/* Status bar placeholder */}
        <div className="h-11 flex items-center justify-center">
          <span className="text-sm font-medium text-gray-900 dark:text-white">09:41</span>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
            aria-label="Go back"
          >
            <IoChevronBack className="w-6 h-6" />
            <span className="text-body-small text-gray-500 dark:text-gray-400">
              Activity tracking
            </span>
          </button>
          
          <div className="text-center flex-1">
            <h1 className="text-body font-medium text-gray-900 dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-caption text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          
          <button
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="More options"
          >
            <IoEllipsisHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}