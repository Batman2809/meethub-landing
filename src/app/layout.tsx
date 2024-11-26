import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Launching Soon',
  description: 'Our exciting new project is launching soon!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

