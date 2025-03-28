import { FaLinkedin } from "react-icons/fa";
import heroImage from "../../../public/assets/yeniResimler/myPhoto1.jpg";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { FaFileDownload } from "react-icons/fa";
import cvtr from "../../../public/Aliyzbsiresumetr.pdf";
import cven from "../../../public/Aliyzbsiresumeen.pdf";
import SecondHeader from "./SecondHeader";
function HeroSection() {
  const { t, selectedLang } = useLanguage();

  return (
    <section className="flex flex-col min-h-full pb-10 px-10 md:px-0">
      <SecondHeader />
      <div className="flex flex-col w-full text-white gap-8 md:px-20">
        <p className="font-[400] text-[20px] text-[#3730A3] dark:text-[#BAB2E7]">
          ---------- Ali Yüzbaşı
        </p>
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          <div className="w-full md:w-3/5 flex flex-col justify-between py-4">
            <p className="text-[44px] w-3/4 font-[700] text-[#1F2937] dark:text-[#BAB2E7]">
              {t("thirdDesignEntry")}
            </p>

            <p className="mt-4 text-[20px] text-[#6B7280] dark:text-[#FFFFFF] font-[400]">
              {t("thirdDesignHeaderAboutMe")}
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <a
                href="mailto:aliyzbsi68@hotmail.com"
                className="bg-[#3730A3] text-white border border-[#3730A3] hover:text-[#3730A3] hover:bg-white dark:bg-[#BAB2E7] flex items-center gap-2 dark:text-black py-2 px-8 rounded dark:hover:bg-black dark:hover:text-white"
              >
                Hire me
              </a>
              <a
                href="https://github.com/aliyzbsi"
                className="bg-white dark:bg-[#383838] border dark:text-[#E1E1FF] dark:border-[#E1E1FF] border-[#3730A3] dark:hover:bg-black dark:hover:text-white flex items-center gap-2 text-[#3730A3] py-2 px-8 rounded hover:bg-blue-600 hover:text-white"
              >
                <FaGithub size={25} /> Github
              </a>
              <a
                href="https://www.linkedin.com/in/aliyuzbasi/"
                className="bg-white dark:bg-[#383838] border dark:text-[#E1E1FF] dark:border-[#E1E1FF] border-[#3730A3] dark:hover:bg-black dark:hover:text-white flex items-center gap-2 text-[#3730A3] py-2 px-8 rounded hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={25} /> Linkedin
              </a>

              <a
                href={selectedLang === "tr" ? cvtr : cven}
                className="bg-white dark:bg-[#383838] border dark:text-[#E1E1FF] dark:border-[#E1E1FF] border-[#3730A3] dark:hover:bg-black dark:hover:text-white flex items-center gap-2 text-[#3730A3] py-2 px-8 rounded hover:bg-blue-600 hover:text-white"
                download
              >
                <FaFileDownload />
                {t("cv")}
              </a>
            </div>
          </div>

          <div className="w-full xl:w-2/5 flex  items-center justify-center">
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
