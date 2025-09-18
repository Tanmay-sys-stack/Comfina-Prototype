"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToStory = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 gradient-blush" />

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main heading with staggered animation */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 leading-tight pt-20 sm:pt-0">
            Relief.{" "}
            <span className="block">
              <span className="text-primary">Anytime.</span> <span className="text-accent">Anywhere.</span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            A discreet companion for everyday relief.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comfort. Style. Technology. Designed for women, anywhere life takes you.
          </p>
        </div>

        {/* Product reveal area */}
        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative mb-12">
            {/* Product placeholder with elegant styling */}
            <div className="relative mx-auto w-80 h-96 md:w-96 md:h-[480px] rounded-3xl glass border-2 border-primary/20 overflow-hidden group hover:scale-105 transition-transform duration-700">
              {/* Product image placeholder */}
              <div className="absolute inset-0 gradient-warm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-48 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <div className="w-16 h-32 rounded-xl gradient-rose-gold shadow-2xl" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Comfina Bottle</p>
                  <p className="text-xs text-muted-foreground">Premium Wellness Technology</p>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating elements around product */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent/30 animate-bounce delay-700" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-primary/30 animate-bounce delay-1000" />
          </div>
        </div>

        {/* Coming soon text */}
        <div
          className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm text-muted-foreground mt-6">Coming Soon • Pre-orders starting Q2 2025</p>
        </div>
      </div>
    </section>
  )
}
