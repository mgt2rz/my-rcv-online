import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My RCV Online',
  description: 'Esta es una pagina web que permite a los usuarios comprar servicios asociados a los RCV de forma online'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  )
}
