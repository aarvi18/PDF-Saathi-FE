// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDF Saathi | Your Digital Partner for Every PDF Task',
  description: 'PDF Saathi is your digital companion for every PDF task. Whether you want to merge, compress, convert, or edit, PDF Saathi makes it simple and fast — a true “saathi” for students, professionals, and creators across India.',
  icons: {
    icon: "/pdf-saathi-logo.png",
    shortcut: "/pdf-saathi-logo.png",
    apple: "/pdf-saathi-logo.png",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
