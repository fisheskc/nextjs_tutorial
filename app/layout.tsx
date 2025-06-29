import './globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import {Inter } from 'next/font/google';
// We invoke the font we just imported.
const inter = Inter({ subsets: ['latin'] });
// const inconsolata = Inconsolata({subsets:['latin']});
// const roboto = Roboto({subsets:['latin'], weight:['400']})

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  // For return we need to provide the rootLayout, HTML tags
  // The body is where all of our page content is going to be located
  // What do want to share across the pages?
  // We will provide the nav tag
  return (
    <html lang='en'>
      <body className={inter.className}>
        
          <Navbar />
            <div className='container py-10 flex justify-content flex-start'>{children}</div>
      </body>
  </html>
  )
}

