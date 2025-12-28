"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Expertise from "@/components/expertise"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-1 bg-accent z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
