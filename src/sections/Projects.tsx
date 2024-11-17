import cover from "@/assets/images/Cover.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/project3.png";
import aiStartupLandingPage from "@/assets/images/project1.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "ASTUTE technologies",
    year: "2024",
    title: "Storage and File Sharing Platform",
    results: [
      { title: "Streamlined file management process" },
      { title: "Improved user engagement with intuitive UI" },
      { title: "Enhanced file sharing and collaboration by 30%" },
    ],
    link: "https://storage-management-solution.vercel.app/",
    image: cover,
  },
  {
    company: "Semester Project",
    year: "2023",
    title: "Recipes Sharing App",
    results: [
      { title: "Built a Full-Stack Recipe Sharing Platform" },
      { title: "Responsive Recipe App with Dynamic Features" },
      { title: "Enhanced UX for Recipe Sharing Platform" },
    ],
    link: "https://recipe-rehan.netlify.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Practice",
    year: "2023",
    title: "Django Clone",
    results: [
      {
        title:
          "Streamlined frontend-backend communication for optimal performance",
      },
      { title: "Improved page load speed by 50%, enhancing user satisfaction" },
      {
        title:
          "Achieved a 35% increase in mobile traffic through responsive design",
      },
    ],
    link: "https://dijango.netlify.app/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow=" Real-world Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experiences."
        />

        <div className=" flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className=" bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:outline after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div
                className=" absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className=" lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" bg-gradient-to-r from-neutral-300 to-sky-400 inline-flex  gap-2 font-bold uppercase tracking-wide text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className=" font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className=" flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-4 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="blank">
                    <button className=" bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRight />
                    </button>
                  </a>
                </div>
                <div className=" relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
