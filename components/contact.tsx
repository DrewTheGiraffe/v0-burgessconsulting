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
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Security Needs</h2>
          <p className="text-muted-foreground text-lg">
            Ready to elevate your enterprise security posture? Our team is ready to help.
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
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
                className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 group"
          >
            Send Message
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:hello@burgessconsulting.org"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              hello@burgessconsulting.org
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Linkedin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Connect with us
            </a>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Github className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              View our code
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
