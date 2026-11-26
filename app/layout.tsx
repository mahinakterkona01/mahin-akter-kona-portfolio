import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata: Metadata = {
  title: 'Mahin Akter Kona — CSE Undergraduate | AI/ML & Data Science',
  description:
    'Portfolio of Mahin Akter Kona, CSE undergraduate at Northern University Bangladesh, interested in Artificial Intelligence, Machine Learning, Data Science, and research-oriented learning.',
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
    title: 'Mahin Akter Kona — CSE Undergraduate | AI/ML & Data Science',
    description:
      'CSE undergraduate at Northern University Bangladesh, interested in Machine Learning, Data Science, and Explainable AI.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090f14',
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
