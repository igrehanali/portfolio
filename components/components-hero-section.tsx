'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function HeroSectionComponent() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing option
      once: true, // Only animate once
    })
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 hero-gradient">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-bold dark:text-white text-gray-800 mb-4 drop-shadow-lg"
        >
          Muhammad Rehan Ali
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl md:text-4xl font-semibold dark:text-gray-200 text-gray-700 mb-6 drop-shadow-md"
        >
          Full Stack Developer
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xl dark:text-gray-300 text-gray-800 mb-8 max-w-2xl mx-auto drop-shadow-md"
        >
          Crafting modern web experiences with clean code and great design.
        </p>

        {/* CTA Button */}
        <a
          href="/Resume.pdf" download="Muhammad_Rehan_Resume.pdf"
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
        >
          Download CV
        </a>

      </div>
    </section>
  )
}

export default HeroSectionComponent  
