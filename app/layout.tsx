import NavComponent from '@/components/nav-component'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PlayerComponent from '@/components/player-component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify clone',
  description: 'Spotify UI clone built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex flex-col h-screen'>
          <NavComponent />
          <div className='flex-1 overflow-auto min-h-0'>
            {children}
          </div>
          <PlayerComponent />
        </main>
      </body>
    </html>
  )
}
