import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ fontSize: "24px" }}>🌾</span>
              <h2>{t("appTitle")} (BhashaBridge)</h2>
            </div>
            <p>{t("platformTagline")}</p>
            <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "8px" }}>
              उद्दिष्ट: ग्रामीण भागातील युवक, शेतकरी आणि महिला बचत गटांना त्यांच्या पसंतीच्या भाषेत व्यवसाय शिक्षण, शासकीय योजना व डिजिटल साधने उपलब्ध करून देणे.
            </p>
          </div>

          <div className="footer-credits">
            <div className="ideal-lab-tag">
              🏆 {t("idealLabBadge")}
            </div>
            <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "6px" }}>
              महाविद्यालयाचा सामाजिक नाविन्यता व भाषा सुलभीकरण उपक्रम
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {t("copyright")}. {t("privacyNote")}</p>
        </div>
      </div>
    </footer>
  );
};
