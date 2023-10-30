import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import NavBar from '@/components/NavBar'

// const inter = Inter({ subsets: ['latin'] })
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Fashion Shop',
  description: 'This is fashion shop',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen font-sans",
          fontSans.variable
        )}>
          <main>
            <NavBar />
            {children}
          </main>
        </body>
    </html>
  )
}
