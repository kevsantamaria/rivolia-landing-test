import SectionHeader from '@/components/section-header'
import { aboutLines, benefitLines } from '@/content/about'

export default function About() {
  return (
    <section id="about" className="bg-background px-6 py-16 lg:px-16 lg:py-20">
      <SectionHeader text="¿Qué es Rivolia?" />
      <div className="flex flex-col items-center">
        <div className="mb-16 text-center lg:mb-20">
          <ul className="text-secondary flex flex-col gap-4 text-xl leading-relaxed text-pretty">
            {aboutLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-4xl text-center">
          <h3 className="text-primary mb-6 text-2xl font-bold tracking-tight uppercase md:text-5xl">
            Beneficios
          </h3>

          <ul className="text-secondary flex flex-col gap-4 text-xl leading-relaxed text-pretty">
            {benefitLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
