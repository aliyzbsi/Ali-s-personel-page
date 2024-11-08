import { useScroll } from "../../context/ScrollContext";

function SecondHeader() {
  const { scrollToSection } = useScroll();

  return (
    <section className="py-8 md:p-16 pt-32 md:pt-16 ">
      <div className="flex w-full  max-h-16 md:p-2 items-center  justify-between">
        <div>
          <p className="bg-[#EEEBFF] text-[#7B61FF] dark:bg-[#3730A3] dark:text-white p-3 rounded-full">
            <span className="inline-block hover:rotate-45 duration-300">
              AY
            </span>
          </p>
        </div>

        <div className="flex gap-2 md:gap-8">
          <button
            className=" text-[#6B7280] hover:text-[#3730A3] dark:hover:text-white p-2 rounded"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>

          <button
            className="text-[#6B7280] hover:text-[#3730A3] dark:hover:text-white p-2 rounded "
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <a
            className="dark:bg-white border border-[#3730A3] text-[#3730A3] hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#383838] dark:hover:text-[#AEBCCF] dark:text-[#3730A3] p-2 px-8 rounded "
            href="mailto:aliyzbsi68@hotmail.com"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondHeader;
