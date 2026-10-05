// Metadata and mock implementations for AI Accessibility Tools
// Structure cleanly prepared for Google Gemini API or cloud API integration

export const aiToolsData = [
  {
    id: "tool-text-translation",
    name: "Text Translation",
    nativeName: "मजकूर भाषांतर (Text Translation)",
    shortDesc: "व्यवसाय विषयक क्लिष्ट इंग्रजी व हिंदी मजकुराचे मराठी आणि प्रादेशिक बोलीभाषांमध्ये अचूक रूपांतर.",
    icon: "Languages",
    statusBadge: "Active Prototype",
    supportedLangs: "मराठी, हिन्दी, English, अहिराणी, वऱ्हाडी, मालवणी, कोंकणी",
    actionLabel: "भाषांतर करा (Try Demo)",
    sampleInput: "Micro, Small and Medium Enterprises (MSMEs) are eligible for a 35% capital subsidy under the PMEGP scheme for setting up agro-processing plants.",
    sampleOutput: {
      mr: "सूक्ष्म, लघू व मध्यम उद्योगांना (MSME) कृषी प्रक्रिया प्रकल्प सुरू करण्यासाठी PMEGP योजनेअंतर्गत ३५% भांडवली अनुदान मिळते.",
      hi: "सूक्ष्म, लघु एवं मध्यम उद्यमों (MSME) को कृषि प्रसंस्करण इकाई लगाने हेतु PMEGP योजना में ३५% पूंजीगत सब्सिडी मिलती है।",
      ahirani: "लहान-मोठा धंदा सुरू करणासले कृषी प्रक्रिया युनिट ले PMEGP योजनामान ३५% सरकारी अनुदान मिळस.",
      varhadi: "लहान-सहान उद्योग टाकणाऱ्याले कृषी प्रक्रिया युनिट सुरू कराले PMEGP योजनेतून ३५% थेट सबसिडी भेटते बाप्पा.",
      malvani: "ल्हान-मोठे उद्योग सुरू करूक कृषी प्रक्रिया प्रकल्पासाठी PMEGP योजनेतून ३५% थेट सबसिडी मेळता."
    }
  },

  {
    id: "tool-voice-translation",
    name: "Voice Translation",
    nativeName: "आवाजी भाषांतर (Voice Translation)",
    shortDesc: "एका भाषेत बोला आणि दुसऱ्या स्थानिक भाषेत spoken audio द्वारे ऐका.",
    icon: "Mic",
    statusBadge: "Web Speech Demo",
    supportedLangs: "मराठी, हिंदी, इंग्रजी",
    actionLabel: "बोलून भाषांतर करा (Try Voice)",
    sampleInput: "मला दुग्धव्यवसाय सुरू करण्यासाठी कर्ज हवे आहे.",
    sampleOutput: {
      en: "I need a loan to start a dairy farming business.",
      hi: "मुझे डेयरी व्यवसाय शुरू करने के लिए ऋण चाहिए।"
    }
  },

  {
    id: "tool-tts",
    name: "Text-to-Speech (TTS)",
    nativeName: "मजकूर वाचन (Text-to-Speech)",
    shortDesc: "कमी साक्षर किंवा वाचण्यास असमर्थ असलेल्या ग्रामीण बांधवांसाठी मजकूर स्पष्ट उच्चारात वाचून दाखवणे.",
    icon: "Volume2",
    statusBadge: "Native Speech API",
    supportedLangs: "भारतीय उच्चार (mr-IN, hi-IN, en-IN)",
    actionLabel: "आवाज ऐका (Listen Demo)",
    sampleInput: "उद्यम नोंदणी भारत सरकारच्या पोर्टलवर १००% मोफत आहे. कोणत्याही एजंटला पैसे देऊ नका.",
    sampleOutput: "Audio played natively via browser SpeechSynthesis"
  },

  {
    id: "tool-stt",
    name: "Speech-to-Text (STT)",
    nativeName: "आवाजातून मजकूर (Speech-to-Text)",
    shortDesc: "टायपिंग न करता फक्त माईकवर बोलून प्रश्न, शोध किंवा कागदपत्रांची माहिती तयार करणे.",
    icon: "Speech",
    statusBadge: "Microphone Active",
    supportedLangs: "मराठी व हिंदी व्हॉइस इनपुट",
    actionLabel: "माईकवर बोला (Speak Demo)",
    sampleInput: "Microphone Voice Stream",
    sampleOutput: "बोललेले शब्द अचूक युनिकोड मराठीत रूपांतरित होतात."
  },

  {
    id: "tool-simplifier",
    name: "Document Simplification",
    nativeName: "शासकीय जीआर सुलभीकरण (GR Simplifier)",
    shortDesc: "सरकारी जीआर आणि कायदेशीर परिपत्रकांमधील अवघड कायदेशीर शब्द काढून साध्या भाषेत सारांश देणे.",
    icon: "FileText",
    statusBadge: "Smart Local Engine",
    supportedLangs: "मराठी व हिंदी",
    actionLabel: "जीआर सोपा करा (Simplify Demo)",
    sampleInput: "शासन निर्णय क्रमांक: उद्योग-२०२३/प्र.क्र.४५: सदर योजनेंतर्गत इच्छुक लाभार्थ्याने ना-हरकत प्रमाणपत्र आणि प्रकल्प व्यवहार्यता अहवाल सादर केल्यास मार्जिन मनी सबसिडी डीबीटी द्वारे वितरित करण्यात येईल.",
    sampleOutput: {
      mr: "सोप्या शब्दात: जर तुम्ही ग्रामपंचायतीची परवानगी आणि खर्चाचे अंदाजपत्रक दिले, तर सरकार तुमचे अनुदानाचे पैसे थेट तुमच्या बँक खात्यात जमा करेल."
    }
  },

  {
    id: "tool-image-ocr",
    name: "Image Text Translation",
    nativeName: "छायाचित्रातील मजकूर वाचन (Image OCR)",
    shortDesc: "बँक फॉर्म, खत पाकिटे किंवा सरकारी पोस्टर्सचा फोटो काढून त्यातील मजकूर समजून घेणे.",
    icon: "Camera",
    statusBadge: "Vision Demo Ready",
    supportedLangs: "देवनागरी व रोमन लिपी",
    actionLabel: "फोटो स्कॅन करा (Scan Demo)",
    sampleInput: "खत पाकिटावरील तांत्रिक सूचनांचा फोटो",
    sampleOutput: {
      mr: "स्कॅन केलेला मजकूर: 'वापरण्याची पद्धत: प्रति एकर ५० किलो. पिकाची पेरणी करताना द्यावे. लहान मुलांच्या हातास लागू देऊ नये.'"
    }
  }
];
