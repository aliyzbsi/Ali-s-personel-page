import Footer from "../components/thirdDesign/Footer";
import Header from "../components/thirdDesign/Header";
import HeroSection from "../components/thirdDesign/HeroSection";
import Profile from "../components/thirdDesign/Profile";
import Projects from "../components/thirdDesign/Projects";

import Skills from "../components/thirdDesign/Skills";

function ThirdDesign() {
  return (
    <div translate="no" className="flex flex-col dark:bg-[#252128]">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default ThirdDesign;
