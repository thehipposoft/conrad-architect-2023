import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conrad Architect',
  description: "JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Conrad Architect" />
        <meta property="og:description" content="JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property." />
        <meta property="og:image" content="https://drive.google.com/file/d/1RpJEz9iaChXAtJWbocQxakENlBwX3N8I/view?usp=sharing" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
