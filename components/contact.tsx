"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">Have a project in mind? We'd love to discuss how we can help.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-primary transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Send Message
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-accent" />
                <h3 className="font-medium text-foreground">Email</h3>
              </div>
              <a
                href="mailto:hello@burgessconsulting.org"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@burgessconsulting.org
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Linkedin className="w-5 h-5 text-accent" />
                <h3 className="font-medium text-foreground">LinkedIn</h3>
              </div>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Connect with us
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Github className="w-5 h-5 text-accent" />
                <h3 className="font-medium text-foreground">GitHub</h3>
              </div>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                View our code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
