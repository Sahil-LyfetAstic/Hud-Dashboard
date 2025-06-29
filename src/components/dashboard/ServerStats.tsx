'use client'

import React from 'react'
import { HardDrive, Wifi } from 'lucide-react'

export default function ServerStats() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase">
          SERVER STATS
        </h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>

      {/* Chart Placeholder */}
      <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Server Performance Chart</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Disk Usage */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
              <HardDrive className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">
              DISK USAGE
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              20.04 / 256 GB
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-2">
              <div className="bg-teal-600 h-1 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Last updated 1 min ago
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">DISK C</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">19.56GB</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">DISK D</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">0.50GB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bandwidth */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">
              BANDWIDTH
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              83.76GB / 10TB
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-2">
              <div className="bg-blue-600 h-1 rounded-full" style={{ width: '10%' }}></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Last updated 1 min ago
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">HTTP</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">35.47GB</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">FTP</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">1.25GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-teal-500 rounded-tl"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-teal-500 rounded-tr"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-teal-500 rounded-bl"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-teal-500 rounded-br"></div>
      </div>
    </div>
  )
} 