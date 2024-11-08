import { useLanguage } from "../../context/LanguageContext";

function Language() {
  const { selectedLang, setSelectedLang } = useLanguage();
  return (
    <div className="flex p-2 items-center">
      {selectedLang === "en" ? (
        <button
          onClick={() => setSelectedLang("tr")}
          className="text-xs dark:text-white"
        >
          <span className="font-semibold text-[#CBF281] hover:underline">
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
          <span className="font-semibold text-[#CBF281] hover:underline">
            {" "}
            ENGLISH
          </span>
        </button>
      )}
    </div>
  );
}

export default Language;
