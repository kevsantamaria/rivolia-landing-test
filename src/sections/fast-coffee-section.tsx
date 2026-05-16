import cupImage from '@/assets/section-5-cup.png'
import Reveal from '@/components/reveal'
import Image from 'next/image'

export default function FastCoffeeSection() {
  return (
    <section className="flex flex-col py-20 text-center sm:text-start lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_0.85fr]">
        <Reveal className="z-10" direction="up">
          <h2 className="text-primary text-2xl leading-tight font-bold uppercase md:text-6xl">
            No es café rápido.
            <br />
            Es café bien hecho, rápido.
          </h2>

          <h4 className="text-secondary mt-4 max-w-2xl text-lg leading-relaxed tracking-wide uppercase md:text-2xl">
            Como el café que tomarías en casa
            <br />
            pero en cualquier lugar
          </h4>
        </Reveal>

        <Reveal className="relative flex justify-end" delay={0.1}>
          <Image
            src={cupImage}
            alt="Taza de café Rivolia"
            className="h-auto w-full max-w-[380px] object-contain"
            priority={false}
          />
        </Reveal>
      </div>
    </section>
  )
}
