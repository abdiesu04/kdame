import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { CartProvider } from '@/context/CartContext'
import CartPanel from '@/components/cart/CartPanel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kdame Gebiya - Ethiopian Marketplace',
  description: 'Discover authentic Ethiopian craftsmanship and modern designs',
  keywords: 'Ethiopian marketplace, traditional crafts, modern designs, Ethiopian products',
  robots: 'index, follow',
  openGraph: {
    title: 'Kdame Gebiya - Ethiopian Marketplace',
    description: 'Discover authentic Ethiopian craftsmanship and modern designs',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kdame Gebiya'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <CartPanel />
        </CartProvider>
      </body>
    </html>
  )
} 