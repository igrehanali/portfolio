"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import Mapimage from "@/assets/images/map.png";
import SMileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxIcon from "@/components/ToolBoxIcon";
import { motion } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  {
    title: "Art",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🗻",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className=" container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into My Journey"
          description="Discover more about my background, passions, and what drives me forward."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid md:grid-cols-5 gap-8 grid-cols-1 lg:grid-cols-3">
            <div className=" md:col-span-2 lg:col-span-1">
              <Card className="h-[320px] ">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shipping my prespective"
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book cover" />
                </div>
              </Card>
            </div>
            <div className=" md:col-span-3 lg:col-span-2">
              <Card className="h-[320px]">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies & tools i use to craft exceptional
                digital experiences"
                />

                <ToolBoxIcon className="animate-move-left [animation-duration:30s] " />
                <ToolBoxIcon
                  itemWrapperClassName=" -translate-x-1/2"
                  className="animate-move-right [animation-duration:10s]"
                />
              </Card>
            </div>
          </div>
          <div className=" grid gap-8 md:grid-cols-5 grid-cols-1 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-2">
              <Card className="h-[320px] p-0 flex flex-col relative ">
                <CardHeader
                  title="Beyond the Code"
                  className="px-6 py-6"
                  description="Explore my interests and hobbies beyond the Code"
                />
                <div className="flex-1 relative" ref={constrainRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.emoji}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        top: hobby.top,
                        left: hobby.left,
                      }}
                      drag
                      dragConstraints={constrainRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="md:col-span-3 lg:col-span-1">
              <Card className="h-[320px] p-0 relative ">
                <Image
                  src={Mapimage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className=" absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1s]"></div>
                  <div className=" absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={SMileMemoji}
                    alt="SMileMemoji"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
