"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen pt-32 md:pt-40 flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-block mb-6 md:mb-8">
            <div className="px-4 py-2 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-sm">
              <p className="text-xs md:text-sm font-medium text-accent">✦ Advanced Security & AI Solutions</p>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 md:mb-8 text-balance text-foreground">
            Enterprise Security
            <br />
            <span className="text-accent">Engineered for Innovation</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Cybersecurity, AI, and quantum computing solutions designed for enterprises that demand precision and
            foresight.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 md:py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-primary transition-all duration-200 group flex items-center gap-2">
              Learn More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 md:py-4 border border-foreground/20 text-foreground rounded-lg font-medium hover:border-foreground/40 transition-all duration-200">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <svg
            className="w-5 h-5 text-muted-foreground opacity-60 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
