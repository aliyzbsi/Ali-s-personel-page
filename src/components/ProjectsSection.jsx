import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import trData from "../locales/tr.json";
import enData from "../locales/en.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import proje1 from "../../public/assets/pizzaProjectImage.png";
import proje2 from "../../public/assets/ecommerceimage.png";
import proje3 from "../../public/assets/todoimage.png";
import proje4 from "../../public/assets/portfolioimage.png";
import proje5 from "../../public/assets/reduxmoviedbimage.png";
import projectAll from "../../public/assets/projects1.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const bgColors = {
  1: "bg-red-50  dark:bg-red-700",
  2: "bg-[#D9F6F1] dark:bg-[#6f7c79]",
  3: "bg-orange-200  dark:bg-[#495351]",
  4: "bg-purple-100 dark:bg-[#2D3235]",
  5: "bg-indigo-100 dark:bg-[#1e2e38]",
};
const projectImages = {
  1: proje1,
  2: proje2,
  3: proje3,
  4: proje4,
  5: proje5,
  6: projectAll,
};
function ProjectsSection() {
  const { t, selectedLang } = useLanguage();
  const [projects, setProjects] = useState(trData.projects);

  useEffect(() => {
    setProjects(selectedLang === "tr" ? trData.projects : enData.projects);
  }, [selectedLang]);

  return (
    <section className="flex flex-col items-center  dark:bg-neutral-900 p-8 overflow-hidden border-t ">
      <h1 className="text-3xl  font-semibold text-gray-800 dark:text-white mb-16">
        {t("projectTitle")}
      </h1>
      <div className="w-full max-w-screen-lg   ">
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2 ">
              <div
                className={`flex flex-col px-1 py-8 rounded-2xl  shadow-lg   ${
                  bgColors[project.id] || "bg-white dark:bg-gray-800"
                }`}
              >
                <div className="px-2 py-1 h-176 md:h-128  ">
                  <div>
                    <h2 className="text-lg border-b-2 font-semibold mb-2">
                      {project.name}
                    </h2>
                    <p className="text-sm">{project.description}</p>
                  </div>
                  <div className="mt-2 md:mt-4 flex gap-4 flex-wrap">
                    {project.technologies.map((item, index) => (
                      <p
                        className="bg-white font-semibold text-sm text-black rounded px-3 py-1"
                        key={index}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row lg:mt-4 justify-between  mt-8 font-semibold text-base text-black dark:text-white">
                    <a
                      href={project.githubUrl}
                      className="scale-90 hover:scale-100 duration-200"
                    >
                      {t("github")}
                    </a>
                    <a
                      href={project.url}
                      className="flex items-center gap-2 scale-90 hover:scale-100 duration-200"
                    >
                      {t("goApp")} <FaRegArrowAltCircleRight />
                    </a>
                  </div>
                </div>
              </div>

              <img
                src={projectImages[project.id] || projectAll}
                alt={`${project.name} photo`}
                width={250}
                className="relative z-50 mt-4 w-full -translate-y-20 md:scale-100 md:hover:scale-150  rounded-md transform transition-all duration-300 scale-90 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProjectsSection;
