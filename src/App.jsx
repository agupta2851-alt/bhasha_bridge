import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { Navbar } from "./components/common/Navbar";
import { HeroSection } from "./components/home/HeroSection";
import { SchemeSection } from "./components/schemes/SchemeSection";
import { BusinessSection } from "./components/business/BusinessSection";
import { LearningSection } from "./components/learning/LearningSection";
import { EligibilityQuizModal } from "./components/schemes/EligibilityQuizModal";
import { SchemeDetailModal } from "./components/schemes/SchemeDetailModal";
import { BusinessDetailModal } from "./components/business/BusinessDetailModal";
import { BhashaAssistantModal } from "./components/assistant/BhashaAssistantModal";
import { SavedItemsModal } from "./components/common/SavedItemsModal";
import { InvoiceMakerModal } from "./components/toolkit/InvoiceMakerModal";
import { Footer } from "./components/common/Footer";
import { Bot } from "lucide-react";

const MainContent = () => {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isBillToolOpen, setIsBillToolOpen] = useState(false);

  const [selectedScheme, setSelectedScheme] = useState(null);
  const [selectedIdea, setSelectedIdea] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // If user searched for something, show relevant tab or stay on home
  };

  return (
    <div className="bhashabridge-app">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSavedModal={() => setIsSavedOpen(true)}
        onOpenAssistantModal={() => setIsAssistantOpen(true)}
        onOpenBillToolModal={() => setIsBillToolOpen(true)}
      />

      <main>
        {activeTab === "home" && (
          <>
            {/* Hero Section with Vernacular Voice Search */}
            <HeroSection
              onSearch={handleSearch}
              onOpenEligibilityQuiz={() => setIsQuizOpen(true)}
            />

            {/* Pillar 1: Government Schemes in Simple Language */}
            <SchemeSection searchQuery={searchQuery} />

            {/* Pillar 2: Rural Business Blueprints & ROI Calculations */}
            <BusinessSection searchQuery={searchQuery} />

            {/* Pillar 3: Udyog Pathshala (Entrepreneurship Lessons) */}
            <LearningSection />
          </>
        )}

        {activeTab === "schemes" && (
          <div style={{ paddingTop: "20px" }}>
            <SchemeSection searchQuery={searchQuery} />
          </div>
        )}

        {activeTab === "ideas" && (
          <div style={{ paddingTop: "20px" }}>
            <BusinessSection searchQuery={searchQuery} />
          </div>
        )}

        {activeTab === "pathshala" && (
          <div style={{ paddingTop: "20px" }}>
            <LearningSection />
          </div>
        )}
      </main>

      {/* Floating Bhasha Sahayak AI Trigger Button */}
      <button
        type="button"
        className="floating-assistant-btn"
        onClick={() => setIsAssistantOpen(true)}
        aria-label="Open Bhasha Sahayak AI Mentor"
        title={t("navAssistant")}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "var(--primary-gradient)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius-full)",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: 700,
          fontSize: "0.95rem",
          boxShadow: "0 8px 25px rgba(234, 88, 12, 0.4)",
          cursor: "pointer",
          zIndex: 1500,
          transition: "all 0.3s ease"
        }}
      >
        <Bot size={22} />
        <span>{t("navAssistant")}</span>
      </button>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <EligibilityQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectScheme={(sch) => setSelectedScheme(sch)}
      />

      <BhashaAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      <SavedItemsModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        onSelectScheme={(sch) => setSelectedScheme(sch)}
        onSelectIdea={(idea) => setSelectedIdea(idea)}
      />

      <InvoiceMakerModal
        isOpen={isBillToolOpen}
        onClose={() => setIsBillToolOpen(false)}
      />

      <SchemeDetailModal
        scheme={selectedScheme}
        isOpen={!!selectedScheme}
        onClose={() => setSelectedScheme(null)}
      />

      <BusinessDetailModal
        idea={selectedIdea}
        isOpen={!!selectedIdea}
        onClose={() => setSelectedIdea(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <BookmarkProvider>
        <MainContent />
      </BookmarkProvider>
    </LanguageProvider>
  );
}
