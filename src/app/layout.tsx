import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Hanif Zufar Rafif',
  description: 'AI Application Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-bg text-text-primary font-mono antialiased">
        <main className="mx-auto min-h-screen w-full max-w-2xl px-6 py-24">
          {children}
        </main>
      </body>
    </html>
  )
}
