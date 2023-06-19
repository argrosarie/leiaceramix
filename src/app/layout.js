import Navbar from './components/Navbar/Navbar.js'

import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Leia Ceramix',
  description:
    'Handmade ceramics by a Queer Artist Based in Argentina From the USA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
