import { IoSearch, IoMenu, IoMoon, IoSunny } from 'react-icons/io5'
import { useUser } from '../../contexts/UserContext'
import { useTheme } from '../../contexts/ThemeContext'

export function DashboardHeader() {
  const { user } = useUser()
  const { theme, toggleTheme } = useTheme()
  
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-10 transition-colors">
      <div className="px-4 pt-safe">
        {/* Status bar placeholder */}
        <div className="h-11 flex items-center justify-center">
          <span className="text-sm font-medium text-gray-900 dark:text-white">09:41</span>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src={user?.avatar || 'https://ui-avatars.com/api/?name=User&background=007AFF&color=fff'}
              alt={user?.name || 'User'}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-body-small text-gray-500 dark:text-gray-400">Hello,</p>
              <h1 className="text-heading-3 font-semibold text-gray-900 dark:text-white">
                {user?.name || 'User'}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <IoMoon className="w-6 h-6" />
              ) : (
                <IoSunny className="w-6 h-6" />
              )}
            </button>
            
            <button
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Search"
            >
              <IoSearch className="w-6 h-6" />
            </button>
            
            <button
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Menu"
            >
              <IoMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}