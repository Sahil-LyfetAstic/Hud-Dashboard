'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Search, 
  Grid3X3, 
  Bell, 
  ChevronRight, 
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isAppsOpen, setIsAppsOpen] = useState(false)

  const notifications = [
    {
      id: '1',
      title: 'NEW ORDER RECEIVED ($1,299)',
      time: 'JUST NOW',
      icon: '🛍️'
    },
    {
      id: '2',
      title: '3 NEW ACCOUNT CREATED',
      time: '2 MINUTES AGO',
      icon: '👤'
    },
    {
      id: '3',
      title: 'SETUP COMPLETED',
      time: '3 MINUTES AGO',
      icon: '⚙️'
    },
    {
      id: '4',
      title: 'WIDGET INSTALLATION DONE',
      time: '5 MINUTES AGO',
      icon: '📊'
    },
    {
      id: '5',
      title: 'PAYMENT METHOD ENABLED',
      time: '10 MINUTES AGO',
      icon: '💳'
    }
  ]

  const quickApps = [
    { name: 'INBOX', href: '/email/inbox', icon: '📧' },
    { name: 'POS SYSTEM', href: '/pos/customer-order', icon: '🖥️' },
    { name: 'CALENDAR', href: '/calendar', icon: '📅' },
    { name: 'HELPER', href: '/helper', icon: '💻' },
    { name: 'SETTINGS', href: '/settings', icon: '⚙️' },
    { name: 'WIDGETS', href: '/widgets', icon: '📊' }
  ]

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Menu className="h-5 w-5" />
        </button>

        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">HUD ADMIN</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Quick Apps */}
          <div className="relative">
            <button
              onClick={() => setIsAppsOpen(!isAppsOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Grid3X3 className="h-5 w-5" />
            </button>
            
            {isAppsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="grid grid-cols-3 gap-1 p-2">
                  {quickApps.map((app) => (
                    <Link
                      key={app.name}
                      href={app.href}
                      className="p-3 text-center hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                      onClick={() => setIsAppsOpen(false)}
                    >
                      <div className="text-2xl mb-1">{app.icon}</div>
                      <div className="text-xs font-medium text-gray-900 dark:text-white">{app.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-teal-600 rounded-full"></span>
            </button>
            
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                  <h6 className="text-xs font-bold text-gray-900 dark:text-white uppercase">NOTIFICATIONS</h6>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className="text-xl">{notification.icon}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">
                  <Link href="/notifications" className="text-sm font-bold text-teal-600 hover:text-teal-700">
                    SEE ALL
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Image
                src="/assets/img/user/profile.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="hidden sm:block text-sm text-gray-900 dark:text-white">admin@example.com</span>
            </button>
            
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="py-1">
                  <Link href="/profile" className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                    PROFILE
                    <span className="text-teal-600">👤</span>
                  </Link>
                  <Link href="/email/inbox" className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                    INBOX
                    <span className="text-teal-600">📧</span>
                  </Link>
                  <Link href="/calendar" className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                    CALENDAR
                    <span className="text-teal-600">📅</span>
                  </Link>
                  <Link href="/settings" className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                    SETTINGS
                    <span className="text-teal-600">⚙️</span>
                  </Link>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                  <Link href="/login" className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                    LOGOUT
                    <span className="text-teal-600">🚪</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu..."
              className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
} 