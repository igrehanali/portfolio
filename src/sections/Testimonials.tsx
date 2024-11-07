import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import greenImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "James Wu",
    position: "Product Owner @ ShipEasy",
    text: "Rehan's skills in Next.js and Tailwind CSS helped elevate our platform to a new level of user experience. His ability to translate our ideas into a seamless interface has made a significant impact on user engagement.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sarah Ali",
    position: "CTO @ Astute Solutions",
    text: "Rehan was instrumental in developing the core of our POS project. His proficiency in React and attention to responsive design helped us deliver a powerful and user-friendly tool for our clients.",
    avatar: memojiAvatar2,
  },
  {
    name: "Laura Kim",
    position: "Head of Marketing @ GoGlobal",
    text: "Working with Rehan was a game changer. His frontend expertise brought our brand vision to life on the website, resulting in a sharp, high-performance site that has already increased our lead conversions.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ahmed Khan",
    position: "CEO @ InnovateLab",
    text: "Rehan's knowledge of Firebase and Next.js made it easy to integrate complex features on our site. His proactive approach and problem-solving skills helped us create a scalable and reliable platform.",
    avatar: memojiAvatar4,
  },
  {
    name: "Emily Reyes",
    position: "Design Lead @ GreenWave",
    text: "Rehan is an exceptional developer! His ability to bring our designs to life with precision and style is amazing. Our users love the responsiveness and feel of the new site thanks to his efforts.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description=" Don’t just take my word for it—hear directly from my clients about their
        experiences working with me"
        />

        <div className="flex mt-12 lg:mt-20 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 flex flex-col justify-between hover:-rotate-3 transition duration-300"
                  >
                    <div
                      className="bg-gray-800 rounded-3xl p-6 relative z-0 h-full"
                      key={testimonial.name}
                      style={{ minHeight: "300px" }} // Ensures consistent height for all cards
                    >
                      <div
                        className="absolute inset-0 opacity-5 z-10"
                        style={{
                          backgroundImage: `url(${greenImage.src})`,
                        }}
                      ></div>
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt="user image"
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm md:text-base md:mt-6">
                        {testimonial.text}
                      </p>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
