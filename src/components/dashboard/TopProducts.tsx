'use client'

import React from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Product } from '@/types'
import { formatCurrency } from '@/lib/utils'

export default function TopProducts() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Huawei Smart Watch',
      sku: 'SKU90400',
      price: 399.00,
      quantity: 129,
      revenue: 51471,
      profit: 15441,
      image: '/assets/img/dashboard/product-1.jpg',
      rank: 1
    },
    {
      id: '2',
      name: 'Nike Shoes Black Version',
      sku: 'SKU85999',
      price: 99.00,
      quantity: 108,
      revenue: 10692,
      profit: 5346,
      image: '/assets/img/dashboard/product-2.jpg',
      rank: 2
    },
    {
      id: '3',
      name: 'White Sony PS4',
      sku: 'SKU20400',
      price: 599.00,
      quantity: 72,
      revenue: 43128,
      profit: 4312,
      image: '/assets/img/dashboard/product-3.jpg',
      rank: 3
    },
    {
      id: '4',
      name: 'Apple iPhone 13 Pro',
      sku: 'SKU12345',
      price: 999.00,
      quantity: 45,
      revenue: 44955,
      profit: 8991,
      image: '/assets/img/dashboard/product-4.jpg',
      rank: 4
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase">
          TOP PRODUCTS
        </h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>

      {/* Products List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {/* Product Image */}
            <div className="relative flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={60}
                className="rounded object-cover"
              />
              <div className="absolute top-0 left-0 w-5 h-5 bg-teal-600 text-white text-xs font-bold flex items-center justify-center rounded">
                {product.rank}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded">
                  {product.sku}
                </span>
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                {product.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {formatCurrency(product.price)}
              </p>
            </div>

            {/* Product Stats */}
            <div className="flex-shrink-0">
              <table className="text-xs">
                <tbody>
                  <tr>
                    <td className="pr-3 text-gray-600 dark:text-gray-400">QTY:</td>
                    <td className="font-medium text-gray-900 dark:text-white">{product.quantity}</td>
                  </tr>
                  <tr>
                    <td className="pr-3 text-gray-600 dark:text-gray-400">REVENUE:</td>
                    <td className="font-medium text-gray-900 dark:text-white">
                      {formatCurrency(product.revenue)}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-3 text-gray-600 dark:text-gray-400">PROFIT:</td>
                    <td className="font-medium text-gray-900 dark:text-white">
                      {formatCurrency(product.profit)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action */}
            <div className="flex-shrink-0">
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Search className="w-4 h-4" />
              </button>
            </div>
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