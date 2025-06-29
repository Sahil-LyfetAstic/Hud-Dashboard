export interface MenuItem {
  id: string
  title: string
  href?: string
  icon?: string
  badge?: string
  children?: MenuItem[]
}

export interface StatCard {
  title: string
  value: string
  change: string
  changeType: 'increase' | 'decrease'
  details: string[]
  chartType: 'bar' | 'line' | 'pie' | 'donut'
}

export interface Product {
  id: string
  name: string
  sku: string
  price: number
  quantity: number
  revenue: number
  profit: number
  image: string
  rank: number
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  icon: string
  type: 'order' | 'account' | 'setup' | 'widget' | 'payment'
}

export interface TrafficData {
  country: string
  visits: number
  percentage: number
}

export interface TrafficSource {
  source: string
  percentage: number
  color: string
} 