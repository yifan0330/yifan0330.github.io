import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://yifan-yu.com' : 'http://localhost:3000'),
  title: 'Yifan Yu - Health Data Science Researcher',
  description: 'Ph.D. candidate in Health Data Science at University of Oxford, specializing in Meta-Analysis on fMRI data, Spatial modelling, and Statistical machine learning.',
  keywords: 'Yifan Yu, Health Data Science, fMRI, Meta-Analysis, Machine Learning, Oxford University, Neuroscience',
  authors: [{ name: 'Yifan Yu' }],
  openGraph: {
    title: 'Yifan Yu - Health Data Science Researcher',
    description: 'Ph.D. candidate in Health Data Science at University of Oxford',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
