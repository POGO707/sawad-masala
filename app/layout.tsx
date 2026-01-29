import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import CartProvider from '@/components/CartProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Swad Masala | Bharat Ka Asli Swad',
  description: 'Pure, Authentic, Handcrafted Spices. Traditional recipes passed through generations. Free delivery across India.',
  keywords: 'Swad Masala, Indian spices, homemade masala, traditional recipes, organic spices, pure spices, desi masala',
  authors: [{ name: 'Swad Masala' }],
  creator: 'Swad Masala',
  publisher: 'Swad Masala',
  metadataBase: new URL('https://swadmasala.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://swadmasala.com',
    title: 'Swad Masala | Bharat Ka Asli Swad',
    description: 'Pure, Authentic, Handcrafted Spices. Traditional recipes passed through generations.',
    siteName: 'Swad Masala',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Swad Masala Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#C2410C" />
      </head>
      <body className="min-h-screen bg-secondary flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <MobileNav />
          <WhatsAppFloat />
          <Toaster position="top-right" />
        </CartProvider>
      </body>
    </html>
  )
}