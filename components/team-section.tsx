"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Ankur Singh",
    role: "Founder & CEO",
    description: "Visionary entrepreneur, product strategist, and leader behind Comfina's innovation.",
    background:
      "Founder of Comfina and student of Pragyan School, currently pursuing commerce. Ankur has led multiple innovative projects and won national-level pitch competitions for his entrepreneurial ideas. As former school captain and active Rotary member, he has demonstrated leadership and commitment to community service. With several achievements in innovation, including Comfina, Ankur blends creativity with business acumen. Passionate about entrepreneurship, he is gaining hands-on experience while still in school and continues to explore opportunities that create meaningful impact. Ankur is the face of comfina.",
    personalNote: "Believes that the best innovations come from understanding real human needs.",
    image: "/professional-headshot-of-indian-male-entrepreneur-.jpg",
  },
  {
    name: "Tanmay Sharma",
    role: "COO",
    description: "Operations expert ensuring seamless execution and market entry.",
    background:
      "Tanmay Sharma, a student of Pragyan School pursuing PCM, is a versatile innovator recognized for his achievements in pitching and innovation. Skilled across programming, UI/UX design, video editing, 3D modeling, rendering, animation, and music production, he combines technical precision with creative depth. With experience in areas like algorithm optimization, API integration, and interactive system design, Tanmay applies advanced coding skills to solve real-world challenges. His ability to merge design thinking with technical execution makes him stand out as a forward-looking creator, constantly experimenting with new technologies and pushing the boundaries of digital innovation.",
    personalNote: "Passionate about building systems that scale with purpose and precision.",
    image: "/professional-headshot-of-indian-male-operations-ex.jpg",
  },
  {
    name: "Manas Singhal",
    role: "CTO",
    description: "Technology innovator, overseeing product development and future smart features.",
    background:
      "Manas Singhal, a student of Pragyan School pursuing PCM, is passionate about mechanics, robotics, and emerging technologies. With a strong grasp of engineering concepts and an understanding of coding languages, he bridges theory with hands-on innovation. As an active member of the school’s Atal Innovation Lab, Manas has explored projects that combine mechanical design, automation, and problem-solving at scale. His ability to integrate creativity with technical know-how reflects a forward-thinking mindset, making him a vital contributor to building impactful solutions.",
    personalNote: "Driven by the challenge of making complex technology feel effortlessly simple.",
    image: "/professional-headshot-of-indian-male-technology-ex.jpg",
  },
]

export function TeamSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of team cards
            teamMembers.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
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
    null
  )
}
