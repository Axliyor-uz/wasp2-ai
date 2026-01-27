"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Settings,
  telegram
} from "lucide-react";
import { useApp } from "@/lib/AppContext";
import { footerContent } from "@/lib/constants";


// Footer content for all languages

// Social links data
const socialLinks = [
  { icon: "facebook", href: "https://facebook.com/wasp2-ai/", label: "Facebook" },
  { icon: "linkedin", href: "https://www.linkedin.com/company/wasp-2-ai/", label: "LinkedIn" },
  { icon: "instagram", href: "https://www.instagram.com/uj.codes/", label: "Instagram" },
  { icon: "github", href: "https://github.com/Wasp-2-AI", label: "GitHub" },
  { icon: "telegram", href: "https://t.me/Akhliyor_uz", label: "Telegram" }
];

export default function Footer() {
  const { lang, theme } = useApp();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = footerContent[lang] || footerContent.en;
  const isDark = theme === "dark";

  // Quick links
  const quickLinks = [
    { icon: Home, label: t.home, href: "/" },
    { icon: User, label: t.about, href: "/pages/about" },
    { icon: Briefcase, label: t.portfolio, href: "/pages/portfolio" },
    { icon: Mail, label: t.contactPage, href: "/pages/contact" },
    { icon: Settings, label: t.servicePage, href: "/pages/service" }
  ];

  // Services
  const services = [
    { label: t.webDev },
    { label: t.mobileDev },
    { label: t.uiUx },
    { label: t.seo }
  ];

  return (
    <footer className={`relative transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      
      {/* Main footer content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4 py-12"> {/* Changed from max-w-7xl to max-w-5xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${isDark ? "bg-purple-500/20" : "bg-purple-100"}`}>
                <Briefcase className={`w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
              </div>
              <span className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                Wasp2<span className="text-purple-500">AI</span>
              </span>
            </div>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              We create innovative digital solutions for your business. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 text-sm hover:text-purple-500 transition-colors ${isDark ? "text-gray-400 hover:text-purple-400" : "text-gray-600 hover:text-purple-600"}`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t.services}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t.newsletter}
            </h3>
            <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {t.newsletterDesc}
            </p>
            
            

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{t.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{t.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{t.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div>
              <h4 className={`text-sm font-medium mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {t.social}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border transition-all hover:scale-110 ${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:text-white hover:border-purple-500" : "bg-white border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-400"}`}
                    aria-label={social.label}
                  >
                    {/* Social icons as SVG or text */}
                    {social.icon === "facebook" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                  
                    {social.icon === "telegram" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {social.icon === "github" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                  
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className={`text-sm text-center md:text-right ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              <p>{t.copyright}</p>
              <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
                {t.madeWith}
                <Heart className="w-3 h-3 text-red-500 animate-pulse" />
                {t.by}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}