import './globals.css'
import ScrollIndicator from './components/ScrollIndicator'
import PageNavigation from './components/PageNavigation'
import Header from './components/Header'
import Footer from './components/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emanuele Favero Portfolio',
  description:
    'Based in Italy, Emanuele Favero is a software engineer passionate about coding UX/UI experiences for the web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-200`}>
        <ScrollIndicator />

        <PageNavigation />

        <header>
          <Header />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
