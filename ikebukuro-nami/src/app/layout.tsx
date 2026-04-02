import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "池袋 なみ | Ikebukuro Nami",
  description: "紙が紡いだ歴史を、鉄板の熱気で書き換える。池袋にある唯一無二のコンセプトを持つお好み焼き店。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-deep-navy text-washi-white font-sans">
        {children}
      </body>
    </html>
  );
}
