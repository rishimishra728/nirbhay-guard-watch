import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi" | "bn" | "te" | "ta" | "mr" | "gu" | "kn" | "ml" | "pa" | "or" | "as";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    "dashboard.overview": "Dashboard Overview",
    "dashboard.monitoring": "Real-time monitoring and management of tourist safety across regions",
    "nav.overview": "Overview",
    "nav.tourists": "Tourist Management",
    "nav.alerts": "Active Alerts",
    "nav.map": "Tourist Heat Map",
    "nav.settings": "Settings",
    "stats.active_tourists": "Active Tourists",
    "stats.active_alerts": "Active Alerts",
    "stats.safe_zones": "Safe Zones",
    "stats.system_status": "System Status",
    "alerts.recent": "Recent Alerts",
    "alerts.panic_button": "Panic Button",
    "alerts.geofence": "Geo-fence Violation",
    "alerts.inactivity": "Inactivity Alert",
    "settings.title": "Settings",
    "settings.language": "Language",
    "settings.theme": "Theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
  },
  hi: {
    "dashboard.overview": "डैशबोर्ड अवलोकन",
    "dashboard.monitoring": "क्षेत्रों में पर्यटक सुरक्षा की वास्तविक समय निगरानी और प्रबंधन",
    "nav.overview": "अवलोकन",
    "nav.tourists": "पर्यटक प्रबंधन",
    "nav.alerts": "सक्रिय अलर्ट",
    "nav.map": "पर्यटक हीट मैप",
    "nav.settings": "सेटिंग्स",
    "stats.active_tourists": "सक्रिय पर्यटक",
    "stats.active_alerts": "सक्रिय अलर्ट",
    "stats.safe_zones": "सुरक्षित क्षेत्र",
    "stats.system_status": "सिस्टम स्थिति",
    "alerts.recent": "हाल की अलर्ट",
    "alerts.panic_button": "पैनिक बटन",
    "alerts.geofence": "भू-बाड़ उल्लंघन",
    "alerts.inactivity": "निष्क्रियता अलर्ट",
    "settings.title": "सेटिंग्स",
    "settings.language": "भाषा",
    "settings.theme": "थीम",
    "theme.light": "प्रकाश",
    "theme.dark": "अंधकार",
    "theme.system": "सिस्टम",
  },
  bn: {
    "dashboard.overview": "ড্যাশবোর্ড ওভারভিউ",
    "dashboard.monitoring": "অঞ্চল জুড়ে পর্যটক নিরাপত্তার রিয়েল-টাইম নিরীক্ষণ এবং ব্যবস্থাপনা",
    "nav.overview": "ওভারভিউ",
    "nav.tourists": "পর্যটক ব্যবস্থাপনা",
    "nav.alerts": "সক্রিয় সতর্কতা",
    "nav.map": "পর্যটক হিট ম্যাপ",
    "nav.settings": "সেটিংস",
  },
  te: {
    "dashboard.overview": "డాష్‌బోర్డ్ ఓవర్‌వ్యూ",
    "dashboard.monitoring": "ప్రాంతాలలో టూరిస్ట్ భద్రత యొక్క రియల్-టైమ్ మానిటరింగ్ మరియు నిర్వహణ",
    "nav.overview": "ఓవర్‌వ్యూ",
    "nav.tourists": "టూరిస్ట్ మేనేజ్‌మెంట్",
    "nav.alerts": "యాక్టివ్ అలర్ట్స్",
    "nav.map": "టూరిస్ట్ హీట్ మ్యాప్",
    "nav.settings": "సెట్టింగ్స్",
  },
  ta: {
    "dashboard.overview": "டேஷ்போர்டு கண்ணோட்டம்",
    "dashboard.monitoring": "பிராந்தியங்களில் சுற்றுலாப் பயணிகள் பாதுகாப்பின் நேரலை கண்காணிப்பு மற்றும் நிர்வாகம்",
    "nav.overview": "கண்ணோட்டம்",
    "nav.tourists": "சுற்றுலாப் பயணி நிர்வாகம்",
    "nav.alerts": "செயலில் உள்ள எச்சரிக்கைகள்",
    "nav.map": "சுற்றுலாப் பயணி வெப்ப வரைபடம்",
    "nav.settings": "அமைப்புகள்",
  },
  mr: {
    "dashboard.overview": "डॅशबोर्ड अवलोकन",
    "dashboard.monitoring": "प्रदेशांमध्ये पर्यटक सुरक्षेचे रियल-टाइम निरीक्षण आणि व्यवस्थापन",
    "nav.overview": "अवलोकन",
    "nav.tourists": "पर्यटक व्यवस्थापन",
    "nav.alerts": "सक्रिय इशारे",
    "nav.map": "पर्यटक हीट मॅप",
    "nav.settings": "सेटिंग्ज",
  },
  gu: {
    "dashboard.overview": "ડેશબોર્ડ ઓવરવ્યૂ",
    "dashboard.monitoring": "પ્રદેશોમાં પર્યટક સુરક્ષાની વાસ્તવિક સમય દેખરેખ અને વ્યવસ્થાપન",
    "nav.overview": "ઓવરવ્યૂ",
    "nav.tourists": "પર્યટક વ્યવસ્થાપન",
    "nav.alerts": "સક્રિય એલર્ટ",
    "nav.map": "પર્યટક હીટ મેપ",
    "nav.settings": "સેટિંગ્સ",
  },
  kn: {
    "dashboard.overview": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    "dashboard.monitoring": "ಪ್ರದೇಶಗಳಾದ್ಯಂತ ಪ್ರವಾಸಿ ಭದ್ರತೆಯ ನೈಜ ಸಮಯ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ನಿರ್ವಹಣೆ",
    "nav.overview": "ಅವಲೋಕನ",
    "nav.tourists": "ಪ್ರವಾಸಿ ನಿರ್ವಹಣೆ",
    "nav.alerts": "ಸಕ್ರಿಯ ಎಚ್ಚರಿಕೆಗಳು",
    "nav.map": "ಪ್ರವಾಸಿ ಹೀಟ್ ಮ್ಯಾಪ್",
    "nav.settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
  },
  ml: {
    "dashboard.overview": "ഡാഷ്‌ബോർഡ് അവലോകനം",
    "dashboard.monitoring": "പ്രദേശങ്ങളിലുടനീളം ടൂറിസ്റ്റ് സുരക്ഷയുടെ തത്സമയ നിരീക്ഷണവും മാനേജ്‌മെന്റും",
    "nav.overview": "അവലോകനം",
    "nav.tourists": "ടൂറിസ്റ്റ് മാനേജ്‌മെന്റ്",
    "nav.alerts": "സജീവ അലേർട്ടുകൾ",
    "nav.map": "ടൂറിസ്റ്റ് ഹീറ്റ് മാപ്പ്",
    "nav.settings": "ക്രമീകരണങ്ങൾ",
  },
  pa: {
    "dashboard.overview": "ਡੈਸ਼ਬੋਰਡ ਓਵਰਵਿਊ",
    "dashboard.monitoring": "ਖੇਤਰਾਂ ਵਿੱਚ ਸੈਲਾਨੀ ਸੁਰੱਖਿਆ ਦੀ ਰੀਅਲ-ਟਾਈਮ ਨਿਗਰਾਨੀ ਅਤੇ ਪ੍ਰਬੰਧਨ",
    "nav.overview": "ਓਵਰਵਿਊ",
    "nav.tourists": "ਸੈਲਾਨੀ ਪ੍ਰਬੰਧਨ",
    "nav.alerts": "ਸਰਗਰਮ ਅਲਰਟ",
    "nav.map": "ਸੈਲਾਨੀ ਹੀਟ ਮੈਪ",
    "nav.settings": "ਸੈਟਿੰਗਾਂ",
  },
  or: {
    "dashboard.overview": "ଡ୍ୟାସବୋର୍ଡ ଓଭରଭିଉ",
    "dashboard.monitoring": "ଅଞ୍ଚଳଗୁଡିକରେ ପର୍ଯ୍ୟଟକ ନିରାପତ୍ତାର ରିଏଲ-ଟାଇମ ମନିଟରିଂ ଏବଂ ପରିଚାଳନା",
    "nav.overview": "ଓଭରଭିଉ",
    "nav.tourists": "ପର୍ଯ୍ୟଟକ ପରିଚାଳନା",
    "nav.alerts": "ସକ୍ରିୟ ଆଲର୍ଟ",
    "nav.map": "ପର୍ଯ୍ୟଟକ ହିଟ ମ୍ୟାପ",
    "nav.settings": "ସେଟିଂସ",
  },
  as: {
    "dashboard.overview": "ডেছবৰ্ড অভাৰভিউ",
    "dashboard.monitoring": "অঞ্চলসমূহত পৰ্যটক সুৰক্ষাৰ প্ৰকৃত সময়ৰ নিৰীক্ষণ আৰু ব্যৱস্থাপনা",
    "nav.overview": "অভাৰভিউ",
    "nav.tourists": "পৰ্যটক ব্যৱস্থাপনা",
    "nav.alerts": "সক্ৰিয় এলাৰ্ট",
    "nav.map": "পৰ্যটক হিট মেপ",
    "nav.settings": "ছেটিংছ",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};