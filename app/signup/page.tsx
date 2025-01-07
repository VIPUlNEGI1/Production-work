'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const professions = [
  // Business & Management
  { category: '💼 Business & Management', roles: [
    'Business Executive',
    'Product Manager',
    'Project Manager',
    'Entrepreneur',
    'Business Analyst'
  ]},
  // Sales & Marketing
  { category: '📈 Sales & Marketing', roles: [
    'Sales Professional',
    'Marketing Manager',
    'Content Creator',
    'Digital Marketer',
    'Brand Manager'
  ]},
  // Technology
  { category: '💻 Technology', roles: [
    'Software Developer',
    'Data Analyst',
    'UX/UI Designer',
    'System Administrator',
    'DevOps Engineer'
  ]},
  // Professional Services
  { category: '👔 Professional Services', roles: [
    'Consultant',
    'HR Professional',
    'Financial Analyst',
    'Legal Professional',
    'Accountant'
  ]},
  // Education & Research
  { category: '📚 Education & Research', roles: [
    'Teacher/Educator',
    'Researcher',
    'Student',
    'Academic Professional',
    'Training Specialist'
  ]},
  // Other
  { category: '✨ Other Fields', roles: [
    'Healthcare Professional',
    'Creative Professional',
    'Other'
  ]}
]

export default function SignUpPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [profession, setProfession] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white flex items-center justify-center px-4 transition-colors">
      <div className="max-w-md w-full space-y-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Create your account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            It's totally free and super easy
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {/* Social Sign Up */}
          <button className="w-full bg-gray-50 dark:bg-[#1E293B] hover:bg-gray-100 dark:hover:bg-[#2D3B4E] text-gray-900 dark:text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <Image src="/google.svg" alt="Google" width={20} height={20} />
            <span>Sign up with Google</span>
          </button>

          <button className="w-full bg-gray-50 dark:bg-[#1E293B] hover:bg-gray-100 dark:hover:bg-[#2D3B4E] text-gray-900 dark:text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Sign up with Github</span>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-[#0B1120] text-gray-500 dark:text-gray-400">
                Or, register with your email
              </span>
            </div>
          </div>

          {/* Email Sign Up Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-7">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#1E293B] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#1E293B] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Enter your work email"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <div className="space-y-1.5">
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-[#1E293B] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-colors"
                  placeholder="Enter your company name"
                  autoComplete="organization"
                  required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                  Enter 'Independent' if you're a freelancer or self-employed
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="profession" className="block text-sm font-medium mb-2">
                Profession
              </label>
              <select
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#1E293B] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20stroke%3D%22%23a1a1aa%22%3E%3Cpath%20d%3D%22M7%207l3-3%203%203m0%206l-3%203-3-3%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] dark:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20stroke%3D%22%23d4d4d8%22%3E%3Cpath%20d%3D%22M7%207l3-3%203%203m0%206l-3%203-3-3%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                required
              >
                <option value="" disabled>Select your profession</option>
                {professions.map((category) => (
                  <optgroup 
                    key={category.category} 
                    label={category.category}
                    className="font-medium"
                  >
                    {category.roles.map((role) => (
                      <option 
                        key={role} 
                        value={role} 
                        className="font-normal"
                      >
                        {role}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Your Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 dark:bg-[#1E293B] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Create a secure password"
                autoComplete="new-password"
                required
              />
            </div>

            <div className="flex items-start pt-2">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#1E293B] text-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                I agree to the{' '}
                <Link href="/terms" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors mt-6"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link href="/signin" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
