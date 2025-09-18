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
    <section id="team" ref={sectionRef} className="py-24 gradient-blush">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The visionaries and innovators behind Comfina's mission to revolutionize women's wellness through thoughtful
            design and cutting-edge technology.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hoveredCard === index ? "scale-105" : ""}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                {/* Profile image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-accent/30 transition-colors duration-500">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>

                {/* Member info */}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.description}</p>
                </div>

                {/* Expandable background section */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    hoveredCard === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border/20 pt-4 mb-4">
                    <h4 className="font-medium text-foreground text-sm mb-2">Background</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">{member.background}</p>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-primary text-xs italic leading-relaxed">"{member.personalNote}"</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-4">
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-accent transition-all duration-300 hover:scale-110">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-accent transition-all duration-300 hover:scale-110">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent/60 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors duration-500" />
            </Card>
          ))}
        </div>

        {/* Team philosophy */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6">Our Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that the most meaningful innovations emerge from deep empathy and understanding. Our diverse
              backgrounds in technology, operations, and product strategy unite around a single mission: creating
              solutions that genuinely improve women's daily lives.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                <span>Innovation through empathy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                <span>Design with purpose</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                <span>Technology for good</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
