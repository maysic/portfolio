import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header/Header'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Womazing - магазин женской одежды',
  description: 'Интернет магазин женской одежды',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <div className='container'>
          <Header/>
          <main>
            {children}
          </main>
        </div>
        </body>
    </html>
  )
}
