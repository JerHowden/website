import { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Jeremiah Howden',
  description: 'jeremiahhowden.com',
  openGraph: {
    type: 'website',
    url: 'https://jeremiahhowden.com',
    title: 'Jeremiah Howden',
    description: "Jeremiah Howden's Portfolio Site",
    siteName: 'Jeremiah Howden',
  },
  icons: [
    '/jhdot.svg',
    {
      url: '/jhdot-white.png',
      media: '(prefers-color-scheme:no-preference)',
      rel: 'apple-touch-icon',
    },
    {
      url: '/jhdot-dark.png',
      media: '(prefers-color-scheme:light)',
      rel: 'apple-touch-icon',
    },
    {
      url: '/jhdot-white.png',
      media: '(prefers-color-scheme:dark)',
      rel: 'apple-touch-icon',
    },
  ],
  twitter: {
    card: 'summary',
    site: 'jeremiahhowden.com',
    title: 'Jeremiah Howden',
    description: "Jeremiah Howden's Portfolio Site",
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </head>
      <body>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
