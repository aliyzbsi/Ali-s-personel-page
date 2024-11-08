import { useEffect, useState } from "react";

import trData from "../../locales/tr.json";
import enData from "../../locales/en.json";
import proje1mobil from "../../../public/assets/yeniResimler/proje1mobil.png";
import proje2mobil from "../../../public/assets/yeniResimler/ecommerceMobil.png";
import proje3mobil from "../../../public/assets/yeniResimler/toDoMobil.png";
import proje4mobil from "../../../public/assets/yeniResimler/porfolyoMobil.png";
import proje5mobil from "../../../public/assets/yeniResimler/reduxMobil.png";
import proje1 from "../../../public/assets/yeniResimler/proje1.png";
import proje2 from "../../../public/assets/yeniResimler/ecommerce.png";
import proje3 from "../../../public/assets/yeniResimler/todo.png";
import proje4 from "../../../public/assets/yeniResimler/proje5.png";
import proje5 from "../../../public/assets/yeniResimler/proje4.png";
import projectAll from "../../../public/assets/projects1.png";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useScroll } from "../../context/ScrollContext";

const projectImages = {
  1: proje1,
  2: proje2,
  3: proje3,
  4: proje4,
  5: proje5,
  6: projectAll,
};

const projectImagesMobile = {
  1: proje1mobil,
  2: proje2mobil,
  3: proje3mobil,
  4: proje4mobil,
  5: proje5mobil,
};

function Projects() {
  const { t, selectedLang } = useLanguage();
  const { sectionsRef } = useScroll();
  const [projects, setProjects] = useState(trData.projects);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProjects(selectedLang === "tr" ? trData.projects : enData.projects);
  }, [selectedLang]);
  return (
    <section
      ref={(el) => (sectionsRef.current["projects"] = el)}
      className="px-8 md:px-20 py-4"
    >
      <div className="flex flex-col gap-4 border-t pt-4 border-[#BAB2E7]">
        <h2 className="dark:text-[#BAB2E7] text-[32px]">{t("projectTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col border-b border-t border-[#BAB2E7] rounded-xl p-4  justify-between "
            >
              <div className="flex flex-col gap-4  ">
                <div className="w-full flex items-center justify-center">
                  <img
                    src={
                      isMobile
                        ? projectImagesMobile[project.id]
                        : projectImages[project.id]
                    }
                    alt={`${project.name} photo`}
                    className="h-96 w-60 md:w-full md:h-60 lg:w-full lg:h-80  "
                  />
                </div>
                <p className="dark:text-[#BAB2E7] text-[#4338CA] text-[24px]">
                  {project.name}
                </p>
                <p className="dark:text-[#FFFFFF] text-[#6B7280] text-sm font-[400]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((item, techIndex) => (
                    <span
                      className=" border border-[#3730A3] dark:border-[#8F88FF] dark:bg-[#383838] text-[#3730A3] dark:text-[#8F88FF] font-normal text-sm rounded px-3 py-1"
                      key={techIndex}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4 justify-between">
                <a
                  href={project.githubUrl}
                  className="text-[#3730A3]   dark:text-[#E1E1FF] dark:hover:text-blue-300 scale-90 hover:scale-100 duration-200 underline"
                >
                  {t("github")}
                </a>
                <a
                  href={project.url}
                  className="flex items-center gap-2 text-[#3730A3]  dark:text-[#E1E1FF] dark:hover:text-blue-300 scale-90 hover:scale-100 duration-200 underline"
                >
                  {t("goApp")} <FaRegArrowAltCircleRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
