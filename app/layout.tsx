import Post from '@/components/post'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'luis-archives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen flex flex-col bg-slate-700">
          <header className='h-[8%] bg-slate-900 text-white p-3 px-5 flex items-center justify-between text-2xl'>
               <span>  Luis Archives </span>
               {/* 
                disabled at first
               <span> Search </span> 
               */}
          </header>
          <section className='h-[92%] overflow-y-auto'>
            {children}
          </section>
        </main>  
      </body>
    </html>
  )
}
