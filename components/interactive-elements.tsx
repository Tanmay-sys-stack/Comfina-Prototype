"use client"

import { useEffect, useRef } from "react"

export function InteractiveElements() {
  const rippleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createRipple = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".ripple-container")) return

      const container = target.closest(".ripple-container") as HTMLElement
      const rect = container.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      const ripple = document.createElement("div")
      ripple.className = "ripple"
      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"

      container.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    document.addEventListener("click", createRipple)
    return () => document.removeEventListener("click", createRipple)
  }, [])

  useEffect(() => {
    // Add hover effects to interactive elements
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"]')

      interactiveElements.forEach((element) => {
        element.classList.add("cursor-hover", "magnetic", "ripple-container")

        element.addEventListener("mouseenter", () => {
          element.classList.add("animate-magnetic")
        })

        element.addEventListener("mouseleave", () => {
          element.classList.remove("animate-magnetic")
        })
      })
    }

    // Run after component mount
    setTimeout(addHoverEffects, 100)
  }, [])

  return (
    <div ref={rippleContainerRef} className="fixed inset-0 pointer-events-none z-30">
      {/* Interactive particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse parallax-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
