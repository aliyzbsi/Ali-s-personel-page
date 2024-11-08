import Footer from "../components/firstDesign/Footer";
import Header from "../components/firstDesign/Header";
import HeroSection from "../components/firstDesign/HeroSection";
import ProfileSection from "../components/firstDesign/ProfileSection";
import ProjectsSection from "../components/firstDesign/ProjectsSection";
import SkillsSection from "../components/firstDesign/SkillsSection";

function FirstDesign() {
  return (
    <div translate="no" className="flex flex-col">
      <Header />
      <div className="flex flex-col ">
        <HeroSection />
        <SkillsSection />
        <ProfileSection />
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}

export default FirstDesign;
