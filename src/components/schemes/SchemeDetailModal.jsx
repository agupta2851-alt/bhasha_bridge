import React from "react";
import { CheckCircle2, FileText, ExternalLink, Printer, Bookmark } from "lucide-react";
import { Modal } from "../common/Modal";
import { AudioButton } from "../common/AudioButton";
import { useLanguage } from "../../context/LanguageContext";
import { useBookmarks } from "../../context/BookmarkContext";

export const SchemeDetailModal = ({ scheme, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { isSchemeSaved, toggleSaveScheme } = useBookmarks();

  if (!scheme) return null;

  const schemeTitle = scheme.names[language] || scheme.names.mr;
  const subsidyText = scheme.subsidy[language] || scheme.subsidy.mr;
  const simpleWords = scheme.inSimpleWords[language] || scheme.inSimpleWords.mr;
  const eligibleList = scheme.whoIsEligible[language] || scheme.whoIsEligible.mr;
  const docList = scheme.documents[language] || scheme.documents.mr;
  const stepsList = scheme.howToApply[language] || scheme.howToApply.mr;

  const fullAudioNarration = `${schemeTitle}. ${subsidyText}. सोप्या शब्दात: ${simpleWords}. पात्रता: ${eligibleList.join(". ")}. लागणारी कागदपत्रे: ${docList.join(", ")}.`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={schemeTitle}
      maxWidth="720px"
      footer={
        <>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => toggleSaveScheme(scheme.id)}
          >
            <Bookmark
              size={16}
              fill={isSchemeSaved(scheme.id) ? "var(--primary)" : "none"}
              color="var(--primary)"
            />
            <span>{isSchemeSaved(scheme.id) ? t("savedScheme") : t("saveScheme")}</span>
          </button>

          <button type="button" className="btn-secondary" onClick={handlePrint}>
            <Printer size={16} />
            <span>{t("printChecklist")}</span>
          </button>

          {scheme.portalUrl && (
            <a
              href={scheme.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              <span>{t("officialPortal")}</span>
              <ExternalLink size={16} />
            </a>
          )}
        </>
      }
    >
      {/* Audio Narration Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff7ed",
          padding: "12px 16px",
          borderRadius: "var(--radius-md)",
          border: "1px solid #fed7aa",
          marginBottom: "20px"
        }}
      >
        <div>
          <strong style={{ color: "var(--primary-dark)", fontSize: "0.95rem" }}>
            🔊 {t("listenOutLoud")}
          </strong>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            संपूर्ण योजना, पात्रता आणि कागदपत्रांची माहिती मराठीत ऐका.
          </p>
        </div>
        <AudioButton text={fullAudioNarration} id={`modal-scheme-${scheme.id}`} />
      </div>

      {/* Subsidy Highlight */}
      <div
        style={{
          background: "#ecfdf5",
          border: "1px solid #a7f3d0",
          padding: "12px 16px",
          borderRadius: "var(--radius-md)",
          marginBottom: "20px"
        }}
      >
        <span style={{ fontSize: "0.85rem", color: "#065f46", fontWeight: 700 }}>
          {t("subsidyLabel")}:
        </span>
        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#047857", marginTop: "2px" }}>
          {subsidyText}
        </div>
        <div style={{ fontSize: "0.88rem", color: "#065f46", marginTop: "4px" }}>
          <strong>{t("maxLoanLabel")}:</strong> {scheme.maxLoan[language] || scheme.maxLoan.mr}
        </div>
      </div>

      {/* In Simple Words */}
      <div className="simple-words-box" style={{ marginBottom: "20px" }}>
        <h4>💡 {t("inSimpleWords")}</h4>
        <p>{simpleWords}</p>
      </div>

      {/* Who is eligible */}
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-main)" }}>
          🎯 {t("whoIsEligible")}
        </h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {eligibleList.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                marginBottom: "8px",
                fontSize: "0.95rem",
                color: "var(--text-muted)"
              }}
            >
              <CheckCircle2 size={18} color="var(--secondary)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Documents Required */}
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-main)" }}>
          📋 {t("requiredDocuments")}
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "10px"
          }}
        >
          {docList.map((doc, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--bg-main)",
                border: "1px solid var(--border-color)",
                padding: "10px 14px",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.92rem",
                color: "var(--text-main)"
              }}
            >
              <FileText size={18} color="var(--primary)" />
              <span>{doc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How to Apply */}
      <div>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: "var(--text-main)" }}>
          🚀 {t("howToApply")}
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {stepsList.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: "#f8fafc",
                borderLeft: "3px solid var(--primary)",
                padding: "10px 14px",
                fontSize: "0.92rem",
                color: "var(--text-muted)",
                lineHeight: 1.5
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
