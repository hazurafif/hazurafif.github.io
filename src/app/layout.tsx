import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Hanif Zufar Rafif',
  description: 'Computer Engineer & AI Application Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart2P.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <Navbar />
        <main className="mx-auto min-h-screen max-w-5xl px-4 pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
