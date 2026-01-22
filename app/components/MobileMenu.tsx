"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function MobileMenu() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 햄버거 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg"
        aria-label="메뉴 열기"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="p-4 pt-20">
            {/* 네비게이션 메뉴 */}
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                >
                  {t("nav.home")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                >
                  {t("nav.portfolio")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
