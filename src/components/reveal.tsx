'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type RevealDirection = 'up' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: RevealDirection
}

const offsets = {
  up: { y: 28 },
  left: { x: -32 },
  right: { x: 32 },
  none: {},
}

export default function Reveal({ children, className, delay = 0, direction = 'up' }: RevealProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
