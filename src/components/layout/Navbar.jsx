"use client";

import React, { useState, useEffect, useRef } from "react"; // Added useRef
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Languages, Moon, Sun, ChevronDown, 
  User, Briefcase, Zap, Mail, FileText, Home 
} from "lucide-react";
import { useApp } from "@/lib/AppContext";
import { navContent } from "@/lib/constants";



export default function Navbar() {
  const { lang, theme, toggleTheme, setLang } = useApp();
  const pathname = usePathname();
  const [langDropdown, setLangDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const n = navContent[lang] || navContent.en;
  // Refs to detect clicks outside
  const menuRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Function to handle outside clicks
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = theme === "dark";

  const changeLang = (newLang) => {
    setLang(newLang);
    setLangDropdown(false);
  };

  const navItems = [
    { label: n.home || "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: n.about || "About Us", href: "/pages/about", icon: <User className="w-4 h-4" /> },
    { label: n.portfolio || "Portfolio", href: "/pages/portfolio", icon: <Briefcase className="w-4 h-4" /> },
    { label: n.services || "Services", href: "/pages/service", icon: <Zap className="w-4 h-4" /> },
    { label: n.contact || "Contact", href: "/pages/contact", icon: <Mail className="w-4 h-4" /> },
    { label: n.blogTeam || "Blog (Team)", href: "/pages/blog", icon: <FileText className="w-4 h-4" /> },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "uz", label: "O'zbek" },
    { code: "ru", label: "Русский" },
  ];

  const getGlassStyle = (isActive = false) => {
    if (isDark) {
      return {
        borderColor: isActive ? "rgba(168, 85, 247, 0.8)" : "rgba(255, 255, 255, 0.1)",
        backgroundColor: isActive ? "rgba(168, 85, 247, 0.2)" : "rgba(20, 20, 20, 0.8)",
        boxShadow: isActive ? "0 0 20px rgba(168, 85, 247, 0.3)" : "0 4px 6px rgba(0, 0, 0, 0.3)",
        color: "#ffffff"
      };
    } else {
      return {
        borderColor: isActive ? "rgba(59, 130, 246, 0.6)" : "rgba(0, 0, 0, 0.1)",
        backgroundColor: isActive ? "rgba(219, 234, 254, 1)" : "rgba(255, 255, 255, 0.8)",
        boxShadow: isActive ? "0 0 20px rgba(59, 130, 246, 0.2)" : "0 4px 6px rgba(0, 0, 0, 0.05)",
        color: "#000000"
      };
    }
  };
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0  w-full z-50 flex justify-between items-start p-3 pointer-events-none">
      
      {/* --- Left Menu (Wrapped in Ref) --- */}
      <div ref={menuRef} className="relative pointer-events-auto flex flex-col items-start">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-5 py-3 glass backdrop-blur-xl border rounded-full font-bold text-xl transition-all duration-300 shadow-sm z-50"
          style={{ 
            ...getGlassStyle(isMenuOpen), 
            color: isDark ? "#c084fc" : "#3b82f6" 
          }}
        >
          <span>Wasp-2 AI</span>
          <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden" animate="visible" exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="absolute top-full left-0 mt-3 flex flex-col gap-2 min-w-[200px]"
            >
             {navItems.map((item, index) => {
  // 1. Improved logic to handle home vs sub-pages/nested routes
  const isActive = item.href === "/" 
    ? pathname === "/" 
    : pathname.startsWith(item.href);

  return (
    <motion.div 
      key={index} 
      variants={{
        hidden: { opacity: 0, y: -20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
    >
      <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          className="flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-xl transition-all"
          style={getGlassStyle(isActive)}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, getGlassStyle(true))}
          // 2. Fix: Return to the 'isActive' state instead of forcing 'false'
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, getGlassStyle(isActive))}
        >
          <span className={isActive ? (isDark ? "text-white" : "text-blue-600") : (isDark ? "text-purple-400" : "text-blue-400")}>
            {item.icon}
          </span>
          <span className={`font-semibold text-sm ${isActive ? "opacity-100" : "opacity-70"}`}>
            {item.label}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
})}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- Right Controls --- */}
      <div className="pointer-events-auto flex items-center gap-3">
        
        {/* Language Selector (Wrapped in Ref) */}
        <div ref={langRef} className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setLangDropdown(!langDropdown)}
            className="flex items-center gap-2 px-4 py-3 glass backdrop-blur-xl border rounded-full font-semibold transition-all duration-300 shadow-sm"
            style={getGlassStyle(langDropdown)}
          >
            <Languages className={`w-5 h-5 ${isDark ? "text-purple-400" : "text-blue-500"}`} />
            <span className="uppercase text-sm">{lang}</span>
          </motion.button>

          <AnimatePresence>
            {langDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 right-0 glass border rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl min-w-[140px]"
                style={getGlassStyle(false)}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className={`block w-full px-5 py-3 text-left text-sm font-semibold transition-colors ${
                      lang === l.code
                        ? (isDark ? "bg-purple-600 text-white" : "bg-blue-600 text-white")
                        : (isDark ? "hover:bg-purple-500/20 text-gray-200" : "hover:bg-blue-500/10 text-gray-700")
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleTheme()}
          className="p-3 glass backdrop-blur-xl border rounded-full transition-all duration-300 shadow-sm"
          style={getGlassStyle(false)}
        >
          {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-600" />}
        </motion.button>
      </div>
    </nav>
  );
}