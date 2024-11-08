import HeroSection from "../components/secondDesign/HeroSection";
import Header from "../components/secondDesign/Header";
import Skills from "../components/secondDesign/Skills";
import Profile from "../components/secondDesign/Profile";
import Projects from "../components/secondDesign/Projects";
import SecondFooter from "../components/secondDesign/SecondFooter";

function SecondDesign() {
  return (
    <div translate="no" className="flex flex-col ">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <SecondFooter />
    </div>
  );
}

export default SecondDesign;
