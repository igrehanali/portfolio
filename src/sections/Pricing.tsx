"use client";
import SectionHeader from "@/components/SectionHeader";
import Aos from "aos";
import "aos/dist/aos.css";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Card from "@/components/Card";

const List = [
  "1 Basic Landing Page Design",
  "(4-5 sections) or 1 Mobile Screen",
  "Simple Color Scheme and Font Selection",
  "Initial User Flow Analysis",
  "Basic Design Components",
  "Mobile Responsiveness Setup",
  "1 Revision",
];

const BetterList = [
  "High-Fidelity Landing Page Design",
  "1-2 Additional Pages (About, Contact, etc.)",
  "(4-6 sections) or 1 Custom Mobile Screen",
  "Customized Color Scheme and Font Selection",
  "Detailed User Flow Analysis",
  "Comprehensive Design System",
  "Mobile and Desktop Responsiveness Optimization",
  "Interactive Prototype",
  "Up to 2 Revisions",
  "Final Design Files (with annotations)",
  "GitHub Repository Setup with Version Control",
  "Free Domain and Hosting for 1 Year",
];

const BestList = [
  "Premium Multi-Page Website Design",
  "3-5 Additional Pages (Services, Blog, Testimonials, etc.)",
  "(Up to 8 sections per page) or Custom Mobile Screens",
  "Advanced Color and Typography Selection",
  "In-depth User Flow Analysis and User Research",
  "Custom Design System with Component Library",
  "Fully Optimized Mobile and Desktop Responsiveness",
  "Interactive Prototype with Advanced Animations",
  "Unlimited Revisions",
  "Final Design Files (with detailed documentation)",
  "Post-launch Support and Maintenance (30 days)",
  "GitHub Repository Setup with Version Control",
  "Free Domain and Hosting for 1 Year",
  "Basic SEO Setup for Improved Search Visibility",
  "Analytics Integration (Google Analytics or similar)",
  "Contact Form with Email Notifications",
];

const anton = Anton({ subsets: ["latin"], weight: "400" });

const Pricing = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
      className="bg-gray-900 text-gray-200 mb-10 relative lg:mt-32 md:mt-16 mt-16 mx-auto max-w-[1350px]"
      id="pricing"
    >
      <SectionHeader
        eyebrow="Choose Your Plan"
        title="Flexible Pricing for Every Need"
        description="Find the perfect plan that suits your project’s requirements. Whether you're starting small or going big, I've got you covered."
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[90%] w-[95%] md:mt-20 mt-16 mx-auto gap-8">
        {/* Card Component for each plan */}
        <Card
          className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          data-aos="fade-up"
        >
          <div className="p-6">
            <h2
              className={`text-3xl font-extrabold ${anton.className} text-purple-400 mb-6`}
            >
              Basic
            </h2>
            <p className="text-sm mb-4">BASIC UI/UX Design</p>
            <h3
              className={`text-4xl lg:text-5xl font-extrabold ${anton.className} text-white mb-6`}
            >
              $200
            </h3>
            <button className="bg-purple-500 text-xs sm:text-sm py-4 rounded-full mt-4 w-full text-white hover:bg-purple-400 transition-colors uppercase">
              Get STARTED
            </button>
            <Link
              href="#"
              className="underline cursor-pointer mt-4 w-full text-center flex justify-center text-gray-400 hover:text-purple-300 transition-colors"
            >
              Book a call
            </Link>
          </div>
          <hr className="bg-gray-700 h-[2px] w-full mt-4" />
          <h6 className="text-lg font-semibold mt-6">What&apos;s included:</h6>
          <ul className="list-disc list-inside text-sm mt-4">
            {List.map((item, index) => (
              <li key={index} className="my-2">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Other Cards: Repeat for Standard and Premium with modifications */}
        {/* Example for Standard */}
        <Card
          className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          data-aos="fade-up"
        >
          <div className="p-6">
            <h2
              className={`text-3xl font-extrabold ${anton.className} text-blue-400 mb-6`}
            >
              Standard
            </h2>
            <p className="text-sm mb-4">STANDARD UI/UX Design</p>
            <h3
              className={`text-4xl lg:text-5xl font-extrabold ${anton.className} text-white mb-6`}
            >
              $600
            </h3>
            <button className="bg-blue-500 text-xs sm:text-sm py-4 rounded-full mt-4 w-full text-white hover:bg-blue-400 transition-colors uppercase">
              Get STARTED
            </button>
            <Link
              href="#"
              className="underline cursor-pointer mt-4 w-full text-center flex justify-center text-gray-400 hover:text-blue-300 transition-colors"
            >
              Book a call
            </Link>
          </div>
          <hr className="bg-gray-700 h-[2px] w-full mt-4" />
          <h6 className="text-lg font-semibold mt-6">What&apos;s included:</h6>
          <ul className="list-disc list-inside text-sm mt-4">
            {BetterList.map((item, index) => (
              <li key={index} className="my-2">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Example for Premium */}
        <Card
          className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          data-aos="fade-up"
        >
          <div className="p-6">
            <h2
              className={`text-3xl font-extrabold ${anton.className} text-green-400 mb-6`}
            >
              Premium
            </h2>
            <p className="text-sm mb-4">PREMIUM UI/UX Design</p>
            <h3
              className={`text-4xl lg:text-5xl font-extrabold ${anton.className} text-white mb-6`}
            >
              $1000
            </h3>
            <button className="bg-green-500 text-xs sm:text-sm py-4 rounded-full mt-4 w-full text-white hover:bg-green-400 transition-colors uppercase">
              Get STARTED
            </button>
            <Link
              href="#"
              className="underline cursor-pointer mt-4 w-full text-center flex justify-center text-gray-400 hover:text-green-300 transition-colors"
            >
              Book a call
            </Link>
          </div>
          <hr className="bg-gray-700 h-[2px] w-full mt-4" />
          <h6 className="text-lg font-semibold mt-6">What&apos;s included:</h6>
          <ul className="list-disc list-inside text-sm mt-4">
            {BestList.map((item, index) => (
              <li key={index} className="my-2">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div
        className="bg-gray-800 p-6 mt-8 text-gray-400 rounded-lg shadow-lg mx-auto max-w-2xl"
        data-aos="fade-up"
      >
        <p>
          Please keep in mind that these prices are estimates and may vary
          depending on the specific requirements and complexity of each project.
          It&apos;s crucial to discuss details with the client to provide a
          tailored proposal.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
