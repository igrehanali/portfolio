import HeroSection from '..//components/components-hero-section'
import AboutSection from '@/components/components-about-section'
import PortfolioSection from '@/components/components-portfolio-section'
import SkillsSection from '@/components/components-skills-section'
import ContactForm from '@/components/components-contact-form'
import FooterComponent from '@/components/components-footer'
import NavbarComponent from '@/components/components-navbar'

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <AboutSection />
      {/* <PortfolioSection /> */}
      <SkillsSection />
      <ContactForm />
      <FooterComponent />
    </>
  );
}
