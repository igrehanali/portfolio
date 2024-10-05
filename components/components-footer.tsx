'use client'

import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export function FooterComponent() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 text-gray-800 dark:text-gray-300">
      <div className="container mx-auto px-6">
        {/* Footer top section with links and social media */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">About Me</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a full-stack developer passionate about creating seamless user experiences with clean code and intuitive design.
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

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  My Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Me</h3>

            {/* Email Link */}
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <a
                href="mailto:webwithrehan@gmail.com"
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Email: webwithrehan@gmail.com
              </a>
            </p>

            {/* Phone Link */}
            <p className="text-gray-600 dark:text-gray-400">
              <a
                href="tel:+923108917778"
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Phone: +92 3108917778
              </a>
            </p>
          </div>

        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rehan All rights reserved.
          </p>
          <p className="mt-2">
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300">
              Back to Top
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
