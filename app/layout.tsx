import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/providers/theme-provider"
import './globals.css'

import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paranormal Blog',
  description: 'A blog about the paranormal world',
  icons:[
    {
      url: '/logo/glogo.png',
      href: '/logo/glogo.png',
    }
  ]
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" >
          <Toaster/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  
  )
}
