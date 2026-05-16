import finalCtaProduct from '@/assets/final-cta-product.png'
import PrimaryButton from '@/components/primary-button'
import Reveal from '@/components/reveal'
import { Flame } from 'lucide-react'
import Image from 'next/image'

export default function FinalCtaSection() {
  return (
    <section className="bg-background px-6 py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center justify-center gap-10 md:grid-cols-2">
        <Reveal className="text-center md:text-left" direction="left">
          <div className="mb-6 flex items-center gap-4 lg:gap-6">
            <span aria-hidden="true" className="bg-secondary/50 hidden h-px flex-1 md:block" />
            <h2 className="text-secondary mb-6 text-2xl leading-tight font-bold uppercase sm:text-3xl md:text-3xl">
              No hay mejor momento
              <br />
              para probar Rivolia
            </h2>
          </div>

          <div className="mx-auto mb-4 flex w-full max-w-[260px] flex-col items-stretch gap-4">
            <PrimaryButton text="Comprar ahora" />
            <PrimaryButton text="Comprar pack 20" variant="primary" />
          </div>

          <span className="text-primary mt-8 text-sm font-bold tracking-wide uppercase">
            <Flame className="inline-block" /> Últimos packs disponibles
          </span>
        </Reveal>

        <Reveal className="flex justify-center md:justify-end" direction="right" delay={0.1}>
          <Image
            src={finalCtaProduct}
            alt="Pack de café Rivolia con taza"
            className="h-auto w-full max-w-[430px] object-contain"
          />
        </Reveal>
      </div>

      <footer className="border-secondary/10 text-secondary mt-10 border-t pt-8 text-center text-sm">
        <p className="mx-auto max-w-6xl px-6 lg:px-16">
          © {new Date().getFullYear()} Rivolia. Todos los derechos reservados.
        </p>
      </footer>
    </section>
  )
}
