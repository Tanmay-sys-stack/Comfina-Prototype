"use client"

import type React from "react"

import { useState } from "react"

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "outline"
}

export function AnimatedButton({ children, onClick, className = "", variant = "primary" }: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = "relative overflow-hidden transition-all duration-300 transform"
  const variantClasses = {
    primary: "gradient-rose-gold text-white hover:opacity-90 hover:scale-105",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105",
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${isPressed ? "scale-95" : ""}`}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-500 group-active:scale-100" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  )
}

interface HoverCardProps {
  children: React.ReactNode
  className?: string
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <div
      className={`group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  )
}
