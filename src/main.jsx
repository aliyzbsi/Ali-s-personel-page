import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProviderContext } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LanguageProviderContext>
      <App />
    </LanguageProviderContext>
  </ThemeProvider>
);
