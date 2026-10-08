import React from "react";
import { ArrowRight, Bookmark, Gift } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useBookmarks } from "../../context/BookmarkContext";
import { AudioButton } from "../common/AudioButton";

export const SchemeCard = ({ scheme, onOpenDetails }) => {
  const { language, t } = useLanguage();
  const { isSchemeSaved, toggleSaveScheme } = useBookmarks();

  const schemeTitle =
    (typeof scheme?.names === "object" && scheme?.names ? (scheme.names[language] || scheme.names.mr || scheme.names.en) : null) ||
    (language === "en" ? scheme?.name : scheme?.nativeName) ||
    scheme?.nativeName ||
    scheme?.name ||
    "शासकीय योजना";

  const tagline =
    (typeof scheme?.tagline === "object" && scheme?.tagline ? (scheme.tagline[language] || scheme.tagline.mr || scheme.tagline.en) : scheme?.tagline) ||
    scheme?.shortDescription ||
    "";

  const subsidyText =
    (typeof scheme?.subsidy === "object" && scheme?.subsidy ? (scheme.subsidy[language] || scheme.subsidy.mr || scheme.subsidy.en) : scheme?.subsidy) ||
    (Array.isArray(scheme?.benefits) ? scheme.benefits[2] || scheme.benefits[0] : "थेट शासकीय अनुदान");

  const simpleWords =
    (typeof scheme?.inSimpleWords === "object" && scheme?.inSimpleWords ? (scheme.inSimpleWords[language] || scheme.inSimpleWords.mr || scheme.inSimpleWords.en) : scheme?.inSimpleWords) ||
    scheme?.learnInYourLanguage ||
    scheme?.whoCanApply ||
    "";

  const audioContent = `${schemeTitle}. ${tagline}. ${subsidyText}. सोप्या शब्दात: ${simpleWords}`;

  return (
    <div className="scheme-card">
      <div>
        {/* Top Badges */}
        <div className="card-top-row">
          <span className="sector-tag">
            {scheme.sectors ? scheme.sectors[0] : "शासकीय योजना"}
          </span>
          <span className="subsidy-highlight-badge">
            <Gift size={14} />
            <span>{subsidyText}</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="scheme-card-header">
          <h3 className="scheme-title">{schemeTitle}</h3>
          <p className="scheme-tagline">{tagline}</p>
        </div>

        {/* In Simple Words Box */}
        <div className="simple-words-box">
          <h4>💡 {t("inSimpleWords")}</h4>
          <p>{simpleWords}</p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="card-actions-row">
        <AudioButton text={audioContent} id={`scheme-card-${scheme.id}`} />

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            className="icon-action-btn"
            onClick={() => toggleSaveScheme(scheme.id)}
            title={isSchemeSaved(scheme.id) ? t("savedScheme") : t("saveScheme")}
            aria-label={t("saveScheme")}
          >
            <Bookmark
              size={18}
              fill={isSchemeSaved(scheme.id) ? "var(--primary)" : "none"}
              color="var(--primary)"
            />
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => onOpenDetails(scheme)}
          >
            <span>माहिती पहा</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
