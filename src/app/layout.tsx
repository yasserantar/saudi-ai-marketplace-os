import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingAssistant from "@/components/FloatingAssistant";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "السوق الذكي | Saudi AI Marketplace OS",
  description:
    "منصة سعودية متكاملة لتداول الأصول الرقمية، الأكواد البرمجية، والعقود الذكية مع دفع فوري ببطاقات الائتمان المشفرة.",
  keywords: [
    "السوق الذكي",
    "حراج الذكاء الاصطناعي",
    "أصول رقمية",
    "متجر سعودي",
    "NFT",
    "عقود ذكية",
    "AI Marketplace Saudi",
  ],
  openGraph: {
    title: "السوق الذكي | Saudi AI Marketplace OS",
    description: "تداول فوري وآمن للأصول الرقمية والعقود الذكية في المملكة.",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="min-h-screen font-arabic antialiased bg-[#0a0f1f] text-sand-50 selection:bg-sand-400/40 selection:text-sand-50">
        <div className="relative isolate overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-pattern" />
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />
          <Header />
          <main className="relative">{children}</main>
          <Footer />
          <FloatingAssistant />
        </div>
      </body>
    </html>
  );
}
