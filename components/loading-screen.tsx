"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gradient-blush">
      <div className="text-center">
        {/* Logo */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-full gradient-rose-gold flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-xl">C</span>
        </div>

        {/* Brand name */}
        <h1 className="font-serif text-3xl font-light text-foreground mb-8">Comfina</h1>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full gradient-rose-gold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-sm text-muted-foreground mt-4">Preparing your wellness journey...</p>
      </div>
    </div>
  )
}
