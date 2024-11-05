import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import { useTheme } from "../context/ThemeContext";

function Main() {
  return (
    <div translate="no" className="flex flex-col">
      <Helmet>
        <title>Ali Yüzbaşı | Software Engineer</title>

        <meta
          name="description"
          content="Ali Yüzbaşı'nın yazılım geliştirme becerilerini, projelerini ve profesyonel profilini keşfedin."
        />
      </Helmet>
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

export default Main;
