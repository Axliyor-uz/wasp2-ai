"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Sigma,
  Smartphone,
  Cpu,
  Globe,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  ChevronRight,
  Star,
  Trophy,
  Users,
  Layers,
  TrendingUp,
  Award,
  Moon,
  Sun,
  Languages,
} from "lucide-react";
import { useApp } from "@/lib/AppContext";
import { content } from "@/lib/constants";
import { useRouter } from 'next/navigation';

interface Feature {
  id: string | number;
  title: string;
  short: string;
  detail: string;
  icon?: any;
}
interface featuresTeacherfy {
  id: string | number;
  title: string;
  short: string;
  detail: string;
  icon?: any;
}

export default function HomeClient({ initialData }: { initialData: any[] | null }) {
  const { lang, theme, toggleTheme, setLang } = useApp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFeature, setOpenFeature] = useState<Feature | null>(null);
  const [openTFeature, setOpenTFeature] = useState<featuresTeacherfy | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]); // Slightly less scale down
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const [data] = useState(initialData);

  const handleClick = async () => {
    setIsNavigating(true);
    router.push('/pages/contact');
  };
  const handleClick2 = async () => {
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenFeature(null);
        setOpenTFeature(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden transition-colors duration-500 bg-background text-foreground">
      {/* Animated Cursor Glow */}
      {isDark && (
        <motion.div
          className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-50 mix-blend-screen"
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <motion.div style={{ opacity, scale }} className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`inline-flex items-center gap-4 px-8 py-4 mb-10 glass border rounded-full backdrop-blur-xl ${
                isDark ? "border-purple-500/30" : "border-purple-500/40"
            }`}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <Sparkles className={`w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
            </motion.div>
            <span
              className={`text-base font-bold bg-gradient-to-r ${
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
            className="text-5xl md:text-7xl lg:text-9xl font-black mb-10 leading-none tracking-tight"
          >
            <span
              className={`block bg-gradient-to-r ${
                isDark ? "from-white via-purple-200 to-white" : "from-gray-900 via-purple-600 to-gray-900"
              } bg-clip-text text-transparent`}
            >
              {t.heroTitle1 || "Transform Your"}
            </span>
            <span
              className={`block bg-gradient-to-r ${
                isDark ? "from-purple-400 via-blue-400 to-cyan-400" : "from-purple-600 via-blue-600 to-cyan-600"
              } bg-clip-text text-transparent`}
            >
              {t.heroTitle2 || "Digital Future"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed opacity-80"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24"
          >
            <motion.button
              onClick={handleClick2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full font-bold text-xl overflow-hidden text-white shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-4">
                {t.btnPortfolio}
                <Rocket className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={handleClick3}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 glass backdrop-blur-xl border-2 rounded-full font-bold text-xl transition-all duration-300"
              style={{ color: "var(--text)", borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }}
            >
              {t.btnContact}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
          >
            {[
              { icon: Trophy, value: "150+", label: t.stats1 || "Projects", color: "from-yellow-400 to-orange-500" },
              { icon: Star, value: "98%", label: t.stats2 || "Satisfaction", color: "from-purple-400 to-pink-500" },
              { icon: Globe, value: "45+", label: t.stats3 || "Countries", color: "from-blue-400 to-cyan-500" },
              { icon: Users, value: "120+", label: t.stats4 || "Team", color: "from-green-400 to-emerald-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group relative p-8 glass backdrop-blur-xl rounded-3xl border transition-all duration-300"
                style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className={`w-14 h-14 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className={`text-5xl font-black mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-base font-semibold opacity-70 tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToServices}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-8 h-14 border-2 rounded-full flex items-start justify-center p-2.5"
            style={{ borderColor: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)" }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--text)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="relative py-24 px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 p-8 sm:p-12 lg:p-14 h-full flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 16, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-8 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <Cpu className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </motion.div>
                  <div className="cursor-pointer absolute top-8 right-8 flex items-center gap-3 bg-white/20 px-5 py-2 rounded-full text-sm font-bold backdrop-blur-xl text-white">
                    <Rocket className="w-5 h-5" />
                    <span>{t.badge2}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
                    {t.topRightCornerCars || "New Era of Learning"}
                  </h3>
                  <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-white/90">
                    {t.card3Title || "AI Analysis"}
                  </h5>
                  <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                    {t.card3Desc || "Deep learning algorithms analyzing student performance patterns."}
                  </p>
                </div>
                <motion.a
                  onClick={handleClick2}
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-4 text-white font-black text-lg sm:text-2xl cursor-pointer"
                >
                  {t.cardLink || "Learn more"}
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-bl from-pink-600 via-purple-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 p-8 sm:p-12 lg:p-14 h-full flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 16, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-8 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <Layers className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </motion.div>
                  <div className="cursor-pointer absolute top-8 right-8 flex items-center gap-3 bg-white/20 px-5 py-2 rounded-full text-sm font-bold backdrop-blur-xl text-white">
                    <Rocket className="w-5 h-5" />
                    <span>{t.badge2}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
                    {t.topRightCornerCars || "New Era of Learning"}
                  </h3>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-white/90">
                    {t.card4Title || "Global Scale"}
                  </h4>
                  <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                    {t.card4Desc || "Connect classrooms across borders with real-time translation."}
                  </p>
                </div>
                <motion.a
                  onClick={handleClick2}
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-4 text-white font-black text-lg sm:text-2xl cursor-pointer"
                >
                  {t.cardLink || "Learn more"}
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { icon: Zap, title: t.feature1Title || "Lightning Fast", desc: t.feature1Desc || "Optimized performance", gradient: "from-yellow-400 to-orange-500" },
              { icon: Shield, title: t.feature2Title || "Secure", desc: t.feature2Desc || "Enterprise security", gradient: "from-green-400 to-emerald-500" },
              { icon: TrendingUp, title: t.feature3Title || "Scalable", desc: t.feature3Desc || "Grows with you", gradient: "from-blue-400 to-purple-500" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass backdrop-blur-xl rounded-3xl p-10 border-2"
                style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mb-8 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="text-3xl font-black mb-4" style={{ color: "var(--text)" }}>{feature.title}</h4>
                <p className="text-lg opacity-80 leading-relaxed" style={{ color: "var(--text)" }}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-[3rem] p-20 overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <div className="relative z-10 text-center">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="inline-block mb-10">
                <Award className="w-20 h-20 text-white mx-auto" />
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-white tracking-tight">{t.ctaTitle || "Ready to Build Something Amazing?"}</h2>
              <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">{t.ctaDesc || "Join hundreds of satisfied clients"}</p>
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-8 bg-white text-gray-900 rounded-full font-black text-2xl shadow-2xl hover:bg-gray-50 transition-all uppercase tracking-wider"
              >
                {t.ctaBtn || "Get Started Today"}
              </motion.button>
            </div>
            {/* Subtle background glow for CTA */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}