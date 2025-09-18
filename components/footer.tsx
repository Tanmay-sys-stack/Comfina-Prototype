"use client"

import Link from "next/link"
import { Instagram, Youtube, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full gradient-rose-gold flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Comfina</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Revolutionizing women's wellness through elegant design and smart technology. Relief. Anytime. Anywhere.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/comfina.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@Comfina"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/comfina.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="http://tiktok.com/@comfina"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Comfina
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-background/80 hover:text-background transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#links" className="text-background/80 hover:text-background transition-colors">
                  Connect
                </Link>
              </li>
              <li>
                <Link href="#waitlist" className="text-background/80 hover:text-background transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-background/80">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:comfina.in@gmail.com" className="hover:text-background transition-colors">
                  comfina.in@gmail.com
                </a>
              </li>
              <li className="flex items-center text-background/80">
                <MapPin className="h-4 w-4 mr-3" />
                <span>India</span>
              </li>
              <li className="flex items-center text-background/80">
                <Phone className="h-4 w-4 mr-3" />
                <span>+91 96509 48090</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-background/20 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-serif text-xl font-medium mb-4">Stay Updated</h3>
            <p className="text-background/80 mb-6">Get the latest updates on our journey and product development.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="gradient-rose-gold text-white hover:opacity-90">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2025 Comfina. All rights reserved. Built with care for women's wellness.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link href="/press" className="text-background/60 hover:text-background transition-colors">
              Press Kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
