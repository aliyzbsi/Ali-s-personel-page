import { FaLinkedin } from "react-icons/fa";
import heroImage from "../../../public/assets/yeniResimler/myPhoto1.jpg";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { FaFileDownload } from "react-icons/fa";
import cvtr from "../../../public/Aliyzbsiresumetr.pdf";
import cven from "../../../public/Aliyzbsiresumeen.pdf";
function HeroSection() {
  const { t, selectedLang } = useLanguage();
  const { darkMode } = useTheme();
  return (
    <section
      className="p-8 md:p-16 pt-32 flex  min-h-screen "
      style={
        darkMode
          ? {
              background: "rgb(23,16,67)",
              backgroundImage:
                "linear-gradient(90deg, rgba(23,16,67,1) 67%, rgba(26,33,11,1) 67%)",
            }
          : {
              background: "rgb(71,49,211)",
              backgroundImage:
                "linear-gradient(90deg, rgba(71,49,211,1) 67%, rgba(203,242,129,1) 67%)",
            }
      }
    >
      <div className="flex flex-col  w-full text-white gap-8 md:px-20">
        <p className="font-[700] text-[32px] text-[#CBF281]">Ali Yüzbaşı</p>
        <div className="flex h-full items-center text-start  xl:flex-row flex-col">
          <div className="w-full xl:w-3/5  py-4  flex flex-col  ">
            <p className="text-[44px] w-3/4 font-[700] text-[#CBF281]">
              {t("secondHeaderAboutMe")}
            </p>
            <p className="mt-4 text-[20px] font-[400]">
              {t("secondHeaderText")}
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <a
                href="https://github.com/aliyzbsi"
                className="bg-white flex items-center gap-2 text-black py-3 px-4 rounded hover:bg-black hover:text-white"
              >
                <FaGithub size={25} /> Github
              </a>
              <a
                href="https://www.linkedin.com/in/aliyuzbasi/"
                className="bg-white flex items-center gap-2 text-black py-3 px-4 rounded hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={25} /> Linkedin
              </a>

              <a
                href={selectedLang === "tr" ? cvtr : cven}
                className="bg-white flex items-center gap-2 text-black py-3 px-4 rounded hover:bg-green-600 hover:text-white"
                download
              >
                <FaFileDownload />
                {t("cv")}
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 px-4  flex items-start justify-center md:justify-start">
            <img
              src={heroImage}
              alt="Developer"
              className="rounded-lg shadow-xl w-full max-w-[300px] min-w-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
