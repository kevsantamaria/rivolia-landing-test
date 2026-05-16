import profileImage from '@/assets/review-profile.png'
import Image from 'next/image'

interface ReviewCardProps {
  quote: string
  author: string
}

export default function ReviewCard({ author, quote }: ReviewCardProps) {
  return (
    <article className="relative flex flex-col items-center overflow-hidden rounded bg-white px-8 py-10 text-center shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <span
        aria-hidden="true"
        className="text-primary/10 absolute top-3 left-5 font-serif text-7xl leading-none"
      >
        “
      </span>

      <div className="border-primary/20 bg-background mb-6 flex h-20 w-20 items-center justify-center rounded-full border shadow-sm">
        <Image src={profileImage} alt="" className="h-14 w-14 object-contain" />
      </div>

      <span className="text-secondary text-lg leading-relaxed font-bold sm:text-xl">“{quote}”</span>
      <span className="text-primary mt-5 text-sm font-bold tracking-wide uppercase sm:text-base">
        {author}
      </span>
    </article>
  )
}
