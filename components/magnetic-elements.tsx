"use client"

import { useEffect, useRef } from "react"

export function MagneticElements() {
  const magneticRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      magneticRefs.current.forEach((element) => {
        if (!element) return

        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        if (distance < 100) {
          const strength = (100 - distance) / 100
          const moveX = deltaX * strength * 0.3
          const moveY = deltaY * strength * 0.3

          element.style.transform = `translate(${moveX}px, ${moveY}px)`
        } else {
          element.style.transform = "translate(0px, 0px)"
        }
      })
    }

    const handleMouseLeave = () => {
      magneticRefs.current.forEach((element) => {
        if (element) {
          element.style.transform = "translate(0px, 0px)"
        }
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    // Add magnetic class to buttons and interactive elements
    const magneticElements = document.querySelectorAll("button, .magnetic")
    magneticRefs.current = Array.from(magneticElements) as HTMLElement[]
  }, [])

  return null
}
