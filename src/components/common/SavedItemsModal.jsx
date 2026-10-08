import React from "react";
import { ArrowRight, Trash2, Printer } from "lucide-react";
import { Modal } from "./Modal";
import { useLanguage } from "../../context/LanguageContext";
import { useBookmarks } from "../../context/BookmarkContext";
import { schemesData } from "../../data/schemesData";
import { businessIdeasData } from "../../data/businessIdeasData";

export const SavedItemsModal = ({ isOpen, onClose, onSelectScheme, onSelectIdea }) => {
  const { language, t } = useLanguage();
  const { savedSchemes, toggleSaveScheme, savedIdeas, toggleSaveIdea } = useBookmarks();

  const savedSchemesList = schemesData.filter((s) => savedSchemes.includes(s.id));
  const savedIdeasList = businessIdeasData.filter((i) => savedIdeas.includes(i.id));

  const getSchemeTitle = (scheme) => {
    return (
      (typeof scheme.names === "object" && scheme.names ? (scheme.names[language] || scheme.names.mr || scheme.names.en) : null) ||
      (language === "en" ? scheme.name : scheme.nativeName) ||
      scheme.nativeName ||
      scheme.name ||
      "शासकीय योजना"
    );
  };

  const getSchemeSubsidy = (scheme) => {
    return (
      (typeof scheme.subsidy === "object" && scheme.subsidy ? (scheme.subsidy[language] || scheme.subsidy.mr || scheme.subsidy.en) : scheme.subsidy) ||
      (Array.isArray(scheme.benefits) ? scheme.benefits[0] : "थेट शासकीय अनुदान")
    );
  };

  const getIdeaTitle = (idea) => {
    return (
      (typeof idea.titles === "object" && idea.titles ? (idea.titles[language] || idea.titles.mr || idea.titles.en) : null) ||
      idea.title ||
      ""
    );
  };

  const getIdeaInvestment = (idea) => {
    return idea.investmentRange || idea.investment || "";
  };

  const getIdeaProfit = (idea) => {
    return idea.expectedMonthlyProfit || idea.expectedProfit || "";
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`📑 ${t("navSaved")}`}
      maxWidth="700px"
      footer={
        <>
          <button type="button" className="btn-secondary" onClick={handlePrint}>
            <Printer size={16} />
            <span>प्रिंट करा (Print Saved List)</span>
          </button>
          <button type="button" className="btn-primary" onClick={onClose}>
            {t("closeModal")}
          </button>
        </>
      }
    >
      <div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "20px" }}>
          तुम्ही जतन केलेल्या शासकीय योजना आणि उद्योग आराखडे. ही यादी तुम्ही बँक अधिकाऱ्यांशी किंवा ग्रामपंचायतीशी चर्चा करताना वापरू शकता.
        </p>

        {/* Saved Schemes */}
        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px", color: "var(--primary-dark)" }}>
          🏛️ जतन केलेल्या सरकारी योजना ({savedSchemesList.length})
        </h4>
        {savedSchemesList.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
            {savedSchemesList.map((scheme) => (
              <div
                key={scheme.id}
                style={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px"
                }}
              >
                <div>
                  <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {getSchemeTitle(scheme)}
                  </h5>
                  <span style={{ fontSize: "0.85rem", color: "var(--secondary-dark)", fontWeight: 600 }}>
                    {getSchemeSubsidy(scheme)}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      onClose();
                      onSelectScheme(scheme);
                    }}
                    style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                  >
                    <span>पहा</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSaveScheme(scheme.id)}
                    style={{ background: "transparent", border: "none", color: "#ef4444", cursor: "pointer" }}
                    title="काढून टाका"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "0.9rem", color: "var(--text-subtle)", fontStyle: "italic", marginBottom: "24px" }}>
            कोणतीही योजना जतन केलेली नाही.
          </p>
        )}

        {/* Saved Ideas */}
        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px", color: "var(--secondary-dark)" }}>
          💡 जतन केलेल्या उद्योग कल्पना ({savedIdeasList.length})
        </h4>
        {savedIdeasList.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {savedIdeasList.map((idea) => (
              <div
                key={idea.id}
                style={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px"
                }}
              >
                <div>
                  <h5 style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {getIdeaTitle(idea)}
                  </h5>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    भांडवल: {getIdeaInvestment(idea)} | नफा: {getIdeaProfit(idea)}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      onClose();
                      onSelectIdea(idea);
                    }}
                    style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                  >
                    <span>पहा</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSaveIdea(idea.id)}
                    style={{ background: "transparent", border: "none", color: "#ef4444", cursor: "pointer" }}
                    title="काढून टाका"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "0.9rem", color: "var(--text-subtle)", fontStyle: "italic" }}>
            कोणतीही व्यवसाय कल्पना जतन केलेली नाही.
          </p>
        )}
      </div>
    </Modal>
  );
};
