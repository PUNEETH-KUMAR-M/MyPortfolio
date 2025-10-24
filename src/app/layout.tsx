import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Puneeth Kumar M | Backend & Cloud Engineer',
  description: 'Spring Boot • AWS • DevOps • Docker • CI/CD',
  keywords: 'Backend Engineer, Cloud Engineer, Spring Boot, AWS, DevOps, Docker, CI/CD, Java, Python',
  authors: [{ name: 'Puneeth Kumar M' }],
  creator: 'Puneeth Kumar M',
  openGraph: {
    title: 'Puneeth Kumar M | Backend & Cloud Engineer',
    description: 'Spring Boot • AWS • DevOps • Docker • CI/CD',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puneeth Kumar M | Backend & Cloud Engineer',
    description: 'Spring Boot • AWS • DevOps • Docker • CI/CD',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <div className="animated-gradient min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
