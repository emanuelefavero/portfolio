import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollDownButton from '@/app/components/ScrollDownButton'

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
        <header>
          <Header />
        </header>

        <main>
          <ScrollDownButton />

          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
