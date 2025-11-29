import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AchievementSection } from "@/components/achievement-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { ScreenshotSection } from "@/components/screenshot-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AchievementSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ScreenshotSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
