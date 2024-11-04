import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Header() {
  const { selectedLang, setSelectedLang } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("selectedLang", selectedLang);
  }, [selectedLang]);

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLang");
    if (storedLang) {
      setSelectedLang(storedLang);
    }
  }, [setSelectedLang]);

  return (
    <header className="flex fixed justify-end items-center bg-gray-50 dark:bg-neutral-900 z-20 p-12 gap-4 w-full ">
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            data-testid="darkMode-toggle"
            onChange={toggleTheme}
            checked={darkMode}
          />
          <div className="w-11 h-6 bg-red-700 rounded-full peer peer-focus:ring-4 border peer-checked:bg-black">
            <div
              className={`absolute top-1 left-1 transition-transform duration-200 ease-in-out ${
                !darkMode ? "translate-x-5" : ""
              }`}
            >
              {!darkMode ? (
                <CiLight color="orange" />
              ) : (
                <MdDarkMode color="yellow" />
              )}
            </div>
          </div>
          <span className="ml-3 font-medium text-sm text-gray-900 dark:text-gray-300">
            {!darkMode ? "LIGHT MODE" : "DARK MODE"}
          </span>
        </label>
      </div>

      <div className="flex items-center">
        <span className="hidden md:block mx-2">|</span>
        {selectedLang === "en" ? (
          <button
            onClick={() => setSelectedLang("tr")}
            className="text-sm dark:text-white"
          >
            <span className="font-semibold text-red-500 hover:underline">
              TÜRKÇE
            </span>
            'YE GEÇ
          </button>
        ) : (
          <button
            onClick={() => setSelectedLang("en")}
            className="text-sm dark:text-white"
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
