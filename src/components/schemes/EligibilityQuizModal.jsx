import React, { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import { Modal } from "../common/Modal";
import { useLanguage } from "../../context/LanguageContext";
import { schemesData } from "../../data/schemesData";

export const EligibilityQuizModal = ({ isOpen, onClose, onSelectScheme }) => {
  const { language, t } = useLanguage();

  const [step1Type, setStep1Type] = useState("agri");
  const [step2Capital, setStep2Capital] = useState("mid");
  const [step3Category, setStep3Category] = useState("women");
  const [matchingSchemes, setMatchingSchemes] = useState(null);

  const handleCalculateMatch = () => {
    // Logic to find best matching schemes
    let matches = [];

    if (step3Category === "women" || step1Type === "shg") {
      matches.push(schemesData.find(s => s.id === "umed-shg"));
      matches.push(schemesData.find(s => s.id === "pmegp"));
    } else if (step1Type === "agri") {
      matches.push(schemesData.find(s => s.id === "cmegp"));
      matches.push(schemesData.find(s => s.id === "nabard-agri"));
      matches.push(schemesData.find(s => s.id === "annasaheb-patil"));
    } else if (step2Capital === "low") {
      matches.push(schemesData.find(s => s.id === "mudra"));
      matches.push(schemesData.find(s => s.id === "annasaheb-patil"));
    } else {
      matches.push(schemesData.find(s => s.id === "pmegp"));
      matches.push(schemesData.find(s => s.id === "cmegp"));
      matches.push(schemesData.find(s => s.id === "annasaheb-patil"));
    }

    // Filter out undefined and duplicates
    matches = matches.filter((item, idx, arr) => item && arr.findIndex(x => x.id === item.id) === idx);
    setMatchingSchemes(matches);
  };

  const handleReset = () => {
    setMatchingSchemes(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("quizTitle")}
      maxWidth="680px"
      footer={
        matchingSchemes ? (
          <button type="button" className="btn-secondary" onClick={handleReset}>
            <RotateCcw size={16} />
            <span>पुन्हा तपासा (Reset)</span>
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={handleCalculateMatch}>
            <Sparkles size={16} />
            <span>{t("quizBtnFind")}</span>
          </button>
        )
      }
    >
      {!matchingSchemes ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            {t("quizSubtitle")}
          </p>

          {/* Question 1: Business Category */}
          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
              {t("quizStep1")}
            </label>
            <div className="quiz-grid-2">
              {[
                { id: "agri", label: "🌾 शेती व प्रक्रिया (Agro / Dairy)" },
                { id: "manufacturing", label: "⚙️ उत्पादन (Manufacturing)" },
                { id: "shg", label: "👥 महिला बचत गट (SHG / Home)" },
                { id: "service", label: "🏪 दुकान व सेवा (Retail / Service)" }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setStep1Type(opt.id)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: step1Type === opt.id ? "2px solid var(--primary)" : "1px solid var(--border-color)",
                    background: step1Type === opt.id ? "var(--primary-subtle)" : "white",
                    color: step1Type === opt.id ? "var(--primary-dark)" : "var(--text-main)",
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Capital Needed */}
          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
              {t("quizStep2")}
            </label>
            <div className="quiz-grid-3">
              {[
                { id: "low", label: "₹ ५० हजारच्या आत" },
                { id: "mid", label: "₹ ५० हजार ते ५ लाख" },
                { id: "high", label: "₹ ५ लाख ते ५० लाख" }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setStep2Capital(opt.id)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: step2Capital === opt.id ? "2px solid var(--primary)" : "1px solid var(--border-color)",
                    background: step2Capital === opt.id ? "var(--primary-subtle)" : "white",
                    color: step2Capital === opt.id ? "var(--primary-dark)" : "var(--text-main)",
                    fontWeight: 600,
                    textAlign: "center",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Category / Group */}
          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
              {t("quizStep3")}
            </label>
            <div className="quiz-grid-2">
              {[
                { id: "women", label: "👩 महिला / बचत गट (३५% सबसिडी)" },
                { id: "youth", label: "🎓 तरुण उद्योजक (वय १८-४५)" },
                { id: "farmer", label: "🚜 शेतकरी / FPO गट" },
                { id: "general", label: "🏡 सर्वसाधारण ग्रामीण नागरिक" }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setStep3Category(opt.id)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: step3Category === opt.id ? "2px solid var(--primary)" : "1px solid var(--border-color)",
                    background: step3Category === opt.id ? "var(--primary-subtle)" : "white",
                    color: step3Category === opt.id ? "var(--primary-dark)" : "var(--text-main)",
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Results Section */
        <div>
          <div
            style={{
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              padding: "14px 18px",
              borderRadius: "var(--radius-md)",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <Sparkles size={22} color="var(--secondary)" />
            <div>
              <strong style={{ color: "var(--secondary-dark)", fontSize: "1.05rem" }}>
                {t("quizResultTitle")}
              </strong>
              <p style={{ fontSize: "0.88rem", color: "#065f46" }}>
                तुमच्या निवडीनुसार या योजनांमध्ये तुम्हाला कमाल अनुदान आणि बिनव्याजी कर्ज मिळू शकते:
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {matchingSchemes.map(sch => (
              <div
                key={sch.id}
                style={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  padding: "14px 18px",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px"
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)" }}>
                    {sch.names[language] || sch.names.mr}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--secondary-dark)", fontWeight: 600, marginTop: "2px" }}>
                    🎁 {sch.subsidy[language] || sch.subsidy.mr}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    onClose();
                    onSelectScheme(sch);
                  }}
                  style={{ padding: "7px 14px", fontSize: "0.85rem", whiteSpace: "nowrap" }}
                >
                  <span>कागदपत्रे पहा</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
};
