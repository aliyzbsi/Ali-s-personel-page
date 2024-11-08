import { createContext, useContext } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";

const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [design, setDesign] = useLocaleStorage("design", 0);

  const randomDesign = () => {
    setDesign((prevDesign) => (prevDesign + 1) % 3);
  };

  return (
    <DesignContext.Provider value={{ design, setDesign, randomDesign }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => {
  return useContext(DesignContext);
};
