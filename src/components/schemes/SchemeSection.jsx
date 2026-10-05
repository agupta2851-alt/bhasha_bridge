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
      // Category filter
      const matchesCategory = activeCategory === "all" || scheme.category === activeCategory;

      // Search filter
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const name = (scheme.names[language] || scheme.names.mr).toLowerCase();
      const simple = (scheme.inSimpleWords[language] || scheme.inSimpleWords.mr).toLowerCase();
      const tagline = (scheme.tagline[language] || scheme.tagline.mr).toLowerCase();

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
