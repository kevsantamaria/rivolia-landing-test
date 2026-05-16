import About from '@/sections/about'
import ComparisonSection from '@/sections/comparison-section'
import FastCoffeeSection from '@/sections/fast-coffee-section'
import FinalCtaSection from '@/sections/final-cta-section'
import Hero from '@/sections/hero'
import HowToPrepare from '@/sections/how-to-prepare'
import MoreWaysSection from '@/sections/more-ways-section'
import ProductSection from '@/sections/product-section'
import ReviewsSection from '@/sections/reviews-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-background">
        <About />
      </div>
      <div className="mx-auto w-full">
        <ProductSection />
        <HowToPrepare />
        <FastCoffeeSection />
        <ComparisonSection />
        <MoreWaysSection />
        <ReviewsSection />
        <FinalCtaSection />
      </div>
    </main>
  )
}
