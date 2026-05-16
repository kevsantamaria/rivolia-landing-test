'use client'

import { ProductCard } from '@/components/product-card'
import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'
import { products } from '@/content/products'
import { animate, motion, useMotionValue } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const CARD_WIDTH = 280
const CARD_GAP = 16
const CARD_STEP = CARD_WIDTH + CARD_GAP

export default function ProductSection() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const x = useMotionValue(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = products.length

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const animateOptions = {
    type: 'spring',
    stiffness: 150,
    damping: 20,
    mass: 0.8,
  }

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, total - 1))
    setCurrent(clamped)
    animate(x, (-clamped * CARD_STEP) as any, animateOptions as any)
  }

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    if (!isMobile) return
    autoPlayRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = c === total - 1 ? 0 : c + 1
        animate(x, (-next * CARD_STEP) as any, animateOptions as any)
        return next
      })
    }, 3000)
  }

  useEffect(() => {
    if (!isMobile) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
      animate(x, 0 as any, animateOptions as any)
      setCurrent(0)
      return
    }

    resetAutoPlay()
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isMobile])

  const sidePadding = `calc((100% - ${CARD_WIDTH}px) / 2)`

  return (
    <section id="products" className="px-6 py-20 lg:px-16 lg:py-28">
      <SectionHeader text="Elige cómo disfrutar Rivolia" />

      <div className="hidden grid-cols-5 gap-6 lg:grid">
        {products.map((product, idx) => (
          <Reveal key={`${product.title}-${idx}`} delay={idx * 0.06}>
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              buttonLabel={product.buttonLabel}
            />
          </Reveal>
        ))}
      </div>

      <div className="relative overflow-hidden lg:hidden">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{
            x,
            paddingLeft: sidePadding,
            paddingRight: sidePadding,
            gap: `${CARD_GAP}px`,
          }}
          drag="x"
          dragConstraints={{ left: -(total - 1) * CARD_STEP, right: 0 }}
          dragElastic={0.12}
          onDragStart={() => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current)
          }}
          onDragEnd={() => {
            const currentX = x.get()
            const nearest = Math.round(-currentX / CARD_STEP)
            goTo(nearest)
            resetAutoPlay()
          }}
        >
          {products.map((product, idx) => (
            <div
              key={`${product.title}-${idx}`}
              className="shrink-0"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                buttonLabel={product.buttonLabel}
              />
            </div>
          ))}
        </motion.div>

        <button
          onClick={() => {
            goTo(current - 1)
            resetAutoPlay()
          }}
          disabled={current === 0}
          aria-label="Anterior"
          className="absolute top-1/2 left-4 z-10 flex h-9 w-9 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100 disabled:opacity-30"
        >
          ‹
        </button>
        <button
          onClick={() => {
            goTo(current + 1)
            resetAutoPlay()
          }}
          disabled={current === total - 1}
          aria-label="Siguiente"
          className="absolute top-1/2 right-4 z-10 flex h-9 w-9 translate-x-3 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100 disabled:opacity-30"
        >
          ›
        </button>

        <div className="mt-4 flex justify-center gap-1.5">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                goTo(idx)
                resetAutoPlay()
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? 'w-5 bg-gray-800' : 'w-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
