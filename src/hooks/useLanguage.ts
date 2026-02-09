import { useState } from "react";
import pt from "../content/pt";
import en from "../content/en";

type Language = "pt" | "en";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("pt");

  const content = language === "pt" ? pt : en;

  function toggleLanguage() {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }

  return { language, content, toggleLanguage };
}
