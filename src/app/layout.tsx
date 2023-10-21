import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '../components/ui/toaster'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Incubadora',
  description: '',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.imgur.com/HI8Xaw5.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}
