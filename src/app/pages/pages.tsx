"use client";
import { useApp } from "@/lib/AppContext";
import { TRANSLATIONS } from "@/lib/constants";

export default function HomePage() {
  const { lang, theme, toggleTheme, setLang } = useApp();
  const isDark = theme === "dark";
  // Safe fallback: if translation is missing, default to English
  const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  return (
    <div className="flex flex-col items-center justify-center pt-20 px-6 text-center min-h-[60vh]">
 
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-[var(--text)] transition-colors">
        {t.title}
      </h1>
      
      {/* Subtitle */}
      <p className="text-xl text-[var(--text)] opacity-70 max-w-2xl transition-colors">
        {t.sub}
      </p>
      
      {/* CTA Button */}
      <button 
        className="mt-10 px-8 py-4 rounded-full font-bold text-white shadow-xl transition-transform active:scale-95 hover:opacity-90 bg-[var(--accent)]"
      >
        {t.cta}
      </button>
        
        
        <footer className="mt-16 text-center opacity-30 text-[8px] tracking-[0.4em] uppercase pb-10">
        &copy; 2026 Wasp-2 AI COLLECTIVE — {lang === 'uz' ? "YUKSAK SIFAT" : lang === 'ru' ? "ВЫСОКОЕ КАЧЕСТВО" : "HIGH QUALITY"}
      </footer>
    </div>
  );
}