module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/wasp2-ai/src/lib/AppContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider({ children }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    // --- 1. Load BOTH preferences on mount ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Theme Persistence
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
        // Language Persistence
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);
    // --- 2. Correct toggle function ---
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    // --- 3. Correct setLang function ---
    const handleSetLang = (newLang)=>{
        setLang(newLang);
        localStorage.setItem("lang", newLang); // Save the choice!
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            theme,
            lang,
            toggleTheme,
            setLang: handleSetLang // Use the new wrapper function
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/wasp2-ai/src/lib/AppContext.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function useApp() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
}),
"[project]/wasp2-ai/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSLATIONS",
    ()=>TRANSLATIONS,
    "content",
    ()=>content,
    "contentForBlog",
    ()=>contentForBlog,
    "contentForContact",
    ()=>contentForContact,
    "contentTranslations",
    ()=>contentTranslations,
    "footerContent",
    ()=>footerContent,
    "navContent",
    ()=>navContent,
    "serviceTranslations",
    ()=>serviceTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-ssr] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/sigma.js [app-ssr] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
;
const content = {
    en: {
        // Nav
        badge: "Building the future of EdTech & IT",
        // Hero
        heroTitle: "We build Digital Solutions that actually scale.",
        heroDesc: "From Studentify to custom enterprise software, we help your ideas transition from a concept to a high-performance reality.",
        btnPortfolio: "View Our Work",
        btnContact: "Talk to an Expert",
        // Services
        servicesTitle: "Core Capabilities",
        servicesDesc: "We specialize in modern web technologies and user-centric design.",
        // Cards
        card1Title: "Full-Stack Development",
        card1Desc: "Modern web apps built with Next.js, TypeScript, and high-performance backends.",
        card2Title: "UI/UX Strategy",
        card2Desc: "Designing interfaces that feel natural and convert visitors into users.",
        card2Link: "Learn More",
        topRightCornerCars: "Edify Apps",
        badge2: "New Era of Learning",
        //About
        // Existing keys (keep these)
        // ADD THESE NEW KEYS:
        heroTitle1: "Transform Your",
        heroTitle2: "Digital Future",
        stats1: "Projects Delivered",
        stats2: "Client Satisfaction",
        stats3: "Countries Served",
        stats4: "Team Members",
        feature1Title: "Lightning Fast",
        feature1Desc: "Blazing performance optimized for speed",
        feature2Title: "Bank-Level Security",
        feature2Desc: "Enterprise security with 99.99% uptime",
        feature3Title: "Scalable Growth",
        feature3Desc: "Infrastructure that grows with you",
        ctaTitle: "Ready to Build Something Amazing?",
        ctaDesc: "Join hundreds of satisfied clients who've transformed their business with our solutions",
        ctaBtn: "Start Your Journey Today",
        title: "Smart Education Ecosystem",
        subtitle: "Two powerful Android apps working together to modernize education, automate daily tests, and support multilingual learning.",
        studentBadge: "Download",
        teacherBadge: "Download",
        studentTitle: "Studentify",
        studentDesc: "Students receive daily tests from teachers, solve problems in multiple languages, and track progress in real time.",
        teacherTitle: "Teacherfy",
        teacherDesc: "A powerful teacher control panel to create daily tests, assignments, and instantly deliver them to students.",
        learnTag: "Learn daily. Improve faster.",
        teachTag: "Teach smarter, not harder.",
        // Inside content.en, content.uz, etc.
        card3Title: "AI Analysis",
        card3Desc: "Deep learning algorithms analyzing student performance patterns.",
        card4Title: "Global Scale",
        card4Desc: "Connect classrooms across borders with real-time translation.",
        cardLink: "Learn more",
        features: [
            {
                id: "langs",
                title: "UZ / RU / ENG",
                short: "3 supported languages",
                detail: "Teachers can assign tests in Uzbek, Russian, or English and students receive them in their selected language. Language settings sync across devices.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "math",
                title: "Mathematics",
                short: "Algebra, Geometry, Calculus",
                detail: "Mathematics module: step-by-step solutions, interactive diagrams, auto-grading and detailed error feedback for conceptual learning.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            },
            {
                id: "chem",
                title: "Chemistry",
                short: "Formulas & reactions",
                detail: "Chemistry section: periodic table, balanced reactions, applied problems and simulated lab tasks for safe practical learning.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
            },
            {
                id: "phys",
                title: "Physics",
                short: "Mechanics, Electromagnetism",
                detail: "Physics module: theoretical foundations, practical problems, graphs and guided solutions to build intuition.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            }
        ],
        featuresTeacherfy: [
            {
                id: "tests",
                title: "Create Tests",
                short: "Build subject-specific tests easily",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
            },
            {
                id: "lang",
                title: "Multi-language",
                short: "Choose between UZ / RU / ENG",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "delivery",
                title: "Instant Delivery",
                short: "Send tests to students immediately",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            },
            {
                id: "monitor",
                title: "Monitor Results",
                short: "Real-time performance analytics",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                id: "secure",
                title: "Secure Connection",
                short: "Encrypted teacher–student link",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
            }
        ]
    },
    uz: {
        badge: "EdTech va IT kelajagini quramiz",
        heroTitle: "Biz haqiqatan ham masshtablanadigan raqamli yechimlarni quramiz.",
        heroDesc: "Studentify-dan maxsus korporativ dasturiy ta'minotgacha.",
        btnPortfolio: "Ishlarimizni ko'ring",
        btnContact: "Mutaxassis bilan gaplashish",
        servicesTitle: "Asosiy imkoniyatlar",
        servicesDesc: "Biz zamonaviy veb-texnologiyalar va dizaynga ixtisoslashganmiz.",
        card1Title: "Full-Stack Dasturlash",
        card1Desc: "Next.js va TypeScript bilan qurilgan zamonaviy veb-ilovalar.",
        card2Title: "UI/UX Strategiyasi",
        card2Desc: "Tabiiy tuyuladigan interfeyslarni loyihalash.",
        card2Link: "Batafsil",
        // card3Title: "EdTech Mahorati",
        // card3Desc: "Ta'lim platformalarida maxsus bilimlar.",
        topRightCornerCars: "Edify ilovalari",
        badge2: "Ta'limning yangi davri",
        // ADD THESE NEW KEYS:
        heroTitle1: "Raqamli",
        heroTitle2: "Kelajagingizni O'zgartiring",
        stats1: "Topshirilgan Loyihalar",
        stats2: "Mijozlar Qoniqishi",
        stats3: "Xizmat Ko'rsatilgan Davlatlar",
        stats4: "Jamoa A'zolari",
        feature1Title: "Chaqmoqdek Tez",
        feature1Desc: "Tezlik uchun optimallashtirilgan yuqori unumdorlik",
        feature2Title: "Bank Darajasida Xavfsizlik",
        feature2Desc: "99.99% ishlash vaqti bilan korporativ xavfsizlik",
        feature3Title: "Miqyoslanadigan O'sish",
        feature3Desc: "Siz bilan birga o'sadigan infratuzilma",
        ctaTitle: "Ajoyib Narsalarni Yaratishga Tayyormisiz?",
        ctaDesc: "Biznes transformatsiyasini amalga oshirgan yuzlab qoniqarli mijozlarga qo'shiling",
        ctaBtn: "Sayohatingizni Bugun Boshlang",
        title: "Smart Education Ecosystem",
        subtitle: "Ikki qudratli Android ilovasi ta'limni modernizatsiya qiladi, kundalik testlarni avtomatlashtiradi va ko‘p tilli o‘rganishni qo‘llab-quvvatlaydi.",
        studentBadge: "Yuklab olish",
        teacherBadge: "Yuklab olish",
        studentTitle: "Studentify",
        studentDesc: "Talabalar o‘qituvchilardan kunlik testlar olishadi, masalalarni yechishadi va rivojlanishini kuzatishadi.",
        teacherTitle: "Teacherfy",
        teacherDesc: "O‘qituvchilar uchun testlar yaratish, ularni Studentify ga yuborish va natijani kuzatish uchun qudratli boshqaruv paneli.",
        learnTag: "Kunda o‘rganing. Tezroq rivojlaning.",
        teachTag: "Aqlli o‘rgating, ko‘proq erishilsin.",
        card3Title: "AI Tahlil",
        card3Desc: "O'quvchilar natijalarini bashorat qilish uchun chuqur o'rganish algoritmlari.",
        card4Title: "Global Miqyos",
        card4Desc: "Haqiqiy vaqtda tarjima orqali sinflarni chegaralar aro bog'lang.",
        cardLink: "Batafsil",
        features: [
            {
                id: "langs",
                title: "UZ / RU / ENG",
                short: "3 tilda testlar",
                detail: "Talabalar va o‘qituvchilar testlarni o‘zlari tanlagan til (O‘zbekcha, Русский, English)da ko‘rishlari va yechishlari mumkin. Til sozlamalari profil orqali sinxronlanadi.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "math",
                title: "Matematika",
                short: "Algebra, Geometriya, Hisob",
                detail: "Matematika moduli: muammoli masalalar, variatsion testlar, yechim bosqichlari va vizual diagrammalar bilan. Avtomatik tekshirish va xatoliklarga izohlar.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            },
            {
                id: "chem",
                title: "Kimyo",
                short: "Formulalar va reaksiyalar",
                detail: "Kimyo bo‘limi: elementlar jadvali, reaksiyalar, muhandislik muammolari va interaktiv laboratoriya topshiriqlari (simulyatsiya).",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
            },
            {
                id: "phys",
                title: "Fizika",
                short: "Mekhanika, Elektromagnetizm",
                detail: "Fizika bo‘limi: nazariy asoslar, amaliy masalalar, step-by-step yechim va grafikalar yordamida tushuntirishlar.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            }
        ],
        featuresTeacherfy: [
            {
                id: "tests",
                title: "Testlar yaratish",
                short: "Fanlar bo'yicha testlarni oson yarating",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
            },
            {
                id: "lang",
                title: "Ko'p tilli",
                short: "UZ / RU / ENG tillarini tanlang",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "delivery",
                title: "Tezkor yetkazish",
                short: "Testlarni talabalarga darhol yuboring",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            },
            {
                id: "monitor",
                title: "Natijalar monitoringi",
                short: "Haqiqiy vaqtdagi samaradorlik tahlili",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                id: "secure",
                title: "Xavfsiz aloqa",
                short: "O'qituvchi va talaba o'rtasida himoyalangan aloqa",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
            }
        ]
    },
    ru: {
        // card3Title: "Мастерство EdTech",
        // card3Desc: "Специализированные знания в образовательных платформах.",
        badge: "Ведущий Поставщик IT-Решений",
        heroTitle: "Трансформируйте Цифровое Будущее",
        heroDesc: "Мы создаем выдающийся цифровой опыт, который раздвигает границы возможного",
        btnPortfolio: "Наши Работы",
        btnContact: "Начать Проект",
        servicesTitle: "Масштабируемые Услуги",
        servicesDesc: "Комплексные решения для ускорения роста вашего бизнеса",
        card1Title: "Full-Stack Разработка",
        card1Desc: "Создание масштабируемых приложений с передовыми технологиями",
        card2Title: "Облачная Архитектура",
        card2Desc: "Проектирование надежной облачной инфраструктуры",
        card2Link: "Узнать Больше",
        topRightCornerCars: "Приложения Edify",
        badge2: "Новая эра обучения",
        // ADD THESE NEW KEYS:
        heroTitle1: "Трансформируйте Ваше",
        heroTitle2: "Цифровое Будущее",
        stats1: "Реализованных Проектов",
        stats2: "Удовлетворенность Клиентов",
        stats3: "Обслуживаемых Стран",
        stats4: "Членов Команды",
        feature1Title: "Молниеносная Скорость",
        feature1Desc: "Производительность, оптимизированная для скорости",
        feature2Title: "Банковская Безопасность",
        feature2Desc: "Корпоративная безопасность с 99.99% uptime",
        feature3Title: "Масштабируемый Рост",
        feature3Desc: "Инфраструктура, которая растет вместе с вами",
        ctaTitle: "Готовы Создать Что-то Удивительное?",
        ctaDesc: "Присоединяйтесь к сотням довольных клиентов",
        ctaBtn: "Начните Ваш Путь Сегодня",
        title: "Smart Education Ecosystem",
        subtitle: "Два мощных Android-приложения, которые модернизируют образование, автоматизируют ежедневные тесты и поддерживают мультиязычное обучение.",
        studentBadge: "Скачать",
        teacherBadge: "Скачать",
        studentTitle: "Studentify",
        studentDesc: "Ученики получают ежедневные тесты от учителей, решают задачи на разных языках и отслеживают прогресс в реальном времени.",
        teacherTitle: "Teacherfy",
        teacherDesc: "Мощная панель для создания ежедневных тестов, заданий и мгновенной доставки их ученикам.",
        learnTag: "Учитесь ежедневно. Растите быстрее.",
        teachTag: "Учите умнее, а не усерднее.",
        card3Title: "ИИ Анализ",
        card3Desc: "Алгоритмы глубокого обучения, анализирующие успеваемость для прогнозирования результатов.",
        card4Title: "Глобальный Масштаб",
        card4Desc: "Соединяйте классы через границы с помощью перевода в реальном времени.",
        cardLink: "Подробнее",
        features: [
            {
                id: "langs",
                title: "UZ / RU / ENG",
                short: "Тесты на 3 языках",
                detail: "Учителя могут создавать тесты на узбекском, русском и английском. Студенты видят тест в выбранном языке.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "math",
                title: "Математика",
                short: "Алгебра, Геометрия, Арифметика",
                detail: "Модуль математики: пошаговые решения, визуализации, автоматическая проверка и обратная связь.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            },
            {
                id: "chem",
                title: "Химия",
                short: "Формулы и реакции",
                detail: "Раздел химии содержит таблицу элементов, реакции, задачи и интерактивные лабораторные задания.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
            },
            {
                id: "phys",
                title: "Физика",
                short: "Механика, Электромагнетизм",
                detail: "Раздел по физике с практическими задачами, графиками и подробными объяснениями.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            }
        ],
        featuresTeacherfy: [
            {
                id: "tests",
                title: "Создание тестов",
                short: "Легко создавайте тесты по предметам",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
            },
            {
                id: "lang",
                title: "Мультиязычность",
                short: "Выбирайте между UZ / RU / ENG",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "delivery",
                title: "Мгновенная доставка",
                short: "Отправляйте тесты студентам сразу",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            },
            {
                id: "monitor",
                title: "Мониторинг",
                short: "Аналитика успеваемости в реальном времени",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                id: "secure",
                title: "Безопасность",
                short: "Зашифрованная связь учитель-ученик",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
            }
        ]
    }
};
const TRANSLATIONS = {
    en: {
        title: "Welcome",
        sub: "IT Solutions"
    },
    uz: {
        title: "Xush kelibsiz",
        sub: "IT Yechimlari"
    },
    ru: {
        title: "Добро пожаловать",
        sub: "ИТ-решения"
    }
};
const contentForContact = {
    en: {
        title: "Contact Us",
        subtitle: "Have a project in mind? Let's build something amazing together.",
        info: {
            email: "Email",
            phone: "Phone",
            address: "Address",
            hours: "Working Hours"
        },
        form: {
            name: "Full Name",
            telegram: "Telegram manzili",
            mail: "Email Address",
            service: "Service",
            msg: "Message",
            btn: "Send Message"
        },
        services: [
            "App Development",
            "Web Solutions",
            "AI Automation",
            "Other"
        ],
        success: "We usually respond within 24 hours 🚀"
    },
    uz: {
        title: "Aloqa",
        subtitle: "Loyihangiz bormi? Keling, birgalikda ajoyib narsa yaratamiz.",
        info: {
            email: "Email",
            phone: "Telefon",
            address: "Manzil",
            hours: "Ish vaqti"
        },
        form: {
            name: "To'liq ism",
            telegram: "Telegram username",
            service: "Xizmat turi",
            msg: "Xabar",
            btn: "Xabarni yuborish"
        },
        services: [
            "Mobil ilovalar",
            "Veb-saytlar",
            "AI Avtomatizatsiya",
            "Boshqa"
        ],
        success: "Biz odatda 24 soat ichida javob beramiz 🚀"
    },
    ru: {
        title: "Контакты",
        subtitle: "Есть проект? Давайте создадим что-то крутое вместе.",
        info: {
            email: "Email",
            phone: "Телефон",
            address: "Адрес",
            hours: "Рабочие часы"
        },
        form: {
            name: "ФИО",
            telegram: "Telegram adress",
            service: "Услуга",
            msg: "Сообщение",
            btn: "Отправить"
        },
        services: [
            "Разработка приложений",
            "Веб-решения",
            "AI Автоматизация",
            "Другое"
        ],
        success: "Мы обычно отвечаем в течение 24 часов 🚀"
    }
};
const contentForBlog = {
    en: {
        title: "The Logic Behind the Magic",
        subtitle: "5 Minds. 1 Goal. Flawless Execution.",
        bossName: "Shahzodbek",
        dev: "Developer",
        features: "Why We're Different",
        features2: "Built on trust, transparency, and top-tier engineering",
        feat1: "Deep Sync Architecture",
        feat2: "Multilingual Codebases",
        feat3: "Performance First"
    },
    uz: {
        title: "Sehrning Orqasidagi Mantiq",
        subtitle: "5 Ong. 1 Maqsad. Mukammal Bajarish.",
        bossName: "Shahzodbek",
        dev: "Dasturchi",
        features: "Nega Biz Boshqacha",
        features2: "Ishonch, shaffoflik va yuqori darajadagi muhandislik asosida qurilgan",
        feat1: "Chuqur Sinxronizatsiya Arxitekturasi",
        feat2: "Ko'p Tillarda Kodlar",
        feat3: "Birinchi O'rinda Samaradorlik"
    },
    ru: {
        title: "Логика за Волшебством",
        subtitle: "5 Умов. 1 Цель. Безупречное Исполнение.",
        bossName: "Shahzodbek",
        dev: "Разработчик",
        features: "Чем Мы Отличаемся",
        features2: "Построено на доверии, прозрачности и высококлассной инженерии",
        feat1: "Глубокая Синхронная Архитектура",
        feat2: "Многоязычные Кодовые Базы",
        feat3: "Приоритет Производительности"
    }
};
const serviceTranslations = {
    en: {
        header: "Our Expertise",
        sub: "Transforming code into business value.",
        cta: "Start a Project",
        items: [
            {
                title: "Full-Stack Ecosystems",
                desc: "High-performance web applications using Next.js and Microservices.",
                tag: "Web 3.0 Ready"
            },
            {
                title: "AI & Automation",
                desc: "Integrating LLMs and custom AI agents into your workflow.",
                tag: "Latest Tech"
            },
            {
                title: "Cybersecurity Audits",
                desc: "Penetration testing and hardening your infrastructure.",
                tag: "Security First"
            },
            {
                title: "Mobile Experiences",
                desc: "Native-feel cross-platform apps for iOS and Android.",
                tag: "iOS & Android"
            },
            {
                title: "Cloud Architecture",
                desc: "Scaling to millions of users with serverless solutions.",
                tag: "99.9% Uptime"
            },
            {
                title: "UI/UX Craftsmanship",
                desc: "Design systems that bridge beauty and usability.",
                tag: "Pixel Perfect"
            }
        ]
    },
    ru: {
        header: "Наша Экспертиза",
        sub: "Превращаем код в ценность для бизнеса.",
        cta: "Начать проект",
        items: [
            {
                title: "Full-Stack Экосистемы",
                desc: "Высокопроизводительные веб-приложения на Next.js и микросервисах.",
                tag: "Web 3.0"
            },
            {
                title: "ИИ и Автоматизация",
                desc: "Интеграция LLM и кастомных ИИ-агентов в ваш рабочий процесс.",
                tag: "Технологии ИИ"
            },
            {
                title: "Аудит Безопасности",
                desc: "Тестирование на проникновение и укрепление инфраструктуры.",
                tag: "Безопасность"
            },
            {
                title: "Мобильные Решения",
                desc: "Кроссплатформенные приложения с нативным UX для iOS и Android.",
                tag: "iOS и Android"
            },
            {
                title: "Облачная Архитектура",
                desc: "Масштабирование до миллионов пользователей через AWS/Azure.",
                tag: "99.9% Uptime"
            },
            {
                title: "UI/UX Мастерство",
                desc: "Системы дизайна, объединяющие красоту и удобство.",
                tag: "Pixel Perfect"
            }
        ]
    },
    uz: {
        header: "Bizning Tajribamiz",
        sub: "Kodlarni biznes qiymatiga aylantiramiz.",
        cta: "Loyihani boshlash",
        items: [
            {
                title: "Full-Stack Ekotizimlar",
                desc: "Next.js va Mikroservislar yordamida yuqori samarali veb-ilovalar.",
                tag: "Web 3.0 Tayyor"
            },
            {
                title: "AI va Avtomatlashtirish",
                desc: "Ish jarayoningizga LLM va maxsus AI agentlarini integratsiya qilish.",
                tag: "Yangi Texnologiya"
            },
            {
                title: "Kiberxavfsizlik Auditi",
                desc: "Infratuzilmangizni zamonaviy tahdidlardan himoya qilish va mustahkamlash.",
                tag: "Xavfsizlik"
            },
            {
                title: "Mobil Tajribalar",
                desc: "iOS va Android uchun mukammal UX'ga ega kros-platforma ilovalar.",
                tag: "iOS va Android"
            },
            {
                title: "Bulutli Arxitektura",
                desc: "Serverless yechimlar bilan millionlab foydalanuvchilarga kengayish.",
                tag: "99.9% Uptime"
            },
            {
                title: "UI/UX Mahorati",
                desc: "Go'zallik va foydalanish qulayligi o'rtasidagi mukammal dizayn.",
                tag: "Pixel Perfect"
            }
        ]
    }
};
const footerContent = {
    en: {
        quickLinks: "Quick Links",
        services: "Services",
        contact: "Contact",
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        contactPage: "Contact Us",
        servicePage: "Service",
        webDev: "Web Development",
        mobileDev: "Mobile Apps",
        uiUx: "UI/UX Design",
        seo: "SEO Optimization",
        address: "Tashkent, Mirabad district",
        phone: "+998 91 206 31 40",
        email: "contact@wasp2.ai",
        workingHours: "Mon-Fri, 8:00-20:00",
        copyright: "© 2024 Wasp2 AI. All rights reserved.",
        madeWith: "Made with",
        by: "by Wasp2 AI Team",
        newsletter: "Stay Updated",
        newsletterDesc: "Subscribe to our newsletter for the latest updates.",
        subscribe: "Subscribe",
        successSubscribe: "Thank you for subscribing!",
        social: "Follow Us"
    },
    uz: {
        quickLinks: "Tez Havolalar",
        services: "Xizmatlar",
        contact: "Aloqa",
        home: "Bosh Sahifa",
        about: "Biz Haqimizda",
        portfolio: "Portfolio",
        contactPage: "Bog'lanish",
        servicePage: "Servis",
        webDev: "Veb Dasturlash",
        mobileDev: "Mobil Ilovalar",
        uiUx: "UI/UX Dizayn",
        seo: "SEO Optimizatsiya",
        address: "Toshkent, Mirabad tumani",
        phone: "+998 91 206 31 40",
        email: "contact@wasp2.ai",
        workingHours: "Dushanba-Juma, 8:00-20:00",
        copyright: "© 2024 Wasp2 AI. Barcha huquqlar himoyalangan.",
        madeWith: "Yaratildi",
        by: "Wasp2 AI Jamoasi tomonidan",
        newsletter: "Yangiliklardan Xabardor Bo'ling",
        newsletterDesc: "So'nggi yangiliklarni olish uchun yangiliklarimizga obuna bo'ling.",
        subscribe: "Obuna Bo'lish",
        successSubscribe: "Obuna bo'lganingiz uchun rahmat!",
        social: "Bizni Kuzatib Boring"
    },
    ru: {
        quickLinks: "Быстрые Ссылки",
        services: "Услуги",
        contact: "Контакты",
        home: "Главная",
        about: "О Нас",
        portfolio: "Портфолио",
        contactPage: "Связаться",
        servicePage: "Сервис",
        webDev: "Веб-Разработка",
        mobileDev: "Мобильные Приложения",
        uiUx: "UI/UX Дизайн",
        seo: "SEO Оптимизация",
        address: "Ташкент, Мирабадский район",
        phone: "+998 91 206 31 40",
        email: "contact@wasp2.ai",
        workingHours: "Пн-Пт, 8:00-20:00",
        copyright: "© 2024 Wasp2 AI. Все права защищены.",
        madeWith: "Сделано с",
        by: "командой Wasp2 AI",
        newsletter: "Будьте в Курсе",
        newsletterDesc: "Подпишитесь на нашу рассылку для получения последних обновлений.",
        subscribe: "Подписаться",
        successSubscribe: "Спасибо за подписку!",
        social: "Следите за Нами"
    }
};
const navContent = {
    en: {
        home: "Home",
        about: "About Us",
        portfolio: "Portfolio",
        services: "Services",
        contact: "Contact",
        blogTeam: "Blog (Team)"
    },
    uz: {
        home: "Bosh Sahifa",
        about: "Biz Haqimizda",
        portfolio: "Portfolio",
        services: "Xizmatlar",
        contact: "Aloqa",
        blogTeam: "Blog (Jamoa)"
    },
    ru: {
        home: "Главная",
        about: "О Нас",
        portfolio: "Портфолио",
        services: "Услуги",
        contact: "Контакты",
        blogTeam: "Блог (Команда)"
    }
};
const contentTranslations = {
    uz: {
        // Studentify Strings
        studentTitle: "Studentify",
        studentTag: "O'quvchi ilovasi",
        studentDesc: "Talabalar uchun kunlik testlar, masalalarni yechish va rivojlanishni kuzatish tizimi.",
        studentFeature1: "Kunlik testlar",
        studentFeature1Desc: "Har kuni yangi testlar va bilim darajangizni tekshirish.",
        studentFeature2: "O'sish natijalari",
        studentFeature2Desc: "Kundalik natijalar va shaxsiy rivojlanish monitoringi.",
        studentFeature3: "AI Analiz",
        studentFeature3Desc: "Sun'iy intellekt orqali o'qish strategiyalarini shakllantirish.",
        // Teacherfy Strings
        teacherTitle: "Teacherfy",
        teacherTag: "O'qituvchi ilovasi",
        teacherDesc: "O'qituvchilar uchun testlar yaratish va natijalarni kuzatish uchun quvvatli boshqaruv paneli.",
        teacherFeature1: "200,000+ Ma'lumotlar bazasi",
        teacherFeature1Desc: "Tayyor testlar va resurslardan foydalanish.",
        teacherFeature2: "Strategik Mundarija",
        teacherFeature2Desc: "Mavzular va dars rejasining strategik jadvali.",
        teacherFeature3: "Talaba tahlili",
        teacherFeature3Desc: "Har bir talaba uchun AI tahlili va o'zlashtirish darajasi.",
        // Parents Strings
        parentTitle: "Parents",
        parentTag: "Ota-onalar ilovasi",
        parentDesc: "Farzandingizning o'sishini va qiyinchiliklarini real vaqtda kuzating.",
        parentFeature1: "O'sish monitoringi",
        parentFeature1Desc: "Farzandingiz bilim darajasi qanchalik o'sayotganini ko'ring.",
        parentFeature2: "Qiyinchiliklar xaritasi",
        parentFeature2Desc: "Farzandingizga qaysi mavzular qiyinlik qilayotganini aniqlang.",
        comingSoon: "Tez kunda",
        batafsil: "Batafsil",
        parentFeature3: "AI Tavsiyalar",
        parentFeature3Desc: "Farzandingizga uyda yordam berish bo'yicha shaxsiy maslahatlar.",
        parentFeature4: "Tezkor Bildirishnomalar",
        parentFeature4Desc: "Testlar yakunlanganda yoki natijalar chiqqanda xabar olish."
    },
    ru: {
        // Studentify Strings
        studentTitle: "Studentify",
        studentTag: "Приложение для ученика",
        studentDesc: "Ежедневные тесты, решение задач и отслеживание прогресса для студентов.",
        studentFeature1: "Ежедневные тесты",
        studentFeature1Desc: "Проверяйте свои знания каждый день с новыми тестами.",
        studentFeature2: "Результаты прогресса",
        studentFeature2Desc: "Мониторинг ежедневных результатов и личностного роста.",
        studentFeature3: "AI Анализ",
        studentFeature3Desc: "Формирование стратегий обучения с помощью ИИ.",
        // Teacherfy Strings
        teacherTitle: "Teacherfy",
        teacherTag: "Панель учителя",
        teacherDesc: "Мощная панель управления для создания тестов и мониторинга результатов.",
        teacherFeature1: "200,000+ База данных",
        teacherFeature1Desc: "Доступ к огромной библиотеке готовых тестов и ресурсов.",
        teacherFeature2: "Стратегический план",
        teacherFeature2Desc: "Автоматизированное планирование тем и контента.",
        teacherFeature3: "Анализ учеников",
        teacherFeature3Desc: "ИИ-анализ успеваемости каждого отдельного ученика.",
        // Parents Strings
        parentTitle: "Parents",
        parentTag: "Приложение для родителей",
        parentDesc: "Следите за ростом и трудностями вашего ребенка в режиме реального времени.",
        parentFeature1: "Мониторинг роста",
        parentFeature1Desc: "Визуализация прогресса знаний вашего ребенка.",
        parentFeature2: "Карта трудностей",
        parentFeature2Desc: "Определите темы, которые вызывают сложности у ребенка.",
        comingSoon: "Скоро",
        batafsil: "Подробнее",
        parentFeature3: "AI Рекомендации",
        parentFeature3Desc: "Персональные советы, как помочь ребенку дома.",
        parentFeature4: "Мгновенные уведомления",
        parentFeature4Desc: "Уведомления о завершении тестов и новых достижениях."
    },
    en: {
        // Studentify Strings
        studentTitle: "Studentify",
        studentTag: "Student App",
        studentDesc: "Daily quiz tests, problem solving, and progress tracking for students.",
        studentFeature1: "Daily Quiz Tests",
        studentFeature1Desc: "Test your knowledge every day with adaptive quizzes.",
        studentFeature2: "Daily Progress",
        studentFeature2Desc: "Visualized daily results and personal growth monitoring.",
        studentFeature3: "AI Analysis",
        studentFeature3Desc: "Personalized learning strategies powered by AI.",
        // Teacherfy Strings
        teacherTitle: "Teacherfy",
        teacherTag: "Teacher Panel",
        teacherDesc: "A powerful dashboard for creating tests and monitoring student performance.",
        teacherFeature1: "200,000+ Database",
        teacherFeature1Desc: "Access to a massive library of ready-to-use quizzes.",
        teacherFeature2: "Strategic Table",
        teacherFeature2Desc: "Automated table of topics and strategic lesson planning.",
        teacherFeature3: "Individual Analysis",
        teacherFeature3Desc: "AI analysis for every single student's performance.",
        // Parents Strings
        parentTitle: "Parents",
        parentTag: "Parent App",
        parentDesc: "Stay connected to your child's success and identify learning gaps.",
        parentFeature1: "Growth Monitoring",
        parentFeature1Desc: "See exactly how much your child has improved.",
        parentFeature2: "Difficulty Mapping",
        parentFeature2Desc: "Identify which topics are difficult for your child.",
        comingSoon: "Coming Soon",
        batafsil: "Learn More",
        parentFeature3: "AI Recommendation",
        parentFeature3Desc: "Get personalized tips on how to help your child at home.",
        parentFeature4: "Instant Alerts",
        parentFeature4Desc: "Real-time notifications when tests are completed or goals met."
    }
};
}),
"[project]/wasp2-ai/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
// import { useApp } from "@/lib/AppContext";
// import { content } from "@/lib/constants";
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/lib/AppContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/lib/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const dynamic = "force-dynamic";
async function HomePage() {
    const { lang, theme, toggleTheme, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [openFeature, setOpenFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openTFeature, setOpenTFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        0
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        0.8
    ]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isNavigating, setIsNavigating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    {}
    const handleClick = async ()=>{
        setIsNavigating(true);
        router.push('/pages/contact');
    };
    const handleClick2 = async ()=>{
        setIsNavigating(true);
        router.push('/pages/showcase5');
    };
    const data = await fetch("https://api.example.com/data", {
        cache: "no-store"
    }).then((res)=>res.json());
    const handleClick3 = ()=>{
        setIsNavigating(true);
        // This opens the Telegram link in a new tab
        window.open("https://t.me/Akhliyor_uz", "_blank");
        // Optional: Reset navigating state after a delay if you aren't leaving the page
        setTimeout(()=>setIsNavigating(false), 1000);
    };
    const scrollToServices = ()=>{
        const element = document.getElementById("services");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    // close modal on ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onKey(e) {
            if (e.key === "Escape") setOpenFeature(null);
        }
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onKey(e) {
            if (e.key === "Escape") setOpenTFeature(null);
        }
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, []);
    // Fallback to English if lang is not found
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["content"][lang] || __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["content"].en;
    const isDark = theme === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-hidden transition-colors duration-500 bg-background text-foreground",
        children: [
            isDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen",
                style: {
                    background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192
                },
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-screen flex items-center justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity,
                            scale
                        },
                        className: "relative z-10 max-w-7xl mx-auto px-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                className: "inline-flex items-center gap-3 px-6 py-3 mb-8 glass border rounded-full backdrop-blur-xl",
                                style: {
                                    borderColor: isDark ? "rgba(147, 51, 234, 0.3)" : "rgba(147, 51, 234, 0.4)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotate: 360
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: `w-5 h-5 ${isDark ? "text-purple-400" : "text-purple-600"}`
                                        }, void 0, false, {
                                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-semibold bg-gradient-to-r ${isDark ? "from-purple-400 via-blue-400 to-cyan-400" : "from-purple-600 via-blue-600 to-cyan-600"} bg-clip-text text-transparent tracking-wide`,
                                        children: t.badge
                                    }, void 0, false, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4
                                },
                                className: "text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block bg-gradient-to-r ${isDark ? "from-white via-purple-200 to-white" : "from-gray-900 via-purple-600 to-gray-900"} bg-clip-text text-transparent`,
                                        children: t.heroTitle1 || "Transform Your"
                                    }, void 0, false, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block bg-gradient-to-r ${isDark ? "from-purple-400 via-blue-400 to-cyan-400" : "from-purple-600 via-blue-600 to-cyan-600"} bg-clip-text text-transparent`,
                                        children: t.heroTitle2 || "Digital Future"
                                    }, void 0, false, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.6
                                },
                                className: "text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-70",
                                children: t.heroDesc
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.8
                                },
                                className: "flex flex-col sm:flex-row gap-6 justify-center items-center mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: handleClick2,
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full font-bold text-lg overflow-hidden text-white shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 flex items-center gap-3",
                                                children: [
                                                    t.btnPortfolio,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                        className: "w-5 h-5 group-hover:translate-x-2 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600",
                                                initial: {
                                                    x: "100%"
                                                },
                                                whileHover: {
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.3
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: handleClick3,
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "px-10 py-5 glass backdrop-blur-xl border rounded-full font-bold text-lg transition-all duration-300",
                                        style: {
                                            color: "var(--text)",
                                            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                                        },
                                        children: t.btnContact
                                    }, void 0, false, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 1
                                },
                                className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto",
                                children: [
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                                        value: "150+",
                                        label: t.stats1 || "Projects",
                                        color: "from-yellow-400 to-orange-500"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                                        value: "98%",
                                        label: t.stats2 || "Satisfaction",
                                        color: "from-purple-400 to-pink-500"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                        value: "45+",
                                        label: t.stats3 || "Countries",
                                        color: "from-blue-400 to-cyan-500"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        value: "120+",
                                        label: t.stats4 || "Team",
                                        color: "from-green-400 to-emerald-500"
                                    }
                                ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            y: -10,
                                            scale: 1.05
                                        },
                                        className: "group relative p-6 glass backdrop-blur-xl rounded-2xl border transition-all duration-300",
                                        style: {
                                            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: `w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`,
                                                whileHover: {
                                                    rotate: 360
                                                },
                                                transition: {
                                                    duration: 0.6
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-4xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`,
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium opacity-70",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            y: [
                                0,
                                10,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity
                        },
                        onClick: scrollToServices,
                        className: "absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.1
                            },
                            className: "w-6 h-10 border-2 rounded-full flex items-start justify-center p-2",
                            style: {
                                borderColor: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        12,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity
                                },
                                className: "w-1.5 h-1.5 rounded-full",
                                style: {
                                    backgroundColor: "var(--text)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                lineNumber: 284,
                                columnNumber: 5
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                            lineNumber: 279,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "relative py-12 px-10 transition-colors duration-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    whileHover: {
                                        y: -5
                                    },
                                    className: "group relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 p-3 sm:p-6 lg:p-10 h-full flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            rotate: 16,
                                                            scale: 1
                                                        },
                                                        transition: {
                                                            duration: 0.2
                                                        },
                                                        className: "w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-6 bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                            className: "w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cursor-pointer absolute top-6 right-6 flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                                className: "text-purple-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: t.badge2
                                                            }, void 0, false, {
                                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-4 text-white leading-tight",
                                                        children: t.topRightCornerCars || "New Era of Learning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-sm sm:text-1xl lg:text-2xl font-black mb-2 sm:mb-4 text-white leading-tight",
                                                        children: t.card3Title || "AI Analysis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-8 leading-snug line-clamp-4 sm:line-clamp-none",
                                                        children: t.card3Desc || "Deep learning algorithms analyzing student performance patterns."
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                onClick: handleClick2,
                                                whileHover: {
                                                    x: 5
                                                },
                                                className: "inline-flex items-center gap-1 sm:gap-3 text-white font-bold text-xs sm:text-xl",
                                                children: [
                                                    t.cardLink || "Learn more",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-3 h-3 sm:w-6 sm:h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:flex absolute bottom-3 right-3 gap-2 lg:gap-6",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
                                                ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        animate: {
                                                            y: [
                                                                0,
                                                                -10,
                                                                0
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 2 + i * 0.5,
                                                            repeat: Infinity,
                                                            delay: i * 0.2
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-white/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    whileHover: {
                                        y: -5
                                    },
                                    className: "group relative bg-gradient-to-bl from-pink-600 via-purple-600 to-indigo-600 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 p-3 sm:p-6 lg:p-10 h-full flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            rotate: 16,
                                                            scale: 1
                                                        },
                                                        transition: {
                                                            duration: 0.2
                                                        },
                                                        className: "w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-6 bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                            className: "w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cursor-pointer absolute top-6 right-6 flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                                className: "text-purple-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: t.badge2
                                                            }, void 0, false, {
                                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm sm:text-2xl lg:text-4xl font-black mb-2 sm:mb-4 text-white leading-tight",
                                                        children: t.topRightCornerCars || "New Era of Learning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm sm:text-1xl lg:text-2xl font-black mb-2 sm:mb-4 text-white leading-tight",
                                                        children: t.card4Title || "Global Scale"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-8 leading-snug line-clamp-4 sm:line-clamp-none",
                                                        children: t.card4Desc || "Connect classrooms across borders with real-time translation."
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                onClick: handleClick2,
                                                whileHover: {
                                                    x: 5
                                                },
                                                className: "inline-flex items-center gap-1 sm:gap-3 text-white font-bold text-xs sm:text-xl",
                                                children: [
                                                    t.cardLink || "Learn more",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-3 h-3 sm:w-6 sm:h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:flex absolute bottom-3 right-3 gap-2 lg:gap-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -10,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 3,
                                                        repeat: Infinity
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                        className: "w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-white/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 20
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "grid md:grid-cols-3 gap-6 mt-12",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                    title: t.feature1Title || "Lightning Fast",
                                    desc: t.feature1Desc || "Optimized performance",
                                    gradient: "from-yellow-400 to-orange-500"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                    title: t.feature2Title || "Secure",
                                    desc: t.feature2Desc || "Enterprise security",
                                    gradient: "from-green-400 to-emerald-500"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                    title: t.feature3Title || "Scalable",
                                    desc: t.feature3Desc || "Grows with you",
                                    gradient: "from-blue-400 to-purple-500"
                                }
                            ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: index * 0.2
                                    },
                                    whileHover: {
                                        y: -10,
                                        scale: 1.02
                                    },
                                    className: "glass backdrop-blur-xl rounded-2xl p-8 border",
                                    style: {
                                        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 0.6
                                            },
                                            className: `w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-xl`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                className: "w-8 h-8 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-2xl font-bold mb-3",
                                            style: {
                                                color: "var(--text)"
                                            },
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "opacity-70",
                                            style: {
                                                color: "var(--text)"
                                            },
                                            children: feature.desc
                                        }, void 0, false, {
                                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-32 px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-16 overflow-hidden shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0
                                    },
                                    whileInView: {
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "inline-block mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        className: "w-15 h-15 text-white mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-4xl font-black mb-6 text-white",
                                    children: t.ctaTitle || "Ready to Build Something Amazing?"
                                }, void 0, false, {
                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-white/80 mb-8 max-w-1xl mx-auto",
                                    children: t.ctaDesc || "Join hundreds of satisfied clients"
                                }, void 0, false, {
                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: handleClick,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: "px-4 lg:px-12 py-4 lg:py-6 bg-white text-gray-900 rounded-full font-black text-xl shadow-2xl hover:shadow-white/50 transition-all",
                                    children: t.ctaBtn || "Get Started Today"
                                }, void 0, false, {
                                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/wasp2-ai/src/app/page.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/wasp2-ai/src/app/page.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/wasp2-ai/src/app/page.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/wasp2-ai/src/app/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/wasp2-ai/src/app/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba30fe79._.js.map