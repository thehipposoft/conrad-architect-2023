import { ViewTransitions } from 'next-view-transitions'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Conrad Architect',
  description: "JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property.",
  openGraph: {
    title: 'Conrad Architect',
    description: 'JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property.',
    type: 'website',
    url: 'https://www.conradarchitect.com/',
    siteName: 'The Hipposoft',
    images: [
      {
        url: 'https://conrad-architect-2023.netlify.app/assets/images/logo.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://conrad-architect-2023.netlify.app/assets/images/logo.png',
        width: 1800,
        height: 1600,
        alt: 'JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property.',
      },
    ],
    locale: 'en_AU',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ViewTransitions>
  )
}
