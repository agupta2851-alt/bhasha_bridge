import React from "react";
import { Wrench, Package, ShieldCheck, CheckSquare, Bookmark } from "lucide-react";
import { Modal } from "../common/Modal";
import { AudioButton } from "../common/AudioButton";
import { useLanguage } from "../../context/LanguageContext";
import { useBookmarks } from "../../context/BookmarkContext";

export const BusinessDetailModal = ({ idea, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { isIdeaSaved, toggleSaveIdea } = useBookmarks();

  if (!idea) return null;

  const title =
    (typeof idea.titles === "object" && idea.titles ? (idea.titles[language] || idea.titles.mr || idea.titles.en) : null) ||
    idea.title ||
    "";

  const tagline =
    (typeof idea.tagline === "object" && idea.tagline ? (idea.tagline[language] || idea.tagline.mr || idea.tagline.en) : null) ||
    (typeof idea.tagline === "string" ? idea.tagline : "") ||
    "";

  const overview =
    (typeof idea.overview === "object" && idea.overview ? (idea.overview[language] || idea.overview.mr || idea.overview.en) : null) ||
    (typeof idea.overview === "string" ? idea.overview : "") ||
    "";

  const investmentText = idea.investmentRange || idea.investment || "";
  const profitText = idea.expectedMonthlyProfit || idea.expectedProfit || "";

  const machines =
    (idea.machinery && (idea.machinery[language] || idea.machinery.mr)) ||
    (Array.isArray(idea.machinery) ? idea.machinery : null) ||
    (Array.isArray(idea.skillsRequired) ? idea.skillsRequired : []) ||
    [];

  const rawMaterial =
    (idea.rawMaterial && (idea.rawMaterial[language] || idea.rawMaterial.mr)) ||
    (typeof idea.rawMaterial === "string" ? idea.rawMaterial : null) ||
    (Array.isArray(idea.potentialCustomers) ? idea.potentialCustomers.join(", ") : "स्थानिक शेतकरी व स्थानिक बाजारपेठेतून थेट खरेदी.");

  const licenses =
    (idea.licenses && (idea.licenses[language] || idea.licenses.mr)) ||
    (Array.isArray(idea.licenses) ? idea.licenses : null) ||
    (idea.relatedSchemes ? [idea.relatedSchemes, "उद्यम नोंदणी (Udyam MSME)", "स्थानिक ग्रामपंचायत ना-हरकत दाखला (NOC)"] : ["उद्यम नोंदणी (Udyam MSME)", "स्थानिक परवाना"]);

  const steps =
    (idea.steps && (idea.steps[language] || idea.steps.mr)) ||
    (Array.isArray(idea.steps) ? idea.steps : null) ||
    (Array.isArray(idea.howToStart) ? idea.howToStart : []) ||
    [];

  const audioContent = `${title}. भांडवल: ${investmentText}. मासिक नफा: ${profitText}. माहिती: ${overview}.`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      maxWidth="740px"
      footer={
        <>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => toggleSaveIdea(idea.id)}
          >
            <Bookmark
              size={16}
              fill={isIdeaSaved(idea.id) ? "var(--primary)" : "none"}
              color="var(--primary)"
            />
            <span>{isIdeaSaved(idea.id) ? t("savedScheme") : t("saveScheme")}</span>
          </button>
          <button type="button" className="btn-primary" onClick={onClose}>
            {t("closeModal")}
          </button>
        </>
      }
    >
      {/* Audio Narration */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ecfdf5",
          padding: "12px 16px",
          borderRadius: "var(--radius-md)",
          border: "1px solid #a7f3d0",
          marginBottom: "20px"
        }}
      >
        <div>
          <strong style={{ color: "var(--secondary-dark)", fontSize: "0.95rem" }}>
            🔊 {t("listenOutLoud")}
          </strong>
          <p style={{ fontSize: "0.82rem", color: "#065f46" }}>
            या व्यवसायाची माहिती, लागणारी यंत्रे आणि नफ्याचे गणित ऐका.
          </p>
        </div>
        <AudioButton text={audioContent} id={`modal-idea-${idea.id}`} />
      </div>

      {/* Economics Summary */}
      <p style={{ color: "var(--primary-dark)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "14px" }}>
        {tagline}
      </p>

      <div className="economics-bar" style={{ marginBottom: "20px" }}>
        <div className="econ-item">
          <span>{t("investmentRequired")}:</span>
          <strong>{investmentText}</strong>
        </div>
        <div className="econ-item profit">
          <span>{t("expectedMonthlyProfit")}:</span>
          <strong>{profitText}</strong>
        </div>
      </div>

      {/* Overview */}
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
          📖 व्यवसायाची सविस्तर माहिती
        </h4>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
          {overview}
        </p>
      </div>

      {/* Machinery Needed */}
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-main)" }}>
          <Wrench size={18} color="var(--primary)" style={{ verticalAlign: "middle", marginRight: "6px" }} />
          {t("machinesNeeded")}
        </h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "8px" }}>
          {machines.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--bg-main)",
                border: "1px solid var(--border-color)",
                padding: "8px 12px",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.9rem"
              }}
            >
              • {m}
            </div>
          ))}
        </div>
      </div>

      {/* Raw Material Sourcing */}
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "6px", color: "var(--text-main)" }}>
          <Package size={18} color="var(--secondary)" style={{ verticalAlign: "middle", marginRight: "6px" }} />
          {t("rawMaterial")}
        </h4>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", background: "#f8fafc", padding: "10px 14px", borderRadius: "var(--radius-sm)" }}>
          {rawMaterial}
        </p>
      </div>

      {/* Licenses (Simplified) */}
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
          <ShieldCheck size={18} color="var(--accent-gold)" style={{ verticalAlign: "middle", marginRight: "6px" }} />
          {t("licensesNeeded")}
        </h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {licenses.map((lic, idx) => (
            <li
              key={idx}
              style={{
                background: "#fef3c7",
                borderLeft: "3px solid var(--accent-gold)",
                padding: "8px 12px",
                borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                marginBottom: "6px",
                fontSize: "0.9rem",
                color: "#92400e"
              }}
            >
              {lic}
            </li>
          ))}
        </ul>
      </div>

      {/* Step by Step Roadmap */}
      <div>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-main)" }}>
          <CheckSquare size={18} color="var(--secondary)" style={{ verticalAlign: "middle", marginRight: "6px" }} />
          व्यवसाय सुरू करण्याचे ४ टप्पे
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: "#f8fafc",
                border: "1px solid var(--border-color)",
                padding: "10px 14px",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.92rem",
                color: "var(--text-muted)"
              }}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
