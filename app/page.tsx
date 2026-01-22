"use client";

import Image from "next/image";
import PhotoGallery from "./components/PhotoGallery";
import { useLanguage } from "./contexts/LanguageContext";
import { getImagePath } from "./utils/imagePath";

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
                src={getImagePath("/images/profile.jpg")}
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover select-none"
                priority
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("hero.greeting")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 flex items-center justify-center">
            {t("hero.subtitle")}                         
            <a
                          href="https://www.instagram.com/imjune0_0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block align-middle ml-4 text-purple-600 hover:text-purple-700 transition-colors cursor-pointer"
                          aria-label="Instagram @imjune0_0"
                          title="@imjune0_0"
                          style={{ verticalAlign: 'middle' }}
                        >
                          <svg
                            className="w-8 h-8 align-middle cursor-pointer"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            style={{ verticalAlign: 'middle' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-.977.045-1.508.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.35-.3.88-.344 1.857-.049 1.023-.06 1.351-.06 3.807v.468c0 2.456.011 2.784.06 3.807.045.977.207 1.508.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.137.88.3 1.857.344 1.054.048 1.37.06 4.041.06h.08c2.597 0 2.917-.012 3.96-.06.977-.045 1.508-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.35.3-.88.344-1.857.048-1.055.06-1.37.06-4.041v-.08c0-2.597-.012-2.917-.06-3.96-.045-.977-.207-1.508-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.35-.137-.88-.3-1.857-.344-1.023-.049-1.351-.06-3.807-.06zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t("about.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {t("about.background.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.background.description")}
              </p>
            </div>
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
              <p className="text-gray-600 items-center">
              {t("about.interests.description")}  
              {/* {(() => {
                  const description = ;
                  const instagramKeywords = ["0_0"];
                  let foundKeyword = "";
                  let parts: string[] = [];
                  
                  for (const keyword of instagramKeywords) {
                    if (description.includes(keyword)) {
                      foundKeyword = keyword;
                      parts = description.split(keyword);
                      break;
                    }
                  }
                  
                  if (parts.length > 1) {
                    return (
                      <>
                        {parts[0]}
                        {foundKeyword}
                        <a
                          href="https://www.instagram.com/imjune0_0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block align-middle ml-1.5 text-purple-600 hover:text-purple-700 transition-colors cursor-pointer"
                          aria-label="Instagram @imjune0_0"
                          title="@imjune0_0"
                          style={{ verticalAlign: 'middle' }}
                        >
                          <svg
                            className="w-5 h-5 align-middle cursor-pointer"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            style={{ verticalAlign: 'middle' }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-.977.045-1.508.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.35-.3.88-.344 1.857-.049 1.023-.06 1.351-.06 3.807v.468c0 2.456.011 2.784.06 3.807.045.977.207 1.508.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.137.88.3 1.857.344 1.054.048 1.37.06 4.041.06h.08c2.597 0 2.917-.012 3.96-.06.977-.045 1.508-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.35.3-.88.344-1.857.048-1.055.06-1.37.06-4.041v-.08c0-2.597-.012-2.917-.06-3.96-.045-.977-.207-1.508-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.35-.137-.88-.3-1.857-.344-1.023-.049-1.351-.06-3.807-.06zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        {parts[1]}
                      </>
                    );
                  }
                  return description;
                })()} */}
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
          <div className="flex flex-col items-center gap-2">
            <a
              href="mailto:hjqueeen@gmail.com"
              className="text-xl font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              {t("contact.emailAddress")}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>{t("footer.copyright")}</p>
      </footer>
    </main>
  );
}
