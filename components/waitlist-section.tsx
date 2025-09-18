"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle, Mail, User, MapPin, Heart } from "lucide-react"

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    interests: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const interestOptions = [
    "Early access to product",
    "Beta testing program",
    "Wellness community",
    "Investment opportunities",
    "Partnership inquiries",
  ]

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email content
      const emailContent = `
New Comfina Waitlist Signup:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Location: ${formData.location}
Interests: ${formData.interests.join(", ")}

Submitted at: ${new Date().toLocaleString()}
      `

      // Send email using a simple mailto approach for now
      // In production, you'd want to use a proper email service
      const mailtoLink = `mailto:comfina.in@gmail.com?subject=New Waitlist Signup - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailContent)}`

      // For demo purposes, we'll simulate the email sending
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Open mailto link
      window.location.href = mailtoLink

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-24 gradient-blush">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="p-12 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-rose-gold mb-8">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
              Welcome to the Movement!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Thank you for joining the Comfina community. We'll keep you updated on our journey and give you early
              access to our revolutionary wellness technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Add Another Person
              </Button>
              <Button className="gradient-rose-gold text-white hover:opacity-90">Share with Friends</Button>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 gradient-blush">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">Join the Movement</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Be among the first to experience Comfina's revolutionary approach to women's wellness. Join our exclusive
            waitlist for early access, special pricing, and community updates.
          </p>
        </div>

        {/* Waitlist form */}
        <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground flex items-center">
                  <User className="h-4 w-4 mr-2 text-primary" />
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="border-primary/20 focus:border-primary focus:ring-primary/20"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground flex items-center">
                  <User className="h-4 w-4 mr-2 text-primary" />
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  className="border-primary/20 focus:border-primary focus:ring-primary/20"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="border-primary/20 focus:border-primary focus:ring-primary/20"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium text-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Location (Optional)
              </label>
              <Input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                className="border-primary/20 focus:border-primary focus:ring-primary/20"
                placeholder="City, Country"
              />
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Heart className="h-4 w-4 mr-2 text-primary" />
                What interests you most? (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-300 hover:scale-105 ${
                      formData.interests.includes(interest)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 transition-colors ${
                          formData.interests.includes(interest)
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {formData.interests.includes(interest) && (
                          <div className="w-full h-full rounded-full bg-white scale-50" />
                        )}
                      </div>
                      <span className="text-sm">{interest}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gradient-rose-gold text-white hover:opacity-90 transition-all duration-300 hover:scale-105 px-12 py-4 text-lg font-medium"
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                By joining, you agree to receive updates about Comfina. Unsubscribe anytime.
              </p>
            </div>
          </form>
        </Card>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-rose-gold mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">Early Access</h3>
            <p className="text-sm text-muted-foreground">Be the first to experience Comfina when we launch</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-rose-gold mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">Special Pricing</h3>
            <p className="text-sm text-muted-foreground">Exclusive discounts for our early supporters</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-rose-gold mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">Join a supportive community of empowered women</p>
          </div>
        </div>
      </div>
    </section>
  )
}
