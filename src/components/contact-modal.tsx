"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Mail, Instagram, Linkedin, Send, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/923108917778?text=Hello%20from%20your%20portfolio!",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/webwithrehan",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-rehan-ali-541277263/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:webwithrehan@gmail.com", // Replace with your actual email
  },
];

export function ContactModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-30 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl w-max">
          <span>👋</span>
          <span className="font-semibold">Let&apos;s connect</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md px-10 py-12 bg-gray-900 border-gray-800 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-white mb-4">
            Connect with Me!
          </DialogTitle>
          <p className="text-center text-gray-400 mb-8">
            Reach out through any of these platforms
          </p>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-4 rounded-lg bg-gray-800 hover:bg-gradient-to-r from-emerald-300 to-sky-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <link.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>
        {/* <Button
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:text-white transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button> */}
      </DialogContent>
    </Dialog>
  );
}
