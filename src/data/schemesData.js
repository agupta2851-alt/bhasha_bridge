// Official Government Schemes & Opportunities Relevant to Maharashtra
// Formatted for plain-language accessibility and multi-dimensional filtering

export const schemeFilterOptions = {
  businessTypes: [
    { id: "all", label: "सर्व व्यवसाय प्रकार (All Types)" },
    { id: "manufacturing", label: "उत्पादन (Manufacturing)" },
    { id: "service", label: "सेवा व्यवसाय (Service)" },
    { id: "agro", label: "कृषी व शेतीपूरक (Agro Processing)" },
    { id: "livestock", label: "पशुधन व दुग्ध (Livestock)" }
  ],
  locations: [
    { id: "all", label: "सर्व परिसर (All Locations)" },
    { id: "rural", label: "ग्रामीण भाग (Rural Area)" },
    { id: "urban", label: "शहरी / निमशहरी (Urban / Semi-Urban)" }
  ],
  beneficiaries: [
    { id: "all", label: "सर्व लाभार्थी (All Beneficiaries)" },
    { id: "women", label: "महिला उद्योजक (Women Specific)" },
    { id: "youth", label: "तरुण उद्योजक (Youth 18-45)" },
    { id: "shg", label: "बचत गट (Self Help Groups)" }
  ],
  stages: [
    { id: "all", label: "सर्व टप्पे (All Stages)" },
    { id: "new", label: "नवीन उद्योग (Greenfield / New)" },
    { id: "expansion", label: "उद्योग विस्तार (Existing Expansion)" }
  ]
};

export const schemesData = [
  // 1. CMEGP
  {
    id: "cmegp",
    category: "youth",
    name: "Chief Minister Employment Generation Programme (CMEGP)",
    nativeName: "मुख्यमंत्री रोजगार निर्मिती कार्यक्रम (महाराष्ट्र शासन)",
    names: {
      mr: "मुख्यमंत्री रोजगार निर्मिती कार्यक्रम (CMEGP)",
      hi: "मुख्यमंत्री रोजगार सृजन कार्यक्रम (CMEGP)",
      en: "Chief Minister Employment Generation Programme (CMEGP)"
    },
    businessType: "manufacturing",
    location: "rural",
    beneficiary: "youth",
    stage: "new",
    shortDescription: "महाराष्ट्रातील ग्रामीण तरुणांना नवीन उत्पादन व सेवा उद्योग सुरू करण्यासाठी २५% ते ३५% थेट भांडवली अनुदान.",
    tagline: {
      mr: "महाराष्ट्रातील ग्रामीण तरुणांना नवीन उत्पादन व सेवा उद्योग सुरू करण्यासाठी २५% ते ३५% थेट भांडवली अनुदान.",
      hi: "महाराष्ट्र के ग्रामीण युवाओं को नए उत्पादन व सेवा उद्योग शुरू करने के लिए २५% से ३५% सीधी सब्सिडी।",
      en: "25% to 35% direct capital subsidy for rural youth in Maharashtra establishing manufacturing & service units."
    },
    subsidy: {
      mr: "२५% ते ३५% थेट शासकीय सबसिडी (कमाल ₹ १७.५ लाख)",
      hi: "२५% से ३५% सीधी सरकारी सब्सिडी",
      en: "25% to 35% Direct Capital Subsidy (Up to ₹ 17.5 Lakhs)"
    },
    whoCanApply: "महाराष्ट्राचा कोणताही १८ ते ४५ वर्षे वयोगटातील रहिवासी ज्याला नवीन उद्योग सुरू करायचा आहे.",
    inSimpleWords: {
      mr: "या योजनेचा मुख्य फायदा म्हणजे ५० लाखांच्या कारखान्यावर सरकार थेट १७.५ लाख रुपये स्वतः भरते. तुम्हाला फक्त बँकेचे हप्ते वेळेवर फेडायचे असतात.",
      hi: "५० लाख के प्रोजेक्ट पर सरकार १७.५ लाख रुपये खुद भरती है। आपको केवल बैंक की आसान किस्तें समय पर चुकानी होती हैं।",
      en: "On a ₹50 Lakh manufacturing project, the state government provides up to ₹17.5 Lakhs direct subsidy. You only repay the bank credit."
    },
    benefits: [
      "उत्पादन उद्योगासाठी कमाल ₹ ५० लाखांपर्यंत कर्ज.",
      "सेवा व्यवसायासाठी कमाल ₹ १० लाखांपर्यंत कर्ज.",
      "ग्रामीण भागातील महिला, शेतकरी व विशेष प्रवर्गासाठी ३५% थेट शासकीय अनुदान (सबसिडी).",
      "सर्वसाधारण प्रवर्गासाठी २५% अनुदान; स्वतःचे भांडवल फक्त ५% ते १०%."
    ],
    eligibility: [
      "उमेदवार महाराष्ट्राचा अधिवास (Domicile) असलेला असावा.",
      "₹ १० लाखांवरील प्रकल्पासाठी किमान ७ वी पास, ₹ २५ लाखांवर किमान १० वी पास.",
      "फक्त नवीन उद्योगाच्या स्थापनेसाठीच लाभ मिळतो."
    ],
    whoIsEligible: {
      mr: [
        "उमेदवार महाराष्ट्राचा अधिवास (Domicile) असलेला असावा.",
        "₹ १० लाखांवरील प्रकल्पासाठी किमान ७ वी पास, ₹ २५ लाखांवर किमान १० वी पास.",
        "फक्त नवीन उद्योगाच्या स्थापनेसाठीच लाभ मिळतो."
      ],
      hi: [
        "उम्मीदवार महाराष्ट्र का मूल निवासी होना चाहिए।",
        "१० लाख से अधिक के प्रोजेक्ट हेतु न्यूनतम ७वीं पास, २५ लाख से ऊपर १०वीं पास।",
        "केवल नए उद्यम की स्थापना के लिए लागू।"
      ],
      en: [
        "Applicant must possess Maharashtra domicile.",
        "Minimum 7th pass for projects above ₹10L; 10th pass for projects above ₹25L.",
        "Available exclusively for establishing new greenfield enterprises."
      ]
    },
    requiredDocuments: [
      "आधार कार्ड, पॅन कार्ड आणि अधिवास (Domicile) दाखला",
      "प्रकल्प अहवाल (Detailed Project Report - DPR)",
      "शैक्षणिक पात्रतेचा दाखला व पासपोर्ट फोटो",
      "जागेचा ७/१२ किंवा भाडेकरार व ग्रामपंचायत नाहरकत दाखला (NOC)"
    ],
    documents: {
      mr: [
        "आधार कार्ड, पॅन कार्ड आणि अधिवास (Domicile) दाखला",
        "प्रकल्प अहवाल (Detailed Project Report - DPR)",
        "शैक्षणिक पात्रतेचा दाखला व पासपोर्ट फोटो",
        "जागेचा ७/१२ किंवा भाडेकरार व ग्रामपंचायत नाहरकत दाखला (NOC)"
      ],
      hi: [
        "आधार कार्ड, पैन कार्ड एवं मूल निवास प्रमाण पत्र",
        "विस्तृत प्रोजेक्ट रिपोर्ट (DPR)",
        "शैक्षिक योग्यता प्रमाण पत्र एवं पासपोर्ट फोटो",
        "भूमि 7/12 अथवा किराया अनुबंध एवं ग्राम पंचायत NOC"
      ],
      en: [
        "Aadhaar Card, PAN Card, and Maharashtra Domicile Certificate",
        "Detailed Project Report (DPR)",
        "Educational Qualification Certificate and Passport Photos",
        "Land 7/12 or Rental Agreement and Gram Panchayat NOC"
      ]
    },
    howToApply: [
      "१. maha-cmegp.gov.in या अधिकृत पोर्टलवर ऑनलाइन नोंदणी करा.",
      "२. प्रकल्प अहवाल (DPR) आणि आवश्यक कागदपत्रे अपलोड करा.",
      "३. जिल्हा उद्योग केंद्र (DIC) अर्जाची तपासणी करून जिल्हास्तरीय समितीकडे मंजुरीसाठी पाठवते.",
      "४. मंजुरीनंतर बँक कर्ज वाटप करते आणि सबसिडी थेट बँकेत जमा होते."
    ],
    learnInYourLanguage: "या योजनेचा मुख्य फायदा म्हणजे ५० लाखांच्या कारखान्यावर सरकार थेट १७.५ लाख रुपये स्वतः भरते. तुम्हाला फक्त बँकेचे हप्ते वेळेवर फेडायचे असतात.",
    officialSourceUrl: "https://maha-cmegp.gov.in/",
    portalUrl: "https://maha-cmegp.gov.in/",
    sectors: ["उत्पादन व सेवा उद्योग"],
    disclaimer: "डेमो व शैक्षणिक मार्गदर्शनासाठी. अधिकृत अटी शासन परिपत्रकानुसार लागू राहतील."
  },

  // 2. PMEGP
  {
    id: "pmegp",
    category: "micro",
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    nativeName: "पंतप्रधान रोजगार निर्मिती कार्यक्रम (केंद्र सरकार)",
    names: {
      mr: "पंतप्रधान रोजगार निर्मिती कार्यक्रम (PMEGP)",
      hi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)",
      en: "Prime Minister's Employment Generation Programme (PMEGP)"
    },
    businessType: "manufacturing",
    location: "rural",
    beneficiary: "women",
    stage: "new",
    shortDescription: "ग्रामीण भागात डाळ मिल, हळद युनिट किंवा फॅक्टरी सुरू करण्यासाठी ३५% पर्यंत थेट राष्ट्रीय अनुदान.",
    tagline: {
      mr: "ग्रामीण भागात डाळ मिल, हळद युनिट किंवा फॅक्टरी सुरू करण्यासाठी ३५% पर्यंत थेट राष्ट्रीय अनुदान.",
      hi: "ग्रामीण क्षेत्र में दाल मिल, हल्दी इकाई या फैक्टरी शुरू करने के लिए ३५% तक सीधी राष्ट्रीय सब्सिडी।",
      en: "Up to 35% direct national subsidy for starting rural processing mills, food units, or factories."
    },
    subsidy: {
      mr: "ग्रामीण महिला व विशेष प्रवर्गासाठी ३५% थेट सबसिडी",
      hi: "ग्रामीण महिलाओं व विशेष श्रेणी हेतु ३५% सब्सिडी",
      en: "35% Direct Subsidy for Rural Women & Special Categories"
    },
    whoCanApply: "ग्रामीण व शहरी भागातील कोणताही १८ वर्षांवरील नागरिक, महिला बचत गट किंवा सहकारी संस्था.",
    inSimpleWords: {
      mr: "जर तुम्ही गावात १० लाख रुपयांचा मसाला उद्योग सुरू केला, तर सरकार ३.५ लाख रुपये अनुदान देते. तुम्हाला बँकेला फक्त ६.५ लाख परत करायचे असतात.",
      hi: "यदि आप गांव में १० लाख का मसाला उद्योग लगाते हैं, तो सरकार ३.५ लाख अनुदान देती है। आपको बैंक को सिर्फ ६.५ लाख चुकाने होते हैं।",
      en: "On a ₹10 Lakh spices unit, the government grants ₹3.5 Lakhs as subsidy. You only repay ₹6.5 Lakhs to the bank."
    },
    benefits: [
      "उत्पादन प्रकल्पासाठी कमाल ₹ ५० लाख आणि सेवा प्रकल्पासाठी ₹ २० लाख कर्ज.",
      "ग्रामीण भागात महिला, SC/ST, OBC आणि अल्पसंख्याकांना ३५% थेट सबसिडी.",
      "सर्वसाधारण ग्रामीण प्रवर्गासाठी २५% सबसिडी.",
      "यशस्वी परतफेडीनंतर दुसऱ्या टप्प्यात ₹ १ कोटींपर्यंत विस्तार कर्ज."
    ],
    eligibility: [
      "किमान वय १८ वर्षे पूर्ण असावे.",
      "₹ १० लाखांवरील उत्पादन प्रकल्पासाठी किमान ८ वी पास असणे आवश्यक.",
      "नवीन greenfield व्यवसाय स्थापन करणारा असावा."
    ],
    whoIsEligible: {
      mr: [
        "किमान वय १८ वर्षे पूर्ण असावे.",
        "₹ १० लाखांवरील उत्पादन प्रकल्पासाठी किमान ८ वी पास असणे आवश्यक.",
        "नवीन greenfield व्यवसाय स्थापन करणारा असावा."
      ],
      hi: [
        "न्यूनतम आयु १८ वर्ष पूर्ण हो।",
        "१० लाख से अधिक के विनिर्माण प्रोजेक्ट हेतु न्यूनतम ८वीं उत्तीर्ण।",
        "नया व्यवसाय स्थापित करने वाला होना चाहिए।"
      ],
      en: [
        "Minimum age of 18 years.",
        "At least 8th pass for manufacturing projects exceeding ₹10 Lakhs.",
        "Must be establishing a new greenfield enterprise."
      ]
    },
    requiredDocuments: [
      "आधार कार्ड व पॅन कार्ड",
      "विस्तृत प्रकल्प अहवाल (DPR)",
      "८ वी / १० वी गुणपत्रिका किंवा शाळा सोडल्याचा दाखला",
      "जातीचे प्रमाणपत्र (लागू असल्यास)",
      "ग्रामीण भाग रहिवासी दाखला व बँक पासबुक"
    ],
    documents: {
      mr: [
        "आधार कार्ड व पॅन कार्ड",
        "विस्तृत प्रकल्प अहवाल (DPR)",
        "८ वी / १० वी गुणपत्रिका किंवा शाळा सोडल्याचा दाखला",
        "जातीचे प्रमाणपत्र (लागू असल्यास)",
        "ग्रामीण भाग रहिवासी दाखला व बँक पासबुक"
      ],
      hi: [
        "आधार कार्ड एवं पैन कार्ड",
        "विस्तृत प्रोजेक्ट रिपोर्ट (DPR)",
        "८वीं/१०वीं की मार्कशीट या टीसी",
        "जाति प्रमाण पत्र (यदि लागू हो)",
        "ग्रामीण निवास प्रमाण पत्र एवं बैंक पासबुक"
      ],
      en: [
        "Aadhaar Card and PAN Card",
        "Detailed Project Report (DPR)",
        "8th/10th Marksheet or School Leaving Certificate",
        "Caste Certificate (if applicable for special subsidy)",
        "Rural Residence Proof and Bank Passbook"
      ]
    },
    howToApply: [
      "१. kviconline.gov.in पोर्टलवर PMEGP ऑनलाइन फॉर्म भरा.",
      "२. खादी ग्रामोद्योग (KVIC) किंवा जिल्हा उद्योग केंद्र (DIC) अर्जाची छाननी करते.",
      "३. बँक तुमच्या उद्योगाची प्रत्यक्ष पाहणी करून कर्ज मंजूर करते.",
      "४. सबसिडी ३ वर्षांसाठी बँकेत मुदत ठेव (TDR) म्हणून राहते आणि नंतर कर्जात वळती होते."
    ],
    learnInYourLanguage: "जर तुम्ही गावात १० लाख रुपयांचा मसाला उद्योग सुरू केला, तर सरकार ३.५ लाख रुपये अनुदान देते. तुम्हाला बँकेला फक्त ६.५ लाख परत करायचे असतात.",
    officialSourceUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
    portalUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
    sectors: ["राष्ट्रीय सूक्ष्म व खादी उद्योग"],
    disclaimer: "डेमो व शैक्षणिक मार्गदर्शनासाठी. अधिकृत अटी KVIC नियमांनुसार लागू राहतील."
  },

  // 3. UMED MSRLM (Women Bachat Gat)
  {
    id: "umed-shg",
    category: "women",
    name: "Maharashtra State Rural Livelihoods Mission (UMED - MSRLM)",
    nativeName: "उमेद - महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियान (महिला बचत गट)",
    names: {
      mr: "उमेद अभियान - महिला बचत गट कर्ज व अनुदान (MSRLM)",
      hi: "उमेद मिशन - महिला स्वयं सहायता समूह (MSRLM)",
      en: "UMED Mission - Women Self-Help Groups (MSRLM)"
    },
    businessType: "agro",
    location: "rural",
    beneficiary: "shg",
    stage: "new",
    shortDescription: "महिला बचत गटांना ₹ १५,००० फिरता निधी आणि ४% ते ७% सवलतीच्या दरात ₹ ५ ते २० लाखांचे बँक कर्ज.",
    tagline: {
      mr: "महिला बचत गटांना ₹ १५,००० फिरता निधी आणि ४% ते ७% सवलतीच्या दरात ₹ ५ ते २० लाखांचे बँक कर्ज.",
      hi: "महिला समूहों को ₹ १५,००० परिक्रामी निधि और मात्र ४% से ७% ब्याज पर ₹ ५ से २० लाख का बैंक ऋण।",
      en: "Revolving fund of ₹15,000 and subsidized 4%-7% bank credit linkage from ₹5 Lakhs to ₹20 Lakhs for women SHGs."
    },
    subsidy: {
      mr: "व्याज परतावा सबसिडी (केवळ ४% ते ७% प्रभावी व्याजदर)",
      hi: "ब्याज अनुदान (मात्र ४% से ७% प्रभावी ब्याज)",
      en: "Interest Subvention Subsidy (Effective 4%-7% Interest)"
    },
    whoCanApply: "ग्रामीण भागातील किमान १० ते २० महिलांचा नोंदणीकृत बचत गट (Self Help Group).",
    inSimpleWords: {
      mr: "महिला बचत गटांना बँकेकडून अत्यंत कमी व्याजाने लाखो रुपयांचे भांडवल मिळते. शिवणकाम, पापड-मसाले, शेळीपालन किंवा किराणा मालाच्या सामूहिक व्यवसायासाठी हे सर्वोत्तम आहे.",
      hi: "महिला स्वयं सहायता समूहों को कम ब्याज पर लाखों का बैंक कर्ज मिलता है। पापड़, मसाला, सिलाई या बकरी पालन के लिए यह सर्वोत्तम है।",
      en: "Women SHGs receive low-interest bank loans to launch collective village enterprises like tailoring, spice packaging, and poultry."
    },
    benefits: [
      "सुरुवातीला ₹ १५,००० फिरता निधी (Revolving Fund - RF) थेट अनुदान.",
      "गटाच्या व्यवसायासाठी ₹ १.५ लाखांपर्यंत समुदाय गुंतवणूक निधी (CIF).",
      "बँकेकडून पहिल्या टप्प्यात ₹ १ लाख, नंतर ₹ ३ लाख आणि ₹ ५ ते १० लाखांपर्यंत सीसी कर्ज.",
      "नियमित परतफेडीवर १२% पैकी ५% ते ८% व्याज थेट शासनाकडून बँकेला दिले जाते (व्याज सवलत)."
    ],
    eligibility: [
      "बचत गट किमान ६ महिने जुना असावा आणि नियमित बचत व बैठक सुरू असावी.",
      "पंचसूत्रीचे (नियमित बैठक, बचत, अंतर्गत कर्ज, परतफेड, हिशोब वही) पालन करणारे गट.",
      "सर्व सदस्य ग्रामीण भागातील रहिवासी असावेत."
    ],
    whoIsEligible: {
      mr: [
        "बचत गट किमान ६ महिने जुना असावा आणि नियमित बचत व बैठक सुरू असावी.",
        "पंचसूत्रीचे (नियमित बैठक, बचत, अंतर्गत कर्ज, परतफेड, हिशोब वही) पालन करणारे गट.",
        "सर्व सदस्य ग्रामीण भागातील रहिवासी असावेत."
      ],
      hi: [
        "समूह न्यूनतम ६ माह पुराना हो और नियमित बचत करता हो।",
        "पंचसूत्र का नियमित पालन करने वाले समूह।",
        "सभी सदस्य ग्रामीण क्षेत्र के निवासी हों।"
      ],
      en: [
        "SHG must be at least 6 months old with active meetings and savings.",
        "Strict adherence to Panchasutri principles.",
        "All members must reside in rural Maharashtra."
      ]
    },
    requiredDocuments: [
      "बचत गट नोंदणी प्रत व ठराव वही",
      "बचत गटाचे बँक पासबुक व सर्व सदस्यांचे आधार कार्ड",
      "ग्रामपंचायत शिफारस पत्र किंवा प्रभाग समन्वयक अहवाल"
    ],
    documents: {
      mr: [
        "बचत गट नोंदणी प्रत व ठराव वही",
        "बचत गटाचे बँक पासबुक व सर्व सदस्यांचे आधार कार्ड",
        "ग्रामपंचायत शिफारस पत्र किंवा प्रभाग समन्वयक अहवाल"
      ],
      hi: [
        "समूह पंजीकरण एवं प्रस्ताव पंजी",
        "बैंक पासबुक व सदस्यों के आधार कार्ड",
        "ग्राम पंचायत अनुशंसा पत्र"
      ],
      en: [
        "SHG Registration Copy and Resolution Register",
        "Group Bank Passbook and Members' Aadhaar Cards",
        "Gram Panchayat Recommendation Letter"
      ]
    },
    howToApply: [
      "१. गावातील कृषी सखी किंवा उमेद ग्रामसंघाशी संपर्क साधा.",
      "२. पंचायत समितीमधील तालुका अभियान व्यवस्थापक (BMM) कार्यालयात अर्ज सादर करा.",
      "३. ग्रेडिंग तपासणीनंतर बँक खात्यात कर्ज वितरित होते."
    ],
    learnInYourLanguage: "महिलांना स्वतःच्या पायावर उभे करण्यासाठी ही महाराष्ट्रातील सर्वात यशस्वी योजना आहे. बचत गटाच्या ५ सदस्यांनी मिळून पोल्ट्री किंवा हळद पॅकिंग सुरू केल्यास हमखास नफा होतो.",
    officialSourceUrl: "https://umed.maharashtra.gov.in/",
    portalUrl: "https://umed.maharashtra.gov.in/",
    sectors: ["महिला सबलीकरण व बचत गट"],
    disclaimer: "उमेद अभियान नियमांनुसार अनुदान व बँक लिंकेज उपलब्ध राहील."
  },

  // 4. Annasaheb Patil Arthik Vikas Mahamandal (0% Interest IRG)
  {
    id: "annasaheb-patil",
    category: "youth",
    name: "Annasaheb Patil Economic Development Corporation (IRG Scheme)",
    nativeName: "अण्णासाहेब पाटील आर्थिक मागास विकास महामंडळ (बिनव्याजी कर्ज योजना)",
    names: {
      mr: "अण्णासाहेब पाटील महामंडळ - १००% बिनव्याजी कर्ज (IRG)",
      hi: "अन्नासाहेब पाटिल आर्थिक विकास निगम - ब्याज मुक्त ऋण (IRG)",
      en: "Annasaheb Patil Corporation - 0% Interest Loan Scheme (IRG)"
    },
    businessType: "service",
    location: "rural",
    beneficiary: "youth",
    stage: "new",
    shortDescription: "महाराष्ट्रातील तरुणांना ₹ १५ लाखांपर्यंत १००% बिनव्याजी बँक कर्ज (१२% पर्यंतचा संपूर्ण व्याज परतावा शासनाकडून).",
    tagline: {
      mr: "महाराष्ट्रातील तरुणांना ₹ १५ लाखांपर्यंत १००% बिनव्याजी बँक कर्ज (१२% पर्यंतचा संपूर्ण व्याज परतावा शासनाकडून).",
      hi: "महाराष्ट्र के युवाओं को ₹ १५ लाख तक का ब्याज-मुक्त बैंक ऋण (१२% तक का पूरा ब्याज सरकार देती है)।",
      en: "100% interest-free bank loan up to ₹15 Lakhs for Maharashtra entrepreneurs (full 12% interest refunded)."
    },
    subsidy: {
      mr: "१००% व्याज परतावा (१२% पर्यंतचे संपूर्ण बँक व्याज मोफत)",
      hi: "१००% ब्याज सब्सिडी (शून्य प्रतिशत ब्याज)",
      en: "100% Interest Reimbursement (Up to 12% p.a. Zero Net Interest)"
    },
    whoCanApply: "महाराष्ट्रातील आर्थिक दुर्बल घटकातील तरुण (वय १८ ते ४५ वर्षे), वार्षिक कौटुंबिक उत्पन्न ₹ ८ लाखांच्या आत.",
    inSimpleWords: {
      mr: "तुम्ही बँकेकडून १५ लाखांचे कर्ज घेतले आणि दरमहा हप्ता वेळेवर भरला, तर बँकेने आकारलेले संपूर्ण व्याज महामंडळ दरमहा थेट तुमच्या खात्यात परत जमा करते! त्यामुळे कर्ज पूर्णपणे बिनव्याजी ठरते.",
      hi: "बैंक से १५ लाख तक का लोन लेने पर चुकाया गया पूरा ब्याज महामंडल आपके खाते में वापस लौटा देता है। कर्ज पूरी तरह ब्याज-मुक्त बन जाता है।",
      en: "When you repay monthly bank EMIs on time, the corporation reimburses the entire interest up to 12% directly into your bank account."
    },
    benefits: [
      "वैयक्तिक उद्योजकांसाठी कमाल ₹ १५ लाखांपर्यंत कर्ज.",
      "गट उद्योगासाठी (FPO / Partnership) कमाल ₹ ५० लाखांपर्यंत कर्ज.",
      "१२% पर्यंतचे संपूर्ण व्याज दरमहा थेट खात्यात परत (कमाल ₹ ४.५ लाखांपर्यंत व्याज सवलत).",
      "किराणा दुकान, पिकअप गाडी, कृषी सेवा केंद्र किंवा गोडाऊनसाठी अत्यंत उपयुक्त."
    ],
    eligibility: [
      "उमेदवार महाराष्ट्राचा रहिवासी असावा, वय १८ ते ४५ वर्षे.",
      "कौटुंबिक वार्षिक उत्पन्न ₹ ८ लाखांपेक्षा कमी असावे.",
      "महामंडळाच्या LOI (पात्रता प्रमाणपत्र) ची मंजुरी मिळालेली असावी."
    ],
    whoIsEligible: {
      mr: [
        "उमेदवार महाराष्ट्राचा रहिवासी असावा, वय १८ ते ४५ वर्षे.",
        "कौटुंबिक वार्षिक उत्पन्न ₹ ८ लाखांपेक्षा कमी असावे.",
        "महामंडळाच्या LOI (पात्रता प्रमाणपत्र) ची मंजुरी मिळालेली असावी."
      ],
      hi: [
        "महाराष्ट्र का मूल निवासी, आयु १८ से ४५ वर्ष।",
        "पारिवारिक वार्षिक आय ₹ ८ लाख से कम हो।",
        "महामंडल का पात्रता प्रमाण पत्र (LOI) प्राप्त होना आवश्यक।"
      ],
      en: [
        "Permanent resident of Maharashtra, age 18 to 45 years.",
        "Annual family income below ₹ 8 Lakhs.",
        "Must secure Letter of Intent (LOI) from Mahaswayam portal."
      ]
    },
    requiredDocuments: [
      "आधार कार्ड, पॅन कार्ड आणि अधिवास दाखला (Domicile)",
      "तहसीलदार उत्पन्न दाखला (वार्षिक उत्पन्न ₹ ८ लाखांच्या आत)",
      "प्रकल्प अहवाल (DPR) आणि बँक कोटेशन",
      "महामंडळाचे LOI मंजुरी पत्र"
    ],
    documents: {
      mr: [
        "आधार कार्ड, पॅन कार्ड आणि अधिवास दाखला (Domicile)",
        "तहसीलदार उत्पन्न दाखला (वार्षिक उत्पन्न ₹ ८ लाखांच्या आत)",
        "प्रकल्प अहवाल (DPR) आणि बँक कोटेशन",
        "महामंडळाचे LOI मंजुरी पत्र"
      ],
      hi: [
        "आधार कार्ड, पैन कार्ड एवं अधिवास प्रमाण पत्र",
        "तहसीलदार आय प्रमाण पत्र (८ लाख के अंदर)",
        "प्रोजेक्ट रिपोर्ट व बैंक कोटेशन",
        "LOI प्रमाण पत्र"
      ],
      en: [
        "Aadhaar Card, PAN Card, and Domicile Certificate",
        "Tehsildar Income Certificate (under ₹8 Lakhs)",
        "Project Report and Bank Asset Quotation",
        "LOI Certificate from Mahaswayam"
      ]
    },
    howToApply: [
      "१. mahaswayam.gov.in पोर्टलवर नोंदणी करून LOI (Letter of Intent) मिळवा.",
      "२. LOI घेऊन कोणत्याही राष्ट्रीयीकृत किंवा जिल्हा बँकेत कर्ज अर्ज करा.",
      "३. बँकेने कर्ज दिल्यावर पोर्टलवर अपलोड करा; दरमहा वेळेवर हप्ता भरल्यावर व्याज खात्यात जमा होते."
    ],
    learnInYourLanguage: "या योजनेमध्ये कोणत्याही एजंट किंवा दलालाला पैसे देऊ नका. ही संपूर्ण प्रक्रिया ऑनलाइन आणि पारदर्शक आहे.",
    officialSourceUrl: "https://mahaswayam.gov.in/",
    portalUrl: "https://mahaswayam.gov.in/",
    sectors: ["बिनव्याजी स्वयंरोजगार कर्ज"],
    disclaimer: "अण्णासाहेब पाटील महामंडळ नियमांनुसार व्याज परतावा दिला जाईल."
  },

  // 5. Pradhan Mantri MUDRA Yojana
  {
    id: "mudra",
    category: "micro",
    name: "Pradhan Mantri MUDRA Yojana (Micro Units Development & Refinance Agency)",
    nativeName: "प्रधानमंत्री मुद्रा योजना (विनातारण सूक्ष्म कर्ज - शिशु, किशोर, तरुण)",
    names: {
      mr: "प्रधानमंत्री मुद्रा योजना - विनातारण कर्ज (MUDRA)",
      hi: "प्रधानमंत्री मुद्रा योजना - बिना गारंटी ऋण (MUDRA)",
      en: "Pradhan Mantri MUDRA Yojana - Collateral-Free Loan"
    },
    businessType: "service",
    location: "rural",
    beneficiary: "youth",
    stage: "new",
    shortDescription: "कोणतेही तारण किंवा जमीन गहाण न ठेवता ₹ ५०,००० ते ₹ १० लाखांपर्यंत सुलभ बँक कर्ज.",
    tagline: {
      mr: "कोणतेही तारण किंवा जमीन गहाण न ठेवता ₹ ५०,००० ते ₹ १० लाखांपर्यंत सुलभ बँक कर्ज.",
      hi: "बिना किसी गारंटी या ज़मीन गिरवी रखे ₹ ५०,००० से ₹ १० लाख तक का सुलभ बैंक ऋण।",
      en: "Collateral-free business loans from ₹50,000 up to ₹10 Lakhs under Shishu, Kishore & Tarun categories."
    },
    subsidy: {
      mr: "शून्य तारण (Zero Collateral) व सवलतीचे व्याजदर",
      hi: "शून्य गारंटी व रियायती ब्याज दर",
      en: "Zero Collateral & Low Processing Fees"
    },
    whoCanApply: "ग्रामीण व लहान शहरातील कोणताही छोटा दुकानदार, कारागीर, व्यापारी किंवा सेवा व्यावसायिक.",
    inSimpleWords: {
      mr: "जर तुम्हाला लहान दुकान, चहाची फ्रँचायझी, ब्युटी पार्लर किंवा वर्कशॉप सुरू करायचे असेल आणि गहाण ठेवायला काही नसेल, तर मुद्रा योजनेतून विनातारण कर्ज मिळते.",
      hi: "यदि आपके पास गिरवी रखने के लिए ज़मीन या घर नहीं है, तो मुद्रा योजना के तहत बिना गारंटी लोन प्राप्त कर सकते हैं।",
      en: "For micro businesses lacking physical collateral, MUDRA provides bank finance backed by Credit Guarantee."
    },
    benefits: [
      "शिशू कर्ज: ₹ ५०,००० पर्यंत (लहान विक्रेते व घरगुती उद्योग).",
      "किशोर कर्ज: ₹ ५०,००० ते ₹ ५ लाख पर्यंत (दुकान, मशिनरी खरेदी).",
      "तरुण कर्ज: ₹ ५ लाख ते ₹ १० लाख पर्यंत (उद्योग विस्तार).",
      "कोणतेही तारण (Collateral Security) देण्याची गरज नाही."
    ],
    eligibility: [
      "उमेदवार भारताचा नागरिक असावा, वय १८ वर्षांपेक्षा जास्त.",
      "कोणत्याही बँकेचा डिफॉल्टर किंवा थकबाकीदार नसावा.",
      "उत्पादन, व्यापार किंवा सेवा क्षेत्रातील लहान व्यवसाय असावा."
    ],
    whoIsEligible: {
      mr: [
        "उमेदवार भारताचा नागरिक असावा, वय १८ वर्षांपेक्षा जास्त.",
        "कोणत्याही बँकेचा डिफॉल्टर किंवा थकबाकीदार नसावा.",
        "उत्पादन, व्यापार किंवा सेवा क्षेत्रातील लहान व्यवसाय असावा."
      ],
      hi: [
        "भारतीय नागरिक, आयु १८ वर्ष से अधिक।",
        "किसी भी बैंक का डिफ़ॉल्टर न हो।",
        "विनिर्माण, व्यापार अथवा सेवा क्षेत्र का छोटा उद्यम।"
      ],
      en: [
        "Indian citizen aged 18 years or above.",
        "Clean credit record with no bank defaults.",
        "Non-corporate small business in manufacturing, trading, or services."
      ]
    },
    requiredDocuments: [
      "आधार कार्ड, पॅन कार्ड आणि पत्त्याचा पुरावा",
      "व्यवसायाचे कोटेशन किंवा साहित्याची यादी",
      "बँक खात्याचे मागील ६ महिन्यांचे स्टेटमेंट",
      "उद्यम नोंदणी (Udyam MSME) - विनामूल्य"
    ],
    documents: {
      mr: [
        "आधार कार्ड, पॅन कार्ड आणि पत्त्याचा पुरावा",
        "व्यवसायाचे कोटेशन किंवा साहित्याची यादी",
        "बँक खात्याचे मागील ६ महिन्यांचे स्टेटमेंट",
        "उद्यम नोंदणी (Udyam MSME) - विनामूल्य"
      ],
      hi: [
        "आधार कार्ड, पैन कार्ड एवं पते का प्रमाण",
        "मशीनरी या सामग्री का कोटेशन",
        "पिछले ६ माह का बैंक स्टेटमेंट",
        "उद्यम रजिस्ट्रेशन प्रमाण पत्र"
      ],
      en: [
        "Aadhaar Card, PAN Card, and Address Proof",
        "Quotations of machinery or stock to be purchased",
        "Last 6 months bank account statement",
        "Free Udyam MSME Registration Certificate"
      ]
    },
    howToApply: [
      "१. जवळच्या कोणत्याही राष्ट्रीयीकृत किंवा ग्रामीण बँकेच्या शाखेत जा.",
      "२. मुद्रा अर्ज फॉर्म भरा आणि कोटेशन जोडा.",
      "३. किंवा udyamimitra.in पोर्टलवर ऑनलाइन मुद्रा अर्ज सादर करा."
    ],
    learnInYourLanguage: "मुद्रा कर्जासाठी बँका कोणतेही प्रोसेसिंग शुल्क किंवा तारण मागत नाहीत. दलालांना पैसे न देता थेट बँक व्यवस्थापकांना भेटा.",
    officialSourceUrl: "https://www.mudra.org.in/",
    portalUrl: "https://www.mudra.org.in/",
    sectors: ["विनातारण सूक्ष्म कर्ज"],
    disclaimer: "मुद्रा योजना मार्गदर्शक तत्त्वांच्या अधीन राहून कर्ज वाटप केले जाते."
  },

  // 6. NABARD Agri-Clinics & Agri-Business / AMI
  {
    id: "nabard-agri",
    category: "agri",
    name: "NABARD Agricultural Marketing Infrastructure & ACABC Scheme",
    nativeName: "नाबार्ड शेतीपूरक प्रक्रिया व गोडाऊन योजना (NABARD AMI / ACABC)",
    names: {
      mr: "नाबार्ड कृषी प्रक्रिया व गोडाऊन योजना (NABARD AMI)",
      hi: "नाबार्ड कृषि प्रसंस्करण व गोदाम योजना (NABARD AMI)",
      en: "NABARD Agri Infrastructure & Processing Scheme (AMI)"
    },
    businessType: "agro",
    location: "rural",
    beneficiary: "youth",
    stage: "new",
    shortDescription: "शेतमाल साठवणूक, कांदा चाळ, डाळ मिल आणि शेतीपूरक प्रक्रियेसाठी ३३.३३% थेट भांडवली अनुदान.",
    tagline: {
      mr: "शेतमाल साठवणूक, कांदा चाळ, डाळ मिल आणि शेतीपूरक प्रक्रियेसाठी ३३.३३% थेट भांडवली अनुदान.",
      hi: "कृषि उत्पाद भंडारण, प्याज गोदाम, दाल मिल और प्रसंस्करण हेतु ३३.३३% सीधी पूंजीगत सब्सिडी।",
      en: "33.33% direct capital subsidy for agricultural processing, cold storages, onion sheds, and sorting units."
    },
    subsidy: {
      mr: "३३.३३% थेट नाबार्ड सबसिडी (महिला व SC/ST), सर्वसाधारणसाठी २५%",
      hi: "३३.३३% सीधी नाबार्ड सब्सिडी",
      en: "Up to 33.33% Direct Capital Subsidy from NABARD"
    },
    whoCanApply: "शेतकरी, कृषी पदवीधर, शेतकरी उत्पादक कंपन्या (FPOs) आणि ग्रामीण युवक.",
    inSimpleWords: {
      mr: "जर तुम्हाला गावात कांदा चाळ, शेतमाल शीतगृह (Cold Storage), गूळ पावडर किंवा डाळ मिल सुरू करायची असेल, तर नाबार्डकडून थेट १ तृतीयांश खर्च मोफत अनुदान म्हणून मिळतो.",
      hi: "गांव में दाल मिल, गुड़ पाउडर या प्याज भंडारण इकाई शुरू करने पर प्रोजेक्ट लागत का एक तिहाई हिस्सा नाबार्ड मुफ्त अनुदान देता है।",
      en: "Setting up rural agro-processing like dal mills, jaggery powder, or sorting sheds entitles you to 33.33% capital subsidy from NABARD."
    },
    benefits: [
      "महिला, SC/ST आणि ईशान्येकडील भागांसाठी ३३.३३% थेट भांडवली सबसिडी.",
      "सर्वसाधारण प्रवर्गासाठी २५% थेट सबसिडी.",
      "गोडाऊन, क्लिनिंग-ग्रेडिंग युनिट, डाळ मिल आणि पॅकिंग युनिटसाठी लागू.",
      "बँक कर्जाशी जोडलेली बॅक-एंडेड सबसिडी थेट बँक खात्यात जमा."
    ],
    eligibility: [
      "स्वतःची किंवा भाडेकराराची ग्रामीण शेतजमीन उपलब्ध असावी.",
      "शेतमालावर प्रक्रिया किंवा साठवणूक करणारा प्रकल्प असावा.",
      "बँकेकडून मुदत कर्ज (Term Loan) मंजूर झालेले असावे."
    ],
    whoIsEligible: {
      mr: [
        "स्वतःची किंवा भाडेकराराची ग्रामीण शेतजमीन उपलब्ध असावी.",
        "शेतमालावर प्रक्रिया किंवा साठवणूक करणारा प्रकल्प असावा.",
        "बँकेकडून मुदत कर्ज (Term Loan) मंजूर झालेले असावे."
      ],
      hi: [
        "स्वयं की या पट्टे की ग्रामीण कृषि भूमि हो।",
        "कृषि प्रसंस्करण या भंडारण का प्रोजेक्ट हो।",
        "बैंक से टर्म लोन स्वीकृत होना चाहिए।"
      ],
      en: [
        "Own or leased rural land for processing/storage facility.",
        "Project must focus on agricultural sorting, grading, processing, or storage.",
        "Term loan sanctioned through a commercial or cooperative bank."
      ]
    },
    requiredDocuments: [
      "जमिनीचा ७/१२ व ८-अ उतारा",
      "सविस्तर प्रकल्प अहवाल (DPR) व ब्लूप्रिंट",
      "बँक मुदत कर्ज मंजुरी पत्र",
      "ग्रामपंचायत बांधकाम परवानगी व NOC"
    ],
    documents: {
      mr: [
        "जमिनीचा ७/१२ व ८-अ उतारा",
        "सविस्तर प्रकल्प अहवाल (DPR) व ब्लूप्रिंट",
        "बँक मुदत कर्ज मंजुरी पत्र",
        "ग्रामपंचायत बांधकाम परवानगी व NOC"
      ],
      hi: [
        "भूमि 7/12 एवं 8-A खतौनी",
        "विस्तृत प्रोजेक्ट रिपोर्ट (DPR)",
        "बैंक ऋण स्वीकृति पत्र",
        "ग्राम पंचायत निर्माण अनुमति"
      ],
      en: [
        "Land 7/12 and 8-A Records",
        "Detailed Project Report (DPR) and Layout Plan",
        "Bank Term Loan Sanction Letter",
        "Gram Panchayat Construction Permission and NOC"
      ]
    },
    howToApply: [
      "१. प्रकल्प अहवाल तयार करून जवळच्या राष्ट्रीयीकृत किंवा ग्रामीण बँकेत सादर करा.",
      "२. बँक कर्ज मंजूर झाल्यावर नाबार्डच्या पोर्टलवर सबसिडीसाठी क्लेम दाखल करते.",
      "३. नाबार्ड संयुक्त पाहणी करून सबसिडी बँक खात्यात मुदत ठेव म्हणून जमा करते."
    ],
    learnInYourLanguage: "महाराष्ट्रातील फळबागा आणि शेतीसाठी नाबार्ड ही सर्वात विश्वासार्ह संस्था आहे. डाळ मिल किंवा हळद पॉलिशिंग युनिटसाठी ही योजना सर्वोत्तम ठरते.",
    officialSourceUrl: "https://www.nabard.org/",
    portalUrl: "https://www.nabard.org/",
    sectors: ["कृषी प्रक्रिया व गोडाऊन"],
    disclaimer: "नाबार्ड AMI योजनेच्या उपलब्ध निधी व परिपत्रकानुसार अनुदान दिले जाते."
  },

  // 7. Rural Livestock (NLM)
  {
    id: "livestock",
    category: "agri",
    name: "Rural Livestock Entrepreneurship Scheme (National Livestock Mission - NLM)",
    nativeName: "ग्रामीण पशुधन उद्योजकता योजना (शेळीपालन, कुक्कुटपालन व चारा युनिट)",
    names: {
      mr: "ग्रामीण पशुधन उद्योजकता योजना (NLM शेळी व पोल्ट्री)",
      hi: "ग्रामीण पशुधन उद्यमिता योजना (NLM बकरी व पोल्ट्री)",
      en: "National Livestock Mission (NLM Rural Livestock Scheme)"
    },
    businessType: "livestock",
    location: "rural",
    beneficiary: "shg",
    stage: "new",
    shortDescription: "शेळीपालन (१००+ शेळ्या), देशी कुक्कुटपालन आणि सायलेज चारा निर्मितीसाठी थेट ५०% भांडवली अनुदान.",
    tagline: {
      mr: "शेळीपालन (१००+ शेळ्या), देशी कुक्कुटपालन आणि सायलेज चारा निर्मितीसाठी थेट ५०% भांडवली अनुदान.",
      hi: "बकरी पालन (१००+ बकरियां), पोल्ट्री फार्मिंग और साइलेज चारा निर्माण के लिए सीधे ५०% पूंजीगत सब्सिडी।",
      en: "50% direct capital subsidy for commercial goat breeding (100+ goats), poultry units, and silage production."
    },
    subsidy: {
      mr: "थेट ५०% शासकीय भांडवली अनुदान (कमाल ₹ २५ लाख ते ५० लाख!)",
      hi: "सीधे ५०% सरकारी सब्सिडी (₹ २५ लाख तक)",
      en: "50% Direct Capital Subsidy (Up to ₹ 25 Lakhs to ₹ 50 Lakhs)"
    },
    whoCanApply: "शेतकरी, बेरोजगार ग्रामीण तरुण, महिला बचत गट (SHGs), आणि शेतकरी उत्पादक कंपन्या (FPOs).",
    inSimpleWords: {
      mr: "या योजनेमध्ये ५०% खर्च थेट शासन उचलते. उदाहरणार्थ, ५० लाखांच्या १०० शेळ्यांच्या आधुनिक फार्मवर तुम्हाला चक्क २५ लाख रुपये मोफत अनुदान मिळते.",
      hi: "इस योजना में ५०% खर्च सरकार स्वयं उठाती है। ५० लाख के आधुनिक बकरी फार्म पर सीधे २५ लाख का मुफ्त अनुदान मिलता है।",
      en: "The central government covers 50% of the total project cost directly. A ₹50 Lakh commercial goat breeding unit receives ₹25 Lakhs subsidy."
    },
    benefits: [
      "प्रकल्प खर्चावर ५०% थेट शासकीय भांडवली अनुदान (Capital Subsidy).",
      "शेळीपालन प्रकल्पासाठी कमाल ₹ ५० लाखांपर्यंत थेट ५०% सबसिडी (₹ २५ लाख अनुदान!).",
      "देशी पोल्ट्री युनिटसाठी कमाल ₹ २५ लाखांपर्यंत ५०% सबसिडी.",
      "चारा प्रक्रिया व सायलेज मेकिंग युनिटसाठी ५० लाख रुपयांपर्यंत सबसिडी."
    ],
    eligibility: [
      "उमेदवाराकडे स्वतःची किंवा किमान १० वर्षांच्या भाडेकराराची शेतजमीन असावी.",
      "पशुसंवर्धन किंवा कुक्कुटपालनाचे अधिकृत प्रशिक्षण प्रमाणपत्र असावे.",
      "प्रकल्पाच्या किमान १०% ते २०% स्वतःचे भांडवल असावे; उर्वरित बँक कर्ज."
    ],
    whoIsEligible: {
      mr: [
        "उमेदवाराकडे स्वतःची किंवा किमान १० वर्षांच्या भाडेकराराची शेतजमीन असावी.",
        "पशुसंवर्धन किंवा कुक्कुटपालनाचे अधिकृत प्रशिक्षण प्रमाणपत्र असावे.",
        "प्रकल्पाच्या किमान १०% ते २०% स्वतःचे भांडवल असावे; उर्वरित बँक कर्ज."
      ],
      hi: [
        "स्वयं की या १० वर्ष के पट्टे की कृषि भूमि हो।",
        "पशुपालन या पोल्ट्री का आधिकारिक प्रशिक्षण प्रमाण पत्र हो।",
        "परियोजना की १०% से २०% स्वयं की पूंजी, शेष बैंक ऋण।"
      ],
      en: [
        "Own or minimum 10-year leased land for animal shed.",
        "Formal training certificate in animal husbandry or poultry.",
        "10% to 20% own equity contribution; remaining via bank loan."
      ]
    },
    requiredDocuments: [
      "जमिनीचा ७/१२ व ८-अ उतारा",
      "पशुसंवर्धन विभागाचे प्रशिक्षण प्रमाणपत्र",
      "सविस्तर प्रकल्प अहवाल (DPR) व गोठ्याचा नकाशा",
      "बँक मंजुरी पत्र (Bank In-Principle Approval)"
    ],
    documents: {
      mr: [
        "जमिनीचा ७/१२ व ८-अ उतारा",
        "पशुसंवर्धन विभागाचे प्रशिक्षण प्रमाणपत्र",
        "सविस्तर प्रकल्प अहवाल (DPR) व गोठ्याचा नकाशा",
        "बँक मंजुरी पत्र (Bank In-Principle Approval)"
      ],
      hi: [
        "भूमि 7/12 एवं 8-A खतौनी",
        "पशुपालन प्रशिक्षण प्रमाण पत्र",
        "विस्तृत प्रोजेक्ट रिपोर्ट व शेड का नक्शा",
        "बैंक स्वीकृति पत्र"
      ],
      en: [
        "Land 7/12 and 8-A Records",
        "Formal Livestock Training Certificate",
        "Detailed Project Report (DPR) and Shed Blueprint",
        "Bank In-Principle Loan Sanction Letter"
      ]
    },
    howToApply: [
      "१. nlm.udyamimitra.in पोर्टलवर ऑनलाइन नोंदणी करा.",
      "२. राज्य पशुसंवर्धन विभागामार्फत अर्जाची तांत्रिक छाननी केली जाते.",
      "३. बँक कर्ज मंजूर करते आणि केंद्राकडून सबसिडी थेट बँक खात्यात जमा होते."
    ],
    learnInYourLanguage: "या योजनेमध्ये ५०% खर्च थेट शासन उचलते. उदाहरणार्थ, ५० लाखांच्या १०० शेळ्यांच्या आधुनिक फार्मवर तुम्हाला चक्क २५ लाख रुपये मोफत अनुदान मिळते.",
    officialSourceUrl: "https://nlm.udyamimitra.in/",
    portalUrl: "https://nlm.udyamimitra.in/",
    sectors: ["पशुधन, शेळीपालन व पोल्ट्री"],
    disclaimer: "राष्ट्रीय पशुधन अभियान मार्गदर्शक तत्त्वानुसार अनुदान उपलब्धता मर्यादित कोट्यानुसार राहील."
  },

  // 8. MSME EDP & CGTMSE
  {
    id: "msme-edp",
    category: "micro",
    name: "MSME Entrepreneurship Development Programmes (EDP & Credit Guarantee)",
    nativeName: "MSME उद्योजकता विकास व विनातारण कर्ज योजना (CGTMSE व EDP)",
    names: {
      mr: "MSME उद्योजकता विकास व विनातारण हमी (CGTMSE)",
      hi: "MSME उद्यमिता विकास व क्रेडिट गारंटी (CGTMSE)",
      en: "MSME Credit Guarantee & Training Scheme (CGTMSE & EDP)"
    },
    businessType: "service",
    location: "all",
    beneficiary: "youth",
    stage: "new",
    shortDescription: "विनातारण ₹ २ कोटींपर्यंत बँक कर्ज हमी, मोफत उद्योजकता कौशल्य प्रशिक्षण आणि शासकीय टेंडर सवलती.",
    tagline: {
      mr: "विनातारण ₹ २ कोटींपर्यंत बँक कर्ज हमी, मोफत उद्योजकता कौशल्य प्रशिक्षण आणि शासकीय टेंडर सवलती.",
      hi: "बिना गारंटी ₹ २ करोड़ तक का बैंक ऋण, निःशुल्क उद्यमिता प्रशिक्षण और सरकारी टेंडर में छूट।",
      en: "Collateral-free credit guarantee up to ₹2 Crores under CGTMSE with free entrepreneurship skill training."
    },
    subsidy: {
      mr: "₹ २ कोटींपर्यंत १००% शासकीय कर्ज गॅरंटी",
      hi: "₹ २ करोड़ तक सरकारी लोन गारंटी",
      en: "100% Credit Guarantee Coverage up to ₹ 2 Crores"
    },
    whoCanApply: "कोणताही नवीन व्यावसायिक किंवा सूक्ष्म उद्योजक ज्याच्याकडे गहाण ठेवण्यासाठी स्थावर मालमत्ता नाही.",
    inSimpleWords: {
      mr: "जर तुमच्याकडे गहाण ठेवायला जमीन किंवा घर नसेल, तरीही सरकार स्वतः गॅरंटी घेऊन बँकेकडून तुम्हाला कर्ज मिळवून देते. कोणालाही लाच किंवा कमिशन देऊ नका.",
      hi: "यदि आपके पास बैंक में गिरवी रखने के लिए संपत्ति नहीं है, तो सरकार खुद गारंटी लेकर आपको लोन दिलवाती है।",
      en: "When entrepreneurs lack collateral assets, the CGTMSE trust stands guarantee to enable commercial bank lending."
    },
    benefits: [
      "CGTMSE अंतर्गत ₹ २ कोटींपर्यंत विनातारण (Zero Collateral) बँक कर्ज गॅरंटी.",
      "मुद्रा योजनेअंतर्गत ₹ ५०,००० ते ₹ १० लाखांपर्यंत सुलभ प्रक्रिया कर्ज.",
      "शासकीय टेंडर्समध्ये अनामत रक्कम (EMD) भरण्यातून १००% सूट.",
      "जिल्हा उद्योग केंद्रामार्फत मोफत व्यावसायिक प्रशिक्षण व प्रमाणपत्र."
    ],
    eligibility: [
      "उद्यम पोर्टलवर (udyamregistration.gov.in) मोफत नोंदणी केलेली असावी.",
      "कोणत्याही बँकेचा थकबाकीदार किंवा डिफॉल्टर नसावा.",
      "व्यवसायाची व्यवहार्यता (Feasibility) सिद्ध करणारा साधा अहवाल असावा."
    ],
    whoIsEligible: {
      mr: [
        "उद्यम पोर्टलवर (udyamregistration.gov.in) मोफत नोंदणी केलेली असावी.",
        "कोणत्याही बँकेचा थकबाकीदार किंवा डिफॉल्टर नसावा.",
        "व्यवसायाची व्यवहार्यता (Feasibility) सिद्ध करणारा साधा अहवाल असावा."
      ],
      hi: [
        "उद्यम पोर्टल पर निःशुल्क पंजीकरण होना अनिवार्य।",
        "किसी भी वित्तीय संस्थान का डिफ़ॉल्टर न हो।",
        "व्यवसाय की तकनीकी व्यवहार्यता रिपोर्ट।"
      ],
      en: [
        "Registered on Udyam Portal (udyamregistration.gov.in).",
        "Clean financial standing with no non-performing assets.",
        "Commercially viable project proposal."
      ]
    },
    requiredDocuments: [
      "आधार कार्ड व पॅन कार्ड",
      "उद्यम नोंदणी प्रमाणपत्र (Udyam MSME)",
      "बँक खात्याचे मागील ६ महिन्यांचे स्टेटमेंट",
      "खरेदी करायच्या मशिनरीचे कोटेशन"
    ],
    documents: {
      mr: [
        "आधार कार्ड व पॅन कार्ड",
        "उद्यम नोंदणी प्रमाणपत्र (Udyam MSME)",
        "बँक खात्याचे मागील ६ महिन्यांचे स्टेटमेंट",
        "खरेदी करायच्या मशिनरीचे कोटेशन"
      ],
      hi: [
        "आधार कार्ड एवं पैन कार्ड",
        "उद्यम रजिस्ट्रेशन प्रमाण पत्र",
        "बैंक स्टेटमेंट (६ माह)",
        "मशीनरी खरीद का कोटेशन"
      ],
      en: [
        "Aadhaar Card and PAN Card",
        "Udyam MSME Registration Certificate",
        "Last 6 months Bank Statement",
        "Quotations of machinery to be installed"
      ]
    },
    howToApply: [
      "१. udyamregistration.gov.in वर मोफत उद्योग आधार काढा.",
      "२. udyamimitra.in किंवा जवळच्या राष्ट्रीयीकृत बँकेत CGTMSE कर्जासाठी संपर्क करा.",
      "३. बँक विनातारण हमीवर कर्ज मंजूर करते."
    ],
    learnInYourLanguage: "जर तुमच्याकडे गहाण ठेवायला जमीन किंवा घर नसेल, तरीही सरकार स्वतः गॅरंटी घेऊन बँकेकडून तुम्हाला कर्ज मिळवून देते. कोणालाही लाच किंवा कमिशन देऊ नका.",
    officialSourceUrl: "https://www.cgtmse.in/",
    portalUrl: "https://www.cgtmse.in/",
    sectors: ["सूक्ष्म व लघू उद्योग विनातारण"],
    disclaimer: "क्रेडिट गॅरंटी ट्रस्ट फॉर मायक्रो अँड स्मॉल एंटरप्रायझेस मार्गदर्शक तत्त्वे लागू."
  },

  // 9. Maharashtra RAMP Programme
  {
    id: "ramp",
    category: "micro",
    name: "Maharashtra RAMP Programme (Raising and Accelerating MSME Performance)",
    nativeName: "महाराष्ट्र रॅम्प कार्यक्रम (MSME कार्यक्षमता वाढ अभियान)",
    names: {
      mr: "महाराष्ट्र रॅम्प कार्यक्रम (MSME डिजिटल अपग्रेडेशन)",
      hi: "महाराष्ट्र रैंप कार्यक्रम (MSME डिजिटल आधुनिकीकरण)",
      en: "Maharashtra RAMP Programme (MSME Acceleration)"
    },
    businessType: "manufacturing",
    location: "all",
    beneficiary: "youth",
    stage: "expansion",
    shortDescription: "जागतिक बँक व केंद्र शासनाच्या सहकार्याने सूक्ष्म व लघू उद्योगांचे आधुनिकीकरण व डिजिटल सक्षमीकरण.",
    tagline: {
      mr: "जागतिक बँक व केंद्र शासनाच्या सहकार्याने सूक्ष्म व लघू उद्योगांचे आधुनिकीकरण व डिजिटल सक्षमीकरण.",
      hi: "विश्व बैंक व केंद्र सरकार के सहयोग से सूक्ष्म व लघु उद्योगों का आधुनिकीकरण व डिजिटल सशक्तिकरण।",
      en: "Modernization and digital acceleration for micro and small enterprises supported by the World Bank."
    },
    subsidy: {
      mr: "ZED गुणवत्ता प्रमाणपत्र व तंत्रज्ञान अनुदान",
      hi: "ZED प्रमाणन व तकनीकी सहायता",
      en: "ZED Quality Certification & Modernization Grants"
    },
    whoCanApply: "महाराष्ट्रात आधीपासून कार्यरत असलेले सूक्ष्म व लघु उद्योग (MSMEs) ज्यांना तंत्रज्ञान अपग्रेड करायचे आहे.",
    inSimpleWords: {
      mr: "हा कार्यक्रम चालू असलेल्या लहान उद्योगांना मोठा बनवण्यासाठी आहे. जर तुम्हाला जुन्या मशिनरीऐवजी कॉम्प्युटराइज्ड मशिनरी आणायची असेल, तर सरकारकडून आर्थिक मदत मिळते.",
      hi: "यह कार्यक्रम चल रहे छोटे उद्योगों को बड़ा बनाने के लिए है। पुरानी मशीनों को डिजिटल तकनीक से बदलने हेतु सरकारी सहायता मिलती है।",
      en: "Designed to scale operational micro-units through modern computerized machinery, ISO/ZED certifications, and export enablement."
    },
    benefits: [
      "नवीन मशिनरी आणि तंत्रज्ञानासाठी विशेष अनुदान व आर्थिक सहाय्य.",
      "डिजिटल मार्केटिंग, ई-कॉमर्स (GeM पोर्टल) आणि थेट निर्यात (Export) सहाय्य.",
      "कामगारांचे कौशल्य प्रशिक्षण आणि आंतरराष्ट्रीय गुणवत्ता प्रमाणपत्रे (ISO/ZED) मिळवण्यासाठी मदत.",
      "विलंबित देयकांपासून (Delayed Payments) कायदेशीर संरक्षण."
    ],
    eligibility: [
      "उद्यम नोंदणी (Udyam Registration) असलेले कार्यरत सूक्ष्म किंवा लघू युनिट.",
      "किमान १ वर्षाचे उत्पादन किंवा व्यावसायिक कामकाज झालेले असावे.",
      "महाराष्ट्र उद्योग संचालनालयाच्या मानकांचे पालन करणारे युनिट."
    ],
    whoIsEligible: {
      mr: [
        "उद्यम नोंदणी (Udyam Registration) असलेले कार्यरत सूक्ष्म किंवा लघू युनिट.",
        "किमान १ वर्षाचे उत्पादन किंवा व्यावसायिक कामकाज झालेले असावे.",
        "महाराष्ट्र उद्योग संचालनालयाच्या मानकांचे पालन करणारे युनिट."
      ],
      hi: [
        "उद्यम पंजीकृत कार्यरत सूक्ष्म अथवा लघु उद्यम।",
        "न्यूनतम १ वर्ष का उत्पादन या व्यावसायिक अनुभव।",
        "उद्योग निदेशालय के मानकों का पालन करने वाली इकाई।"
      ],
      en: [
        "Operational MSME with active Udyam Registration.",
        "Minimum 1 year of commercial operations.",
        "Compliant with Directorate of Industries standards."
      ]
    },
    requiredDocuments: [
      "उद्यम नोंदणी प्रमाणपत्र (Udyam Certificate)",
      "गेल्या २ वर्षांचे जीएसटी व आयकर विवरणपत्र (ITR)",
      "नवीन तंत्रज्ञान किंवा मशिनरीचे कोटेशन्स",
      "उद्योग जागेचे अधिकृत पुरावे"
    ],
    documents: {
      mr: [
        "उद्यम नोंदणी प्रमाणपत्र (Udyam Certificate)",
        "गेल्या २ वर्षांचे जीएसटी व आयकर विवरणपत्र (ITR)",
        "नवीन तंत्रज्ञान किंवा मशिनरीचे कोटेशन्स",
        "उद्योग जागेचे अधिकृत पुरावे"
      ],
      hi: [
        "उद्यम प्रमाण पत्र",
        "पिछले वर्षों का GST व ITR",
        "नई तकनीक/मशीनरी कोटेशन",
        "उद्योग स्थल प्रमाण"
      ],
      en: [
        "Udyam MSME Registration Certificate",
        "Last 2 years GST and ITR returns",
        "Quotations for machinery/digital upgrades",
        "Premises ownership or lease agreement"
      ]
    },
    howToApply: [
      "१. msme.gov.in किंवा महाराष्ट्र उद्योग संचालनालयाच्या पोर्टलवर नोंदणी करा.",
      "२. 'ZED Certification' किंवा डिजिटल अपग्रेडेशन योजनेसाठी अर्ज करा.",
      "३. तांत्रिक सल्लागारांची पाहणी झाल्यावर मंजुरी अनुदान मिळते."
    ],
    learnInYourLanguage: "हा कार्यक्रम चालू असलेल्या लहान उद्योगांना मोठा बनवण्यासाठी आहे. जर तुम्हाला जुन्या मशिनरीऐवजी कॉम्प्युटराइज्ड मशिनरी आणायची असेल, तर सरकारकडून आर्थिक मदत मिळते.",
    officialSourceUrl: "https://msme.gov.in/ramp",
    portalUrl: "https://msme.gov.in/ramp",
    sectors: ["उद्योग आधुनिकीकरण व ZED"],
    disclaimer: "जागतिक बँक सहाय्यित MSME उपक्रम. अधिकृत मार्गदर्शक तत्त्वे लागू."
  }
];
