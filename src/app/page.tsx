import React from 'react'
import Layout from '@/components/layout/Layout'
import StatCard from '@/components/dashboard/StatCard'
import ServerStats from '@/components/dashboard/ServerStats'
import TrafficAnalytics from '@/components/dashboard/TrafficAnalytics'
import TopProducts from '@/components/dashboard/TopProducts'
import { StatCard as StatCardType } from '@/types'

const stats: StatCardType[] = [
  {
    title: 'SITE VISITORS',
    value: '4.2m',
    change: '33.3% more than last week',
    changeType: 'increase',
    details: [
      '33.3% more than last week',
      '45.5% new visitors',
      '3.25% bounce rate'
    ],
    chartType: 'bar'
  },
  {
    title: 'STORE SALES',
    value: '$35.2K',
    change: '20.4% more than last week',
    changeType: 'increase',
    details: [
      '20.4% more than last week',
      '33.5% new orders',
      '6.21% conversion rate'
    ],
    chartType: 'line'
  },
  {
    title: 'NEW MEMBERS',
    value: '4,490',
    change: '59.5% more than last week',
    changeType: 'increase',
    details: [
      '59.5% more than last week',
      '45.5% from facebook',
      '15.25% from youtube'
    ],
    chartType: 'pie'
  },
  {
    title: 'BANDWIDTH',
    value: '4.5TB',
    change: '5.3% more than last week',
    changeType: 'increase',
    details: [
      '5.3% more than last week',
      '10.5% from total usage',
      '2MB per visit'
    ],
    chartType: 'donut'
  }
]

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Server Stats */}
          <ServerStats />
          
          {/* Traffic Analytics */}
          <TrafficAnalytics />
        </div>

        {/* Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopProducts />
          
          {/* Recent Activity Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase">
                RECENT ACTIVITY
              </h3>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">3 pending invoice to generate</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 mins ago</p>
                </div>
                <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded">
                  INVOICE
                </span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">2 new message from fb messenger</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">7 mins ago</p>
                </div>
                <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded">
                  INBOX
                </span>
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
        </div>
      </div>
    </Layout>
  )
} 