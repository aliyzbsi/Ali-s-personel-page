import { useLanguage } from "../context/LanguageContext";
import { skills } from "../data/skills";

function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="dark:bg-[#353435]  p-28  ">
      <h1
        translate="no"
        className="font-bold text-2xl text-center p-4 border-b "
      >
        {t("skillsTitle")}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-center p-8">
            <div className="flex flex-col items-center gap-2 font-semibold transition-transform transform scale-90 hover:scale-100">
              <img
                src={skill.img}
                loading="lazy"
                className="w-16"
                alt={`${skill.name} logo`}
              />

              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
