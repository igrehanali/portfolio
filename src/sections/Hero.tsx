import emojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

const orbits = [
  {
    size: 430,
    rotation: -14,
    orbitDuration: "30s",
    spinDuration: "3s",
    icon: <SparkleIcon className="size-8 text-emerald-300/20" />,
  },
  {
    size: 440,
    rotation: 79,
    orbitDuration: "32s",
    spinDuration: "3s",
    icon: <SparkleIcon className="size-5 text-emerald-300/20" />,
  },
  {
    size: 520,
    rotation: -41,
    orbitDuration: "34s",
    spinDuration: "3s",
    icon: <div className="size-2 bg-emerald-300/20 rounded-full"></div>,
  },
  {
    size: 530,
    rotation: 178,
    orbitDuration: "36s",
    spinDuration: "3s",
    icon: <SparkleIcon className="size-10 text-emerald-300/20" />,
  },
  {
    size: 550,
    rotation: 20,
    orbitDuration: "38s",
    spinDuration: "6s",
    icon: <StarIcon className="size-12 text-emerald-300" />,
  },
  {
    size: 590,
    rotation: 98,
    orbitDuration: "40s",
    spinDuration: "6s",
    icon: <StarIcon className="size-8 text-emerald-300" />,
  },
  {
    size: 650,
    rotation: -5,
    orbitDuration: "42s",
    spinDuration: "3s",
    icon: <div className="size-2 bg-emerald-300/20 rounded-full"></div>,
  },
  {
    size: 710,
    rotation: 144,
    orbitDuration: "44s",
    spinDuration: "3s",
    icon: <SparkleIcon className="size-14 text-emerald-300/20" />,
  },
  {
    size: 720,
    rotation: 144,
    orbitDuration: "46s",
    spinDuration: "3s",
    icon: <div className="size-3 bg-emerald-300/20 rounded-full"></div>,
  },
  {
    size: 800,
    rotation: -72,
    orbitDuration: "48s",
    spinDuration: "6s",
    icon: <StarIcon className="size-28 text-emerald-300" />,
  },
];

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className=" absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {orbits.map(
          ({ size, rotation, orbitDuration, spinDuration, icon }, index) => (
            <HeroOrbit
              key={index}
              size={size}
              rotation={rotation}
              orbitDuration={orbitDuration}
              shouldOrbit
              shouldSpin
              spinDuration={spinDuration}
            >
              {icon}
            </HeroOrbit>
          )
        )}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={emojiImage}
            width={1190}
            height={1180}
            className="w-[100px] h-[100px] "
            alt="user"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full  relative">
              <div className=" bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
          <div className=" max-w-lg mx-auto">
            <h1 className=" font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
              Building Exceptional User Experience
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I am a skilled web developer focused on creating responsive and
              visually appealing digital solutions. I bring ideas to life
              through modern web technologies and engaging user experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className=" inline-flex items-center gap-2  border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className=" font-semibold">Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
