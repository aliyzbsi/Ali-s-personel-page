import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useScroll } from "../../context/ScrollContext";
import trData from "../../locales/tr.json";
import enData from "../../locales/en.json";
function Skills() {
  const { sectionsRef } = useScroll();
  const { t, selectedLang } = useLanguage();
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    setSkill(selectedLang === "tr" ? trData.skills : enData.skills);
  }, [selectedLang]);

  return (
    <section
      ref={(el) => (sectionsRef.current["skills"] = el)}
      className="px-8 md:px-20 py-4"
    >
      <div className="flex flex-col gap-4  border-b border-[#BAB2E7] py-8 border-t">
        <h2 className="dark:text-[#BAB2E7] text-[#1F2937] text-[32px]">
          {t("skillsTitle")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {skill
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((skill) => (
              <div key={skill.id} className="">
                <div className="flex flex-col gap-4 p-2">
                  <p className="dark:text-[#BAB2E7] text-[#4338CA] font-semibold text-lg">
                    {skill.name}
                  </p>
                  <p className="text-[#777777]">{skill.skillDesc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
