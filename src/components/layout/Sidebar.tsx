'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  ChevronDown,
  Cpu,
  BarChart3,
  Mail,
  Columns,
  Star,
  MessageSquare,
  Image as ImageIcon,
  ShoppingBag,
  Gamepad2,
  PenTool,
  Grid3X3,
  PieChart,
  Compass,
  Layout,
  FileText,
  Users,
  Calendar,
  Settings,
  Gem,
  Code
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { MenuItem } from '@/types'

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    href: '/',
    icon: 'Cpu'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    href: '/analytics',
    icon: 'BarChart3'
  },
  {
    id: 'email',
    title: 'Email',
    icon: 'Mail',
    children: [
      { id: 'inbox', title: 'Inbox', href: '/email/inbox' },
      { id: 'compose', title: 'Compose', href: '/email/compose' },
      { id: 'detail', title: 'Detail', href: '/email/detail' }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    icon: 'Columns',
    children: [
      { id: 'widgets', title: 'Widgets', href: '/widgets' }
    ]
  },
  {
    id: 'ai-studio',
    title: 'AI Studio',
    icon: 'Star',
    children: [
      { id: 'ai-chat', title: 'AI Chat', href: '/ai-chat' },
      { id: 'ai-image', title: 'AI Image Generator', href: '/ai-image-generator' }
    ]
  },
  {
    id: 'pos-system',
    title: 'POS System',
    icon: 'ShoppingBag',
    badge: 'new',
    children: [
      { id: 'customer-order', title: 'Customer Order', href: '/pos/customer-order' },
      { id: 'kitchen-order', title: 'Kitchen Order', href: '/pos/kitchen-order' },
      { id: 'counter-checkout', title: 'Counter Checkout', href: '/pos/counter-checkout' },
      { id: 'table-booking', title: 'Table Booking', href: '/pos/table-booking' },
      { id: 'menu-stock', title: 'Menu Stock', href: '/pos/menu-stock' }
    ]
  },
  {
    id: 'ui-kits',
    title: 'UI Kits',
    icon: 'Gamepad2',
    children: [
      { id: 'bootstrap', title: 'Bootstrap', href: '/ui/bootstrap' },
      { id: 'buttons', title: 'Buttons', href: '/ui/buttons' },
      { id: 'card', title: 'Card', href: '/ui/card' },
      { id: 'icons', title: 'Icons', href: '/ui/icons' },
      { id: 'modal', title: 'Modal & Notification', href: '/ui/modal' },
      { id: 'typography', title: 'Typography', href: '/ui/typography' },
      { id: 'tabs', title: 'Tabs & Accordions', href: '/ui/tabs' }
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    icon: 'PenTool',
    children: [
      { id: 'elements', title: 'Form Elements', href: '/forms/elements' },
      { id: 'plugins', title: 'Form Plugins', href: '/forms/plugins' },
      { id: 'wizards', title: 'Wizards', href: '/forms/wizards' }
    ]
  },
  {
    id: 'tables',
    title: 'Tables',
    icon: 'Grid3X3',
    children: [
      { id: 'elements', title: 'Table Elements', href: '/tables/elements' },
      { id: 'plugins', title: 'Table Plugins', href: '/tables/plugins' }
    ]
  },
  {
    id: 'charts',
    title: 'Charts',
    icon: 'PieChart',
    children: [
      { id: 'chartjs', title: 'Chart.js', href: '/charts/chartjs' },
      { id: 'apexcharts', title: 'Apexcharts.js', href: '/charts/apexcharts' }
    ]
  },
  {
    id: 'map',
    title: 'Map',
    href: '/map',
    icon: 'Compass'
  },
  {
    id: 'layout',
    title: 'Layout',
    icon: 'Layout',
    children: [
      { id: 'starter', title: 'Starter Page', href: '/layout/starter' },
      { id: 'fixed-footer', title: 'Fixed Footer', href: '/layout/fixed-footer' },
      { id: 'full-height', title: 'Full Height', href: '/layout/full-height' },
      { id: 'full-width', title: 'Full Width', href: '/layout/full-width' },
      { id: 'boxed', title: 'Boxed Layout', href: '/layout/boxed' },
      { id: 'collapsed', title: 'Collapsed Sidebar', href: '/layout/collapsed' },
      { id: 'top-nav', title: 'Top Nav', href: '/layout/top-nav' },
      { id: 'mixed-nav', title: 'Mixed Nav', href: '/layout/mixed-nav' },
      { id: 'mixed-boxed', title: 'Mixed Nav Boxed Layout', href: '/layout/mixed-boxed' }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    icon: 'FileText',
    children: [
      { id: 'scrum-board', title: 'Scrum Board', href: '/pages/scrum-board' },
      { id: 'products', title: 'Products', href: '/pages/products' },
      { id: 'product-details', title: 'Product Details', href: '/pages/product-details' },
      { id: 'orders', title: 'Orders', href: '/pages/orders' },
      { id: 'order-details', title: 'Order Details', href: '/pages/order-details' },
      { id: 'gallery', title: 'Gallery', href: '/pages/gallery' },
      { id: 'search-results', title: 'Search Results', href: '/pages/search-results' },
      { id: 'coming-soon', title: 'Coming Soon Page', href: '/pages/coming-soon' },
      { id: '404', title: '404 Error Page', href: '/pages/404' },
      { id: 'login', title: 'Login', href: '/pages/login' },
      { id: 'register', title: 'Register', href: '/pages/register' },
      { id: 'messenger', title: 'Messenger', href: '/pages/messenger' },
      { id: 'data-management', title: 'Data Management', href: '/pages/data-management' },
      { id: 'file-manager', title: 'File Manager', href: '/pages/file-manager' },
      { id: 'pricing', title: 'Pricing Page', href: '/pages/pricing' }
    ]
  },
  {
    id: 'landing',
    title: 'Landing Page',
    href: '/landing',
    icon: 'Layout'
  },
  {
    id: 'users',
    title: 'Users',
    icon: 'Users',
    children: [
      { id: 'profile', title: 'Profile', href: '/profile' },
      { id: 'calendar', title: 'Calendar', href: '/calendar' },
      { id: 'settings', title: 'Settings', href: '/settings' },
      { id: 'helper', title: 'Helper', href: '/helper' }
    ]
  }
]

const iconMap: Record<string, React.ComponentType<any>> = {
  Cpu,
  BarChart3,
  Mail,
  Columns,
  Star,
  ShoppingBag,
  Gamepad2,
  PenTool,
  Grid3X3,
  PieChart,
  Compass,
  Layout,
  FileText,
  Users,
  Calendar,
  Settings,
  Gem,
  Code
}

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['dashboard']))

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const renderMenuItem = (item: MenuItem) => {
    const IconComponent = item.icon ? iconMap[item.icon] : null
    const isExpanded = expandedItems.has(item.id)
    const isActive = pathname === item.href
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.id}>
        <div
          className={cn(
            "flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors",
            isActive
              ? "bg-teal-100 text-teal-900 dark:bg-teal-900 dark:text-teal-100"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
          onClick={() => {
            if (hasChildren) {
              toggleItem(item.id)
            }
          }}
        >
          <div className="flex items-center space-x-3">
            {IconComponent && <IconComponent className="h-4 w-4" />}
            <span>{item.title}</span>
            {item.badge && (
              <span className="px-1.5 py-0.5 text-xs bg-teal-600 text-white rounded-full">
                {item.badge}
              </span>
            )}
          </div>
          {hasChildren && (
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isExpanded ? "rotate-180" : ""
              )}
            />
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-6 mt-1 space-y-1">
            {item.children!.map((child) => (
              <Link
                key={child.id}
                href={child.href || '#'}
                className={cn(
                  "block px-4 py-2 text-sm rounded-md transition-colors",
                  pathname === child.href
                    ? "bg-teal-50 text-teal-900 dark:bg-teal-900/20 dark:text-teal-100"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            if (item.href && !item.children) {
              // Direct link item
              const IconComponent = item.icon ? iconMap[item.icon] : null
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-teal-100 text-teal-900 dark:bg-teal-900 dark:text-teal-100"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-xs bg-teal-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            }
            
            return renderMenuItem(item)
          })}
        </div>
        
        {/* Documentation Link */}
        <div className="mt-8 p-4">
          <Link
            href="/documentation"
            className="block w-full px-4 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded-md hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span>Documentation</span>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  )
} 