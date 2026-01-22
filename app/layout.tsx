import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

export const metadata: Metadata = {
  title: "Amin's Profile - 영화 배우 지원",
  description: "13세 영화 배우 지원자 Amin의 프로필 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
