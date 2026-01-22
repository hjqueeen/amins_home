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
            <ul className="space-y-2 mb-6">
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
            
            {/* 인스타그램 링크 */}
            <div className="border-t border-gray-200 pt-4">
              <a
                href="https://www.instagram.com/imjune0_0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-.977.045-1.508.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.35-.3.88-.344 1.857-.049 1.023-.06 1.351-.06 3.807v.468c0 2.456.011 2.784.06 3.807.045.977.207 1.508.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.137.88.3 1.857.344 1.054.048 1.37.06 4.041.06h.08c2.597 0 2.917-.012 3.96-.06.977-.045 1.508-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.35.3-.88.344-1.857.048-1.055.06-1.37.06-4.041v-.08c0-2.597-.012-2.917-.06-3.96-.045-.977-.207-1.508-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.35-.137-.88-.3-1.857-.344-1.023-.049-1.351-.06-3.807-.06zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>@imjune0_0</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
