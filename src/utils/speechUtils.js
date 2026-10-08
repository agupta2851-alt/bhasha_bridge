// Module-level speech utterance tracker to prevent garbage collection and ReferenceError
let _currentUtterance = null;

/**
 * Speak text aloud using browser's native SpeechSynthesis
 */
export const speakText = (text, lang = "mr", onStart, onEnd, onError) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported in this browser.");
    if (onError) onError("Speech synthesis not supported");
    return;
  }

  // Cancel any ongoing speech
  try {
    window.speechSynthesis.cancel();
  } catch (err) {
    console.warn("Cancel speech error:", err);
  }

  // Strip markdown formatting like **bold** or bullet symbols before speaking
  const cleanText = text
    .replace(/[*#_`]/g, "")
    .replace(/[•\-\d+.]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  _currentUtterance = utterance;

  // Language mapping
  const langMap = {
    mr: "mr-IN",
    hi: "hi-IN",
    en: "en-IN"
  };

  const targetLocale = langMap[lang] || "mr-IN";
  utterance.lang = targetLocale;
  utterance.rate = 0.95; // Slightly slower for clear rural understanding
  utterance.pitch = 1.0;

  // Find best available voice
  const setVoiceAndSpeak = () => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      // Look for exact locale match (e.g. mr-IN or hi-IN)
      let matchedVoice = voices.find(v => v.lang === targetLocale);
      // If mr-IN voice isn't present in OS, fallback to hi-IN which correctly pronounces Devanagari
      if (!matchedVoice && targetLocale === "mr-IN") {
        matchedVoice = voices.find(v => v.lang.startsWith("hi") || v.lang.includes("IN"));
      }
      if (!matchedVoice) {
        matchedVoice = voices.find(v => v.lang.includes("IN"));
      }
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      _currentUtterance = null;
      console.warn("Speech synthesis error:", e);
      if (onError) onError(e);
    };

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.speak(utterance);
  };

  // Some browsers populate voices asynchronously
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      setVoiceAndSpeak();
    };
  } else {
    setVoiceAndSpeak();
  }
};

/**
 * Stop any current read-aloud speech
 */
export const stopSpeaking = () => {
  _currentUtterance = null;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
};

/**
 * Check if the browser is currently speaking
 */
export const isSpeaking = () => {
  return "speechSynthesis" in window && window.speechSynthesis.speaking;
};

/**
 * Check if Speech Recognition (Voice Input) is supported
 */
export const isSpeechRecognitionSupported = () => {
  return "webkitSpeechRecognition" in window || "SpeechRecognition" in window;
};

/**
 * Initialize Speech-to-Text Recognition for Voice Search / Assistant
 */
export const startSpeechRecognition = ({ lang = "mr", onResult, onError, onEnd }) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (onError) onError("Voice recognition is not supported on this browser.");
    return null;
  }

  const recognition = new SpeechRecognition();
  const langMap = {
    mr: "mr-IN",
    hi: "hi-IN",
    en: "en-IN"
  };

  recognition.lang = langMap[lang] || "mr-IN";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    if (onResult) onResult(transcript);
  };

  recognition.onerror = (event) => {
    console.warn("Speech recognition error:", event.error);
    if (onError) onError(event.error);
  };

  recognition.onend = () => {
    if (onEnd) onEnd();
  };

  try {
    recognition.start();
    return recognition;
  } catch (err) {
    console.error("Recognition start error:", err);
    if (onError) onError(err);
    return null;
  }
};
