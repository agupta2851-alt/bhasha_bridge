import React, { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [savedSchemes, setSavedSchemes] = useState(() => {
    try {
      const saved = localStorage.getItem("bhashabridge_saved_schemes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [savedIdeas, setSavedIdeas] = useState(() => {
    try {
      const saved = localStorage.getItem("bhashabridge_saved_ideas");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bhashabridge_saved_schemes", JSON.stringify(savedSchemes));
  }, [savedSchemes]);

  useEffect(() => {
    localStorage.setItem("bhashabridge_saved_ideas", JSON.stringify(savedIdeas));
  }, [savedIdeas]);

  const toggleSaveScheme = (schemeId) => {
    setSavedSchemes(prev =>
      prev.includes(schemeId) ? prev.filter(id => id !== schemeId) : [...prev, schemeId]
    );
  };

  const isSchemeSaved = (schemeId) => savedSchemes.includes(schemeId);

  const toggleSaveIdea = (ideaId) => {
    setSavedIdeas(prev =>
      prev.includes(ideaId) ? prev.filter(id => id !== ideaId) : [...prev, ideaId]
    );
  };

  const isIdeaSaved = (ideaId) => savedIdeas.includes(ideaId);

  return (
    <BookmarkContext.Provider
      value={{
        savedSchemes,
        toggleSaveScheme,
        isSchemeSaved,
        savedIdeas,
        toggleSaveIdea,
        isIdeaSaved
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
