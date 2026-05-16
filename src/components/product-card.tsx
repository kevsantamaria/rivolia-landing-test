import PrimaryButton from '@/components/primary-button'
import Image, { type StaticImageData } from 'next/image'

interface ProductCardProps {
  image: StaticImageData
  title: string
  description: string
  buttonLabel: string
}

export function ProductCard({ image, title, description, buttonLabel }: ProductCardProps) {
  return (
    <article className="group flex h-full min-h-[340px] flex-col rounded bg-white p-6 text-center shadow">
      <header className="relative mb-6 flex h-[100px] w-full items-center justify-center">
        <Image
          src={image}
          alt={title}
          className="h-full w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </header>

      <main className="flex flex-1 flex-col gap-4">
        <h3 className="text-secondary h-14 text-lg font-bold tracking-wide uppercase md:text-xl">
          {title}
        </h3>

        <p className="text-secondary flex-1 text-xs leading-relaxed font-light md:text-base">
          {description}
        </p>

        <div className="mt-auto">
          <PrimaryButton text={buttonLabel} variant="card" />
        </div>
      </main>
    </article>
  )
}
