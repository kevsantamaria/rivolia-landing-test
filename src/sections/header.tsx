'use client'

import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'features', 'reviews', 'cta']
      let current = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'Quiénes Somos', id: 'about' },
    { href: '#products', label: 'Productos', id: 'products' },
    { href: '#features', label: 'Esencia', id: 'features' },
    { href: '#reviews', label: 'Nuestros Clientes', id: 'reviews' },
  ]

  return (
    <nav className="bg-background/90 sticky top-0 z-50 flex w-full items-center justify-between px-6 py-3 backdrop-blur-lg md:px-12">
      <Link
        href="/"
        className="text-primary hover:primary/80 flex items-center gap-2 text-2xl font-bold transition-opacity"
      >
        <span className="font-montserrat">RIVOLIA</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-8 font-medium md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-muted-foreground hover:text-primary w-fit transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="https://wa.me/123-456-789"
          className="bg-button-primary text-background hover:bg-button-primary-hover flex items-center gap-2 rounded p-2 font-medium tracking-widest transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
            />
          </svg>{' '}
          Contáctanos
        </Link>
      </div>

      <button className="text-foreground px-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background border-border/60 absolute top-full right-4 left-4 z-50 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`w-fit text-lg font-medium transition-colors ${
                activeSection === link.id ? 'text-primary' : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-border/40 border-t pt-6">
            <Link
              href="https://wa.me/123-456-789"
              className="bg-button-primary text-background hover:bg-button-primary-hover mx-auto flex items-center justify-center gap-2 rounded p-2 font-medium tracking-widest transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>{' '}
              Contáctanos
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
