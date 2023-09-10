import Sidebar from '@/components/ui/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Incubadora',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://i.imgur.com/HI8Xaw5.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
