import './globals.css'
import { Raleway } from 'next/font/google'

import Header from '@/components/Header'
import AuthProvider from '@/components/AuthProvider'
import React from 'react'
import Footer from '@/components/Footer'

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'My RCV Online',
  description: 'Esta es una pagina web que permite a los usuarios comprar servicios asociados a los RCV de forma online'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${font.className} mx-4 md:mx-40`}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
