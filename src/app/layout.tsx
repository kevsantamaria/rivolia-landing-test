import Header from '@/sections/header'
import type { Metadata } from 'next'
import { Cinzel, Montserrat } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rivolia - Café real, sin máquina, sin complicaciones',
  description:
    'La forma más simple de tomar café en cualquier lugar. Café filtrado fino, en un formato práctico. Diferentes formatos para cada momento.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <body className="overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  )
}
