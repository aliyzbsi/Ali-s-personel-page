import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  return (
    <footer className="flex gap-8 items-center justify-center p-20 mt-8">
      <h1 className="font-normal text-5xl text-end w-1/3 p-8">
        {t("footerText")}
      </h1>
      <div className="flex flex-col text-2xl gap-2">
        <a
          className="flex gap-2 items-center w-full border-2 justify-between p-2 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          href="https://github.com/aliyzbsi"
        >
          Github <FaGithub color={darkMode ? "white" : "black"} size={35} />
        </a>
        <a
          className="flex gap-2 items-center w-full border-2 justify-between p-2 dark:hover:bg-white dark:hover:text-black hover:bg-[#0077B5] hover:text-white"
          href="https://www.linkedin.com/in/aliyuzbasi/"
        >
          Linkedin{" "}
          <FaLinkedin color={darkMode ? "white" : "#0077B5"} size={35} />
        </a>
        <a
          className="flex gap-2 items-center w-full border-2 justify-between p-2 dark:hover:bg-white dark:hover:text-black hover:bg-[#E4405F] hover:text-white"
          href="https://www.instagram.com/aliyzbsi/"
        >
          Instagram
          <FaInstagram size={35} color={darkMode ? "white" : "#E4405F"} />
        </a>

        <a
          className="flex gap-2 items-center w-full border-2 justify-between p-2 dark:hover:bg-white dark:hover:text-black hover:bg-[#0078d4] hover:text-white"
          href="mailto:aliyzbsi68@hotmail.com"
        >
          Email{" "}
          <PiMicrosoftOutlookLogoFill
            color={darkMode ? "white" : "#0078d4"}
            size={35}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
