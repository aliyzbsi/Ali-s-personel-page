import { useEffect, useState } from "react";

import trData from "../../locales/tr.json";
import enData from "../../locales/en.json";
import profileImage from "../../../public/assets/profileSectionImage.png";
import { useLanguage } from "../../context/LanguageContext";
function Profile() {
  const { t, selectedLang } = useLanguage();
  const [personelInfo, setPersonelInfo] = useState(trData.personelInfo || []);

  useEffect(() => {
    try {
      if (selectedLang === "tr") {
        setPersonelInfo(trData.personelInfo);
      } else {
        setPersonelInfo(enData.personelInfo);
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  }, [selectedLang]);

  const infoFields =
    personelInfo.length > 0
      ? [
          {
            title: "dateOfBirthTitle",
            value: personelInfo[0]?.dateOfBirth || "Bilinmiyor",
          },
          {
            title: "residenceTitle",
            value: personelInfo[0]?.residenceAdr || "Bilinmiyor",
          },
          {
            title: "educationTitle",
            value: personelInfo[0]?.education || "Bilinmiyor",
          },
          {
            title: "preferredRoleTitle",
            value: personelInfo[0]?.preferredRole.join(", ") || "Bilinmiyor",
          },
        ]
      : [];
  return (
    <section className="px-8 md:px-20 py-4 ">
      <div className="max-w-7xl flex flex-col items-start  w-full ">
        <h1 className="text-[32px] text-black  font-[500] dark:text-[#BAB2E7] ">
          {t("profileTitle")}
        </h1>
        <div className="flex flex-col  pt-4  items-center lg:flex-row  gap-4 relative text-white">
          <div className="relative flex-1   mx-auto w-full md:max-w-md lg:max-w-lg ">
            <div className=" relative  z-10 flex flex-col  items-start  gap-4  ">
              <h2 className=" font-semibold dark:text-[#BAB2E7] text-[#4338CA]   text-lg sm:text-xl">
                {t("basicInfo")}
              </h2>
              <div className="flex flex-col gap-2">
                {infoFields.map((field, idx) => (
                  <p
                    key={idx}
                    className="flex w-full justify-between dark:text-[#777777] text-black  font-normal transform transition-all duration-300 hover:scale-105 "
                  >
                    {t(field.title)}:{" "}
                    <span className="w-1/2 text-start font-light">
                      {field.value}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 mx-auto    w-full md:max-w-md lg:max-w-lg">
            <h2 className="text-start font-semibold text-lg sm:text-xl md:text-xl text-[#4338CA] dark:text-[#BAB2E7]">
              {t("aboutMeTitle")}
            </h2>
            <p className="text-start text-base sm:text-lg md:text-sm dark:text-white text-[#6B7280] mt-4   ">
              {t(personelInfo[0].aboutMe)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
