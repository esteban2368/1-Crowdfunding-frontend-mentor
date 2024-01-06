import {Commissioner} from 'next/font/google'
import './globals.css';

import Header from './components/Header/Header';

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
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout