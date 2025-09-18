"use client"

import { useEffect, useRef } from "react"

export function AdvancedAnimations() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-element")

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Floating animated elements */}
      <div className="parallax-element absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
      <div className="parallax-element absolute top-1/3 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-ping" />
      <div className="parallax-element absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/10 rounded-full animate-bounce" />
      <div className="parallax-element absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse delay-1000" />
    </div>
  )
}
