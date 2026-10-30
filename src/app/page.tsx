"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ja">("en");
  const [mounted, setMounted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("wdl_lang") as "en" | "ja" | null;
    if (saved === "en" || saved === "ja") {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const switchLanguage = (target: "en" | "ja") => {
    setLang(target);
    localStorage.setItem("wdl_lang", target);
    document.documentElement.lang = target;
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          preferredTime: `${formData.preferredTime} (Phone: ${formData.phone})`,
          message: formData.message || "Reservation requested via LA Landing Page.",
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", preferredTime: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterMsg(lang === "ja" ? "有効なメールアドレスを入力してください。" : "Please enter a valid email address.");
      setNewsletterStatus("error");
      return;
    }

    setNewsletterStatus("loading");
    try {
      const res = await fetch("https://worlddivinelight.org/visitor/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: newsletterEmail.trim(),
          branch: "los_angeles",
          source: "la-lp",
          website: "",
        }),
      });

      if (res.ok) {
        setNewsletterStatus("success");
        setNewsletterMsg(lang === "ja" ? "ご登録ありがとうございます！" : "Thank you! You're on the list.");
        setNewsletterEmail("");
      } else {
        const d = await res.json().catch(() => ({}));
        setNewsletterStatus("error");
        setNewsletterMsg(d.error || (lang === "ja" ? "エラーが発生しました。時間をおいてお試しください。" : "Something went wrong. Please try again."));
      }
    } catch {
      setNewsletterStatus("error");
      setNewsletterMsg(lang === "ja" ? "通信エラーが発生しました。" : "Something went wrong. Please try again later.");
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#FAF6F0]" />;
  }

  return (
    <div className="bg-[#FAF6F0] text-[#2A2522] selection:bg-[#DE7356] selection:text-white pb-20 md:pb-0">
      
      {/* Top Banner */}
      <div className="bg-[#FBF5EB] border-b border-[#E8E1D5] py-2 px-4 text-center text-xs md:text-sm font-medium text-[#2A2522]">
        {lang === "en" ? (
          <span>✦ A US Government-Recognized 501(c)(3) Non-Profit Spiritual Organization · Monterey Park, CA</span>
        ) : (
          <span>✦ 米国政府公認 501(c)(3) 非営利スピリチュアル団体 · カリフォルニア州モントレーパーク</span>
        )}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E8E1D5]/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Left: Logo & Organization Name */}
          <div className="flex-1 flex items-center justify-start">
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <img
                src="/assets/wdl_logo.png"
                alt="World Divine Light"
                width={100}
                height={36}
                style={{ height: "36px", maxHeight: "36px", width: "auto", objectFit: "contain" }}
                className="shrink-0 block"
              />
              <div className="border-l border-[#E8E1D5]/80 pl-3 hidden sm:block whitespace-nowrap">
                <span className="block font-serif font-bold text-sm md:text-base leading-tight tracking-tight text-[#2A2522] group-hover:text-[#DE7356] transition-colors">
                  Los Angeles Divine Light Center
                </span>
                <span className="block text-[10px] text-[#6C655E] tracking-wide">
                  World Divine Light Organization
                </span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Nav Links (Horizontally and Vertically Centered) */}
          <nav className="hidden xl:flex items-center justify-center gap-7 text-sm font-medium text-[#6C655E] shrink-0">
            <a href="#about" className="hover:text-[#2A2522] transition-colors whitespace-nowrap flex items-center h-full py-1">
              {lang === "en" ? "The Practice" : "お浄めとは"}
            </a>
            <a href="#principle" className="hover:text-[#2A2522] transition-colors whitespace-nowrap flex items-center h-full py-1">
              {lang === "en" ? "The Principle" : "魂のメカニズム"}
            </a>
            <a href="#experiences" className="hover:text-[#2A2522] transition-colors whitespace-nowrap flex items-center h-full py-1">
              {lang === "en" ? "Experiences" : "体験者の声"}
            </a>
            <a href="#visit" className="hover:text-[#2A2522] transition-colors whitespace-nowrap flex items-center h-full py-1">
              {lang === "en" ? "What to Expect" : "当日の流れ"}
            </a>
            <a href="#contact" className="hover:text-[#2A2522] transition-colors whitespace-nowrap flex items-center h-full py-1">
              {lang === "en" ? "Visit Us" : "アクセス"}
            </a>
          </nav>

          {/* Right: Actions */}
          <div className="flex-1 flex items-center justify-end gap-3 shrink-0">
            <div className="flex items-center bg-white p-1 rounded-full border border-[#E8E1D5] shadow-sm text-xs font-semibold shrink-0">
              <button
                onClick={() => switchLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === "en" ? "bg-[#DE7356] text-white" : "text-[#6C655E] hover:text-[#2A2522]"}`}
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage("ja")}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === "ja" ? "bg-[#DE7356] text-white" : "text-[#6C655E] hover:text-[#2A2522]"}`}
              >
                日本語
              </button>
            </div>

            <a
              href="#booking"
              className="hidden sm:inline-flex items-center justify-center px-4 md:px-5 py-2.5 rounded-full bg-[#2A2522] hover:bg-[#DE7356] text-white text-xs md:text-sm font-semibold transition-all shadow-retro hover:shadow-retro-hover whitespace-nowrap"
            >
              {lang === "en" ? "Book a Session" : "体験予約"}
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-0 pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/assets/ocean_light.jpg"
            alt="Golden Divine Light over the ocean horizon"
            className="w-full h-full object-cover object-center opacity-70 filter brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/70 via-transparent to-[#FAF6F0]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/40 via-transparent to-[#FAF6F0]/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E1D5] text-xs md:text-sm font-medium text-[#6C655E] mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#DE7356] animate-pulse" />
            <span>{lang === "en" ? "Non-Profit Spiritual Sanctuary in Los Angeles" : "ロサンゼルス · 心と魂の非営利サンクチュアリ"}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2A2522] leading-[1.2] mb-6">
            <span>Back to the Origin.</span>
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#DE7356] block mt-2 sm:mt-0">
              {lang === "en" ? (
                "Return to your peaceful, luminous self."
              ) : (
                <>
                  <span className="inline-block">本来の、澄みわたるあなたへ</span>
                  <span className="inline-block">還る場所。</span>
                </>
              )}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6C655E] leading-relaxed mb-10 font-normal">
            {lang === "en" ? (
              <>
                In a world that never slows down, true peace begins from within. Experience <em>tekazashi</em> (the sacred art of radiating Divine Light) — a gentle, non-contact spiritual practice that purifies accumulated spiritual burdens and restores harmony to soul, mind, and body.
              </>
            ) : (
              "忙しさに追われる現代社会の中で、本当の平穏はあなたの内側から始まります。「手かざし（真光の業）」は、魂に積もった曇りを優しく祓い、霊・心・体の三位一体の調和を取り戻す、静謐で温かなお浄めのプラクティスです。"
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#booking"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#DE7356] hover:bg-[#C86348] text-white font-semibold text-base shadow-retro-btn transition-all"
            >
              {lang === "en" ? "Reserve a Session (Donation-based)" : "体験セッションを予約する（ドネーション制）"}
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full bg-white hover:bg-[#FDFCF9] text-[#2A2522] font-semibold text-base border border-[#E8E1D5] shadow-sm transition-all"
            >
              {lang === "en" ? "Learn What Okiyome Is ↓" : "お浄めの働きについて詳しく ↓"}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-[#6C655E]">
            <div className="flex items-center gap-2 bg-white/90 border border-[#E8E1D5] px-4 py-2 rounded-2xl shadow-sm">
              <span className="text-[#5B8266]">✦</span>
              <span>{lang === "en" ? "Non-contact Spiritual Practice" : "非接触の穏やかなプラクティス"}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 border border-[#E8E1D5] px-4 py-2 rounded-2xl shadow-sm">
              <span className="text-[#C29243]">✦</span>
              <span>{lang === "en" ? "100% Non-Profit 501(c)(3)" : "米国政府公認 501(c)(3) 非営利団体"}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 border border-[#E8E1D5] px-4 py-2 rounded-2xl shadow-sm">
              <span className="text-[#DE7356]">✦</span>
              <span>{lang === "en" ? "Open to All Faiths & Backgrounds" : "宗教・信条を問わずどなたでも歓迎"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-20 bg-white border-y border-[#E8E1D5]/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#DE7356] uppercase">Modern Life & The Soul</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2522] mt-2 mb-4 leading-tight">
              {lang === "en" ? (
                "In an Advancing World, Why Does the Soul Feel Weary?"
              ) : (
                <>
                  <span className="inline-block">物質が豊かになった世界で、</span>
                  <span className="inline-block">なぜ心は重さを感じるのか？</span>
                </>
              )}
            </h2>
            <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed">
              {lang === "en"
                ? "When outer convenience and comforts have never been higher, why are so many exhausted within?"
                : "外の世界がどれほど便利になっても、内なる疲労感や不安が消えない理由。"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="retro-card bg-[#FDFCF9] p-8 rounded-3xl border border-[#E8E1D5] shadow-retro">
              <div className="w-12 h-12 rounded-2xl bg-[#FBF5EB] text-[#C29243] flex items-center justify-center text-2xl mb-6">
                ⏳
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A2522] mb-3">
                {lang === "en" ? "The Modern Paradox" : "現代社会のパラドックス"}
              </h3>
              <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed">
                {lang === "en"
                  ? "Civilization has brought unprecedented technological abundance. Yet ongoing societal tensions, health challenges, and emotional burdens continue to escalate. Many observe that people in simpler eras often enjoyed deeper, everyday contentment than we experience today."
                  : "文明は発展し、物質的にはかつてないほど豊かになりました。しかし、社会の不安、病に悩む人の増加、精神的ストレスは後を絶ちません。物資が少なかった昔の人々の方が、心の幸福度が高かったとも言われています。"}
              </p>
            </div>

            <div className="retro-card bg-[#FDFCF9] p-8 rounded-3xl border border-[#E8E1D5] shadow-retro">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF2ED] text-[#5B8266] flex items-center justify-center text-2xl mb-6">
                🍃
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A2522] mb-3">
                {lang === "en" ? "Fatigue Beyond Physical Rest" : "休息だけでは取れない「重さ」"}
              </h3>
              <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed">
                {lang === "en"
                  ? "You rest, eat thoughtfully, and meditate, yet an unexplained heaviness lingers. Unresolved worries, friction in relationships, and feeling chronically 'stuck' can feel impossible to overcome through willpower or material solutions alone."
                  : "食事に気を遣い、しっかり休息をとっても抜けない倦怠感。人間関係の軋轢や、なぜか物事がスムーズに進まない焦燥感。「どれだけ努力しても空回りしてしまう」と感じることはありませんか？"}
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#FAF6F0] border border-[#E8E1D5] p-6 sm:p-8 rounded-3xl text-center max-w-3xl mx-auto shadow-sm">
            <p className="font-serif italic text-base sm:text-lg text-[#2A2522] leading-relaxed">
              {lang === "en"
                ? "“When you feel resistance no matter how hard you strive, the root cause often does not lie in your external environment — but in the unseen state of your soul.”"
                : "「どれだけ努力しても心が晴れないとき、その根本原因は外側の環境ではなく、目に見えない魂の状態にあるのかもしれません。」"}
            </p>
          </div>
        </div>
      </section>

      {/* The Principle Section */}
      <section id="principle" className="py-20 md:py-28 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#5B8266] uppercase">The Spiritual Mechanism</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2522] mt-2 mb-4 leading-tight">
              {lang === "en" ? (
                "The Soul & Spiritual Cloudiness"
              ) : (
                <>
                  <span className="inline-block">魂の本質と、</span>
                  <span className="inline-block">そこに宿る「曇り」について</span>
                </>
              )}
            </h2>
            <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed">
              {lang === "en"
                ? "Returning to our origin: the state of unconditional love, sincerity, and inner radiance."
                : "本来の私たち――無条件の愛と真、神性にあふれた澄みきった姿へ還る。"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="retro-card bg-white p-7 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FBF5EB] text-[#C29243] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2A2522] mb-2">
                  {lang === "en" ? "Original Divine Nature" : "本来の魂の姿（神性化）"}
                </h3>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                  {lang === "en"
                    ? "Our essence resides in the soul. Every individual possesses an inherently pure divine spark, destined for continual elevation toward divine nature through life experiences."
                    : "私たちの本質は「魂」にあります。魂は本来、生まれ変わり死に変わりしながら向上し、神性化（elevation toward divine nature）へと向かう浄らかな存在です。"}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E1D5]/60 text-[11px] text-[#5B8266] font-semibold uppercase">
                Pure & Radiant
              </div>
            </div>

            <div className="retro-card bg-white p-7 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FBF5EB] text-[#C29243] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2A2522] mb-2">
                  {lang === "en" ? "Accumulated Clouding" : "積み重なる「魂の曇り」"}
                </h3>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                  {lang === "en"
                    ? "Over generations and in daily stress, spiritual clouds accumulate. Negative Sonen (the deepest disposition of heart: resentment, envy, anger) and discord cast shadows over our innate light."
                    : "長い歴史や日々の生活の中で、争いや肉体の毒化、恨み・妬み・怒りといった「悪想念（negative Sonen）」を放ち、魂の周りに多くの“曇り”を積んでしまいました。"}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E1D5]/60 text-[11px] text-[#DE7356] font-semibold uppercase">
                Spiritual Clouds (Kumori)
              </div>
            </div>

            <div className="retro-card bg-white p-7 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FBF5EB] text-[#C29243] flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2A2522] mb-2">
                  {lang === "en" ? "The Outer Reflection" : "現実への影響と停滞"}
                </h3>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                  {lang === "en"
                    ? "Just as dust dims a lightbulb, a clouded soul lowers your inner frequency. Thoughts lean negative, and outer circumstances reflect that discord in health, relationships, and wellbeing."
                    : "電球にホコリが被ると光が遮られるように、魂が曇っていると何をしてもうまくいかず、物事がネガティブに働き、心身や周りの環境に不調和が起こります。"}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E1D5]/60 text-[11px] text-[#6C655E] font-semibold uppercase">
                Lower Frequency
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-[#FBF5EB]/40 border border-[#E8E1D5] p-8 sm:p-10 rounded-3xl shadow-retro text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#C29243] uppercase">The Essential Solution</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2522] mt-2 mb-4">
              {lang === "en" ? (
                "Purifying Deep Clouds with Divine Light"
              ) : (
                <>
                  <span className="inline-block">神のみ光で、</span>
                  <span className="inline-block">魂の奥底の曇りをそっと払う</span>
                </>
              )}
            </h3>
            <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
              {lang === "en"
                ? "To dispel accumulated spiritual clouds, human willpower alone is not enough. We require a vibration of pure unconditional love: direct radiation of God's Divine Light."
                : "魂の奥底にある曇りを祓うには、人間の力だけでは及びません。神様の愛の波動である「み光（Divine Light）」を直接魂に放射し、その曇りを浄めることが必要なのです。"}
            </p>
            <a href="#about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#DE7356] hover:text-[#C86348]">
              {lang === "en" ? "How Tekazashi works →" : "手かざし（真光の業）の仕組みを見る →"}
            </a>
          </div>
        </div>
      </section>

      {/* The Practice Section */}
      <section id="about" className="py-20 md:py-28 bg-white border-y border-[#E8E1D5]/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#DE7356] uppercase">Spiritual Practice</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2522] mt-2 mb-6 leading-tight">
                {lang === "en" ? (
                  <>
                    The Practice of Tekazashi<br />
                    <span className="text-[#DE7356] italic font-normal">The Sacred Art of Divine Light</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block">手かざし（真光の業）</span><br />
                    <span className="text-[#DE7356] italic font-normal inline-block">神の愛のみ光を注ぐ、</span>
                    <span className="text-[#DE7356] italic font-normal inline-block">お浄めの時間</span>
                  </>
                )}
              </h2>

              <div className="space-y-6 text-[#6C655E] text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>{lang === "en" ? "Non-contact & Peaceful: " : "身体に触れない静謐なひととき: "}</strong>
                  {lang === "en"
                    ? "Sitting comfortably in a chair or resting on a table, a practitioner gently raises their hand from a short distance toward you, serving as an open channel for God's Divine Light. No physical touch is involved."
                    : "椅子に腰掛け、目を閉じてリラックスしてください。施術者は身体に一切触れることなく、少し離れた位置から手を向け、神のみ光（Divine Light）を取り次ぎます。"}
                </p>
                <p>
                  <strong>{lang === "en" ? "Dissolving Spiritual Burdens: " : "根本の曇りを浄化: "}</strong>
                  {lang === "en"
                    ? "The radiant spiritual energy reaches deep into the soul, gently melting away accumulated clouds and heavy vibrations."
                    : "神のみ光が魂の奥深くまで直接届き、長年積もった曇りを穏やかに溶かし祓います。"}
                </p>
                <p>
                  <strong>{lang === "en" ? "Conversion of Sonen (Inner Harmony): " : "想念の転換（感謝の波動へ）: "}</strong>
                  {lang === "en"
                    ? "As your soul clears, your Sonen (innermost disposition) naturally elevates into gratitude and peace. When your internal resonance changes, your outer life and circumstances naturally align with harmony."
                    : "魂が浄まると、あなた自身の内なる想念（Sonen）が自然と感謝と調和の波長へと向上します。あなたの出す波動が変わることで、周囲の環境や出来事も自然とポジティブに好転し始めます。"}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#E8E1D5]/70 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#5B8266] text-lg">🌿</span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#2A2522] block">
                      {lang === "en" ? "Deep Physical Release" : "深い心身のリラクゼーション"}
                    </strong>
                    <span className="text-[#6C655E]">
                      {lang === "en" ? "Relief from chronic fatigue & heaviness" : "慢性的な重さや倦怠感の解消"}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#DE7356] text-lg">🕊️</span>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#2A2522] block">
                      {lang === "en" ? "Clarity of Heart" : "思考と心の静寂"}
                    </strong>
                    <span className="text-[#6C655E]">
                      {lang === "en" ? "Freedom from cyclical worries" : "理由のない不安や焦燥の緩和"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#FAF6F0] border border-[#E8E1D5] p-5 sm:p-6 rounded-3xl shadow-retro relative overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden mb-6 shadow-sm border border-[#E8E1D5]/80 group">
                  <img
                    src="/assets/okiyome_session.jpg"
                    alt="Actual spiritual purification (tekazashi) session at Los Angeles Divine Light Center"
                    className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#2A2522] shadow-sm border border-[#E8E1D5] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5B8266] animate-pulse" />
                    <span>{lang === "en" ? "Our Monterey Park Center" : "実際のセッション風景"}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#2A2522]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-medium">
                    <span>{lang === "en" ? "Seated or on a bed" : "椅子・ベッド完備"}</span>
                  </div>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2522] mb-2 text-center">
                  {lang === "en" ? (
                    "A Warm, Light-Filled Space"
                  ) : (
                    <>
                      <span className="inline-block">明るく清潔で、</span>
                      <span className="inline-block">静謐な空間</span>
                    </>
                  )}
                </h4>
                <p className="text-[#6C655E] text-xs sm:text-sm mb-6 text-center leading-relaxed">
                  {lang === "en"
                    ? "A dedicated 60-minute experience (approx. 10 min welcome, 40 min Divine Light session, and 10 min tea & reflection). Receive Divine Light seated in a chair or resting on a padded table."
                    : "全体で約60分の個別セッション（ご案内約10分、お浄め40分、お茶とご歓談約10分）。椅子に座るスタイル、またはベッドに横になってゆったりとお受けいただけます。"}
                </p>

                <div className="p-4 bg-white rounded-2xl border border-[#E8E1D5] text-left mb-6 space-y-2 text-xs text-[#6C655E]">
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <strong className="text-[#2A2522] font-semibold">
                      {lang === "en" ? "60 minutes" : "約60分（全体）"}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Booking</span>
                    <strong className="text-[#DE7356] font-semibold">
                      {lang === "en" ? "By Appointment Only" : "完全予約制"}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee</span>
                    <strong className="text-[#5B8266] font-semibold">
                      {lang === "en" ? "Donation-based (Contributions welcome)" : "ドネーション制（御奉納）"}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Touch</span>
                    <strong className="text-[#2A2522] font-semibold">Non-contact (No physical touch)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Attire</span>
                    <strong className="text-[#2A2522] font-semibold">
                      {lang === "en" ? "Casual OK (Socks required)" : "カジュアルOK（靴下着用）"}
                    </strong>
                  </div>
                </div>

                <a
                  href="#booking"
                  className="block w-full py-3 px-6 rounded-full bg-[#2A2522] hover:bg-[#DE7356] text-white font-semibold text-sm transition-all shadow-retro text-center"
                >
                  {lang === "en" ? "Reserve a Session" : "体験予約はこちら"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="experiences" className="py-20 md:py-28 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#C29243] uppercase">Real Journeys</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2522] mt-2 mb-4 leading-tight">
              {lang === "en" ? (
                "Experiences of Renewal & Peace"
              ) : (
                <>
                  <span className="inline-block">訪れた方々に起きた、</span>
                  <span className="inline-block">心と日々の変化</span>
                </>
              )}
            </h2>
            <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed">
              {lang === "en"
                ? "Individuals across Southern California have experienced remarkable inner shifts through consistent Divine Light."
                : "手かざしを通して、世界中で多くの人々が本来の生命力と調和を取り戻しています。"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="retro-card bg-white p-7 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col justify-between">
              <div>
                <div className="text-[#DE7356] text-3xl font-serif mb-4">“</div>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed mb-6">
                  {lang === "en"
                    ? "“Facing a severe health diagnosis left me drained and fearful. Receiving Divine Light at the Center enveloped me in a profound, peaceful warmth. My fear transformed into deep gratitude. Over time, I experienced an astonishing renewal of vitality that even surprised my physicians.”"
                    : "「命に関わる重大な診断を受け、心身ともに深い絶望の中にありました。道場でお浄めを受ける中で、胸の奥が温かい光に包まれる安心感をいただき、恐れが生への感謝へと変わりました。今では主治医も驚くほどの健やかさと活力を取り戻しています。」"}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5]/60">
                <strong className="block text-[#2A2522] text-xs sm:text-sm font-semibold">
                  {lang === "en" ? "Community Member" : "S.M. さん"}
                </strong>
                <span className="text-[11px] text-[#6C655E]">
                  {lang === "en" ? "Southern California" : "南カリフォルニア在住"}
                </span>
              </div>
            </div>

            <div className="retro-card bg-white p-7 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col justify-between">
              <div>
                <div className="text-[#5B8266] text-3xl font-serif mb-4">“</div>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed mb-6">
                  {lang === "en"
                    ? "“I was weighed down by severe financial hardship and relentless panic. Receiving tekazashi regularly quieted my frantic mind. As my inner state settled, positive relationships and unexpected opportunities opened up. Life began smoothing out in wonderful ways.”"
                    : "「経済的な苦境と先行きの見えない焦りで、心に余裕がありませんでした。継続的にお浄めを受けることで、常にざわついていた想念が静まり、不思議と周囲の出来事や良縁がスムーズに動き始め、心穏やかな生活を送れています。」"}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5]/60">
                <strong className="block text-[#2A2522] text-xs sm:text-sm font-semibold">
                  {lang === "en" ? "Participant" : "D.K. さん"}
                </strong>
                <span className="text-[11px] text-[#6C655E]">
                  {lang === "en" ? "San Gabriel Valley" : "サンガブリエル・バレー在住"}
                </span>
              </div>
            </div>

            <div className="retro-card bg-white p-7 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col justify-between">
              <div>
                <div className="text-[#C29243] text-3xl font-serif mb-4">“</div>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed mb-6">
                  {lang === "en"
                    ? "“For years, I woke up with an unexplained heaviness that made every morning difficult. After receiving spiritual purification during my visit, it felt as though an invisible weight was lifted from my chest. My vision became clear and my spirit felt genuinely light.”"
                    : "「原因の分からない重い倦怠感が日常化し、何をするにも億劫でした。初めてお浄めを体験した直後、肩から大きな荷物を下ろしたかのように呼吸が楽になり、視界が明るくなった感覚に驚きました。」"}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E1D5]/60">
                <strong className="block text-[#2A2522] text-xs sm:text-sm font-semibold">
                  {lang === "en" ? "First-time Visitor" : "E.R. さん"}
                </strong>
                <span className="text-[11px] text-[#6C655E]">
                  {lang === "en" ? "Los Angeles County" : "ロサンゼルス在住"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Commitments Section */}
      <section className="py-20 md:py-28 bg-white border-y border-[#E8E1D5]/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#DE7356] uppercase">Safe & Trusted Sanctuary</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2522] mt-2 mb-4 leading-tight">
              {lang === "en" ? (
                "Our 3 Core Commitments to You"
              ) : (
                <>
                  <span className="inline-block">安心してご来訪いただくための、</span>
                  <span className="inline-block">3つのお約束</span>
                </>
              )}
            </h2>
            <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed">
              {lang === "en"
                ? "We exist solely to share peace, spiritual purification, and well-being as a non-profit mission."
                : "私たちは営利目的ではなく、一人でも多くの方に心の平安をお届けする非営利の活動です。"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FDFCF9] p-8 rounded-3xl border border-[#E8E1D5] text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#EBF2ED] text-[#5B8266] flex items-center justify-center text-2xl mb-6">
                🕊️
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2522] mb-2">
                {lang === "en" ? "Donation-Based Model" : "ドネーション制（御奉納）"}
              </h3>
              <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                {lang === "en"
                  ? "Spiritual light is a gift meant for all humanity. Sessions are offered on a donation basis; contributions to support our sanctuary are warmly welcomed, but there are no mandatory charges or forced fees."
                  : "神のみ光はすべての人に開かれています。セッションはドネーション制（御奉納）となっており、道場を維持するための御奉納は感謝してお受けいたしますが、決まった料金や強制的な請求は一切ございません。"}
              </p>
            </div>

            <div className="bg-[#FDFCF9] p-8 rounded-3xl border border-[#E8E1D5] text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FBF5EB] text-[#C29243] flex items-center justify-center text-2xl mb-6">
                🤝
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2522] mb-2">
                {lang === "en" ? "Zero Pressure / No Conversion" : "勧誘なし・信条の自由"}
              </h3>
              <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                {lang === "en"
                  ? "You will never be asked to change your faith or join an organization. There are no mandatory memberships, merchandise sales, or aggressive solicitations. Come as you are."
                  : "宗教や信条を変えていただく必要はありません。物品の販売や入会の強制・義務も一切なく、どなたでも安心してお立ち寄りいただけます。"}
              </p>
            </div>

            <div className="bg-[#FDFCF9] p-8 rounded-3xl border border-[#E8E1D5] text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FDE8DF] text-[#DE7356] flex items-center justify-center text-2xl mb-6">
                🏛️
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A2522] mb-2">
                {lang === "en" ? "Recognized 501(c)(3) Nonprofit" : "米国公認 501(c)(3) 非営利"}
              </h3>
              <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                {lang === "en"
                  ? "Operated as part of the World Divine Light Organization (Sekai Mahikari Bunmei Kyodan) by sincere, caring volunteers dedicated to the well-being of the Los Angeles community."
                  : "世界真光文明教団（World Divine Light Organization）の一環として、人々の幸福と地域社会への貢献を願い、思いやりあるボランティアによって誠実に運営されています。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect (3 Steps with Photos) */}
      <section id="visit" className="py-20 md:py-28 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#5B8266] uppercase">Plan Your Visit</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2522] mt-2 mb-4 leading-tight">
              {lang === "en" ? (
                "What to Expect on Your Visit"
              ) : (
                <>
                  <span className="inline-block">当日の流れと</span>
                  <span className="inline-block">ご来訪ガイド</span>
                </>
              )}
            </h2>
            <p className="text-[#6C655E] text-sm sm:text-base leading-relaxed">
              {lang === "en"
                ? "A relaxing, transparent 60-minute experience designed to put your mind and body at ease."
                : "心身を解きほぐす、約60分間のリラックスした体験ステップ。"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8 text-center text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-2xl border border-[#E8E1D5]">
              <span className="block text-[#6C655E] mb-1">⏱ Duration</span>
              <strong className="text-[#2A2522] font-semibold">
                {lang === "en" ? "Approx. 60 min" : "全体で約60分"}
              </strong>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#E8E1D5]">
              <span className="block text-[#6C655E] mb-1">📅 Reservation</span>
              <strong className="text-[#DE7356] font-semibold">
                {lang === "en" ? "Appointment Only" : "完全予約制"}
              </strong>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#E8E1D5]">
              <span className="block text-[#6C655E] mb-1">👕 Attire</span>
              <strong className="text-[#2A2522] font-semibold">
                {lang === "en" ? "Casual (Socks required)" : "普段着（靴下必須）"}
              </strong>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#E8E1D5]">
              <span className="block text-[#6C655E] mb-1">🚗 Parking</span>
              <strong className="text-[#2A2522] font-semibold">Free on-site</strong>
            </div>
          </div>

          {/* Important Notice: Individual Sessions & Companions */}
          <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-[#FBF5EB] border border-[#C29243]/30 text-xs text-[#2A2522] shadow-sm">
            <div className="font-bold flex items-center gap-2 mb-1.5 text-[#DE7356] text-xs sm:text-sm">
              <span>ℹ️</span>
              <span>
                {lang === "en"
                  ? "By Appointment Only · Note on Group or Family Visits"
                  : "【完全予約制】複数名でお越しになる際のご案内"}
              </span>
            </div>
            <p className="text-[#6C655E] text-xs leading-relaxed">
              {lang === "en"
                ? "Each Okiyome session is conducted individually (one-on-one) with dedicated care. If you plan to visit with family or friends, sessions will be provided one person at a time (approx. 1 hour per person). We kindly appreciate your understanding."
                : "お浄めセッションはお一人おひとりに心を込めて丁寧に行うため、複数名でお越しになる際は、お一人につき約1時間ずつの順番でのご案内（交代制）となります。あらかじめご了承のほどお願い申し上げます。"}
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="retro-card bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-[#E8E1D5] group">
                <img
                  src="/assets/staff_host.jpg"
                  alt="Our welcoming staff"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#2A2522]/80 text-white text-[10px] text-center py-0.5 font-medium">Step 1</div>
              </div>
              <div className="grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#6C655E]">~10 min</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2522]">
                    {lang === "en" ? (
                      "Warm Welcome & Brief Overview"
                    ) : (
                      <>
                        <span className="inline-block">笑顔でお出迎え・</span>
                        <span className="inline-block">簡単なご案内</span>
                      </>
                    )}
                  </h3>
                </div>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed mb-2">
                  {lang === "en"
                    ? "Our caring volunteers greet you with a warm smile in a quiet room, explaining the simple flow and answering any initial questions. Clean socks are required as shoes are removed inside."
                    : "スタッフが温かくお迎えし、静かなお部屋で体験の簡単な流れをご説明します。道場内は靴を脱いで上がっていただくため、靴下の着用（またはご持参）をお願いしております。"}
                </p>
                <p className="text-[11px] text-[#6C655E] italic border-l-2 border-[#DE7356] pl-2.5">
                  {lang === "en"
                    ? "“Our doors and hearts are open to all people. We look forward to meeting you.”"
                    : "「私たちの扉と心は、どなたにも開かれています。皆さまにお会いできることを楽しみにしております。」"}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="retro-card bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-[#E8E1D5] group">
                <img
                  src="/assets/okiyome_session.jpg"
                  alt="Spiritual purification session"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#DE7356] text-white text-[10px] text-center py-0.5 font-medium">Step 2</div>
              </div>
              <div className="grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#6C655E]">40 min</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2522]">
                    {lang === "en" ? (
                      "The Divine Light Session (Tekazashi)"
                    ) : (
                      <>
                        <span className="inline-block">お浄め（手かざし）の</span>
                        <span className="inline-block">体験</span>
                      </>
                    )}
                  </h3>
                </div>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                  {lang === "en"
                    ? "Rest comfortably in a chair or recline on a padded table, close your eyes, and relax. Without physical contact, the practitioner gently radiates Divine Light for 40 minutes to clear inner burdens."
                    : "椅子にゆったり腰掛けるか、施術ベッドに横になって目を閉じてリラックスしてください。身体に触れることなく、穏やかに神のみ光を40分間取り次ぎます。"}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="retro-card bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E1D5] shadow-retro flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-[#E8E1D5] group">
                <img
                  src="/assets/warm_tea.jpg"
                  alt="Warm tea after session"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#5B8266] text-white text-[10px] text-center py-0.5 font-medium">Step 3</div>
              </div>
              <div className="grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#6C655E]">~10 min</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A2522]">
                    {lang === "en" ? (
                      "Warm Tea & Open Conversation"
                    ) : (
                      <>
                        <span className="inline-block">温かいお茶と</span>
                        <span className="inline-block">自由なご歓談</span>
                      </>
                    )}
                  </h3>
                </div>
                <p className="text-[#6C655E] text-xs sm:text-sm leading-relaxed">
                  {lang === "en"
                    ? "Enjoy a cup of warm tea and reflect on how your mind and body feel. Ask any questions freely. No membership solicitations ever."
                    : "温かいお茶をお召し上がりいただきながら、感想やご質問を自由にお話しいただけます。入会の勧誘は一切ありません。"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking & Location Section */}
      <section id="booking" className="py-20 md:py-28 bg-white border-y border-[#E8E1D5]/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Booking Form */}
            <div className="lg:col-span-7 bg-[#FDFCF9] p-8 sm:p-10 rounded-3xl border border-[#E8E1D5] shadow-retro">
              <span className="text-xs font-bold tracking-widest text-[#DE7356] uppercase">
                {lang === "en" ? "By Appointment Only" : "完全予約制"}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2522] mt-2 mb-3">
                {lang === "en" ? (
                  "Book Your Divine Light Session"
                ) : (
                  <>
                    <span className="inline-block">体験セッションの</span>
                    <span className="inline-block">ご予約</span>
                  </>
                )}
              </h2>
              <p className="text-[#6C655E] text-xs sm:text-sm mb-4 leading-relaxed">
                {lang === "en"
                  ? "Sessions are by appointment only. Because each session is conducted individually (one-on-one) for approx. 1 hour, please note that visiting with companions will be scheduled sequentially."
                  : "当道場は完全予約制となっております。お浄めセッションはお一人ずつ丁寧に行うため（1回約1時間）、複数名様でお越しの際はお一人ずつの順番でのご案内となります。"}
              </p>

              <div className="p-3.5 rounded-xl bg-[#FBF5EB] border border-[#C29243]/30 text-[11px] text-[#6C655E] mb-6 leading-relaxed">
                <strong className="text-[#DE7356] block mb-0.5">
                  {lang === "en" ? "✦ One-on-One Dedicated Sessions" : "✦ お一人ずつの個別ご案内について"}
                </strong>
                {lang === "en"
                  ? "Each visit is approx. 60 min (welcome, 40 min Divine Light, and tea). If visiting as a group or pair, total time will be approx. 1 hour per person."
                  : "全体の所要時間は約60分（ご案内、お浄め40分、お茶）。2名様でお越しの場合は計約2時間、3名様の場合は計約3時間となります。"}
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2A2522] mb-1.5">
                    {lang === "en" ? "Full Name *" : "お名前 *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D5] bg-white text-sm focus:outline-none focus:border-[#DE7356] transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2A2522] mb-1.5">
                      {lang === "en" ? "Email Address *" : "メールアドレス *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D5] bg-white text-sm focus:outline-none focus:border-[#DE7356] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2A2522] mb-1.5">
                      {lang === "en" ? "Phone Number (Call/SMS) *" : "お電話番号 *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (626) 000-0000"
                      className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D5] bg-white text-sm focus:outline-none focus:border-[#DE7356] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A2522] mb-1.5">
                    {lang === "en" ? "Preferred Date & Time *" : "ご希望の日時 *"}
                  </label>
                  <input
                    type="datetime-local"
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D5] bg-white text-sm focus:outline-none focus:border-[#DE7356] transition-colors text-[#6C655E]"
                  />
                  <span className="block text-[11px] text-[#6C655E] mt-1">
                    {lang === "en"
                      ? "Hours: Tue–Sat 10am–6pm, Sun 9am–4pm (Mon Closed)"
                      : "開所時間: 火〜土 10:00〜18:00、日 9:00〜16:00（月曜休館）"}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A2522] mb-1.5">
                    {lang === "en" ? "Any Questions or Special Requests?" : "ご質問・ご要望"}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us if you have any questions..."
                    className="w-full px-4 py-3 rounded-2xl border border-[#E8E1D5] bg-white text-sm focus:outline-none focus:border-[#DE7356] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#DE7356] hover:bg-[#C86348] text-white font-semibold text-base shadow-retro-btn transition-all mt-4 disabled:opacity-50"
                >
                  {isSubmitting ? "…" : lang === "en" ? "Confirm Reservation" : "体験セッションを予約する"}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 rounded-2xl bg-[#EBF2ED] text-[#5B8266] text-center text-xs font-semibold mt-4">
                    {lang === "ja"
                      ? "ご予約ありがとうございます！担当者より確認のSMS/メールをお送りいたします。"
                      : "Thank you! We have received your request and will send a confirmation via SMS/Email shortly."}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-2xl bg-red-50 text-red-600 text-center text-xs font-semibold mt-4">
                    {lang === "ja"
                      ? "送信に失敗しました。お手数ですがお電話またはSMSでお問い合わせください。"
                      : "Submission failed. Please call or text us directly at (626) 861-5069."}
                  </div>
                )}

                <p className="text-center text-[11px] text-[#6C655E] mt-3">
                  {lang === "en"
                    ? "✦ By Appointment Only · Donation-based · No credit card required"
                    : "✦ 完全予約制 · ドネーション制 · クレジットカード不要 · プライバシー厳守"}
                </p>
              </form>
            </div>

            {/* Location & Contact Info */}
            <div id="contact" className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-6 mb-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#5B8266] uppercase">Center Location</span>
                  <h3 className="font-serif text-2xl font-bold text-[#2A2522] mt-1 mb-2">
                    Los Angeles Divine Light Center
                  </h3>
                  <p className="text-[#6C655E] text-sm leading-relaxed">
                    809 S Atlantic Blvd, #378<br />
                    Monterey Park, CA 91754
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+16268615069"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#E8E1D5] shadow-sm text-xs font-semibold text-[#2A2522] hover:border-[#DE7356] transition-all"
                  >
                    <span>📞 Call: (626) 861-5069</span>
                  </a>
                  <a
                    href="sms:+16268615069&body=Hello%2C%20I%27d%20like%20to%20book%20a%20Divine%20Light%20session."
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#E8E1D5] shadow-sm text-xs font-semibold text-[#2A2522] hover:border-[#DE7356] transition-all"
                  >
                    <span>💬 Text (SMS) Us</span>
                  </a>
                </div>

                <div className="bg-[#FDFCF9] p-5 rounded-2xl border border-[#E8E1D5] text-xs">
                  <span className="text-xs font-bold text-[#C29243] uppercase tracking-wider block mb-3">Operating Hours</span>
                  <div className="space-y-1.5 text-[#2A2522]">
                    <div className="flex justify-between py-1 border-b border-[#E8E1D5]/40">
                      <span className="font-medium">Sunday</span>
                      <span className="font-semibold text-[#DE7356]">9:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#E8E1D5]/40">
                      <span className="font-medium">Monday</span>
                      <span className="text-[#6C655E]">Closed</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#E8E1D5]/40">
                      <span className="font-medium">Tuesday – Saturday</span>
                      <span className="font-semibold text-[#2A2522]">10:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#6C655E] mt-2 italic">
                    * Schedule may vary. Please check ahead or call to confirm.
                  </p>
                </div>

                <div className="text-xs text-[#6C655E] space-y-1">
                  <p><strong>Email:</strong> losangeles@worlddivinelight.org</p>
                  <p><strong>Parking:</strong> Free, convenient parking available on-site at Atlantic Blvd</p>
                  <p><strong>Attire:</strong> Casual wear welcome. Please wear clean socks.</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative h-28 sm:h-32 rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-retro group">
                  <img
                    src="/assets/la_palm_trees.jpg"
                    alt="Sunny palm trees in Los Angeles"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2522]/70 via-[#2A2522]/20 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold drop-shadow-sm flex items-center gap-1.5">
                      <span>🌴</span>
                      <span>{lang === "en" ? "Monterey Park · Greater Los Angeles" : "モントレーパーク · ロサンゼルス郡"}</span>
                    </span>
                  </div>
                </div>

                <div className="w-full h-48 sm:h-52 rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-retro">
                  <iframe
                    src="https://www.google.com/maps?q=809%20S%20Atlantic%20Blvd%2C%20%23378%2C%20Monterey%20Park%2C%20CA%2091754&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=809+S+Atlantic+Blvd+%23378+Monterey+Park+CA+91754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#DE7356] hover:underline font-semibold"
                >
                  <span>Open in Google Maps ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAF6F0] border-b border-[#E8E1D5]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#6C655E] uppercase">Got Questions?</span>
            <h2 className="font-serif text-3xl font-bold text-[#2A2522] mt-2 mb-3">
              {lang === "en" ? "Frequently Asked Questions" : <span className="inline-block">よくあるご質問</span>}
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-3xl border border-[#E8E1D5] shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-serif text-base sm:text-lg font-bold text-[#2A2522]">
                <span>
                  {lang === "en" ? (
                    "How do donations work for the session?"
                  ) : (
                    <>
                      <span className="inline-block">セッションの費用や</span>
                      <span className="inline-block">ドネーションはどうなっていますか？</span>
                    </>
                  )}
                </span>
                <span className="ml-4 transition-transform group-open:rotate-180 text-[#6C655E] text-sm">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#E8E1D5]/60 text-xs sm:text-sm text-[#6C655E] leading-relaxed">
                {lang === "en"
                  ? "Sessions are offered on a donation basis. Contributions to help maintain our center are appreciated, but there are no fixed charges, mandatory fees, or payment requirements to receive Divine Light."
                  : "セッションはドネーション制となっております。道場の維持運営を支える御奉納は温かく歓迎いたしますが、決まった料金や強制的な支払いは一切ございません。"}
              </div>
            </details>

            <details className="group bg-white p-6 rounded-3xl border border-[#E8E1D5] shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-serif text-base sm:text-lg font-bold text-[#2A2522]">
                <span>
                  {lang === "en" ? (
                    "What should I wear or bring? (Socks required)"
                  ) : (
                    <>
                      <span className="inline-block">服装や持ち物に</span>
                      <span className="inline-block">決まりはありますか？（靴下着用）</span>
                    </>
                  )}
                </span>
                <span className="ml-4 transition-transform group-open:rotate-180 text-[#6C655E] text-sm">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#E8E1D5]/60 text-xs sm:text-sm text-[#6C655E] leading-relaxed">
                {lang === "en"
                  ? "Casual and comfortable clothes (such as jeans) are completely welcome. Because shoes are removed upon entering the center, please be sure to wear or bring clean socks."
                  : "ジーンズなどカジュアルでリラックスできる服装でお越しいただけます。道場内は靴を脱いで上がっていただくため、清潔な靴下をご着用いただくか、ご持参をお願いしております。"}
              </div>
            </details>

            <details className="group bg-white p-6 rounded-3xl border border-[#E8E1D5] shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-serif text-base sm:text-lg font-bold text-[#2A2522]">
                <span>
                  {lang === "en" ? (
                    "Do I need to change my religion or beliefs?"
                  ) : (
                    <>
                      <span className="inline-block">宗教や信条を</span>
                      <span className="inline-block">変える必要はありますか？</span>
                    </>
                  )}
                </span>
                <span className="ml-4 transition-transform group-open:rotate-180 text-[#6C655E] text-sm">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#E8E1D5]/60 text-xs sm:text-sm text-[#6C655E] leading-relaxed">
                {lang === "en"
                  ? "Not at all. People of every faith, cultural background, and personal belief are warmly welcomed. You are never asked to convert or renounce your personal convictions."
                  : "全く必要ありません。あらゆる宗教や信条、バックグラウンドをお持ちの方を歓迎しております。改宗を迫ることは一切ございません。"}
              </div>
            </details>

            <details className="group bg-white p-6 rounded-3xl border border-[#E8E1D5] shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-serif text-base sm:text-lg font-bold text-[#2A2522]">
                <span>
                  {lang === "en" ? (
                    "What does receiving Divine Light feel like?"
                  ) : (
                    <>
                      <span className="inline-block">お浄め（手かざし）を受けているときは</span>
                      <span className="inline-block">どんな感覚ですか？</span>
                    </>
                  )}
                </span>
                <span className="ml-4 transition-transform group-open:rotate-180 text-[#6C655E] text-sm">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#E8E1D5]/60 text-xs sm:text-sm text-[#6C655E] leading-relaxed">
                {lang === "en"
                  ? "Most visitors experience a soothing, gentle warmth, a deep sense of stillness, and an unburdening lightness across their chest, shoulders, and thoughts during the 40-minute session."
                  : "多くの方が、身体の奥がじんわりと温かくなる感覚や、深い静寂、肩や胸から重い荷物がふっと軽くなるような安らぎを実感されます。"}
              </div>
            </details>

            <details className="group bg-white p-6 rounded-3xl border border-[#E8E1D5] shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-serif text-base sm:text-lg font-bold text-[#2A2522]">
                <span>
                  {lang === "en" ? (
                    "Can I visit with family or friends? (Appointment Only)"
                  ) : (
                    <>
                      <span className="inline-block">家族や友人と一緒に</span>
                      <span className="inline-block">複数人で行っても大丈夫ですか？</span>
                    </>
                  )}
                </span>
                <span className="ml-4 transition-transform group-open:rotate-180 text-[#6C655E] text-sm">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#E8E1D5]/60 text-xs sm:text-sm text-[#6C655E] leading-relaxed">
                {lang === "en"
                  ? "Yes, you are very welcome to come together! Please note that our center is by appointment only, and each session is given individually (one-on-one). For multiple visitors, sessions are conducted sequentially, taking approx. 1 hour per person. Companions are welcome to relax in our quiet lounge with tea while waiting."
                  : "はい、もちろんご一緒にお越しいただけます！当道場は完全予約制となっており、お一人ずつ丁寧にお浄めを行うため、お一人につき約1時間ずつの順番でのご案内となります（例: 2名様の場合は約2時間）。お待ちの間は、静かなお部屋でお茶をお召し上がりいただきながらリラックスしてお過ごしいただけます。"}
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Stay in Touch (HubSpot) */}
      <section className="py-16 bg-[#FBF5EB]/50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#C29243] uppercase">Stay Connected</span>
          <h3 className="font-serif text-2xl font-bold text-[#2A2522] mt-2 mb-2">
            {lang === "en" ? (
              "Receive Peaceful Reflections & Event Updates"
            ) : (
              <>
                <span className="inline-block">ニュースレター・</span>
                <span className="inline-block">イベントのご案内</span>
              </>
            )}
          </h3>
          <p className="text-[#6C655E] text-xs sm:text-sm mb-6">
            {lang === "en"
              ? "Join our warm community in Los Angeles. Sent thoughtfully, unsubscribe anytime."
              : "ロサンゼルス拠点の最新情報や、心温まるメッセージをお届けします。"}
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="grow px-4 py-3 rounded-full border border-[#E8E1D5] bg-white text-sm focus:outline-none focus:border-[#DE7356]"
            />
            <button
              type="submit"
              disabled={newsletterStatus === "loading"}
              className="px-6 py-3 rounded-full bg-[#2A2522] hover:bg-[#DE7356] text-white font-semibold text-sm transition-all shadow-sm disabled:opacity-50"
            >
              {newsletterStatus === "loading" ? "…" : lang === "en" ? "Subscribe" : "登録する"}
            </button>
          </form>

          {newsletterMsg && (
            <p className={`mt-3 text-xs font-semibold ${newsletterStatus === "success" ? "text-[#5B8266]" : "text-red-500"}`}>
              {newsletterMsg}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2522] text-white/80 py-16 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src="/assets/wdl_logo.png"
                  alt="World Divine Light"
                  width={100}
                  height={34}
                  style={{ height: "34px", maxHeight: "34px", width: "auto", objectFit: "contain" }}
                  className="brightness-0 invert opacity-90 shrink-0 block"
                />
                <div className="border-l border-white/20 pl-3.5">
                  <span className="font-serif font-bold text-base text-white block">Los Angeles Divine Light Center</span>
                  <span className="text-[10px] text-white/50 block tracking-wide">Sekai Mahikari Bunmei Kyodan</span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed max-w-sm mb-4">
                Dedicated to helping humanity return to its innermost heart of unconditional love, sincerity, and beauty through the sacred practice of Divine Light.
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-medium">
                US Government-Recognized 501(c)(3) Non-Profit
              </span>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-serif font-bold text-white text-sm mb-3">Address & Hours</h4>
              <p className="text-white/60 leading-relaxed text-xs">
                809 S Atlantic Blvd, #378<br />
                Monterey Park, CA 91754<br /><br />
                <strong>Hours:</strong><br />
                Tue – Sat: 10:00 AM – 6:00 PM<br />
                Sun: 9:00 AM – 4:00 PM<br />
                (Closed Mondays)
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-serif font-bold text-white text-sm mb-3">Contact</h4>
              <p className="text-white/60 leading-relaxed text-xs">
                <strong>Phone:</strong> +1 (626) 861-5069<br />
                <strong>SMS:</strong> +1 (626) 861-5069<br />
                <strong>Email:</strong> losangeles@worlddivinelight.org<br /><br />
                World Divine Light Organization<br />
                (Sekai Mahikari Bunmei Kyodan)
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-4">
            <p>© 2026 Los Angeles Divine Light Center. All Rights Reserved.</p>
            <p>A Registered 501(c)(3) Non-Profit Spiritual Organization in the United States.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E1D5] px-4 py-3 flex items-center gap-3 shadow-lg">
        <a
          href="sms:+16268615069&body=Hello%2C%20I%27d%20like%20to%20book%20a%20Divine%20Light%20session."
          className="flex-1 py-3 px-3 rounded-full bg-[#FAF6F0] border border-[#E8E1D5] text-center text-xs font-semibold text-[#2A2522] flex items-center justify-center gap-1"
        >
          <span>💬 SMS Us</span>
        </a>
        <a
          href="#booking"
          className="flex-[2] py-3 px-4 rounded-full bg-[#DE7356] text-white text-center text-xs font-semibold shadow-retro-btn"
        >
          <span>{lang === "en" ? "Book a Session" : "体験予約はこちら"}</span>
        </a>
      </div>

    </div>
  );
}
