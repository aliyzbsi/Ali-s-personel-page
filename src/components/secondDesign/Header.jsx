import { useDesign } from "../../context/DesignContext";
import Language from "./Language";
import Theme from "./Theme";
import { MdChangeCircle } from "react-icons/md";

function Header() {
  const { randomDesign } = useDesign();
  return (
    <header className="flex fixed justify-end  items-center bg-none  dark:bg-none z-50  gap-4 w-full ">
      <article className="flex justify-center items-center w-full">
        <div className="w-2/3 h-full relative flex justify-end">
          <div className="p-2">
            <button
              onClick={randomDesign}
              className="flex gap-1 items-center text-sm text-white"
            >
              <MdChangeCircle size={20} />
              Tasarımı Değiştir
            </button>
          </div>
          <div className="flex justify-end  text-white sticky  z-10">
            <Language />
          </div>
        </div>

        <div className="w-1/3 h-full relative flex items-center justify-between ">
          <div className="sticky  z-10 bg-none">
            <Theme />
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;
