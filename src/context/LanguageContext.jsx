import { createContext, useContext, useState } from "react";
import EN_LANG from "../locales/en.json";
import TR_LANG from "../locales/tr.json";
import useLocaleStorage from "../hooks/useLocaleStorage";

const LangContext = createContext();

export const LanguageProviderContext = ({ children }) => {
  const [selectedLang, setSelectedLang] = useLocaleStorage("language", "tr");

  const t = (key) => {
    const translate = selectedLang === "tr" ? TR_LANG : EN_LANG;
    return translate[key] || key;
  };

  return (
    <LangContext.Provider value={{ selectedLang, setSelectedLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LangContext);
};
