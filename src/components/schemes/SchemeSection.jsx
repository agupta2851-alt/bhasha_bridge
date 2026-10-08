import React, { useState, useMemo } from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { schemesData } from "../../data/schemesData";
import { SchemeCard } from "./SchemeCard";
import { SchemeDetailModal } from "./SchemeDetailModal";
import { EligibilityQuizModal } from "./EligibilityQuizModal";

export const SchemeSection = ({ searchQuery = "" }) => {
  const { language, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Category filters
  const categories = [
    { id: "all", label: t("schemeFilterAll") },
    { id: "agri", label: t("schemeFilterAgri") },
    { id: "women", label: t("schemeFilterWomen") },
    { id: "youth", label: t("schemeFilterYouth") },
    { id: "micro", label: t("schemeFilterMicro") }
  ];

  // Filtered schemes based on category & search term
  const filteredSchemes = useMemo(() => {
    return schemesData.filter((scheme) => {
      // Category filter supporting multi-dimensional scheme classification
      const matchesCategory =
        activeCategory === "all" ||
        scheme.category === activeCategory ||
        (activeCategory === "agri" && (scheme.businessType === "agro" || scheme.businessType === "livestock" || scheme.category === "agri")) ||
        (activeCategory === "women" && (scheme.beneficiary === "women" || scheme.beneficiary === "shg" || scheme.category === "women")) ||
        (activeCategory === "youth" && (scheme.beneficiary === "youth" || scheme.category === "youth")) ||
        (activeCategory === "micro" && (scheme.businessType === "manufacturing" || scheme.businessType === "service" || scheme.category === "micro"));

      // Search filter
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const name = (
        (typeof scheme.names === "object" && scheme.names ? (scheme.names[language] || scheme.names.mr || scheme.names.en) : null) ||
        scheme.nativeName ||
        scheme.name ||
        ""
      ).toLowerCase();

      const simple = (
        (typeof scheme.inSimpleWords === "object" && scheme.inSimpleWords ? (scheme.inSimpleWords[language] || scheme.inSimpleWords.mr || scheme.inSimpleWords.en) : scheme.inSimpleWords) ||
        scheme.learnInYourLanguage ||
        scheme.whoCanApply ||
        ""
      ).toLowerCase();

      const tagline = (
        (typeof scheme.tagline === "object" && scheme.tagline ? (scheme.tagline[language] || scheme.tagline.mr || scheme.tagline.en) : scheme.tagline) ||
        scheme.shortDescription ||
        ""
      ).toLowerCase();

      const matchesSearch = name.includes(q) || simple.includes(q) || tagline.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, language]);

  return (
    <section className="app-section" id="schemes-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">🏛️ {t("schemesTitle")}</h2>
            <p className="section-subtitle">{t("schemesSubtitle")}</p>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={() => setIsQuizOpen(true)}
            style={{ padding: "10px 20px" }}
          >
            <Sparkles size={18} />
            <span>{t("checkEligibilityBtn")}</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="filter-bar" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {filteredSchemes.length > 0 ? (
          <div className="cards-grid">
            {filteredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onOpenDetails={(sch) => setSelectedScheme(sch)}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "48px 20px",
              background: "white",
              borderRadius: "var(--radius-lg)",
              border: "1px dashed var(--border-color)"
            }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
              या शोधासाठी कोणतीही योजना सापडली नाही. कृपया इतर शब्द वापरून पहा किंवा 'सर्व योजना' निवडा.
            </p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setActiveCategory("all")}
              style={{ marginTop: "14px" }}
            >
              सर्व योजना पहा
            </button>
          </div>
        )}

        {/* Detail Modal */}
        <SchemeDetailModal
          scheme={selectedScheme}
          isOpen={!!selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />

        {/* 3-Step Eligibility Quiz Modal */}
        <EligibilityQuizModal
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          onSelectScheme={(sch) => setSelectedScheme(sch)}
        />
      </div>
    </section>
  );
};
