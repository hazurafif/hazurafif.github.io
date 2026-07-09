import type { Metadata } from 'next'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
