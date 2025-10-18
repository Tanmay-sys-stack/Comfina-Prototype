"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Designed for Women",
    description: "Every detail crafted with women's needs, comfort, and lifestyle in mind.",
  },
  {
    icon: Zap,
    title: "Smart Technology",
    description: "Integrated heating system with precise temperature control and long-lasting battery.",
  },
  {
    icon: Shield,
    title: "Discreet & Portable",
    description: "Elegant design that fits seamlessly into your daily routine, anywhere you go.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built with insights from thousands of women who shared their wellness journey.",
  },
]

export function AboutSection() {
  const [visibleElements, setVisibleElements] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger animations
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleElements((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                Revolutionizing Women's Wellness
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every month, millions of women experience the discomfort of period cramps, often relying on temporary
                solutions that don't fit their active lifestyles. Traditional heating pads are bulky, inconvenient, and
                tie you to one place.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comfina changes everything. Our innovative product combines elegant design with smart heating
                technology, providing discreet, portable relief that moves with you throughout your day.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where women never have to compromise their comfort, productivity, or confidence
                because of period pain. Through thoughtful design and cutting-edge technology, we're creating solutions
                that empower women to live fully, every day of the month.
              </p>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/elegant-wellness-product-lifestyle-photography-wit.jpg"
                alt="Comfina lifestyle"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full gradient-rose-gold opacity-80 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full bg-accent/60 animate-pulse delay-1000" />
          </div>
        </div>

        {/* Features grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">Why Comfina</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of Comfina is designed with intention, combining form and function to create something truly
              special.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={feature.title}
                  className={`group p-6 sm:p-8 text-center border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-700 hover:scale-105 hover:shadow-xl min-h-[280px] flex flex-col justify-start ${
                    visibleElements[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-rose-gold mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Impact section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto gradient-warm rounded-3xl p-12">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">Our Impact</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're not just building a product—we're fostering a community of empowered women who refuse to let period
              pain define their limits. Join hundreds of women who are already part of the Comfina movement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-serif font-light text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Women in our community</p>
              </div>
              <div>
                <div className="text-3xl font-serif font-light text-accent mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Report improved comfort</p>
              </div>
              <div>
                <div className="text-3xl font-serif font-light text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Portable relief</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
