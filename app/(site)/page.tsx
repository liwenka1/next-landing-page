import Blog from "./components/blog"
import Cta from "./components/cta"
import Faq from "./components/faq"
import Features from "./components/features"
import Hero from "./components/hero"
import HowItWorks from "./components/how-it-works"
import Logos from "./components/logos"
import Pricing from "./components/pricing"
import Problem from "./components/problem"
import Solution from "./components/solution"
import TestimonialHighlight from "./components/testimonial-highlight"
import Testimonials from "./components/testimonials"

const Home = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <HowItWorks />
      <TestimonialHighlight />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Blog />
      <Cta />
    </>
  )
}

export default Home
