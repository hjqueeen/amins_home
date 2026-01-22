"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function ClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LanguageProvider>
      <Navigation />
      <MobileMenu />
      <LanguageSwitcher />
      <div className="md:ml-64">
        {children}
      </div>
    </LanguageProvider>
  );
}
