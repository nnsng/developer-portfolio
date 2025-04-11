import { personalData } from '@/utils/data/personal'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer'
import Navbar from './components/navbar'

import 'react-toastify/dist/ReactToastify.css'
import './css/card.scss'
import './css/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${personalData.name}'s Portfolio`,
  description: `This is the portfolio of ${personalData.name}. I am a front-end developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        <ToastContainer />
        <main className="relative mx-auto min-h-screen px-6 text-white sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
