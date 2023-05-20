import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import AuthProvider from '@/components/AuthProvider'
import React from 'react'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My RCV Online',
  description: 'Esta es una pagina web que permite a los usuarios comprar servicios asociados a los RCV de forma online'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
