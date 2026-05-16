'use client'

import heroImage from '@/assets/hero-image.png'
import PrimaryButton from '@/components/primary-button'
import Reveal from '@/components/reveal'
import { Clock, Flame, Truck } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center py-16 md:pl-24 lg:py-20">
      <div className="flex w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
        <Reveal className="text-center md:text-left" direction="left">
          <p className="text-primary 3xl:text-[61pt] mb-6 text-4xl font-bold uppercase md:mb-14 md:text-7xl">
            RIVOLIA
          </p>

          <h1 className="3xl:text-[36pt] text-secondary text-2xl font-bold tracking-tight md:text-5xl">
            Café real. <br className="hidden sm:block" />
            Sin máquina. <br />
            Sin complicaciones.
          </h1>

          <h2 className="text-secondary 3xl:text-[24pt] hidden leading-relaxed font-normal sm:block sm:w-4xl md:text-2xl">
            Abre, vierte agua caliente y disfruta.
            <br />
            Así de simple.
          </h2>

          <div className="mt-4 flex flex-col-reverse gap-8 sm:flex-col sm:items-start md:mt-6">
            <ul className="flex flex-col gap-4">
              {[
                { Icon: Flame, label: 'Últimos packs disponibles hoy' },
                { Icon: Truck, label: 'Entrega rápida en Perú' },
                { Icon: Clock, label: 'Listo en 3 minutos' },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="bg-primary/12 border-primary/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border">
                    <Icon className="text-primary h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm tracking-[0.06em] uppercase lg:text-[0.9rem]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <div className="flex flex-col items-center">
                <PrimaryButton text="Comprar ahora" />
                <p className="text-secondary mt-2 text-sm font-medium tracking-widest">
                  Desde $1 por taza
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Image
          src={heroImage}
          loading="eager"
          alt="Rivolia - Café real, sin máquina, sin complicaciones"
          className="h-auto max-w-full object-cover"
        />
      </div>
    </section>
  )
}
