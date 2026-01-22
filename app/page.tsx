"use client";

import Image from "next/image";
import PhotoGallery from "./components/PhotoGallery";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  // 사진 파일명 배열 (public/images 폴더에 있는 사진들)
  // 실제 사진 파일명으로 교체해주세요
  // 예: photo-1.jpg, photo-2.jpg, ... 또는 원하는 파일명
  const photos = Array.from({ length: 20 }, (_, i) => {
    const num = i + 1;
    // 다양한 파일 확장자 지원
    return `photo-${num}.jpg`; // 또는 .png, .jpeg 등으로 변경 가능
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-pink-200 to-purple-200 mb-6 flex items-center justify-center overflow-hidden shadow-xl">
              {/* 프로필 사진 - public/images/profile.jpg로 교체 가능 */}
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("hero.greeting")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            {t("hero.subtitle")}
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t("about.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t("about.experience.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.experience.description")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t("about.interests.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.interests.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t("portfolio.title")}
          </h2>
          <PhotoGallery photos={photos} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {t("contact.description")}
          </p>
          <p className="text-xl font-semibold text-purple-600">
            {t("contact.email")}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>{t("footer.copyright")}</p>
      </footer>
    </main>
  );
}
