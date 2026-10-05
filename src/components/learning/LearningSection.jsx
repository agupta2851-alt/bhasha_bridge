import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { learningData } from "../../data/learningData";
import { LessonCard } from "./LessonCard";

export const LearningSection = () => {
  const { t } = useLanguage();

  return (
    <section className="app-section" id="pathshala-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">📚 {t("pathshalaTitle")}</h2>
            <p className="section-subtitle">{t("pathshalaSubtitle")}</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {learningData.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </section>
  );
};
