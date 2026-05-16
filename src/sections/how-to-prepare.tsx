import HowToPrepareCard from '@/components/how-to-prepare-card'
import Reveal from '@/components/reveal'
import SectionHeader from '@/components/section-header'
import { steps } from '@/content/steps-to-prepare'

export default function HowToPrepare() {
  return (
    <section className="px-6 py-16 lg:px-16 lg:py-20">
      <SectionHeader text="Más fácil que preparar té" />

      <p className="text-secondary -mt-4 mb-10 text-center text-sm tracking-widest uppercase">
        Café filtrado, fresco y listo.
      </p>

      <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:gap-4">
        {steps.map((step, idx) => (
          <Reveal key={step.label} delay={idx * 0.1} className="flex-1">
            <HowToPrepareCard image={step.image} number={step.number} label={step.label} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
