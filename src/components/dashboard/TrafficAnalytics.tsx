'use client'

import React from 'react'
import { Globe, Search } from 'lucide-react'
import { TrafficData, TrafficSource } from '@/types'

export default function TrafficAnalytics() {
  const trafficData: TrafficData[] = [
    { country: 'FRANCE', visits: 13849, percentage: 40.79 },
    { country: 'SPAIN', visits: 3216, percentage: 9.79 },
    { country: 'MEXICO', visits: 1398, percentage: 4.26 },
    { country: 'UNITED STATES', visits: 1090, percentage: 3.32 },
    { country: 'BELGIUM', visits: 1045, percentage: 3.18 }
  ]

  const trafficSources: TrafficSource[] = [
    { source: 'FEED', percentage: 25.70, color: 'bg-teal-600' },
    { source: 'ORGANIC', percentage: 24.30, color: 'bg-teal-500' },
    { source: 'REFERRAL', percentage: 23.05, color: 'bg-teal-400' },
    { source: 'DIRECT', percentage: 14.85, color: 'bg-teal-300' },
    { source: 'EMAIL', percentage: 7.35, color: 'bg-teal-200' }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase">
          TRAFFIC ANALYTICS
        </h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>

      {/* World Map Placeholder */}
      <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center">
          <Globe className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <span className="text-gray-500 dark:text-gray-400">World Traffic Map</span>
        </div>
      </div>

      {/* Traffic Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Country Traffic */}
        <div>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 font-medium">COUNTRY</th>
                <th className="text-right py-2 font-medium">VISITS</th>
                <th className="text-right py-2 font-medium">PCT%</th>
              </tr>
            </thead>
            <tbody>
              {trafficData.map((data, index) => (
                <tr 
                  key={data.country} 
                  className={cn(
                    "border-b border-gray-100 dark:border-gray-700",
                    index === 2 ? "text-teal-600 dark:text-teal-400 font-semibold" : ""
                  )}
                >
                  <td className="py-2 text-gray-900 dark:text-white">{data.country}</td>
                  <td className="py-2 text-right text-gray-900 dark:text-white">
                    {data.visits.toLocaleString()}
                  </td>
                  <td className="py-2 text-right text-gray-900 dark:text-white">
                    {data.percentage}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Traffic Sources */}
        <div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <table className="w-full text-xs">
                  <tbody>
                    {trafficSources.map((source) => (
                      <tr key={source.source}>
                        <td className="py-1">
                          <div className="flex items-center space-x-2">
                            <div className={cn("w-2 h-2 rounded-full", source.color)}></div>
                            <span className="text-gray-700 dark:text-gray-300">{source.source}</span>
                          </div>
                        </td>
                        <td className="py-1 text-right text-gray-900 dark:text-white font-medium">
                          {source.percentage}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
} 