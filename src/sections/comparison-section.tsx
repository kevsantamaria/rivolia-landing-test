import instantCoffeeImage from '@/assets/instant-coffee.png'
import rivoliaImage from '@/assets/rivolia-vs-instant.png'
import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'
import { instantItems, rivoliaItems } from '@/content/comparison'
import Image from 'next/image'

export default function ComparisonSection() {
  return (
    <section id="features" className="bg-background px-6 py-16 lg:px-16 lg:py-20">
      <SectionHeader text="Rivolia vs Café instantáneo" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
          <Reveal
            className="hidden justify-center lg:order-1 lg:flex lg:justify-start"
            direction="up"
          >
            <Image
              src={rivoliaImage}
              alt="Café Rivolia con taza y drip bag"
              className="h-auto w-full max-w-[360px] object-contain"
            />
          </Reveal>

          <div className="order-1 grid gap-8 text-center sm:grid-cols-2 lg:order-2">
            <Reveal delay={0.08}>
              <Image
                src={rivoliaImage}
                alt="Café Rivolia con taza y drip bag"
                className="mx-auto mb-6 h-auto w-full max-w-[260px] object-contain lg:hidden"
              />
              <h3 className="text-primary mb-5 text-2xl font-bold uppercase md:text-4xl">
                Rivolia
              </h3>
              <div className="text-secondary grid auto-rows-fr">
                {rivoliaItems.map(([title, description]) => (
                  <div key={title} className="flex min-h-20 flex-col justify-start">
                    <p className="leading-tight font-bold">{title}</p>
                    <p className="text-sm leading-snug text-pretty">{description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <Image
                src={instantCoffeeImage}
                alt="Café instantáneo con frasco y taza"
                className="mx-auto mb-6 h-auto w-full max-w-[240px] object-contain lg:hidden"
              />
              <h3 className="text-secondary mb-5 text-2xl font-bold text-nowrap uppercase md:text-[1.8rem]">
                Café instantáneo
              </h3>
              <div className="text-secondary grid auto-rows-fr">
                {instantItems.map(([title, description]) => (
                  <div key={title} className="flex min-h-20 flex-col justify-start">
                    <p className="leading-tight font-bold">{title}</p>
                    <p className="text-sm leading-snug text-pretty">{description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="hidden justify-center lg:order-3 lg:flex lg:justify-end" delay={0.12}>
            <Image
              src={instantCoffeeImage}
              alt="Café instantáneo con frasco y taza"
              className="h-auto w-full max-w-[350px] object-contain"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
