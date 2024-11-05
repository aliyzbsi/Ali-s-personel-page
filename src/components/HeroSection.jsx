import { useLanguage } from "../context/LanguageContext";
import myPhoto from "../../public/assets/myPhoto3.jpg";
import iconHi from "../../public/assets/icon.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="p-8 md:p-16 pt-32 bg-gray-50 flex dark:bg-neutral-900 min-h-screen">
      <article className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-8 md:gap-16">
        <div className="flex flex-col items-start gap-8 w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4 md:w-3/4">
            <h1
              translate="no"
              className="flex gap-2 items-center text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100"
            >
              {t("entry")} <img src={iconHi} width={30} alt="entryIcon" />
            </h1>
            <p
              translate="no"
              className="text-2xl md:text-xl text-gray-700 dark:text-gray-300"
            >
              {t("headerAboutMe")}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:w-3/4 py-4">
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/aliyuzbasi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <FaLinkedinIn size={40} aria-label="LinkedIn profile" />
              </a>
              <a
                href="https://github.com/aliyzbsi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                <FaGithub size={40} aria-label="Github profile" />
              </a>
            </div>
            <p translate="no" className="text-gray-600  dark:text-gray-400">
              {t("headerText")}

              <a
                translate="no"
                href={`mailto:${t("email")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 underline flex items-center justify-center md:justify-start gap-2"
              >
                {t("email")} <SiMinutemailer />
              </a>
            </p>
          </div>
        </div>

        <div className="relative flex items-center mt-8 justify-center w-3/4 md:w-1/3 lg:w-1/4">
          <div className="absolute inset-0 bg-zinc-100 -translate-y-7 -translate-x-7  dark:bg-neutral-800 dark:shadow-[0_0_50px_white] rounded-full shadow-[0_0_100px_black] z-0 transition-transform duration-300"></div>

          <img
            src={myPhoto}
            className="rounded-full border-4 border-gray-300 dark:border-gray-400 shadow-lg  dark:shadow-[0_0_5px_white] relative z-10 "
            alt="My Profile"
          />
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
