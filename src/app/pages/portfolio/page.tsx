"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from "@/lib/AppContext";
import { 
  BarChart3, Globe2, ShoppingBag, 
  Activity, Truck, ArrowUpRight, Database, Lock, X, ExternalLink
} from 'lucide-react';

// =========================================================================
// 1. DATA (Links included here)
// =========================================================================

const PORTFOLIO_DATA: any = {
  en: {
    hero: { title: "Our Shipments", subtitle: "Code that powers businesses worldwide.", button: "Get in touch" },
    projects: [
      { 
        name: "FinTech Hub", category: "Finance", desc: "Highly secure transaction engine with real-time analytics.", tech: ["Next.js", "Redis"], iconKey: "finance" 
      },
      { 
        name: "CryptoVault", category: "Blockchain", desc: "Non-custodial wallet infrastructure with multi-sig security.", tech: ["Rust", "Ethereum"], iconKey: "lock" 
      },
      { 
        name: "EduSync Pro", 
        category: "Education", 
        desc: "LMS platform serving 50k+ students across Central Asia.", 
        tech: ["React", "Go", "PostgreSQL"], 
        iconKey: "globe",
        link: "https://edify-student-b3qv.vercel.app/" // <--- LINK 1
      },
      { 
        name: "LogiTrack", category: "Logistics", desc: "AI-driven route optimization for international freight.", tech: ["Python", "TensorFlow"], iconKey: "truck" 
      },
      { 
        name: "HealthCore", 
        category: "Medical", 
        desc: "HIPAA-compliant patient data management system.", 
        tech: ["Java", "AWS", "Spring Boot"], 
        iconKey: "activity",
        link: "https://healthplus-clinic-c3ru.vercel.app" // <--- LINK 2
      },
      { 
        name: "ShopMax", category: "E-Commerce", desc: "High-concurrency storefront with global CDN integration.", tech: ["Vue", "Shopify"], iconKey: "shop" 
      }
      
    ],
    cta: "Your vision — our code.",
    modalBtn: "Visit Website"
  },
 ru: {
    hero: { title: "Наши Проекты", subtitle: "Код, который развивает бизнес по всему миру.", button: "Связаться" },
    projects: [
      { 
        name: "FinTech Hub", category: "Финансы", desc: "Высокобезопасный транзакционный движок с аналитикой в реальном времени.", tech: ["Next.js", "Redis"], iconKey: "finance" 
      },
      { 
        name: "CryptoVault", category: "Блокчейн", desc: "Некастодиальная инфраструктура кошелька с мультисигнатурной защитой.", tech: ["Rust", "Ethereum"], iconKey: "lock" 
      },
      { 
        name: "EduSync Pro", 
        category: "Образование", 
        desc: "LMS-платформа, обслуживающая 50к+ студентов в Центральной Азии.", 
        tech: ["React", "Go", "PostgreSQL"], 
        iconKey: "globe",
        link: "https://edify-student-b3qv.vercel.app/" 
      },
      { 
        name: "LogiTrack", category: "Логистика", desc: "Оптимизация маршрутов на базе ИИ для международных перевозок.", tech: ["Python", "TensorFlow"], iconKey: "truck" 
      },
      { 
        name: "HealthCore", 
        category: "Медицина", 
        desc: "Система управления данными пациентов, соответствующая стандарту HIPAA.", 
        tech: ["Java", "AWS", "Spring Boot"], 
        iconKey: "activity",
        link: "https://healthplus-clinic-c3ru.vercel.app" 
      },
      { 
        name: "ShopMax", category: "E-Commerce", desc: "Высоконагруженная витрина с глобальной CDN-интеграцией.", tech: ["Vue", "Shopify"], iconKey: "shop" 
      }
    ],
    cta: "Ваша идея — наш код.",
    modalBtn: "Перейти на сайт"
  },

  uz: {
    hero: { title: "Bizning Loyihalar", subtitle: "Butun dunyo bo'ylab biznesni rivojlantiruvchi kod.", button: "Bog'lanish" },
    projects: [
      { 
        name: "FinTech Hub", category: "Moliya", desc: "Real vaqt rejimida tahlilga ega yuqori xavfsizlikdagi tranzaksiya tizimi.", tech: ["Next.js", "Redis"], iconKey: "finance" 
      },
      { 
        name: "CryptoVault", category: "Blokcheyn", desc: "Ko'p bosqichli xavfsizlikka ega hamyon infratuzilmasi.", tech: ["Rust", "Ethereum"], iconKey: "lock" 
      },
      { 
        name: "EduSync Pro", 
        category: "Ta'lim", 
        desc: "O'rta Osiyo bo'ylab 50 mingdan ortiq talabaga xizmat ko'rsatuvchi LMS platformasi.", 
        tech: ["React", "Go", "PostgreSQL"], 
        iconKey: "globe",
        link: "https://edify-student-b3qv.vercel.app/" 
      },
      { 
        name: "LogiTrack", category: "Logistika", desc: "Xalqaro yuk tashish uchun sun'iy intellektga asoslangan marshrutni optimallashtirish.", tech: ["Python", "TensorFlow"], iconKey: "truck" 
      },
      { 
        name: "HealthCore", 
        category: "Tibbiyot", 
        desc: "HIPAA standartiga mos keluvchi bemor ma'lumotlarini boshqarish tizimi.", 
        tech: ["Java", "AWS", "Spring Boot"], 
        iconKey: "activity",
        link: "https://healthplus-clinic-c3ru.vercel.app" 
      },
      { 
        name: "ShopMax", category: "E-Commerce", desc: "Global CDN integratsiyasiga ega yuqori yuklamali onlayn do'kon.", tech: ["Vue", "Shopify"], iconKey: "shop" 
      }
    ],
    cta: "Sizning g'oyangiz — bizning kodimiz.",
    modalBtn: "Saytga o'tish"
  }
};

const IconRegistry: Record<string, React.ReactNode> = {
  finance: <BarChart3 />, lock: <Lock />, globe: <Globe2 />,
  truck: <Truck />, activity: <Activity />, shop: <ShoppingBag />
};

// =========================================================================
// 2. THE MINIMAL CARD (Blur Effect)
// =========================================================================

const ProjectCard = ({ project, isDark, onClick }: { project: any, isDark: boolean, onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative h-64 rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500
      ${isDark ? 'border-white/10' : 'border-black/10'}`}
    >
      {/* 1. Colorful Background Blobs (Visible through blur) */}
      <div className={`absolute inset-0 opacity-50 transition-opacity duration-700 group-hover:opacity-100 
        ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        
        {/* Dynamic blobs based on project name hash or random styling */}
        <div className={`absolute top-0 right-0 w-40 h-40 blur-[60px] rounded-full mix-blend-multiply transition-all duration-700 group-hover:scale-150
           ${i % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
        <div className={`absolute bottom-0 left-0 w-40 h-40 blur-[60px] rounded-full mix-blend-multiply transition-all duration-700 group-hover:scale-150
           ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
      </div>

      {/* 2. The Blur Overlay */}
      {/* Default: Backdrop blur is heavy. Hover: Blur is removed. */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500
        backdrop-blur-xl bg-white/5 group-hover:backdrop-blur-none group-hover:bg-transparent`}>
        
        {/* Icon (Fades out on hover to clean up view, or stays - your choice) */}
        <div className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-2">
           {IconRegistry[project.iconKey]}
        </div>

        {/* Name */}
        <h3 className={`text-2xl md:text-3xl font-black tracking-tight transition-transform duration-500 group-hover:scale-110
          ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.name}
        </h3>

        {/* "Click to View" Hint (Appears on hover) */}
        <span className={`mt-4 text-[10px] uppercase tracking-[0.3em] opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0
          ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          View Details
        </span>
      </div>
    </div>
  );
};

// =========================================================================
// 3. THE MODAL (Detailed View)
// =========================================================================

const ProjectModal = ({ project, isOpen, onClose, isDark, t }: any) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative w-full max-w-2xl rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300
        ${isDark ? 'bg-[#0f172a] border border-white/10 text-white' : 'bg-white text-gray-900'}`}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-100 text-blue-600'}`}>
              {IconRegistry[project.iconKey]}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">{project.category}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">{project.name}</h2>
          
          <p className="text-lg opacity-70 leading-relaxed mb-8">
            {project.desc}
          </p>

          <div className="mb-10">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span key={tech} className={`px-4 py-2 rounded-lg text-xs font-bold ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* THE ACTION BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-transform hover:scale-105
                  ${isDark ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
              >
                {t.modalBtn || "Visit Website"}
                <ExternalLink size={16} />
              </a>
            ) : (
              <button disabled className="flex-1 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest opacity-50 cursor-not-allowed border border-current">
                Coming Soon
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. MAIN PAGE LOGIC
// =========================================================================

// Helper for random colors in the map loop
let i = 0;

const Portfolio = () => {
  const { lang, theme } = useApp();
  const isDark = theme === "dark";
  const router = useRouter();
  
  // State for the modal
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const t = PORTFOLIO_DATA[lang] || PORTFOLIO_DATA['en'];

  return (
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 p-4 relative font-sans`}>
      
      <div className="relative z-10 max-w-6xl mx-auto pt-10">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">{t.hero.title}</h1>
          <p className="text-xl opacity-60 font-light">{t.hero.subtitle}</p>
        </header>

        {/* Grid of Minimal Cards */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {t.projects.map((project: any, index: number) => {
            // just a hack to alternate colors in the card helper
            i = index; 
            return (
              <ProjectCard 
                key={index} 
                project={project} 
                isDark={isDark} 
                onClick={() => setSelectedProject(project)} 
              />
            );
          })}
        </main>

        <section className={`rounded-[3rem] p-12 text-center border overflow-hidden relative ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-black/5 bg-black/[0.02]'}`}>
           <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6">{t.cta}</h2>
            <button onClick={() => router.push('/pages/contact')} className={`px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105 ${isDark ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'}`}>
              {t.hero.button}
            </button>
          </div>
        </section>
      </div>

      {/* The Modal Overlay */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        isDark={isDark}
        t={t}
      />

    </div>
  );
};

export default Portfolio;