import { DarkThemeFaq } from "@/components/dark-theme-faq";
import { ImmersiveAboutMe } from "@/components/immersive-about-me";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ImmersiveAboutMe />
      {/* <AboutSection /> */}
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <Pricing />
      <DarkThemeFaq />
      <ContactSection />
      <Footer />
    </div>
  );
}
