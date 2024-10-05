'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export function AboutSectionComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div
          data-aos="fade-up" // AOS fade-up animation
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/rehan.jpg"
              alt="Your Name"
              width={302310}
              height={30210}
              className="rounded-full shadow-lg border-4 border-white dark:border-gray-800 w-72 h-72 object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user
              experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient code
              and intuitive interfaces.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://github.com/igrehanali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-rehan-ali-541277263/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/igrehanali/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionComponent
