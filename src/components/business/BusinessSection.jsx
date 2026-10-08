import React, { useState, useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { businessIdeasData } from "../../data/businessIdeasData";
import { BusinessCard } from "./BusinessCard";
import { BusinessDetailModal } from "./BusinessDetailModal";

export const BusinessSection = ({ searchQuery = "" }) => {
  const { language, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIdea, setSelectedIdea] = useState(null);

  const categories = [
    { id: "all", label: t("ideaFilterAll") },
    { id: "low", label: t("ideaFilterLow") },
    { id: "mid", label: t("ideaFilterMid") },
    { id: "high", label: t("ideaFilterHigh") },
    { id: "agri", label: "🌾 कृषी उद्योग" },
    { id: "home", label: "🏡 गृहउद्योग" },
    { id: "digital", label: "💻 डिजिटल सेवा" },
    { id: "local", label: "🪵 स्थानिक संपत्ती" }
  ];

  const filteredIdeas = useMemo(() => {
    return businessIdeasData.filter((idea) => {
      let matchesCategory = true;
      if (activeCategory === "low") {
        matchesCategory =
          (idea.investmentVal && idea.investmentVal <= 50000) ||
          idea.category === "low" ||
          (idea.investment && (idea.investment.includes("३०,०००") || idea.investment.includes("४०,०००") || idea.investment.includes("५०,०००")));
      } else if (activeCategory === "mid") {
        matchesCategory =
          (idea.investmentVal && idea.investmentVal > 50000 && idea.investmentVal <= 200000) ||
          idea.category === "mid" ||
          (idea.investment && (idea.investment.includes("१ लाख") || idea.investment.includes("१.५ लाख") || idea.investment.includes("२ लाख")));
      } else if (activeCategory === "high") {
        matchesCategory =
          (idea.investmentVal && idea.investmentVal > 200000) ||
          idea.category === "high" ||
          (idea.investment && (idea.investment.includes("२.५ लाख") || idea.investment.includes("३ लाख") || idea.investment.includes("५ लाख")));
      } else if (activeCategory !== "all") {
        matchesCategory = idea.category === activeCategory;
      }

      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const title = (
        (typeof idea.titles === "object" && idea.titles ? (idea.titles[language] || idea.titles.mr || idea.titles.en) : null) ||
        idea.title ||
        ""
      ).toLowerCase();

      const tagline = (
        (typeof idea.tagline === "object" && idea.tagline ? (idea.tagline[language] || idea.tagline.mr || idea.tagline.en) : null) ||
        (typeof idea.tagline === "string" ? idea.tagline : "") ||
        ""
      ).toLowerCase();

      const overview = (
        (typeof idea.overview === "object" && idea.overview ? (idea.overview[language] || idea.overview.mr || idea.overview.en) : null) ||
        (typeof idea.overview === "string" ? idea.overview : "") ||
        ""
      ).toLowerCase();

      const matchesSearch = title.includes(q) || tagline.includes(q) || overview.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, language]);

  return (
    <section className="app-section" id="ideas-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">💡 {t("ideasTitle")}</h2>
            <p className="section-subtitle">{t("ideasSubtitle")}</p>
          </div>
        </div>

        {/* Filter Bar */}
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
        {filteredIdeas.length > 0 ? (
          <div className="cards-grid">
            {filteredIdeas.map((idea) => (
              <BusinessCard
                key={idea.id}
                idea={idea}
                onOpenDetails={(id) => setSelectedIdea(id)}
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
              या शोधासाठी कोणताही उद्योग आराखडा सापडला नाही. कृपया इतर शब्द वापरून पहा.
            </p>
          </div>
        )}

        {/* Blueprint Detail Modal */}
        <BusinessDetailModal
          idea={selectedIdea}
          isOpen={!!selectedIdea}
          onClose={() => setSelectedIdea(null)}
        />
      </div>
    </section>
  );
};
