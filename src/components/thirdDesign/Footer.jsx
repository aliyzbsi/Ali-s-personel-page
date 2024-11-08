import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { useLanguage } from "../../context/LanguageContext";
import { SiMinutemailer } from "react-icons/si";
function Footer() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  return (
    <footer className="flex flex-col gap-8 dark:bg-[#141414] items-center  justify-center p-20 ">
      <h1 className="font-normal text-3xl lg:text-start text-black dark:text-[#AEBCCF] text-center   w-full   ">
        {t("footerText")}
      </h1>
      <div className=" w-full flex flex-col gap-4 lg:flex-row items-center justify-between text-[#E1E1FF]">
        <a
          translate="no"
          href={`mailto:${t("email")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="darK:text-[#BAB2E7] text-[#3730A3] underline flex items-center justify-center md:justify-start gap-2"
        >
          <SiMinutemailer /> {t("email")}
        </a>

        <div className="flex flex-col md:flex-row text-lg gap-2">
          <a
            className="flex gap-2 items-center w-full border-2  border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            href="https://github.com/aliyzbsi"
          >
            Github <FaGithub color={darkMode ? "white" : "black"} size={35} />
          </a>
          <a
            className="flex gap-2 items-center w-full border-2 border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
            href="https://www.linkedin.com/in/aliyuzbasi/"
          >
            Linkedin{" "}
            <FaLinkedin color={darkMode ? "white" : "#0077B5"} size={35} />
          </a>
          <a
            className="flex gap-2 items-center w-full border-2 border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-[#E4405F] hover:bg-[#E4405F] hover:text-white"
            href="https://www.instagram.com/aliyzbsi/"
          >
            Instagram
            <FaInstagram size={35} color={darkMode ? "white" : "#E4405F"} />
          </a>

          <a
            className="flex gap-2 items-center w-full border-2 border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-[#0078d4] hover:bg-[#0078d4] hover:text-white"
            href="mailto:aliyzbsi68@hotmail.com"
          >
            Email{" "}
            <PiMicrosoftOutlookLogoFill
              color={darkMode ? "white" : "#0078d4"}
              size={35}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
