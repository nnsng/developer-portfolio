import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import './css/card.scss'
import './css/globals.scss'
import { personalData } from '@/utils/data/personal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Portfolio of ${personalData.name.split(' ').at(-1)}`,
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
      </body>
    </html>
  )
}
