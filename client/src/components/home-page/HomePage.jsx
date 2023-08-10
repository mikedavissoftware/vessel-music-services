import HeroSection from "./sections/HeroSection"
import AboutVesselSection from "./sections/AboutVesselSection"
import OurTeamSection from "./sections/OurTeamSection"
import SkillsSection from "./sections/skills/SkillsSection"
import ProjectsSection from "./sections/projects/ProjectsSection"
import ContactSection from "./sections/ContactSection"


export default function HomePage() {



  return (
    <div className="home-page">
      <HeroSection />
      <AboutVesselSection />
      <OurTeamSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}