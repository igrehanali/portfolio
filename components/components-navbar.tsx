'use client'

import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../context/ThemeContext' // Import your custom ThemeContext
import { Moon, Sun } from 'lucide-react'

export function NavbarComponent() {
  const [mounted, setMounted] = useState(false)

  // Access the custom ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => setMounted(true), [])

  return (
    <nav className="fixed w-full z-50 transition-colors duration-300 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90">
      <div className="mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Branding */}
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white sm:block hidden">
          Rehan
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link href="#about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
            About
          </Link>
          <Link href="#portfolio" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
            Portfolio
          </Link>
          <Link href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
            Skills
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme} // Call toggleTheme from context
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {/* Render Sun or Moon icon based on the current theme */}
            {mounted && (theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-blue-500" />)}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
