// BhashaSathi AI Knowledge Engine
// Predefined intelligent responses for common rural entrepreneurship questions
// Prepared for direct Google Gemini API integration

export const bhashaSathiConfig = {
  name: "BhashaSathi AI (भाषासाथी)",
  welcomeMessage: {
    mr: "नमस्कार! मी भाषासाथी (BhashaSathi AI) आहे - तुमचा डिजिटल व्यवसाय मार्गदर्शक. तुम्ही मला नवीन उद्योग कल्पना, शासकीय योजना, कर्ज, अनुदान आणि व्यवसाय वाढीबद्दल तुमच्या स्वतःच्या भाषेत काहीही विचारू शकता.",
    hi: "नमस्ते! मैं भाषासाथी (BhashaSathi AI) हूँ - आपका डिजिटल व्यापार मार्गदर्शक। मुझसे नए बिज़नेस, सरकारी योजनाओं, ऋण व व्यवसाय विस्तार के बारे में अपनी भाषा में पूछें।",
    en: "Hello! I am BhashaSathi AI, your business guide. Ask me about business ideas, government schemes, marketing, loans, or growing your business in your preferred language."
  },
  suggestedQuestions: [
    {
      id: "q1",
      text: {
        mr: "नवीन व्यवसाय कसा सुरू करावा? (How to start a business?)",
        hi: "नया बिज़नेस कैसे शुरू करें? (How to start a business?)",
        en: "How can I start a business?"
      },
      key: "start-business"
    },
    {
      id: "q2",
      text: {
        mr: "माझ्यासाठी कोणती सरकारी योजना योग्य आहे? (Suitable Govt Scheme?)",
        hi: "मेरे लिए कौन सी सरकारी योजना सही है? (Suitable Scheme?)",
        en: "Which government scheme is suitable for me?"
      },
      key: "suitable-scheme"
    },
    {
      id: "q3",
      text: {
        mr: "₹ ५०,००० मध्ये कोणता व्यवसाय सुरू करता येईल?",
        hi: "₹ ५०,००० में कौन सा बिज़नेस शुरू हो सकता है?",
        en: "What business can I start with ₹50,000?"
      },
      key: "budget-50k"
    },
    {
      id: "q4",
      text: {
        mr: "मी माझ्या उत्पादनांचे मार्केटिंग कसे करावे?",
        hi: "मैं अपने उत्पादों की मार्केटिंग कैसे करूँ?",
        en: "How can I market my products?"
      },
      key: "marketing"
    },
    {
      id: "q5",
      text: {
        mr: "व्यवसाय कर्जासाठी बँक अर्ज कसा करावा?",
        hi: "बिज़नेस लोन के लिए बैंक में आवेदन कैसे करें?",
        en: "How can I apply for a business loan?"
      },
      key: "apply-loan"
    }
  ],
  responses: {
    "start-business": {
      mr: `नवीन व्यवसाय सुरू करण्यासाठी ५ सुवर्ण नियम:

१. **स्थानिक गरज ओळखा**: तुमच्या गावात किंवा तालुक्यात कोणत्या वस्तूसाठी लोक बाहेर जातात ते शोधा.
२. **कमी भांडवलात छोटी सुरुवात करा**: सुरुवातीला मोठी कर्जे काढण्याऐवजी स्वतःच्या बचतीतून नमुना काम सुरू करा.
३. **मोफत उद्यम नोंदणी (Udyam)**: udyamregistration.gov.in वर स्वतःचे आधार वापरून १० मिनिटांत मोफत प्रमाणपत्र काढा.
४. **स्थानिक सरकारी योजना तपासा**: CMEGP (२५% ते ३५% अनुदान) किंवा मुद्रा योजनेतून विनातारण कर्ज घ्या.
५. **नफ्याचा योग्य हिशोब ठेवा**: कच्चा माल, वाहतूक, वीज आणि स्वतःचे श्रम जोडूनच किंमत ठरवा.

💡 **सल्ला**: आमच्या 'Learn' टॅबमधील 'Business Basics' चा धडा नक्की वाचा किंवा ऐका!`,
      hi: `नया व्यवसाय शुरू करने के ५ मूल मंत्र:

१. **स्थानीय आवश्यकता समझें**: गाँव या कस्बे में किस उत्पाद की कमी है, उसका अध्ययन करें।
२. **कम पूँजी से परीक्षण करें**: शुरुआत में बड़ा ऋण लेने से बचें, पहले स्थानीय स्तर पर उत्पाद बेचकर देखें।
३. **उद्यम रजिस्ट्रेशन (निःशुल्क)**: udyamregistration.gov.in पर १० मिनट में फ्री एमएसएमई सर्टिफिकेट लें।
४. **सरकारी सब्सिडी का लाभ**: CMEGP या मुद्रा योजना के तहत रियायती पूँजी जुटाएं।
५. **सटीक लेखा-जोखा**: घर का खर्च और दुकान का गल्ला हमेशा अलग रखें।`,
      en: `5 Practical Steps to Start a Small Business:

1. **Identify Local Demand**: Find products that villagers currently travel to towns to buy.
2. **Start Lean with Pilot Batches**: Validate with local customers before taking large loans.
3. **Get Free Udyam MSME Certificate**: Takes 10 minutes online on udyamregistration.gov.in.
4. **Leverage Govt Subsidies**: Avail CMEGP (up to 35% subsidy) or collateral-free MUDRA loans.
5. **Accurate Costing**: Factor in electricity, packaging, transport, and your own labor.`
    },
    "suitable-scheme": {
      mr: `तुमच्यासाठी योग्य शासकीय योजना शोधण्याचे सूत्र:

• **गावात नवीन कारखाना / प्रक्रिया युनिट (हळद, डाळ मिल, ऑइल मिल)**: 
  👉 **PMEGP किंवा CMEGP योजना** (२५% ते ३५% थेट अनुदान, कमाल ₹ ५० लाख).
• **महिला बचत गट किंवा गृहउद्योग**: 
  👉 **उमेद अभियान (MSRLM)** (₹ १५,००० फिरता निधी व ४% ते ७% सवलतीचे बँक कर्ज).
• **तरुण उद्योजक (वय १८-४५ वर्षे, महाराष्ट्र रहिवासी)**: 
  👉 **अण्णासाहेब पाटील महामंडळ IRG योजना** (₹ १५ लाखांपर्यंत १००% बिनव्याजी कर्ज!).
• **लहान दुकान, वर्कशॉप किंवा भाजीपाला विक्री**: 
  👉 **मुद्रा योजना (शिशू व किशोर)** (विनातारण ₹ ५०,००० ते ₹ ५ लाख).

💡 **सल्ला**: वरील 'Government Schemes' विभागात जाऊन फिल्टर लावून योजनांची माहिती तपासा!`,
      hi: `आपके लिए उपयुक्त योजना चुनने की गाइड:

• **नया कारखाना / प्रसंस्करण इकाई**: CMEGP या PMEGP योजना (३५% तक सरकारी सब्सिडी)।
• **महिला स्वयं सहायता समूह**: उमेद मिशन (MSRLM - ४% से ७% रियायती ब्याज दर)।
• **महाराष्ट्र के युवा (१८-४५ वर्ष)**: अन्नासाहेब पाटिल निगम (₹ १५ लाख तक ब्याज मुक्त ऋण)।
• **छोटी दुकान / फेरीवाले**: मुद्रा योजना (बिना गारंटी ₹ ५०,००० से ₹ ५ लाख तक)।`,
      en: `Guide to Finding the Best Government Scheme:

• **New Manufacturing / Processing Unit**: Choose CMEGP or PMEGP for 25%–35% direct subsidy.
• **Women Self-Help Groups**: UMED (MSRLM) offers 4%–7% low-interest bank linkage.
• **Maharashtra Youth (18-45 yrs)**: Annasaheb Patil Corporation provides 100% interest-free loans up to ₹ 15 Lakhs.
• **Village Retail & Micro Service**: Pradhan Mantri MUDRA Yojana (up to ₹ 10 Lakhs collateral-free).`
    },
    "budget-50k": {
      mr: `₹ ५०,००० च्या आत सुरू करता येणारे ५ सर्वोत्तम ग्रामीण व्यवसाय:

१. **सेंद्रिय गांडूळखत निर्मिती (Vermicompost)**: ₹ २५,००० ते ₹ ३५,००० खर्च (५ HDPE बेड्स, शेणखत व गांडूळ कल्चर). दरमहा ₹ १५,००० ते ₹ २५,००० नफा.
२. **आधुनिक टेलरिंग व बुटीक (Home Tailoring)**: ₹ २५,००० खर्च (मोटर शिलाई मशीन व साचे). लग्नसराईत दरमहा ₹ २०,०००+ नफा.
३. **घरगुती लोणचे व चटणी केंद्र (Pickle & Chutney Unit)**: ₹ १५,००० ते ₹ २५,००० खर्च (कच्चा माल, बरण्या व FSSAI फी).
४. **आपले सरकार / सीएससी डिजिटल सेवा केंद्र**: ₹ ४०,००० खर्च (सेकंड हँड लॅपटॉप, प्रिंटर व बायोमेट्रिक डिव्हाइस).
५. **अळंबी उत्पादन (Mushroom Farming)**: ₹ २०,००० ते ₹ ३०,००० खर्च (सावलीची खोली, भुसा व स्पॉन बियाणे).

💡 **सल्ला**: 'Business Ideas' विभागात 'Home-Based' किंवा 'Agriculture' श्रेणी तपासा!`,
      hi: `₹ ५०,००० के भीतर शुरू होने वाले ५ बेहतरीन बिज़नेस:

१. **केंचुआ खाद निर्माण (Vermicompost)**: मात्र ₹ ३०,००० में ५ बेड लगाकर ₹ १५-२० हज़ार मासिक आय।
२. **घरगुती सिलाई व बुटीक**: ₹ २५,००० में आधुनिक सिलाई मशीन व कटिंग टेबल।
३. **देसी अचार व मसाला यूनिट**: ₹ २०,००० में स्वादिष्ट स्थानीय उत्पादों की बिक्री।
४. **डिजिटल सीएससी सेंटर**: ₹ ४०,००० में गांव के लोगों को ऑनलाइन फॉर्म व दाखिले निकाल कर देना।
५. **मशरूम की खेती**: ₹ २५,००० में ऑयस्टर मशरूम उत्पादन।`,
      en: `Top 5 Businesses You Can Start With Under ₹50,000:

1. **Vermicompost & Bio-Fertilizer Unit**: ₹ 25k–₹ 35k capital, ₹ 15k–₹ 25k monthly profit.
2. **Home Tailoring & Boutique**: ₹ 25k capital with motorized sewing machine.
3. **Home-Made Pickle & Chutney Processing**: ₹ 15k–₹ 25k capital with high local demand.
4. **Village CSC Digital Service Center**: ₹ 40k capital for basic laptop, printer & biometric scanner.
5. **Oyster Mushroom Cultivation**: ₹ 20k–₹ 30k capital in a ventilated dark shed.`
    },
    "marketing": {
      mr: `ग्रामीण व लहान उद्योजकांसाठी सोपी मार्केटिंग सूत्रे:

१. **WhatsApp Business कॅटलॉग**: सर्व उत्पादनांचे स्पष्ट फोटो, वजन आणि किंमत टाकून कॅटलॉग तयार करा.
२. **Google My Business वर नोंदणी**: गुगल मॅपवर आपल्या दुकानाचे नाव मोफत नोंदवा.
३. **सॅम्पल वाटप (Free Sampling)**: गावातील प्रतिष्ठित व्यक्ती, शाळा आणि कार्यालयांमध्ये मोफत नमुने द्या.
४. **आकर्षक लेबलिंग**: साध्या पिशवीऐवजी स्वतःचे नाव, मोबाईल नंबर व FSSAI असलेला स्टिकर लावा.
५. **स्थानिक आठवडे बाजार**: आठवडे बाजारात आकर्षक स्टॉल लावून थेट रोखीने विक्री करा.`,
      hi: `ग्रामीण उत्पादों की सफल मार्केटिंग के ५ तरीके:

१. **व्हाट्सएप बिजनेस**: उत्पाद सूची और ताज़ा दर नियमित स्टेटस पर लगाएं।
२. **गूगल मैप्स पर दुकान जोड़ें**: स्थानीय ग्राहकों को तुरंत आपकी दुकान दिखेगी।
३. **मुफ्त नमूनों का वितरण**: शुरुआत में लोगों को उत्पाद की शुद्धता चखाएं।
४. **सुंदर लेबल व पैकिंग**: एक साधारण स्टीकर उत्पाद का मूल्य और भरोसा बढ़ा देता है।
५. **स्थानीय साप्ताहिक हाट**: सीधे ग्राहकों से मिलकर विश्वास और बिक्री बढ़ाएं।`,
      en: `Practical Marketing Guide for Rural Enterprises:

1. **WhatsApp Business Catalog**: Keep product photos, net weights, and pricing updated.
2. **List on Google Maps**: Completely free and helps local town buyers find you easily.
3. **Free Sampling**: Give small tasting packs to local community leaders and grocers.
4. **Branded Stickers**: A clean sticker with your brand, mobile number & FSSAI boosts credibility.
5. **Direct Selling at Weekly Haats**: Bypasses middlemen for immediate cash collection.`
    },
    "apply-loan": {
      mr: `बँक कर्जासाठी अर्ज करण्याचे ४ सोपे टप्पे:

१. **कागदपत्रे तयार ठेवा**: आधार कार्ड, पॅन कार्ड, ६ महिन्यांचे बँक स्टेटमेंट, आणि जागेचा पुरावा (७/१२ किंवा भाडेकरार).
२. **उद्यम नोंदणी (Udyam)**: udyamregistration.gov.in वर मोफत नोंदणी करून प्रमाणपत्र प्रिंट करा.
३. **प्रकल्प अहवाल (DPR)**: व्यवसायाचा २ पानी साधा अहवाल बनवा (लागणारी यंत्रे, कच्चा माल आणि अंदाजे मासिक नफा).
४. **बँक व्यवस्थापकाशी भेट**: तालुक्याच्या राष्ट्रीयीकृत किंवा ग्रामीण बँकेत जाऊन योजनांचा संदर्भ देऊन थेट शाखाधिकाऱ्यांशी चर्चा करा.

💡 **महत्त्वाचे**: कोणत्याही दलालाला कमिशन देऊ नका; शासकीय योजनांचे अर्ज पूर्णपणे मोफत असतात.`,
      hi: `बैंक ऋण प्राप्त करने की आसान प्रक्रिया:

१. **दस्तावेज़**: आधार कार्ड, पैन कार्ड, ६ माह का बैंक स्टेटमेंट और निवास प्रमाण।
२. **उद्यम रजिस्ट्रेशन**: सरकारी पोर्टल पर निःशुल्क एमएसएमई प्रमाणपत्र प्राप्त करें।
३. **प्रोजेक्ट रिपोर्ट (DPR)**: मशीनरी खर्च व अनुमानित लाभ का संक्षिप्त विवरण बनाएं।
४. **बैंक शाखा में संपर्क**: किसी बिचौलिए को पैसे न दें, सीधे बैंक मैनेजर से मिलकर योजना का फॉर्म भरें।`,
      en: `Step-by-Step Business Loan Application:

1. **Prepare Core Documents**: Aadhaar, PAN, 6 months bank statement, and address/land proof.
2. **Get Free Udyam MSME Certificate**: Available online on udyamregistration.gov.in.
3. **Create Simple DPR**: A 2-page project report detailing machinery cost, working capital, and profit margins.
4. **Meet the Bank Branch Manager**: Present your application under CMEGP, PMEGP, or MUDRA schemes without paying any unauthorized intermediaries.`
    }
  }
};
