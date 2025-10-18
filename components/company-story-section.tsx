"use client"

import { useRef, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Lightbulb, Target, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empathy-Driven",
    description:
      "We listen to women's real experiences and design solutions that truly address their daily challenges.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technology meets thoughtful design to create products that feel premium and intuitive.",
  },
  {
    icon: Target,
    title: "Mission-Focused",
    description: "Every decision we make is guided by our commitment to improving women's quality of life.",
  },
  {
    icon: Lightbulb,
    title: "Community-Centered",
    description: "We believe in building with our community, not for them. Your voice shapes our future.",
  },
]

const milestones = [
  {
    year: "2023",
    title: "The Idea",
    description:
      "Comfina was born from a simple observation: millions of women deserve better solutions for period pain relief.",
  },
  {
    year: "2024",
    title: "Research & Development",
    description:
      "We spent months researching, prototyping, and gathering feedback from hundreds of women to perfect our approach.",
  },
  {
    year: "2025",
    title: "Pre-Launch Phase",
    description: "Comfina enters its pre-order phase, bringing our vision to women who are ready for a better way.",
  },
  {
    year: "Future",
    title: "Global Impact",
    description: "Our vision extends beyond one product—we're building a wellness ecosystem for women worldwide.",
  },
]

export function CompanyStorySection() {
  const [visibleMilestones, setVisibleMilestones] = useState<boolean[]>([])
  const [visibleValues, setVisibleValues] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger milestone animations
            milestones.forEach((_, index) => {
              setTimeout(() => {
                setVisibleMilestones((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
            })

            // Stagger value animations
            values.forEach((_, index) => {
              setTimeout(() => {
                setVisibleValues((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comfina is more than a wellness company—we're a movement dedicated to empowering women by addressing one of
            their most pressing daily challenges with innovation, compassion, and style.
          </p>
        </div>

        {/* Company mission */}
        <div className="mb-24 gradient-warm rounded-3xl p-12 md:p-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl font-light text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To revolutionize how women experience period pain relief by creating convenient, on-the-go solutions that
              combine cutting-edge technology with elegant design. We believe that women shouldn't have to compromise
              their comfort, productivity, or confidence because of menstrual discomfort.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through empathy-driven product development and continuous innovation, we're building a future where relief
              is always within reach—anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="font-serif text-3xl font-light text-foreground mb-12 text-center">Our Journey</h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`transition-all duration-700 delay-${index * 100} ${
                  visibleMilestones[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="flex gap-6 md:gap-12">
                  {/* Timeline marker */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full gradient-rose-gold mb-4" />
                    <div className="w-1 h-24 bg-gradient-to-b from-primary/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <div className="text-sm font-semibold text-primary mb-2">{milestone.year}</div>
                    <h4 className="font-serif text-2xl font-medium text-foreground mb-3">{milestone.title}</h4>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core values */}
        <div>
          <h3 className="font-serif text-3xl font-light text-foreground mb-12 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={value.title}
                  className={`group p-8 border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-700 hover:scale-105 hover:shadow-xl min-h-[280px] flex flex-col justify-start ${
                    visibleValues[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-rose-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
