import { MdChangeCircle } from "react-icons/md";

import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDesign } from "../../context/DesignContext";

function Header() {
  const { selectedLang, setSelectedLang } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();
  const { randomDesign } = useDesign();

  return (
    <header className="flex fixed justify-end items-center opacity-75 z-20 p-4 gap-2 md:gap-4 w-full ">
      <div className="flex items-center gap-2">
        <button
          className="text-sm flex items-center dark:text-white "
          onClick={randomDesign}
        >
          <MdChangeCircle size={20} color={darkMode ? "white" : "black"} />
          Tasarımı Değiştir
        </button>
        <label className="relative inline-flex items-center  cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            data-testid="darkMode-toggle"
            onChange={toggleTheme}
            checked={darkMode}
          />
          <div className="w-12 h-4 bg-red-600 rounded-full peer peer-focus:ring-4 border peer-checked:bg-black">
            <div
              className={`absolute top-[ 2px]  transition-transform duration-200 ease-in-out ${
                !darkMode ? "translate-x-5 left-3" : ""
              }`}
            >
              {!darkMode ? (
                <CiLight color="yellow" size={15} />
              ) : (
                <MdDarkMode color="yellow" size={15} />
              )}
            </div>
          </div>
          <span className="ml-3 font-medium text-xs text-gray-900 dark:text-gray-300">
            {!darkMode ? "LIGHT MODE" : "DARK MODE"}
          </span>
        </label>
      </div>
      <span className="dark:text-white mx-2">|</span>
      <div className="flex items-center  ">
        {selectedLang === "en" ? (
          <button
            onClick={() => setSelectedLang("tr")}
            className="text-xs dark:text-white"
          >
            <span className="font-semibold text-red-500 hover:underline">
              TÜRKÇE
            </span>
            'YE GEÇ
          </button>
        ) : (
          <button
            onClick={() => setSelectedLang("en")}
            className="text-xs dark:text-white"
          >
            SWITCH TO
            <span className="font-semibold text-red-500 hover:underline">
              {" "}
              ENGLISH
            </span>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
