import React from "react";
import { Headphones } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { AudioButton } from "../common/AudioButton";

export const LessonCard = ({ lesson }) => {
  const { language, t } = useLanguage();

  const title = lesson.titles[language] || lesson.titles.mr;
  const summary = lesson.shortSummary[language] || lesson.shortSummary.mr;
  const audioScript = lesson.audioText[language] || lesson.audioText.mr;
  const takeaways = lesson.takeaways[language] || lesson.takeaways.mr;
  const proTip = lesson.proTip[language] || lesson.proTip.mr;

  return (
    <div className="lesson-card">
      <div>
        {/* Top Badges */}
        <div className="card-top-row">
          <span
            style={{
              background: "#ffedd5",
              color: "var(--primary-dark)",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: "var(--radius-full)",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px"
            }}
          >
            <Headphones size={14} />
            <span>{t("lessonAudioBadge")}</span>
          </span>
          <span style={{ fontSize: "0.78rem", color: "var(--text-subtle)", fontWeight: 600 }}>
            {t("readTime")}
          </span>
        </div>

        {/* Title */}
        <h3 className="scheme-title" style={{ fontSize: "1.2rem", marginTop: "8px" }}>
          {title}
        </h3>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "16px" }}>
          {summary}
        </p>

        {/* Takeaways */}
        <div style={{ marginTop: "12px" }}>
          <strong style={{ fontSize: "0.85rem", color: "var(--text-main)" }}>
            {t("keyTakeaways")}
          </strong>
          <ul className="takeaway-list">
            {takeaways.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="protip-box">
          <strong>💡 {t("proTipTitle")} </strong>
          <span>{proTip}</span>
        </div>
      </div>

      {/* Action Audio Read-Aloud */}
      <div className="card-actions-row" style={{ marginTop: "20px" }}>
        <AudioButton
          text={audioScript}
          id={`lesson-audio-${lesson.id}`}
          label={t("listenLesson")}
        />
      </div>
    </div>
  );
};
