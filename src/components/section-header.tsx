interface SectionHeaderProps {
  text: string
}

export default function SectionHeader({ text }: SectionHeaderProps) {
  return (
    <header className="mb-12 flex items-center gap-4 lg:gap-6">
      <span aria-hidden="true" className="bg-primary/50 h-px flex-1" />
      <h2 className="text-primary text-center text-2xl font-bold uppercase md:text-5xl">{text}</h2>
      <span aria-hidden="true" className="bg-primary/50 h-px flex-1" />
    </header>
  )
}
