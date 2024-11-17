"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    question: "What is your process for starting a new project?",
    answer:
      "I begin by discussing the project requirements in detail with the client to ensure we're aligned on the goals. After gathering all the information, I create a project plan, including timelines, deliverables, and design drafts if applicable. Once approved, I start the development phase.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline depends on the project’s scope and complexity. A standard website or application project typically takes 2-4 weeks. However, larger or more complex projects may take longer. I’ll provide a detailed timeline after assessing your specific needs.",
  },
  {
    question: "What information do you need from me to start?",
    answer:
      "To begin, I'll need details about your project goals, target audience, specific features or functionalities, branding guidelines, and any design preferences you may have. The more information you can provide, the better I can tailor the project to your vision.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I offer flexible pricing based on the project’s complexity and requirements. I can provide an hourly rate for ongoing work or a fixed price for specific projects. We’ll discuss and agree on pricing upfront so there are no surprises.",
  },
  {
    question: "How will we communicate during the project?",
    answer:
      "I keep communication clear and consistent. I typically provide regular updates via email or project management tools like Trello or Slack. We can also schedule video calls as needed to review progress and address any questions.",
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer:
      "Yes, I offer support and maintenance services if you need them after the project is completed. This can include fixing bugs, updating content, or adding new features as your business grows.",
  },
  {
    question: "What platforms and tools do you use for development?",
    answer:
      "I specialize in front-end development using React, Next.js, and Tailwind CSS, among other modern tools. For backend and database needs, I often use Firebase, Node.js, or similar platforms, depending on the project’s requirements.",
  },
  {
    question: "Can you help with design, or do you work with designers?",
    answer:
      "I’m comfortable working with existing designs and collaborating with designers. If you need design help, I can work with your team or refer talented designers. I also handle basic design elements if you have a smaller project or just need minor tweaks.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer:
      "I welcome feedback throughout the project. I typically allow a set number of revisions at each stage (like wireframing, design, and final build) to ensure the project meets your expectations. Additional revisions can be discussed as needed.",
  },
  {
    question: "What if I want to make changes after the project has started?",
    answer:
      "I understand that project goals can evolve. Minor changes can be integrated easily, but larger changes may impact the timeline and cost. I’ll discuss any adjustments with you before proceeding to make sure we stay aligned on scope and budget.",
  },
];

export function DarkThemeFaq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const closeAll = () => setOpenItems([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 p-6 sm:p-10 -z-10">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Everything You Need to Know"
          description="Curious about how we can work together? Find answers to the most common questions below!"
        />
        <div className="space-y-4 lg:mt-8 mt-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-900 overflow-hidden shadow-lg"
              initial={false}
              animate={{
                backgroundColor: openItems.includes(index)
                  ? "#1F2937"
                  : "#1F2937",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                onClick={() => toggleItem(index)}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg font-semibold pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openItems.includes(index) ? (
                    <X className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence initial={false}>
                {openItems.includes(index) && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="p-4 pt-0 text-gray-300">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
