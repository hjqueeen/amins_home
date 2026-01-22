"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Navigation() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-sm shadow-xl z-40 flex flex-col hidden md:flex">
      {/* 네비게이션 메뉴 */}
      <div className="flex-1 p-4 pt-20">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === "home"
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {t("nav.home")}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === "about"
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {t("nav.about")}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === "portfolio"
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {t("nav.portfolio")}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === "contact"
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {t("nav.contact")}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
