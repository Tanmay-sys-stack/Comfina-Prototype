"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Instagram, Youtube, Linkedin, Twitter, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    description: "Behind the scenes & community",
    url: "https://www.instagram.com/comfina.in/",
    icon: Instagram,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    name: "YouTube",
    description: "Product demos & stories",
    url: "https://www.youtube.com/@Comfina",
    icon: Youtube,
    gradient: "from-red-500 to-red-600",
  },
  {
    name: "LinkedIn",
    description: "Professional updates",
    url: "https://www.linkedin.com/company/comfina.in/",
    icon: Linkedin,
    gradient: "from-blue-600 to-blue-700",
  },
  {
    name: "TikTok",
    description: "Quick tips & wellness",
    url: "http://tiktok.com/@comfina",
    icon: Twitter, // Using Twitter icon as placeholder for TikTok
    gradient: "from-black to-gray-800",
  },
]

export function LinkHubSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="links" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">Stay Connected</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community across platforms and stay updated on our journey to revolutionize women's wellness.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Card
                key={link.name}
                className={`group relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  hoveredCard === index ? "border-primary/30 shadow-2xl" : "border-border/20 hover:border-primary/20"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(link.url, "_blank")}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${link.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>

                  {/* CTA */}
                  <div className="flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                    <span className="text-sm font-medium mr-2">Visit</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            "Building a community of empowered women, one connection at a time."
          </p>
        </div>
      </div>
    </section>
  )
}
