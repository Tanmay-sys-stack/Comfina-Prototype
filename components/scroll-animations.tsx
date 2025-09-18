"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")

          // Add staggered animation for child elements
          const children = entry.target.querySelectorAll(".stagger-child")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-text-reveal")
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    // Add scroll-based parallax effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      // Parallax background elements
      const parallaxBg = document.querySelectorAll(".parallax-bg")
      parallaxBg.forEach((element) => {
        ;(element as HTMLElement).style.transform = `translateY(${rate}px)`
      })

      // Floating elements with different speeds
      const floatingElements = document.querySelectorAll(".floating-element")
      floatingElements.forEach((element, index) => {
        const speed = 0.2 + index * 0.1
        const yPos = scrolled * speed
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
