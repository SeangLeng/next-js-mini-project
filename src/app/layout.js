import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from '@/components/footer'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Psa',
  description: 'Make the product look like your owned',
  thumbnail: 'https://cdn.logojoy.com/wp-content/uploads/2018/08/23112855/82.png',
  openGraph: {
    images: ['https://cdn.logojoy.com/wp-content/uploads/2018/08/23112855/82.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="./clothing-icon-png-17.jpg" />
      </Head>
      <body>
        <Navbar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </body>
    </html>
  )
}
