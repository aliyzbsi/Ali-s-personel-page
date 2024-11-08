import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProviderContext } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { DesignProvider } from "./context/DesignContext.jsx";
import { ScrollProvider } from "./context/ScrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <DesignProvider>
    <ThemeProvider>
      <LanguageProviderContext>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </LanguageProviderContext>
    </ThemeProvider>
  </DesignProvider>
);
