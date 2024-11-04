import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import trData from "../locales/tr.json";
import enData from "../locales/en.json";

function ProfileSection() {
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
    <section className="flex justify-center h-full px-4 py-8 sm:px-6 md:px-12 lg:px-16 bg-gray-100 md:h-auto dark:bg-neutral-900">
      <div className="max-w-6xl w-full text-center space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          {t("profileTitle")}
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 relative">
          {/* Bilgi Kartı */}
          <div className="relative flex-1 mx-auto w-full md:max-w-md lg:max-w-lg">
            <div className="absolute inset-0 bg-neutral-400 translate-y-2 translate-x-2 dark:bg-neutral-800 rounded-xl shadow-lg z-0"></div>
            <div className="bg-white dark:bg-neutral-700 relative rounded-xl z-10 flex flex-col items-start gap-4 p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-xl">
              <h2 className="text-red-600 font-semibold text-lg sm:text-xl">
                {t("basicInfo")}
              </h2>
              {infoFields.map((field, idx) => (
                <p
                  key={idx}
                  className="flex w-full justify-between text-gray-800 dark:text-gray-200 font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {t(field.title)}:{" "}
                  <span className="w-1/2 text-start font-normal text-gray-600 dark:text-gray-400">
                    {field.value}
                  </span>
                </p>
              ))}
            </div>
          </div>

          {/* Hakkımda Kartı */}
          <div className="flex-1 mx-auto p-6 md:p-8 rounded-xl shadow-lg border-2 w-full md:max-w-md lg:max-w-lg">
            <h2 className="text-start font-bold text-lg sm:text-xl md:text-2xl px-2 text-red-700">
              {t("aboutMeTitle")}
            </h2>
            <p className="text-start text-base sm:text-lg md:text-xl dark:text-gray-300 mt-4 px-4 leading-relaxed shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_0_20px_red]">
              {t(personelInfo[0]?.aboutMe)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
