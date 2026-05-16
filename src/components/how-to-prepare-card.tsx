import Image, { StaticImageData } from 'next/image'

interface HowToPrepareCardProps {
  image: StaticImageData
  number: string
  label: string
}

export default function HowToPrepareCard({ image, label, number }: HowToPrepareCardProps) {
  return (
    <article className="flex flex-col items-center gap-3 text-center">
      <Image src={image} alt={label} className="h-auto w-full rounded-sm object-contain" />
      <p className="text-secondary text-base font-bold tracking-wide uppercase">
        {number} {label}
      </p>
    </article>
  )
}
