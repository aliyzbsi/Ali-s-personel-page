import { useLanguage } from "../../context/LanguageContext";

import trData from "../../locales/tr.json";
import enData from "../../locales/en.json";
import { useEffect, useState } from "react";
function SkillsSection() {
  const { t, selectedLang } = useLanguage();

  const [skills, setSkill] = useState([]);

  useEffect(() => {
    setSkill(selectedLang === "tr" ? trData.skills : enData.skills);
  }, [selectedLang]);

  return (
    <section className="dark:bg-neutral-900 dark:text-white py-8">
      <h1
        translate="no"
        className="font-semibold text-2xl text-center p-4 border-t"
      >
        {t("skillsTitle")}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 p-12 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform transform scale-95 hover:scale-105"
          >
            <div className="flex flex-col items-center gap-2 font-semibold">
              <img
                src={skill.img}
                loading="lazy"
                className="w-12 h-12"
                alt={`${skill.name} logo`}
              />
              <p className="text-sm">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
