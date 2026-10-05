import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";
import { stopSpeaking } from "../utils/speechUtils";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to Marathi for Maharashtra rural entrepreneurs, or load saved preference
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("bhashabridge_lang") || "mr";
  });

  // Accessible font size scaling: 'normal', 'large', 'xlarge'
  const [fontSize, setFontSizeState] = useState(() => {
    return localStorage.getItem("bhashabridge_fontsize") || "normal";
  });

  // Track currently active audio reading ID (null if not speaking)
  const [activeSpeechId, setActiveSpeechId] = useState(null);

  const setLanguage = (newLang) => {
    stopSpeaking();
    setActiveSpeechId(null);
    setLanguageState(newLang);
    localStorage.setItem("bhashabridge_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const setFontSize = (size) => {
    setFontSizeState(size);
    localStorage.setItem("bhashabridge_fontsize", size);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-font-size", fontSize);
  }, [language, fontSize]);

  // Lookup translation string helper
  const t = (key) => {
    const currentDict = translations[language] || translations["mr"];
    if (currentDict && currentDict[key]) {
      return currentDict[key];
    }
    // Fallback to Marathi, then English
    return translations["mr"][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        fontSize,
        setFontSize,
        activeSpeechId,
        setActiveSpeechId,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
