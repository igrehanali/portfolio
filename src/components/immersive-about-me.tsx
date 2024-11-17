"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import SectionHeader from "./SectionHeader";
import { random } from "maath";
import { ContactModalComponent } from "./contact-modal";

const ParticleField = ({ count = 5000 }) => {
  const points = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count * 3), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    points.current.rotation.x -= delta / 10;
    points.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={4} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ParticleField />
    </Canvas>
  );
};

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    x.set(distanceX / 2);
    y.set(distanceY / 2);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      className="px-6 py-3  bg-gradient-to-r rounded-full text-lg font-semibold from-emerald-300 to-sky-400 text-gray-900"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const skills = [
  { name: "JavaScript", level: "Expert" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Firebase", level: "Intermediate" },
];

const experiences = [
  {
    year: "2023 - Present",
    role: "React Developer",
    company: "Astute Tech",
    description:
      "Building modern web applications with React and Next.js, focusing on performance and user experience.",
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer Intern",
    company: "CodeSpark",
    description:
      "Developed interactive web components using React and Tailwind CSS, gaining hands-on experience in web development.",
  },
];

export function ImmersiveAboutMe() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden container">
      <div className="fixed inset-0">
        <Scene />
      </div>
      <div className="relative z-10">
        <SectionHeader
          eyebrow="About Me"
          title="Who I Am"
          description="A passionate web developer turning ideas into impactful digital solutions. Explore my journey, skills, and projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto lg:mt-24 sm:mt-10 mt-6">
          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                >
                  <h3 className="text-xl font-bold">{experience.role}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {experience.company} • {experience.year}
                  </p>
                  <p className="text-gray-300">{experience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* <footer className="text-center py-10">
          <MagneticButton>
            Let&apos;s Create Something Extraordinary
          </MagneticButton>
        </footer> */}
        <div className=" text-center mt-10">
          <ContactModalComponent />
        </div>
      </div>
    </div>
  );
}
