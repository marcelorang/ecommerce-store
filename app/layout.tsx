import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import ModalProvider from '@/providers/modal-providers'
import ToastProvider from '@/providers/toast-provider'


import './globals.css'


const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ModalProvider />
      <ToastProvider />
      <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
