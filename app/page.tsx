import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LinkHubSection } from "@/components/link-hub-section"
import { TeamSection } from "@/components/team-section"
import { AboutSection } from "@/components/about-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingCTA } from "@/components/floating-cta"
import { LoadingScreen } from "@/components/loading-screen"
import { ParallaxHero } from "@/components/parallax-hero"
import { CursorEffects } from "@/components/cursor-effects"
import { AdvancedAnimations } from "@/components/advanced-animations"
import { MagneticElements } from "@/components/magnetic-elements"
import { InteractiveElements } from "@/components/interactive-elements"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <CursorEffects />
      <AdvancedAnimations />
      <MagneticElements />
      <InteractiveElements />
      <ScrollAnimations />
      <ScrollProgress />
      <Navigation />
      <ParallaxHero>
        <HeroSection />
      </ParallaxHero>
      <LinkHubSection />
      <AboutSection />
      <TeamSection />
      <WaitlistSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
