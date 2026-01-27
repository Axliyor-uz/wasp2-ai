"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cpu,
  Globe,
  Sparkles,
  Rocket,
  ChevronRight,
  Star,
  Trophy,
  Users,
  Layers,
  TrendingUp,
  Award,
  Zap,
  Shield,
} from "lucide-react";
import { useApp } from "@/lib/AppContext";
import { content } from "@/lib/constants";
import { useRouter } from 'next/navigation';

export default function HomeClient({ initialData }: { initialData: any[] | null }) {
  const { lang, theme } = useApp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]); 
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    router.push('/pages/contact');
  };
  const handleClick2 = () => {
    setIsNavigating(true);
    router.push('/pages/showcase5');
  };

  const handleClick3 = () => {
    setIsNavigating(true);
    window.open("https://t.me/Akhliyor_uz", "_blank");
    setTimeout(() => setIsNavigating(false), 1000);
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const t = content[lang as keyof typeof content] || content.en;
  const isDark = theme === "dark";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-500 bg-background text-foreground">
      {/* Animated Cursor Glow - Hidden on touch devices for performance */}
      {isDark && (
        <motion.div
          className="fixed w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none z-50 mix-blend-screen hidden md:block"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
            left: (mousePosition.x - 250),
            top: (mousePosition.y - 250),
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20">
        <motion.div style={{ opacity, scale }} className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`inline-flex items-center gap-2 md:gap-4 px-5 py-2 md:px-8 md:py-4 mb-6 md:mb-10 glass border rounded-full backdrop-blur-xl ${
                isDark ? "border-purple-500/30" : "border-purple-500/40"
            }`}
          >
            <Sparkles className={`w-4 h-4 md:w-6 md:h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
            <span className={`text-xs md:text-base font-bold bg-gradient-to-r ${
                isDark ? "from-purple-400 via-blue-400 to-cyan-400" : "from-purple-600 via-blue-600 to-cyan-600"
              } bg-clip-text text-transparent tracking-widest uppercase`}
            >
              {t.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-7xl lg:text-9xl font-black mb-6 md:mb-10 leading-[1.1] tracking-tight"
          >
            <span className={`block bg-gradient-to-r ${isDark ? "from-white via-purple-200 to-white" : "from-gray-900 via-purple-600 to-gray-900"} bg-clip-text text-transparent`}>
              {t.heroTitle1 || "Transform Your"}
            </span>
            <span className={`block bg-gradient-to-r ${isDark ? "from-purple-400 via-blue-400 to-cyan-400" : "from-purple-600 via-blue-600 to-cyan-600"} bg-clip-text text-transparent`}>
              {t.heroTitle2 || "Digital Future"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-3xl mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed opacity-80 px-4"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center mb-16 md:mb-24 px-6"
          >
            <motion.button
              onClick={handleClick2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full font-bold text-lg md:text-xl overflow-hidden text-white shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t.btnPortfolio}
                <Rocket className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={handleClick3}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-6 glass backdrop-blur-xl border-2 rounded-full font-bold text-lg md:text-xl transition-all duration-300"
              style={{ color: "var(--text)", borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }}
            >
              {t.btnContact}
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 max-w-6xl mx-auto"
          >
            {[
              { icon: Trophy, value: "150+", label: t.stats1, color: "from-yellow-400 to-orange-500" },
              { icon: Star, value: "98%", label: t.stats2, color: "from-purple-400 to-pink-500" },
              { icon: Globe, value: "45+", label: t.stats3, color: "from-blue-400 to-cyan-500" },
              { icon: Users, value: "120+", label: t.stats4, color: "from-green-400 to-emerald-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 md:p-8 glass backdrop-blur-xl rounded-2xl md:rounded-3xl border"
                style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
              >
                <div className={`w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-6 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className={`text-2xl md:text-5xl font-black mb-1 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-base font-semibold opacity-70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Optimized Card for Mobile */}
            {[
              { icon: Cpu, title: t.card3Title, desc: t.card3Desc, grad: "from-purple-600 via-blue-600 to-cyan-600" },
              { icon: Layers, title: t.card4Title, desc: t.card4Desc, grad: "from-pink-600 via-purple-600 to-indigo-600" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br ${card.grad} rounded-3xl overflow-hidden shadow-xl`}
              >
                <div className="p-8 md:p-14 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className="w-16 h-16 md:w-24 md:h-24 mb-6 md:mb-8 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                      <card.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black mb-4 text-white leading-tight">{t.topRightCornerCars}</h3>
                    <h5 className="text-lg md:text-2xl font-bold mb-4 text-white/90">{card.title}</h5>
                    <p className="text-sm md:text-xl text-white/80 mb-8 leading-relaxed">{card.desc}</p>
                  </div>
                  <motion.button onClick={handleClick2} className="inline-flex items-center gap-3 text-white font-black text-lg md:text-2xl">
                    {t.cardLink} <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20">
            {[
              { icon: Zap, title: t.feature1Title, desc: t.feature1Desc, grad: "from-yellow-400 to-orange-500" },
              { icon: Shield, title: t.feature2Title, desc: t.feature2Desc, grad: "from-green-400 to-emerald-500" },
              { icon: TrendingUp, title: t.feature3Title, desc: t.feature3Desc, grad: "from-blue-400 to-purple-500" },
            ].map((f, i) => (
              <div key={i} className="glass backdrop-blur-xl rounded-2xl p-6 md:p-10 border" style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
                <div className={`w-12 h-12 md:w-20 md:h-20 mb-4 md:mb-8 bg-gradient-to-br ${f.grad} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg`}>
                  <f.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <h4 className="text-xl md:text-3xl font-black mb-2">{f.title}</h4>
                <p className="text-sm md:text-lg opacity-80 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 md:py-40 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 overflow-hidden text-center"
          >
            <div className="relative z-10">
              <Award className="w-12 h-12 md:w-20 md:h-20 text-white mx-auto mb-6 md:mb-10" />
              <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-8 text-white tracking-tight">{t.ctaTitle}</h2>
              <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">{t.ctaDesc}</p>
              <motion.button
                onClick={handleClick}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 md:px-14 md:py-8 bg-white text-gray-900 rounded-full font-black text-lg md:text-2xl shadow-xl uppercase tracking-wider"
              >
                {t.ctaBtn}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}