import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "반디오디오 | 빈티지 오디오 · 턴테이블 · 스피커 · 앰프",
  description:
    "반디오디오는 빈티지 오디오, 턴테이블, 스피커, 앰프, 리시버를 직접 청음하고 상담받을 수 있는 빈티지 오디오 전문 공간입니다.",
  keywords: [
    "반디오디오",
    "BANDI AUDIO",
    "빈티지 오디오",
    "턴테이블",
    "스피커",
    "앰프",
    "리시버",
    "오디오 매입",
    "빈티지 오디오 매입",
    "안산 오디오",
    "안산 빈티지 오디오",
  ],
  openGraph: {
    title: "반디오디오 | 빈티지 오디오 전문점",
    description:
      "빈티지 오디오, 턴테이블, 스피커, 앰프, 리시버를 직접 청음하고 상담받을 수 있는 아날로그 사운드 공간입니다.",
    siteName: "반디오디오",
    type: "website",
    images: [
      {
        url: "/images/main-audio.jpg",
        width: 1200,
        height: 630,
        alt: "반디오디오 빈티지 오디오",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}