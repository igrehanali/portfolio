import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import greenImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className=" container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Cleints Say about Me"
          description=" Don’t just take my word for it—hear directly from my clients about their
        experiences working with me"
        />

        <div className="flex  mt-16 lg:mt-20 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className=" flex flex-none gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:p-8 md:max-w-md p-6"
              >
                <div
                  className="bg-gray-800 rounded-3xl p-6 relative z-0"
                  key={testimonial.name}
                >
                  <div
                    className=" absolute inset-0 opacity-5 z-10"
                    style={{
                      backgroundImage: `url(${greenImage.src})`,
                    }}
                  ></div>
                  <div className=" flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt="user image"
                        className="max-h-full"
                      />
                    </div>
                    <div className="">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className=" text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className=" mt-4 text-sm md:text-base md:mt-6">
                    {testimonial.text}
                  </p>
                </div>
              </Card>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
