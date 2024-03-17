import {Commissioner} from 'next/font/google'
import './globals.css';

import Header from './components/Header/Header';
import Providers from './components/providers';

const commissioner = Commissioner({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-main'
})

function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={commissioner.variable}>
      <body className="2xl:container md:mx-auto">
        <Header/>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout