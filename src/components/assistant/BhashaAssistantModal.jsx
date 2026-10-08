import React, { useState, useRef, useEffect } from "react";
import { Send, Mic, Volume2 } from "lucide-react";
import { Modal } from "../common/Modal";
import { useLanguage } from "../../context/LanguageContext";
import { assistantKnowledge, getAssistantFallback } from "../../data/assistantKnowledge";
import { startSpeechRecognition, isSpeechRecognitionSupported, speakText } from "../../utils/speechUtils";

export const BhashaAssistantModal = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const idCounterRef = useRef(1);

  // Track modal open transitions cleanly
  const prevOpenRef = useRef(false);
  const prevLangRef = useRef(language);

  useEffect(() => {
    const justOpened = isOpen && !prevOpenRef.current;
    const langChanged = isOpen && language !== prevLangRef.current;

    if (justOpened || langChanged) {
      setMessages([
        {
          id: "msg-welcome",
          sender: "assistant",
          text: t("assistantGreeting")
        }
      ]);
    }
    prevOpenRef.current = isOpen;
    prevLangRef.current = language;
  }, [isOpen, language, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendQuery = (queryText) => {
    const q = (queryText || inputValue).trim();
    if (!q) return;

    idCounterRef.current += 1;
    const currentId = idCounterRef.current;

    // Add user message
    const userMsg = { id: `msg-user-${currentId}`, sender: "user", text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate intelligent rural knowledge response
    setTimeout(() => {
      const qLower = q.toLowerCase();
      let matchedItem = assistantKnowledge.find((item) =>
        item.keywords.some((kw) => qLower.includes(kw.toLowerCase()))
      );

      let reply = "";
      if (matchedItem) {
        reply = matchedItem.responses[language] || matchedItem.responses.mr;
      } else {
        reply = getAssistantFallback(q, language);
      }

      idCounterRef.current += 1;
      const botMsg = {
        id: `msg-bot-${idCounterRef.current}`,
        sender: "assistant",
        text: reply
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleVoiceInput = () => {
    if (!isSpeechRecognitionSupported()) {
      alert("Voice recognition is not supported in this browser. Please use Google Chrome or Edge.");
      return;
    }

    if (isListening) return;

    setIsListening(true);
    startSpeechRecognition({
      lang: language,
      onResult: (transcript) => {
        setIsListening(false);
        handleSendQuery(transcript);
      },
      onError: () => setIsListening(false),
      onEnd: () => setIsListening(false)
    });
  };

  const handleSpeakMessage = (text) => {
    speakText(text, language);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`🤖 ${t("assistantTitle")}`}
      maxWidth="720px"
    >
      <div className="chat-window">
        {/* Chat Messages */}
        <div className="chat-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-bubble ${msg.sender}`}
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, opacity: 0.85 }}>
                  {msg.sender === "assistant" ? "🤖 भाषा सहाय्यक" : "👤 तुम्ही"}
                </span>
                {msg.sender === "assistant" && (
                  <button
                    type="button"
                    onClick={() => handleSpeakMessage(msg.text)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--primary)",
                      cursor: "pointer",
                      padding: "2px 4px",
                      borderRadius: "4px"
                    }}
                    title={t("listenOutLoud")}
                  >
                    <Volume2 size={16} />
                  </button>
                )}
              </div>
              <div>{msg.text}</div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-bubble assistant" style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
              <span>उत्तर शोधत आहे... ⏳</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Question Pills */}
        <div className="chat-quick-questions">
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-subtle)", whiteSpace: "nowrap" }}>
            💡 विचारा:
          </span>
          {Array.isArray(t("quickQuestions")) &&
            t("quickQuestions").map((q, idx) => (
              <button
                key={idx}
                type="button"
                className="quick-q-pill"
                onClick={() => handleSendQuery(q)}
              >
                {q}
              </button>
            ))}
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar">
          <input
            type="text"
            className="search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendQuery()}
            placeholder={isListening ? t("listening") : t("assistantInputPlaceholder")}
            style={{
              background: "#f8fafc",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-full)",
              padding: "10px 16px"
            }}
          />

          <button
            type="button"
            className={`voice-mic-btn ${isListening ? "listening" : ""}`}
            onClick={handleVoiceInput}
            title={t("assistantVoiceTip")}
            style={{ padding: "10px 14px" }}
          >
            <Mic size={18} />
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => handleSendQuery()}
            disabled={!inputValue.trim()}
            style={{ padding: "10px 18px", borderRadius: "var(--radius-full)" }}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
