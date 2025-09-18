"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 1000
      setIsVisible(scrolled && !isDismissed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector("#waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-12 h-12 rounded-full glass backdrop-blur-xl border border-primary/20 hover:scale-110 transition-all duration-300 shadow-lg"
        variant="ghost"
      >
        <ArrowUp className="h-5 w-5 text-primary" />
      </Button>

      {/* Floating waitlist CTA */}
      <div className="glass backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl max-w-xs">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/30 flex items-center justify-center transition-colors"
        >
          <X className="h-3 w-3" />
        </button>
        <div className="text-center">
          <p className="text-sm text-foreground font-medium mb-3">Ready to join the movement?</p>
          <Button
            onClick={scrollToWaitlist}
            className="w-full gradient-rose-gold text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  )
}
