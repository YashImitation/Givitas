import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Givitas — Personalized Gifts | Custom Name Gifts Surat',
  description: 'Premium personalized gifts in Surat. Customize wallets, pens, keychains, pendants, diaries, bottles with your name. Same-day dispatch before 3 PM.',
  keywords: 'personalized gifts surat, custom name gifts, engraved wallet, name pendant, corporate gifts surat, customized bottle, givitas',
  openGraph: {
    title: 'Givitas — Personalized Gifts Made Just For You',
    description: 'Customize. Preview. Order. Delivered. Premium personalized gifts from Surat.',
    siteName: 'Givitas',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
