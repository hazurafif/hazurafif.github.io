import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
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
        {children}
      </body>
    </html>
  )
}
