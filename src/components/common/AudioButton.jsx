import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { speakText, stopSpeaking } from "../../utils/speechUtils";

export const AudioButton = ({ text, id, label, className = "" }) => {
  const { language, activeSpeechId, setActiveSpeechId, t } = useLanguage();

  const isCurrentSpeaking = activeSpeechId === id;

  const handleToggleSpeech = (e) => {
    e.stopPropagation();

    if (isCurrentSpeaking) {
      stopSpeaking();
      setActiveSpeechId(null);
    } else {
      setActiveSpeechId(id);
      speakText(
        text,
        language,
        () => setActiveSpeechId(id),
        () => setActiveSpeechId(null),
        () => setActiveSpeechId(null)
      );
    }
  };

  return (
    <button
      type="button"
      className={`audio-read-btn ${isCurrentSpeaking ? "speaking" : ""} ${className}`}
      onClick={handleToggleSpeech}
      title={isCurrentSpeaking ? t("stopAudio") : t("listenOutLoud")}
      aria-label={isCurrentSpeaking ? t("stopAudio") : t("listenOutLoud")}
    >
      {isCurrentSpeaking ? (
        <>
          <VolumeX size={17} />
          <span>{t("stopAudio")}</span>
        </>
      ) : (
        <>
          <Volume2 size={17} />
          <span>{label || t("listenOutLoud")}</span>
        </>
      )}
    </button>
  );
};
