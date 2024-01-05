import {Commissioner} from 'next/font/google'
import './globals.css';

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
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout