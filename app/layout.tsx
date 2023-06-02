import './globals.css'
import ScrollIndicator from './components/ScrollIndicator'
import PageNavigation from './components/PageNavigation'
import Header from './components/Header'
import Footer from './components/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// * --- METADATA ---
export const metadata = {
  title: 'Emanuele Favero Portfolio',
  description:
    'Based in Italy, Emanuele Favero is a software engineer passionate about coding UX/UI experiences for the web',

  // Open Graph
  openGraph: {
    title: 'Emanuele Favero Portfolio',
    description: 'A software engineer based in Italy',
    url: 'https://emanuelefavero.com',
    siteName: 'Emanuele Favero Portfolio',
    images: [
      {
        url: 'https://emanuelefavero.com/icon-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Emanuele Favero Portfolio',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },

  // robots
  robots: {
    index: true,
    follow: true,
  },

  // icons
  icon: {
    icon: '/icon-512x512.png',
    shortcut: '/icon-192x192.png',
    apple: '/icon-192x192.png',
  },

  // themeColor
  themeColor: '#4f46e5',

  // manifest
  manifest: 'https://emanuelefavero.com/manifest.json',

  // TODO: Twitter

  // viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    // maximumScale: 1,
  },

  // more metadata options
  // @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
}
// --- ---- ---

// * --- LAYOUT ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-200`}>
        <ScrollIndicator />

        <nav>
          <PageNavigation />
        </nav>

        <header id='header'>
          <Header />
        </header>

        <main className='flex flex-col items-center justify-center'>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
