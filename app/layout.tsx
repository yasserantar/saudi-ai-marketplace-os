import React from "react";
import "./globals.css";

export const metadata = {
  title: "Saudi AI Marketplace OS | متجر الذكاء الاصطناعي السعودي",
  description: "المنصة السعودية الأولى لتداول الأصول والرموز البرمجية بالذكاء الاصطناعي والدفع الإلكتروني المشفر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
