import React, { useState } from "react";
import { Mic, Search, Sparkles, Building2, Gift, Lightbulb, Languages, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { AudioButton } from "../common/AudioButton";
import { startSpeechRecognition, isSpeechRecognitionSupported } from "../../utils/speechUtils";

export const HeroSection = ({ onSearch, onOpenEligibilityQuiz }) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);

  const introSpeechText = {
    mr: "नमस्कार! भाषाब्रिजवर आपले स्वागत आहे. हे ग्रामीण महाराष्ट्रातील उद्योजकांसाठी भाषा सुलभीकरण व्यासपीठ आहे. येथे सरकारी योजना, नवीन ग्रामीण व्यवसाय कल्पना आणि उद्योजकता शिक्षण तुमच्या स्वतःच्या सोप्या मराठी भाषेत उपलब्ध आहे. खालील शोधपट्टीवर बोलून किंवा लिहून माहिती शोधा.",
    hi: "नमस्ते! भाषाब्रिज में आपका स्वागत है। यह ग्रामीण उद्यमियों के लिए भाषा सुगमता मंच है। यहाँ सरकारी योजनाएं, नए व्यवसाय विचार और उद्यमिता शिक्षा सरल भाषा में उपलब्ध हैं।",
    en: "Welcome to BhashaBridge! This is a language accessibility platform for rural entrepreneurs in Maharashtra. Access government schemes, business blueprints, and entrepreneurship lessons in simple language."
  };

  const quickSearchPills = [
    { label: "🌾 हळद प्रक्रिया", query: "हळद" },
    { label: "👩 महिला बचत गट", query: "बचत गट" },
    { label: "🥛 दुग्ध संकलन", query: "दुग्ध" },
    { label: "🏛️ PMEGP योजना", query: "PMEGP" },
    { label: "💰 अण्णासाहेब पाटील", query: "अण्णासाहेब" }
  ];

  const handleVoiceSearch = () => {
    if (!isSpeechRecognitionSupported()) {
      alert("Voice input is not supported in this browser. Please use Google Chrome or Microsoft Edge.");
      return;
    }

    if (isListening) return;

    setIsListening(true);
    startSpeechRecognition({
      lang: language,
      onResult: (transcript) => {
        setSearchQuery(transcript);
        setIsListening(false);
        if (onSearch) onSearch(transcript);
      },
      onError: (err) => {
        console.warn("Speech error:", err);
        setIsListening(false);
      },
      onEnd: () => {
        setIsListening(false);
      }
    });
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (onSearch) onSearch(val);
  };

  const handlePillClick = (query) => {
    setSearchQuery(query);
    if (onSearch) onSearch(query);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  const quickStats = t("heroQuickStats") || {
    schemes: "१०+ शासकीय योजना",
    subsidy: "३५% पर्यंत थेट अनुदान",
    ideas: "१५+ ग्रामीण व्यवसाय",
    languages: "३ भाषांमध्ये उपलब्ध"
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Top Innovation Badge */}
          <div className="hero-badge-row">
            <span className="badge-pulse-dot" />
            <Sparkles size={15} color="var(--primary)" />
            <span>{t("heroBadge")}</span>
          </div>

          {/* Main Title with high-contrast startup typography */}
          <h1 className="hero-title">
            {t("heroTitle")}
          </h1>

          {/* Description */}
          <p className="hero-description">{t("heroDescription")}</p>

          {/* Audio Introduction Strip */}
          <div className="hero-audio-bar">
            <div className="audio-prompt-text">
              <span className="audio-wave-icon">🔊</span>
              <span>कमी वाचनाची सवय आहे? संपूर्ण माहिती स्वतःच्या भाषेत ऐका</span>
            </div>
            <AudioButton
              text={introSpeechText[language] || introSpeechText.mr}
              id="hero-intro"
              label={t("heroListenIntro")}
            />
          </div>

          {/* Voice & Text Search Input */}
          <form className="voice-search-wrapper" onSubmit={handleFormSubmit}>
            <Search size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder={t("heroVoiceSearchPlaceholder")}
              aria-label="Search schemes and business ideas"
            />
            <button
              type="button"
              className={`voice-mic-btn ${isListening ? "listening" : ""}`}
              onClick={handleVoiceSearch}
              title={isListening ? t("listening") : t("heroVoiceBtn")}
            >
              <Mic size={18} />
              <span>{isListening ? t("listening") : t("heroVoiceBtn")}</span>
            </button>
          </form>

          {/* Suggested Quick Search Chips */}
          <div className="hero-quick-chips">
            <span className="quick-chips-label">उदा:</span>
            {quickSearchPills.map((pill, idx) => (
              <button
                key={idx}
                type="button"
                className="hero-chip-btn"
                onClick={() => handlePillClick(pill.query)}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Primary CTA: Eligibility Quiz Launcher */}
          <div className="hero-cta-wrapper">
            <button
              type="button"
              className="btn-primary hero-cta-btn"
              onClick={onOpenEligibilityQuiz}
            >
              <span>🎯 {t("checkEligibilityBtn")}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick Metrics Dashboard Strip (Startup SaaS Style) */}
          <div className="hero-metrics-grid">
            <div className="metric-card">
              <div className="metric-icon-box orange">
                <Building2 size={20} />
              </div>
              <div className="metric-details">
                <strong>{quickStats.schemes}</strong>
                <span>PMEGP, CMEGP, अण्णासाहेब पाटील</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box green">
                <Gift size={20} />
              </div>
              <div className="metric-details">
                <strong>{quickStats.subsidy}</strong>
                <span>थेट बँक अनुदान व बिनव्याजी कर्ज</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box gold">
                <Lightbulb size={20} />
              </div>
              <div className="metric-details">
                <strong>{quickStats.ideas}</strong>
                <span>नफा कॅल्क्युलेटर व यंत्र आराखडा</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box blue">
                <Languages size={20} />
              </div>
              <div className="metric-details">
                <strong>{quickStats.languages}</strong>
                <span>मराठी, हिंदी आणि English</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars Accessibility Highlight Pills */}
          <div className="accessibility-pills">
            <span className="access-pill">{t("accessPill1")}</span>
            <span className="access-pill">{t("accessPill2")}</span>
            <span className="access-pill">{t("accessPill3")}</span>
            <span className="access-pill">{t("accessPill4")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
