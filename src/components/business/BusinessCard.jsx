import React, { useState } from "react";
import { ArrowRight, Bookmark, Calculator } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useBookmarks } from "../../context/BookmarkContext";
import { AudioButton } from "../common/AudioButton";

export const BusinessCard = ({ idea, onOpenDetails }) => {
  const { language, t } = useLanguage();
  const { isIdeaSaved, toggleSaveIdea } = useBookmarks();

  const title =
    (typeof idea.titles === "object" && idea.titles ? (idea.titles[language] || idea.titles.mr || idea.titles.en) : null) ||
    idea.title ||
    "";

  const tagline =
    (typeof idea.tagline === "object" && idea.tagline ? (idea.tagline[language] || idea.tagline.mr || idea.tagline.en) : null) ||
    (typeof idea.tagline === "string" ? idea.tagline : "") ||
    "";

  const investmentRange = idea.investmentRange || idea.investment || "";
  const expectedMonthlyProfit = idea.expectedMonthlyProfit || idea.expectedProfit || "";
  const baseInvestment = idea.minInvestment || idea.investmentVal || 100000;
  const margin = idea.defaultMarginPercent || idea.marginPercent || 25;

  const [customInvestment, setCustomInvestment] = useState(baseInvestment);

  // Calculate dynamic estimated monthly net profit based on investment and margin
  // Estimated monthly turnover is roughly 25-30% of capital, with margin applying to it
  const estimatedMonthlyProfitVal = Math.round((customInvestment * 0.45) * (margin / 100));

  const audioContent = `${title}. ${tagline}. लागणारे भांडवल: ${investmentRange}. अंदाजे मासिक नफा: ${expectedMonthlyProfit}.`;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="business-card">
      <div>
        {/* Category Tag */}
        <div className="card-top-row">
          <span className="sector-tag">
            {idea.categoryLabel ||
              (idea.category === "agri"
                ? "🌾 कृषी उद्योग"
                : idea.category === "home"
                  ? "🏡 गृहउद्योग"
                  : idea.category === "digital"
                    ? "💻 डिजिटल सेवा"
                    : idea.category === "local"
                      ? "🪵 स्थानिक संपत्ती"
                      : "ग्रामीण उद्योग")}
          </span>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--secondary-dark)" }}>
            मार्जिन: ~{margin}%
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="scheme-card-header">
          <h3 className="scheme-title">{title}</h3>
          <p className="scheme-tagline" style={{ color: "var(--secondary-dark)" }}>{tagline}</p>
        </div>

        {/* Economics Metrics */}
        <div className="economics-bar">
          <div className="econ-item">
            <span>{t("investmentRequired")}:</span>
            <strong>{investmentRange}</strong>
          </div>
          <div className="econ-item profit">
            <span>{t("expectedMonthlyProfit")}:</span>
            <strong>{expectedMonthlyProfit}</strong>
          </div>
        </div>

        {/* Dynamic Calculator Widget */}
        <div className="calc-widget">
          <div className="calc-widget-header">
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Calculator size={15} />
              {t("profitMarginCalc")}
            </span>
            <span>{formatCurrency(customInvestment)}</span>
          </div>

          <input
            type="range"
            min={Math.round(baseInvestment * 0.5)}
            max={Math.round(baseInvestment * 3)}
            step={10000}
            value={customInvestment}
            onChange={(e) => setCustomInvestment(Number(e.target.value))}
            className="slider-input"
            aria-label="Planned capital slider"
          />

          <div className="calc-result-badge">
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)" }}>
              {t("calcEstimatedReturn")}
            </span>
            <span style={{ fontSize: "1.05rem", color: "var(--secondary-dark)", fontWeight: 800 }}>
              ~ {formatCurrency(estimatedMonthlyProfitVal)} / महिना
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="card-actions-row" style={{ marginTop: "18px" }}>
        <AudioButton text={audioContent} id={`business-card-${idea.id}`} />

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            className="icon-action-btn"
            onClick={() => toggleSaveIdea(idea.id)}
            title={isIdeaSaved(idea.id) ? t("savedScheme") : t("saveScheme")}
            aria-label={t("saveScheme")}
          >
            <Bookmark
              size={18}
              fill={isIdeaSaved(idea.id) ? "var(--secondary)" : "none"}
              color="var(--secondary)"
            />
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => onOpenDetails(idea)}
            style={{ background: "var(--secondary-gradient)" }}
          >
            <span>आराखडा पहा</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
