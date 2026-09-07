"use client";

import React, { useState } from "react";

export default function MarketplaceHome() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ title: string; price: string } | null>(null);
  const [cardNumber, setCardNumber] = useState("4111 2222 3333 4444");
  const [cardHolder, setCardHolder] = useState("YASSER ANTAR");
  const [expiry, setExpiry] = useState("12/28");
  const [cvv, setCvv] = useState("888");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [buyingStatus, setBuyingStatus] = useState(false);

  const handleBuy = (item: { title: string; price: string }) => {
    setSelectedItem(item);
    setShowCheckout(true);
    setPurchaseSuccess(false);
  };

  const executeCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setBuyingStatus(true);
    setTimeout(() => {
      setBuyingStatus(false);
      setPurchaseSuccess(true);
    }, 1500);
  };

  const assets = [
    { title: "حزمة بروفايلات الذكاء الاصطناعي للهويات السعودية", category: "عقود وأصول", price: "299 SAR", rating: "4.9 ★" },
    { title: "محرك SaaS لتوليد العقود الهندسية وتتبع RLS", category: "كود إنتاجي", price: "499 SAR", rating: "5.0 ★" },
    { title: "نظام الأتمتة المتقدم لوكالات التسويق والإخراج الفني", category: "نظام أتمتة", price: "799 SAR", rating: "4.8 ★" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans border-t-4 border-amber-500" dir="rtl">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-slate-950 font-black text-2xl shadow-lg shadow-amber-500/20">
              🇸🇦
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                Saudi AI Marketplace OS
                <span className="text-xs px-2.5 py-0.5 rounded-full badge-amber font-semibold">تداول وشراء أصول الذكاء الاصطناعي</span>
              </h1>
              <p className="text-xs text-slate-400">المنصة السعودية الأولى لتداول الأصول والرموز البرمجية بالذكاء الاصطناعي</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full badge-amber text-xs font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              بوابة الدفع التلقائية (V10 Universal Finisher)
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-8">
        
        {/* Banner */}
        <section className="glass-card p-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-black text-white mb-2 leading-tight">
                متجر وحراج <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">الذكاء الاصطناعي السعودي</span> 🚀
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                منصة متكاملة لتداول الأصول البرمجية، العروض الفنية، وعقود الذكاء الاصطناعي المباشرة مع نموذج التعبئة المالية المشفرة أوتوماتيكياً.
              </p>
            </div>
          </div>
        </section>

        {/* Assets Grid */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🛒</span> الأصول الرقمية المتاحة للشراء المباشر:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assets.map((item, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-amber-300 font-semibold">{item.category}</span>
                    <span className="text-amber-400 font-bold">{item.rating}</span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xl font-black text-emerald-400">{item.price}</span>
                  <button
                    onClick={() => handleBuy(item)}
                    className="glow-btn-amber px-4 py-2 rounded-xl text-slate-950 font-black text-xs"
                  >
                    شراء الآن 💳
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Payment / Universal Finisher Modal */}
      {showCheckout && selectedItem && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6 space-y-5 relative">
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-white">إتمام عملية الشراء الإلكتروني</h3>
            <p className="text-xs text-amber-300 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
              💳 تم استدعاء وحدة V10 Universal Finisher لتعبئة بيانات البطاقة المشفرة تلقائياً.
            </p>

            {purchaseSuccess ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-2 text-center">
                <p className="text-emerald-400 font-bold text-base">🎉 تم الشراء وإتمام الدفع بنجاح!</p>
                <p className="text-xs text-slate-300">تم نقل الأصول الرقمية لحسابك وتم إرسال الإشعار.</p>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="mt-3 glow-btn-amber px-4 py-2 text-xs text-slate-950 rounded-lg font-black"
                >
                  إغلاق
                </button>
              </div>
            ) : (
              <form onSubmit={executeCheckout} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">اسم العنصر</label>
                  <input type="text" readOnly value={selectedItem.title} className="w-full bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-slate-300" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">رقم البطاقة (تعبئة مشفرة تلقائية)</label>
                  <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-amber-400 font-mono font-bold" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1">تاريخ الانتهاء</label>
                    <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-slate-200 font-mono" />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">رمز الأمان CVV</label>
                    <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-slate-200 font-mono" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={buyingStatus}
                  className="w-full glow-btn-amber py-3 rounded-xl text-slate-950 font-black text-sm mt-2"
                >
                  {buyingStatus ? "جاري الخصم وإتمام العملية..." : `تأكيد الشراء لدفع (${selectedItem.price}) 💳`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
