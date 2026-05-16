import coffeeBeansImage from '@/assets/more-ways-coffee.png'
import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'
import Image from 'next/image'

export default function MoreWaysSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="px-6 lg:px-16">
        <SectionHeader text="Más formas de disfrutar Rivolia" />
      </div>

      <Reveal className="relative mt-8 sm:mt-10 lg:mt-12">
        <Image
          src={coffeeBeansImage}
          alt="Granos de café, canela y especias"
          className="h-auto w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent sm:h-20 lg:h-24"
        />
      </Reveal>
    </section>
  )
}
