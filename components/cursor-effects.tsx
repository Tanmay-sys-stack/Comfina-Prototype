"use client"

import { useEffect, useState } from "react"

export function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.matches && target.matches('button, a, [role="button"], .cursor-hover')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.matches && target.matches('button, a, [role="button"], .cursor-hover')) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed top-0 left-0 w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />
    </>
  )
}
