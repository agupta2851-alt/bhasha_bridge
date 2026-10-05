import React from "react";
import { Bookmark, ReceiptText, Bot } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useBookmarks } from "../../context/BookmarkContext";

export const Navbar = ({
  onOpenSavedModal,
  onOpenAssistantModal,
  onOpenBillToolModal,
  activeTab,
  setActiveTab
}) => {
  const { language, setLanguage, fontSize, setFontSize, t } = useLanguage();
  const { savedSchemes, savedIdeas } = useBookmarks();

  const totalSaved = savedSchemes.length + savedIdeas.length;

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo & Title */}
          <div className="brand-logo" onClick={() => setActiveTab("home")}>
            <div className="brand-icon">
              <span>🌾</span>
            </div>
            <div className="brand-info">
              <h1>
                {t("appTitle")}
                <span style={{ fontSize: "0.85rem", opacity: 0.85, fontWeight: 500 }}>
                  ({t("appSubtitle")})
                </span>
              </h1>
              <span>{t("platformTagline")}</span>
            </div>
          </div>

          {/* Action Bar (Language Switcher, Text Sizer, Tools) */}
          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="lang-switcher" role="group" aria-label="Language selection">
              <button
                type="button"
                className={`lang-btn ${language === "mr" ? "active" : ""}`}
                onClick={() => setLanguage("mr")}
                title="मराठी"
              >
                मराठी
              </button>
              <button
                type="button"
                className={`lang-btn ${language === "hi" ? "active" : ""}`}
                onClick={() => setLanguage("hi")}
                title="हिंदी"
              >
                हिंदी
              </button>
              <button
                type="button"
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Accessible Font Size Adjuster */}
            <div className="font-scale-control" title={t("textSize")}>
              <button
                type="button"
                className={`font-scale-btn ${fontSize === "normal" ? "active" : ""}`}
                onClick={() => setFontSize("normal")}
                aria-label="Normal font"
              >
                अ
              </button>
              <button
                type="button"
                className={`font-scale-btn ${fontSize === "large" ? "active" : ""}`}
                onClick={() => setFontSize("large")}
                aria-label="Large font"
              >
                अ+
              </button>
              <button
                type="button"
                className={`font-scale-btn ${fontSize === "xlarge" ? "active" : ""}`}
                onClick={() => setFontSize("xlarge")}
                aria-label="Extra large font"
              >
                अ++
              </button>
            </div>

            {/* AI Assistant Quick Trigger */}
            <button
              type="button"
              className="icon-action-btn"
              onClick={onOpenAssistantModal}
              title={t("navAssistant")}
            >
              <Bot size={18} color="var(--primary)" />
              <span className="hide-mobile">{t("navAssistant")}</span>
            </button>

            {/* Saved Bookmarks */}
            <button
              type="button"
              className="icon-action-btn"
              onClick={onOpenSavedModal}
              title={t("navSaved")}
            >
              <Bookmark size={18} />
              <span className="hide-mobile">{t("navSaved")}</span>
              {totalSaved > 0 && <span className="badge-count">{totalSaved}</span>}
            </button>

            {/* Quick Invoice Maker (Secondary Tool) */}
            <button
              type="button"
              className="icon-action-btn"
              onClick={onOpenBillToolModal}
              title={t("navBillTool")}
            >
              <ReceiptText size={18} />
              <span className="hide-mobile">{t("navBillTool")}</span>
            </button>
          </div>
        </div>

        {/* Primary Functional Tabs */}
        <nav className="tab-navigation" aria-label="Main Navigation">
          <button
            type="button"
            className={`nav-tab-btn ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            🏠 {t("navHome")}
          </button>
          <button
            type="button"
            className={`nav-tab-btn ${activeTab === "schemes" ? "active" : ""}`}
            onClick={() => setActiveTab("schemes")}
          >
            🏛️ {t("navSchemes")}
          </button>
          <button
            type="button"
            className={`nav-tab-btn ${activeTab === "ideas" ? "active" : ""}`}
            onClick={() => setActiveTab("ideas")}
          >
            💡 {t("navIdeas")}
          </button>
          <button
            type="button"
            className={`nav-tab-btn ${activeTab === "pathshala" ? "active" : ""}`}
            onClick={() => setActiveTab("pathshala")}
          >
            📚 {t("navPathshala")}
          </button>
        </nav>
      </div>
    </header>
  );
};
