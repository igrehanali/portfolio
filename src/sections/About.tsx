import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import Mapimage from "@/assets/images/map.png";
import SMileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxIcon from "@/components/ToolBoxIcon";

const hobbies = [
  {
    title: "Art",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🗻",
  },
  {
    title: "Music",
    emoji: "🎶",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className=" container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into My Journey"
          description="Discover more about my background, passions, and what drives me forward."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="   Explore the books shipping my prespective"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description=" Explore the technologies & tools i use to craft exceptional
                digital experiences"
              className="px-6 pt-6"
            />
            <ToolBoxIcon className="mt-6" />
            <ToolBoxIcon className="mt-6" />
          </Card>
          <Card>
            <div className="">
              <CardHeader
                title="Beyond the Code"
                description="Explore my intrests and hobbies beyond the Code"
              />
              <div>
                {hobbies.map((hobby) => (
                  <div key={hobby.emoji}>
                    <span>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <Image src={Mapimage} alt="map" />
            <Image src={SMileMemoji} alt="SMileMemoji" />
          </Card>
        </div>
      </div>{" "}
    </div>
  );
};
