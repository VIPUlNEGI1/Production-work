'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '../../context/ThemeContext'

export default function SignUp() {
  const { theme } = useTheme()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <Image 
            src={theme === 'light' ? '/intellideck-logo.svg' : '/intellideck-logo-dark.svg'}
            alt="IntelliDeck" 
            width={280} 
            height={60}
            priority
            className="mb-8"
          />
        </div>

        <div className="flex space-x-4 mb-6">
          <Link 
            href="/auth/signin"
            className="flex-1 rounded-lg bg-gray-100 dark:bg-gray-800 px-4 py-2 text-center font-medium hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link 
            href="/auth/signup"
            className="flex-1 rounded-lg border-2 border-gray-900 dark:border-white px-4 py-2 text-center font-medium bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          >
            Create account
          </Link>
        </div>

        <button className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 flex items-center justify-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors">
          <Image src="/google.svg" alt="Google" width={20} height={20} />
          <span>Continue with Google</span>
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">OR</span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <select className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-500 dark:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-800">
              <option value="">Select Designation</option>
              <option value="ceo">CEO</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <button className="w-full rounded-lg bg-blue-500 px-4 py-3 text-white font-medium hover:bg-blue-600 transition-colors">
            Create account with Aura
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          By creating an account, you agree to our{' '}
          <Link href="/terms" className="text-blue-500 dark:text-blue-400">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-blue-500 dark:text-blue-400">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}
