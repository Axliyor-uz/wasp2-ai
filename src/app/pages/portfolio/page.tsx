"use client";

import React from 'react';
import { 
  BarChart3, 
  Globe2, 
  MessageSquare, 
  ShoppingBag, 
  Activity, 
  Truck, 
  ArrowUpRight,
  Database,
  Lock
} from 'lucide-react';
import { useApp } from "@/lib/AppContext";
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Portfolio = () => {
  const { lang, theme } = useApp();
  const isDark = theme === "dark";

const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  const handleClick = async () => {
    setIsNavigating(true);
        router.push('/pages/contact');
  };

  const content: any = {
    en: {
      title: "Our Shipments",
      subtitle: "Code that powers businesses worldwide.",
      stats: { projects: "Projects", clients: "Clients", uptime: "Uptime" },
      projects: [
        { name: "FinTech Hub", category: "Finance", desc: "Highly secure transaction engine with real-time analytics.", tech: ["Next.js", "Redis", "WebSockets"], icon: <BarChart3 /> },
        { name: "CryptoVault", category: "Blockchain", desc: "Non-custodial wallet infrastructure with multi-sig security.", tech: ["Rust", "Ethereum", "Node.js"], icon: <Lock /> },
        { name: "EduSync Pro", category: "Education", desc: "LMS platform serving 50k+ active students across Central Asia.", tech: ["React", "PostgreSQL", "Go"], icon: <Globe2 /> },
        { name: "LogiTrack", category: "Logistics", desc: "AI-driven route optimization for international freight.", tech: ["Python", "TensorFlow", "React"], icon: <Truck /> },
        { name: "HealthCore", category: "Medical", desc: "HIPAA-compliant patient data management system.", tech: ["Java", "Spring Boot", "AWS"], icon: <Activity /> },
        { name: "ShopMax", category: "E-Commerce", desc: "High-concurrency storefront with global CDN integration.", tech: ["Vue", "Shopify API", "Firebase"], icon: <ShoppingBag /> }
      ]
    },
    ru: {
      title: "Наши Проекты",
      subtitle: "Код, который развивает бизнес по всему миру.",
      stats: { projects: "Проектов", clients: "Клиентов", uptime: "Аптайм" },
      projects: [
        { name: "FinTech Hub", category: "Финансы", desc: "Безопасный движок транзакций с аналитикой в реальном времени.", tech: ["Next.js", "Redis", "WebSockets"], icon: <BarChart3 /> },
        { name: "CryptoVault", category: "Блокчейн", desc: "Инфраструктура кошелька с мультисигнатурной защитой.", tech: ["Rust", "Ethereum", "Node.js"], icon: <Lock /> },
        { name: "EduSync Pro", category: "Образование", desc: "LMS-платформа для 50к+ активных студентов.", tech: ["React", "PostgreSQL", "Go"], icon: <Globe2 /> },
        { name: "LogiTrack", category: "Логистика", desc: "Оптимизация маршрутов на базе ИИ для перевозок.", tech: ["Python", "TensorFlow", "React"], icon: <Truck /> },
        { name: "HealthCore", category: "Медицина", desc: "Система управления данными пациентов по стандарту HIPAA.", tech: ["Java", "Spring Boot", "AWS"], icon: <Activity /> },
        { name: "ShopMax", category: "E-Commerce", desc: "Витрина с высокой пропускной способностью и CDN.", tech: ["Vue", "Shopify API", "Firebase"], icon: <ShoppingBag /> }
      ]
    },
    uz: {
      title: "Bizning Ishlarimiz",
      subtitle: "Butun dunyo bo'ylab bizneslarni harakatga keltiruvchi kod.",
      stats: { projects: "Loyihalar", clients: "Mijozlar", uptime: "Ish vaqti" },
      projects: [
        { name: "FinTech Hub", category: "Moliya", desc: "Real vaqt rejimida tahlilga ega xavfsiz tranzaksiya tizimi.", tech: ["Next.js", "Redis", "WebSockets"], icon: <BarChart3 /> },
        { name: "CryptoVault", category: "Blokcheyn", desc: "Ko'p bosqichli xavfsizlikka ega hamyon infratuzilmasi.", tech: ["Rust", "Ethereum", "Node.js"], icon: <Lock /> },
        { name: "EduSync Pro", category: "Ta'lim", desc: "O'rta Osiyo bo'ylab 50 mingdan ortiq talabaga xizmat qiluvchi platforma.", tech: ["React", "PostgreSQL", "Go"], icon: <Globe2 /> },
        { name: "LogiTrack", category: "Logistika", desc: "Xalqaro yuk tashish uchun AI asosidagi marshrut optimallashtirish.", tech: ["Python", "TensorFlow", "React"], icon: <Truck /> },
        { name: "HealthCore", category: "Tibbiyot", desc: "HIPAA standartidagi bemor ma'lumotlarini boshqarish tizimi.", tech: ["Java", "Spring Boot", "AWS"], icon: <Activity /> },
        { name: "ShopMax", category: "E-Commerce", desc: "Global CDN integratsiyasiga ega yuqori yuklamali do'kon.", tech: ["Vue", "Shopify API", "Firebase"], icon: <ShoppingBag /> }
      ]
    }
  };

  const t = content[lang] || content['en'];

  return (
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 p-4 md:p-12 relative overflow-hidden font-sans`}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[150px] rounded-full ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] blur-[150px] rounded-full ${isDark ? 'bg-blue-600' : 'bg-purple-400'}`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">{t.title}</h1>
            <p className="text-xl opacity-60 font-light">{t.subtitle}</p>
          </div>
          
          {/* Quick Stats Banner */}
          <div className={`flex gap-8 p-6 rounded-2xl border backdrop-blur-md ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
            <div className="text-center">
              <div className="text-2xl font-black">40+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">{t.stats.projects}</div>
            </div>
            <div className={`w-px h-10 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
            <div className="text-center">
              <div className="text-2xl font-black">12</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">{t.stats.clients}</div>
            </div>
            <div className={`w-px h-10 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
            <div className="text-center">
              <div className="text-2xl font-black">99.8%</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">{t.stats.uptime}</div>
            </div>
          </div>
        </header>

        {/* Portfolio Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {t.projects.map((project: any, i: number) => (
            <div key={i} className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2
              ${isDark 
                ? 'bg-purple-500/5 border-purple-500/20 hover:border-purple-500/60 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-purple-500/10' 
                : 'bg-blue-500/5 border-blue-500/20 hover:border-blue-500/60 shadow-lg'}`}>
              
              {/* Icon & Category */}
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 rounded-2xl backdrop-blur-xl border ${isDark ? 'bg-purple-500/20 border-purple-500/30 text-purple-300' : 'bg-blue-500/10 border-blue-500/20 text-blue-700'}`}>
                  {project.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${isDark ? 'bg-white/5 text-purple-400' : 'bg-black/5 text-blue-600'}`}>
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                {project.name}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              <p className="text-sm opacity-60 leading-relaxed mb-8 h-12 line-clamp-2">
                {project.desc}
              </p>

              {/* Tech Stack - Text Based */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-current/10">
                {project.tech.map((item: string) => (
                  <span key={item} className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    #{item}
                  </span>
                ))}
              </div>

              {/* Decorative Geometric Shape behind card */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity
                ${isDark ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
            </div>
          ))}
        </main>

        {/* Dynamic CTA */}
        <section className={`rounded-[3rem] p-12 md:p-20 text-center border overflow-hidden relative
          ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-black/5 bg-black/[0.02]'}`}>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] scale-150 pointer-events-none">
            <Database className="w-full h-full" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {lang === 'uz' ? "Sizning g'oyangiz — bizning kodimiz." : lang === 'ru' ? "Ваша идея — наш код." : "Your vision — our code."}
            </h2>
            <button onClick={handleClick} className={`px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105
              ${isDark ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>
              {lang === 'uz' ? "Bog'lanish" : lang === 'ru' ? "Связаться с нами" : "Get in touch"}
            </button>
          </div>
        </section>
      </div>

      <footer className="mt-16 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase pb-8">
          &copy; 2026 Wasp-2 AI COLLECTIVE — SHIPPED WITH PRECISION
        </footer>
    </div>
  );
};

export default Portfolio;