import Reveal from '@/components/reveal'
import ReviewCard from '@/components/review-card'
import SectionHeader from '@/components/section-header'
import { reviews } from '@/content/reviews'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-background px-6 py-16 lg:px-16 lg:py-20">
      <SectionHeader text="Opiniones" />

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-2">
          {reviews.map((review, idx) => (
            <Reveal key={review.quote} delay={idx * 0.08}>
              <ReviewCard key={review.quote} quote={review.quote} author={review.author} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
