import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata: Metadata = {
  title: 'Mahin Akter Kona — ML Researcher & Python Developer',
  description:
    'Portfolio of Mahin Akter Kona, Machine Learning Researcher & Python Developer. CSE Undergraduate at Northern University Bangladesh focused on Explainable AI, Data Science, and sustainable technology.',
  generator: 'v0.app',
  keywords: [
    'Mahin Akter Kona',
    'Machine Learning',
    'Explainable AI',
    'Python Developer',
    'Data Science',
    'SHAP',
    'LIME',
    'Portfolio',
  ],
  authors: [{ name: 'Mahin Akter Kona' }],
  openGraph: {
    title: 'Mahin Akter Kona — ML Researcher & Python Developer',
    description:
      'CSE Undergraduate at Northern University Bangladesh focused on Machine Learning, Data Science, and Explainable AI.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090d16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
