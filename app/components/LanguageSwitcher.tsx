"use client";

import { useLanguage } from "../contexts/LanguageContext";

type Language = "ko" | "en" | "de";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: "ko", name: "한국어" },
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            language === lang.code
              ? "bg-purple-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
