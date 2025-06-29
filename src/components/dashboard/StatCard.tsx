'use client'

import React from 'react'
import { TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign, HardDrive } from 'lucide-react'
import { cn, formatCurrency, formatNumber } from '@/lib/utils'
import { StatCard as StatCardType } from '@/types'

interface StatCardProps {
  stat: StatCardType
}

const iconMap = {
  'site-visitors': Users,
  'store-sales': ShoppingBag,
  'new-members': Users,
  'bandwidth': HardDrive
}

export default function StatCard({ stat }: StatCardProps) {
  const IconComponent = iconMap[stat.title.toLowerCase().replace(/\s+/g, '-') as keyof typeof iconMap] || Users

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase">
          {stat.title}
        </h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>

      {/* Main Stat */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {stat.title.includes('SALES') ? formatCurrency(parseFloat(stat.value.replace(/[^0-9.]/g, ''))) : stat.value}
          </div>
        </div>
        <div className="w-16 h-8">
          {/* Placeholder for chart */}
          <div className="w-full h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded opacity-20"></div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
        {stat.details.map((detail, index) => (
          <div key={index} className="flex items-center space-x-1">
            {detail.includes('more than') ? (
              <TrendingUp className="w-3 h-3 text-green-500" />
            ) : detail.includes('less than') ? (
              <TrendingDown className="w-3 h-3 text-red-500" />
            ) : (
              <IconComponent className="w-3 h-3 text-gray-400" />
            )}
            <span>{detail}</span>
          </div>
        ))}
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