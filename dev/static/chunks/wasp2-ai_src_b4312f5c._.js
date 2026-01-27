(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/wasp2-ai/src/lib/AppContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "bfd695f7881962c74deec2c6c924ca282caafd01ed5b7aa103024b196429fb57") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bfd695f7881962c74deec2c6c924ca282caafd01ed5b7aa103024b196429fb57";
    }
    const { children } = t0;
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AppProvider[useEffect()]": ()=>{
                const savedTheme = localStorage.getItem("theme");
                if (savedTheme) {
                    setTheme(savedTheme);
                    document.documentElement.classList.toggle("dark", savedTheme === "dark");
                }
                const savedLang = localStorage.getItem("lang");
                if (savedLang) {
                    setLang(savedLang);
                }
            }
        })["AppProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== theme) {
        t3 = ({
            "AppProvider[toggleTheme]": ()=>{
                const newTheme = theme === "light" ? "dark" : "light";
                setTheme(newTheme);
                localStorage.setItem("theme", newTheme);
                document.documentElement.classList.toggle("dark", newTheme === "dark");
            }
        })["AppProvider[toggleTheme]"];
        $[3] = theme;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const toggleTheme = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AppProvider[handleSetLang]": (newLang)=>{
                setLang(newLang);
                localStorage.setItem("lang", newLang);
            }
        })["AppProvider[handleSetLang]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleSetLang = t4;
    let t5;
    if ($[6] !== lang || $[7] !== theme || $[8] !== toggleTheme) {
        t5 = {
            theme,
            lang,
            toggleTheme,
            setLang: handleSetLang
        };
        $[6] = lang;
        $[7] = theme;
        $[8] = toggleTheme;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== children || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
            value: t5,
            children: children
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/lib/AppContext.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_s(AppProvider, "ra+p3L+n65waCjTMEAYSBpDIaOQ=");
_c = AppProvider;
function useApp() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "bfd695f7881962c74deec2c6c924ca282caafd01ed5b7aa103024b196429fb57") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bfd695f7881962c74deec2c6c924ca282caafd01ed5b7aa103024b196429fb57";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}
_s1(useApp, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/wasp2-ai/src/components/layout/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function Navigation() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "24aac4427f112885ad30465e3629d1b480ad9d43e417f514befdcbba8794503e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24aac4427f112885ad30465e3629d1b480ad9d43e417f514befdcbba8794503e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex justify-between items-center p-6 border-b border-[var(--text)]/10",
            children: "."
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navigation.tsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/wasp2-ai/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "math",
                title: "Mathematics",
                short: "Algebra, Geometry, Calculus",
                detail: "Mathematics module: step-by-step solutions, interactive diagrams, auto-grading and detailed error feedback for conceptual learning.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            },
            {
                id: "chem",
                title: "Chemistry",
                short: "Formulas & reactions",
                detail: "Chemistry section: periodic table, balanced reactions, applied problems and simulated lab tasks for safe practical learning.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
            },
            {
                id: "phys",
                title: "Physics",
                short: "Mechanics, Electromagnetism",
                detail: "Physics module: theoretical foundations, practical problems, graphs and guided solutions to build intuition.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            }
        ],
        featuresTeacherfy: [
            {
                id: "tests",
                title: "Create Tests",
                short: "Build subject-specific tests easily",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
            },
            {
                id: "lang",
                title: "Multi-language",
                short: "Choose between UZ / RU / ENG",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "delivery",
                title: "Instant Delivery",
                short: "Send tests to students immediately",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            },
            {
                id: "monitor",
                title: "Monitor Results",
                short: "Real-time performance analytics",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                id: "secure",
                title: "Secure Connection",
                short: "Encrypted teacher–student link",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "math",
                title: "Matematika",
                short: "Algebra, Geometriya, Hisob",
                detail: "Matematika moduli: muammoli masalalar, variatsion testlar, yechim bosqichlari va vizual diagrammalar bilan. Avtomatik tekshirish va xatoliklarga izohlar.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            },
            {
                id: "chem",
                title: "Kimyo",
                short: "Formulalar va reaksiyalar",
                detail: "Kimyo bo‘limi: elementlar jadvali, reaksiyalar, muhandislik muammolari va interaktiv laboratoriya topshiriqlari (simulyatsiya).",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
            },
            {
                id: "phys",
                title: "Fizika",
                short: "Mekhanika, Elektromagnetizm",
                detail: "Fizika bo‘limi: nazariy asoslar, amaliy masalalar, step-by-step yechim va grafikalar yordamida tushuntirishlar.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            }
        ],
        featuresTeacherfy: [
            {
                id: "tests",
                title: "Testlar yaratish",
                short: "Fanlar bo'yicha testlarni oson yarating",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
            },
            {
                id: "lang",
                title: "Ko'p tilli",
                short: "UZ / RU / ENG tillarini tanlang",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "delivery",
                title: "Tezkor yetkazish",
                short: "Testlarni talabalarga darhol yuboring",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            },
            {
                id: "monitor",
                title: "Natijalar monitoringi",
                short: "Haqiqiy vaqtdagi samaradorlik tahlili",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                id: "secure",
                title: "Xavfsiz aloqa",
                short: "O'qituvchi va talaba o'rtasida himoyalangan aloqa",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "math",
                title: "Математика",
                short: "Алгебра, Геометрия, Арифметика",
                detail: "Модуль математики: пошаговые решения, визуализации, автоматическая проверка и обратная связь.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            },
            {
                id: "chem",
                title: "Химия",
                short: "Формулы и реакции",
                detail: "Раздел химии содержит таблицу элементов, реакции, задачи и интерактивные лабораторные задания.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
            },
            {
                id: "phys",
                title: "Физика",
                short: "Механика, Электромагнетизм",
                detail: "Раздел по физике с практическими задачами, графиками и подробными объяснениями.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"]
            }
        ],
        featuresTeacherfy: [
            {
                id: "tests",
                title: "Создание тестов",
                short: "Легко создавайте тесты по предметам",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
            },
            {
                id: "lang",
                title: "Мультиязычность",
                short: "Выбирайте между UZ / RU / ENG",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
            },
            {
                id: "delivery",
                title: "Мгновенная доставка",
                short: "Отправляйте тесты студентам сразу",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            },
            {
                id: "monitor",
                title: "Мониторинг",
                short: "Аналитика успеваемости в реальном времени",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
            },
            {
                id: "secure",
                title: "Безопасность",
                short: "Зашифрованная связь учитель-ученик",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/wasp2-ai/src/components/layout/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // Added useRef
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/lib/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(102);
    if ($[0] !== "6ab5a10fa3c0fa7d43c787da43ef1162410c532554b8285774690f0a9191453f") {
        for(let $i = 0; $i < 102; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ab5a10fa3c0fa7d43c787da43ef1162410c532554b8285774690f0a9191453f";
    }
    const { lang, theme, toggleTheme, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [langDropdown, setLangDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navContent"][lang] || __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navContent"].en;
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const langRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                setMounted(true);
                const handleClickOutside = {
                    "Navbar[useEffect() > handleClickOutside]": (event)=>{
                        if (menuRef.current && !menuRef.current.contains(event.target)) {
                            setIsMenuOpen(false);
                        }
                        if (langRef.current && !langRef.current.contains(event.target)) {
                            setLangDropdown(false);
                        }
                    }
                }["Navbar[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const isDark = theme === "dark";
    let t2;
    if ($[3] !== setLang) {
        t2 = ({
            "Navbar[changeLang]": (newLang)=>{
                setLang(newLang);
                setLangDropdown(false);
            }
        })["Navbar[changeLang]"];
        $[3] = setLang;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const changeLang = t2;
    const t3 = n.home || "Home";
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let T0;
    let getGlassStyle;
    let languages;
    let t10;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[6] !== isDark || $[7] !== isMenuOpen || $[8] !== mounted || $[9] !== n.about || $[10] !== n.blogTeam || $[11] !== n.contact || $[12] !== n.portfolio || $[13] !== n.services || $[14] !== pathname || $[15] !== t3) {
        t10 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const navItems = [
                {
                    label: t3,
                    href: "/",
                    icon: t4
                },
                {
                    label: n.about || "About Us",
                    href: "/pages/about",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                        lineNumber: 102,
                        columnNumber: 15
                    }, this)
                },
                {
                    label: n.portfolio || "Portfolio",
                    href: "/pages/portfolio",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                        lineNumber: 106,
                        columnNumber: 15
                    }, this)
                },
                {
                    label: n.services || "Services",
                    href: "/pages/service",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                        lineNumber: 110,
                        columnNumber: 15
                    }, this)
                },
                {
                    label: n.contact || "Contact",
                    href: "/pages/contact",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                        lineNumber: 114,
                        columnNumber: 15
                    }, this)
                },
                {
                    label: n.blogTeam || "Blog (Team)",
                    href: "/pages/blog",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                        lineNumber: 118,
                        columnNumber: 15
                    }, this)
                }
            ];
            let t11;
            if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = [
                    {
                        code: "en",
                        label: "English"
                    },
                    {
                        code: "uz",
                        label: "O'zbek"
                    },
                    {
                        code: "ru",
                        label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
                    }
                ];
                $[25] = t11;
            } else {
                t11 = $[25];
            }
            languages = t11;
            let t12;
            if ($[26] !== isDark) {
                t12 = ({
                    "Navbar[getGlassStyle]": (t13)=>{
                        const isActive = t13 === undefined ? false : t13;
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
                    }
                })["Navbar[getGlassStyle]"];
                $[26] = isDark;
                $[27] = t12;
            } else {
                t12 = $[27];
            }
            getGlassStyle = t12;
            if (!mounted) {
                t10 = null;
                break bb0;
            }
            t9 = "fixed top-0 left-0 w-full z-50 flex justify-between items-start p-3 pointer-events-none";
            t6 = menuRef;
            t7 = "relative pointer-events-auto flex flex-col items-start";
            let t13;
            let t14;
            if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
                t13 = {
                    scale: 1.05
                };
                t14 = {
                    scale: 0.95
                };
                $[28] = t13;
                $[29] = t14;
            } else {
                t13 = $[28];
                t14 = $[29];
            }
            let t15;
            if ($[30] !== isMenuOpen) {
                t15 = ({
                    "Navbar[<motion.button>.onClick]": ()=>setIsMenuOpen(!isMenuOpen)
                })["Navbar[<motion.button>.onClick]"];
                $[30] = isMenuOpen;
                $[31] = t15;
            } else {
                t15 = $[31];
            }
            let t16;
            if ($[32] !== getGlassStyle || $[33] !== isMenuOpen) {
                t16 = getGlassStyle(isMenuOpen);
                $[32] = getGlassStyle;
                $[33] = isMenuOpen;
                $[34] = t16;
            } else {
                t16 = $[34];
            }
            const t17 = isDark ? "#c084fc" : "#3b82f6";
            let t18;
            if ($[35] !== t16 || $[36] !== t17) {
                t18 = {
                    ...t16,
                    color: t17
                };
                $[35] = t16;
                $[36] = t17;
                $[37] = t18;
            } else {
                t18 = $[37];
            }
            let t19;
            if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Wasp-2 AI"
                }, void 0, false, {
                    fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                    lineNumber: 221,
                    columnNumber: 15
                }, this);
                $[38] = t19;
            } else {
                t19 = $[38];
            }
            const t20 = isMenuOpen ? 180 : 0;
            let t21;
            if ($[39] !== t20) {
                t21 = {
                    rotate: t20
                };
                $[39] = t20;
                $[40] = t21;
            } else {
                t21 = $[40];
            }
            let t22;
            if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
                t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                    lineNumber: 239,
                    columnNumber: 15
                }, this);
                $[41] = t22;
            } else {
                t22 = $[41];
            }
            let t23;
            if ($[42] !== t21) {
                t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: t21,
                    children: t22
                }, void 0, false, {
                    fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                    lineNumber: 246,
                    columnNumber: 15
                }, this);
                $[42] = t21;
                $[43] = t23;
            } else {
                t23 = $[43];
            }
            if ($[44] !== t15 || $[45] !== t18 || $[46] !== t23) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: t13,
                    whileTap: t14,
                    onClick: t15,
                    className: "flex items-center gap-2 px-5 py-3 glass backdrop-blur-xl border rounded-full font-bold text-xl transition-all duration-300 shadow-sm z-50",
                    style: t18,
                    children: [
                        t19,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                    lineNumber: 253,
                    columnNumber: 14
                }, this);
                $[44] = t15;
                $[45] = t18;
                $[46] = t23;
                $[47] = t8;
            } else {
                t8 = $[47];
            }
            T0 = __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"];
            t5 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                variants: {
                    visible: {
                        transition: {
                            staggerChildren: 0.08
                        }
                    }
                },
                className: "absolute top-full left-0 mt-3 flex flex-col gap-2 min-w-[200px]",
                children: navItems.map({
                    "Navbar[navItems.map()]": (item, index)=>{
                        const isActive_0 = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    y: -20,
                                    scale: 0.9
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: {
                                    "Navbar[navItems.map() > <Link>.onClick]": ()=>setIsMenuOpen(false)
                                }["Navbar[navItems.map() > <Link>.onClick]"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05,
                                        x: 5
                                    },
                                    className: "flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-xl transition-all",
                                    style: getGlassStyle(isActive_0),
                                    onMouseEnter: {
                                        "Navbar[navItems.map() > <motion.div>.onMouseEnter]": (e)=>Object.assign(e.currentTarget.style, getGlassStyle(true))
                                    }["Navbar[navItems.map() > <motion.div>.onMouseEnter]"],
                                    onMouseLeave: {
                                        "Navbar[navItems.map() > <motion.div>.onMouseLeave]": (e_0)=>Object.assign(e_0.currentTarget.style, getGlassStyle(isActive_0))
                                    }["Navbar[navItems.map() > <motion.div>.onMouseLeave]"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: isActive_0 ? isDark ? "text-white" : "text-blue-600" : isDark ? "text-purple-400" : "text-blue-400",
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                                            lineNumber: 291,
                                            columnNumber: 74
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-semibold text-sm ${isActive_0 ? "opacity-100" : "opacity-70"}`,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                                            lineNumber: 291,
                                            columnNumber: 210
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                                    lineNumber: 284,
                                    columnNumber: 61
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                                lineNumber: 282,
                                columnNumber: 16
                            }, this)
                        }, index, false, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                            lineNumber: 271,
                            columnNumber: 20
                        }, this);
                    }
                }["Navbar[navItems.map()]"])
            }, void 0, false, {
                fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                lineNumber: 262,
                columnNumber: 26
            }, this);
        }
        $[6] = isDark;
        $[7] = isMenuOpen;
        $[8] = mounted;
        $[9] = n.about;
        $[10] = n.blogTeam;
        $[11] = n.contact;
        $[12] = n.portfolio;
        $[13] = n.services;
        $[14] = pathname;
        $[15] = t3;
        $[16] = T0;
        $[17] = getGlassStyle;
        $[18] = languages;
        $[19] = t10;
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
    } else {
        T0 = $[16];
        getGlassStyle = $[17];
        languages = $[18];
        t10 = $[19];
        t5 = $[20];
        t6 = $[21];
        t7 = $[22];
        t8 = $[23];
        t9 = $[24];
    }
    if (t10 !== Symbol.for("react.early_return_sentinel")) {
        return t10;
    }
    let t11;
    if ($[48] !== T0 || $[49] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t5
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[48] = T0;
        $[49] = t5;
        $[50] = t11;
    } else {
        t11 = $[50];
    }
    let t12;
    if ($[51] !== t11 || $[52] !== t6 || $[53] !== t7 || $[54] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: t6,
            className: t7,
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[51] = t11;
        $[52] = t6;
        $[53] = t7;
        $[54] = t8;
        $[55] = t12;
    } else {
        t12 = $[55];
    }
    let t13;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            scale: 1.05
        };
        $[56] = t13;
    } else {
        t13 = $[56];
    }
    let t14;
    if ($[57] !== langDropdown) {
        t14 = ({
            "Navbar[<motion.button>.onClick]": ()=>setLangDropdown(!langDropdown)
        })["Navbar[<motion.button>.onClick]"];
        $[57] = langDropdown;
        $[58] = t14;
    } else {
        t14 = $[58];
    }
    let t15;
    if ($[59] !== getGlassStyle || $[60] !== langDropdown) {
        t15 = getGlassStyle(langDropdown);
        $[59] = getGlassStyle;
        $[60] = langDropdown;
        $[61] = t15;
    } else {
        t15 = $[61];
    }
    const t16 = `w-5 h-5 ${isDark ? "text-purple-400" : "text-blue-500"}`;
    let t17;
    if ($[62] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
            className: t16
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[62] = t16;
        $[63] = t17;
    } else {
        t17 = $[63];
    }
    let t18;
    if ($[64] !== lang) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "uppercase text-sm",
            children: lang
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[64] = lang;
        $[65] = t18;
    } else {
        t18 = $[65];
    }
    let t19;
    if ($[66] !== t14 || $[67] !== t15 || $[68] !== t17 || $[69] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t13,
            onClick: t14,
            className: "flex items-center gap-2 px-4 py-3 glass backdrop-blur-xl border rounded-full font-semibold transition-all duration-300 shadow-sm",
            style: t15,
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[66] = t14;
        $[67] = t15;
        $[68] = t17;
        $[69] = t18;
        $[70] = t19;
    } else {
        t19 = $[70];
    }
    let t20;
    if ($[71] !== changeLang || $[72] !== getGlassStyle || $[73] !== isDark || $[74] !== lang || $[75] !== langDropdown || $[76] !== languages) {
        t20 = langDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -10
            },
            className: "absolute top-full mt-2 right-0 glass border rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl min-w-[140px]",
            style: getGlassStyle(false),
            children: languages.map({
                "Navbar[languages.map()]": (l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Navbar[languages.map() > <button>.onClick]": ()=>changeLang(l.code)
                        }["Navbar[languages.map() > <button>.onClick]"],
                        className: `block w-full px-5 py-3 text-left text-sm font-semibold transition-colors ${lang === l.code ? isDark ? "bg-purple-600 text-white" : "bg-blue-600 text-white" : isDark ? "hover:bg-purple-500/20 text-gray-200" : "hover:bg-blue-500/10 text-gray-700"}`,
                        children: l.label
                    }, l.code, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
                        lineNumber: 416,
                        columnNumber: 41
                    }, this)
            }["Navbar[languages.map()]"])
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 406,
            columnNumber: 27
        }, this);
        $[71] = changeLang;
        $[72] = getGlassStyle;
        $[73] = isDark;
        $[74] = lang;
        $[75] = langDropdown;
        $[76] = languages;
        $[77] = t20;
    } else {
        t20 = $[77];
    }
    let t21;
    if ($[78] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t20
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[78] = t20;
        $[79] = t21;
    } else {
        t21 = $[79];
    }
    let t22;
    if ($[80] !== t19 || $[81] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: langRef,
            className: "relative",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[80] = t19;
        $[81] = t21;
        $[82] = t22;
    } else {
        t22 = $[82];
    }
    let t23;
    let t24;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            scale: 1.1,
            rotate: 15
        };
        t24 = {
            scale: 0.9
        };
        $[83] = t23;
        $[84] = t24;
    } else {
        t23 = $[83];
        t24 = $[84];
    }
    let t25;
    if ($[85] !== toggleTheme) {
        t25 = ({
            "Navbar[<motion.button>.onClick]": ()=>toggleTheme()
        })["Navbar[<motion.button>.onClick]"];
        $[85] = toggleTheme;
        $[86] = t25;
    } else {
        t25 = $[86];
    }
    let t26;
    if ($[87] !== getGlassStyle) {
        t26 = getGlassStyle(false);
        $[87] = getGlassStyle;
        $[88] = t26;
    } else {
        t26 = $[88];
    }
    let t27;
    if ($[89] !== isDark) {
        t27 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-6 h-6 text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 483,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-6 h-6 text-blue-600"
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 483,
            columnNumber: 66
        }, this);
        $[89] = isDark;
        $[90] = t27;
    } else {
        t27 = $[90];
    }
    let t28;
    if ($[91] !== t25 || $[92] !== t26 || $[93] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t23,
            whileTap: t24,
            onClick: t25,
            className: "p-3 glass backdrop-blur-xl border rounded-full transition-all duration-300 shadow-sm",
            style: t26,
            children: t27
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[91] = t25;
        $[92] = t26;
        $[93] = t27;
        $[94] = t28;
    } else {
        t28 = $[94];
    }
    let t29;
    if ($[95] !== t22 || $[96] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto flex items-center gap-3",
            children: [
                t22,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[95] = t22;
        $[96] = t28;
        $[97] = t29;
    } else {
        t29 = $[97];
    }
    let t30;
    if ($[98] !== t12 || $[99] !== t29 || $[100] !== t9) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t9,
            children: [
                t12,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Navbar.jsx",
            lineNumber: 510,
            columnNumber: 11
        }, this);
        $[98] = t12;
        $[99] = t29;
        $[100] = t9;
        $[101] = t30;
    } else {
        t30 = $[101];
    }
    return t30;
}
_s(Navbar, "QaHIAkN+HIvEIXVvBFk4BbLG5qY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/wasp2-ai/src/components/layout/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/wasp2-ai/src/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/lib/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wasp2-ai/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Footer content for all languages
// Social links data
const socialLinks = [
    {
        icon: "facebook",
        href: "https://facebook.com/wasp2-ai/",
        label: "Facebook"
    },
    {
        icon: "linkedin",
        href: "https://www.linkedin.com/company/wasp-2-ai/",
        label: "LinkedIn"
    },
    {
        icon: "instagram",
        href: "https://www.instagram.com/uj.codes/",
        label: "Instagram"
    },
    {
        icon: "github",
        href: "https://github.com/Wasp-2-AI",
        label: "GitHub"
    },
    {
        icon: "telegram",
        href: "https://t.me/Akhliyor_uz",
        label: "Telegram"
    }
];
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(139);
    if ($[0] !== "571523188bcbb61616a6a9a1a5a5e0e0f8e88c2466f999008aa6f429a316fb76") {
        for(let $i = 0; $i < 139; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "571523188bcbb61616a6a9a1a5a5e0e0f8e88c2466f999008aa6f429a316fb76";
    }
    const { lang, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Footer[useEffect()]": ()=>{
                setMounted(true);
            }
        })["Footer[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!mounted) {
        return null;
    }
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerContent"][lang] || __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerContent"].en;
    const isDark = theme === "dark";
    let t2;
    if ($[3] !== t.home) {
        t2 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
            label: t.home,
            href: "/"
        };
        $[3] = t.home;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t.about) {
        t3 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            label: t.about,
            href: "/pages/about"
        };
        $[5] = t.about;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t.portfolio) {
        t4 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            label: t.portfolio,
            href: "/pages/portfolio"
        };
        $[7] = t.portfolio;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t.contactPage) {
        t5 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            label: t.contactPage,
            href: "/pages/contact"
        };
        $[9] = t.contactPage;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t.servicePage) {
        t6 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
            label: t.servicePage,
            href: "/pages/service"
        };
        $[11] = t.servicePage;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4 || $[16] !== t5 || $[17] !== t6) {
        t7 = [
            t2,
            t3,
            t4,
            t5,
            t6
        ];
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const quickLinks = t7;
    let t8;
    if ($[19] !== t.webDev) {
        t8 = {
            label: t.webDev
        };
        $[19] = t.webDev;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== t.mobileDev) {
        t9 = {
            label: t.mobileDev
        };
        $[21] = t.mobileDev;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t.uiUx) {
        t10 = {
            label: t.uiUx
        };
        $[23] = t.uiUx;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t.seo) {
        t11 = {
            label: t.seo
        };
        $[25] = t.seo;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t10 || $[28] !== t11 || $[29] !== t8 || $[30] !== t9) {
        t12 = [
            t8,
            t9,
            t10,
            t11
        ];
        $[27] = t10;
        $[28] = t11;
        $[29] = t8;
        $[30] = t9;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    const services = t12;
    const t13 = `relative transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-gray-50"}`;
    let t14;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    const t15 = `p-2 rounded-lg ${isDark ? "bg-purple-500/20" : "bg-purple-100"}`;
    const t16 = `w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`;
    let t17;
    if ($[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: t16
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t15 || $[36] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: t17
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    const t19 = `text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`;
    let t20;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-purple-500",
            children: "AI"
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t19,
            children: [
                "Wasp2",
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[39] = t19;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t18 || $[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    const t23 = `text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`;
    let t24;
    if ($[44] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t23,
            children: "We create innovative digital solutions for your business. Let's build something amazing together."
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[44] = t23;
        $[45] = t24;
    } else {
        t24 = $[45];
    }
    let t25;
    if ($[46] !== t22 || $[47] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[46] = t22;
        $[47] = t24;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    const t26 = `text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`;
    let t27;
    if ($[49] !== t.quickLinks || $[50] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t26,
            children: t.quickLinks
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[49] = t.quickLinks;
        $[50] = t26;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] !== isDark || $[53] !== quickLinks) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-3",
            children: quickLinks.map({
                "Footer[quickLinks.map()]": (link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: `flex items-center gap-2 text-sm hover:text-purple-500 transition-colors ${isDark ? "text-gray-400 hover:text-purple-400" : "text-gray-600 hover:text-purple-600"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                                    lineNumber: 276,
                                    columnNumber: 269
                                }, this),
                                link.label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                            lineNumber: 276,
                            columnNumber: 70
                        }, this)
                    }, index, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                        lineNumber: 276,
                        columnNumber: 54
                    }, this)
            }["Footer[quickLinks.map()]"])
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[52] = isDark;
        $[53] = quickLinks;
        $[54] = t28;
    } else {
        t28 = $[54];
    }
    let t29;
    if ($[55] !== t27 || $[56] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[55] = t27;
        $[56] = t28;
        $[57] = t29;
    } else {
        t29 = $[57];
    }
    const t30 = `text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`;
    let t31;
    if ($[58] !== t.services || $[59] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t30,
            children: t.services
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[58] = t.services;
        $[59] = t30;
        $[60] = t31;
    } else {
        t31 = $[60];
    }
    let t32;
    if ($[61] !== isDark || $[62] !== services) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-3",
            children: services.map({
                "Footer[services.map()]": (service, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`,
                            children: service.label
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                            lineNumber: 306,
                            columnNumber: 75
                        }, this)
                    }, index_0, false, {
                        fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                        lineNumber: 306,
                        columnNumber: 57
                    }, this)
            }["Footer[services.map()]"])
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[61] = isDark;
        $[62] = services;
        $[63] = t32;
    } else {
        t32 = $[63];
    }
    let t33;
    if ($[64] !== t31 || $[65] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[64] = t31;
        $[65] = t32;
        $[66] = t33;
    } else {
        t33 = $[66];
    }
    const t34 = `text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`;
    let t35;
    if ($[67] !== t.newsletter || $[68] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t34,
            children: t.newsletter
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[67] = t.newsletter;
        $[68] = t34;
        $[69] = t35;
    } else {
        t35 = $[69];
    }
    const t36 = `text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`;
    let t37;
    if ($[70] !== t.newsletterDesc || $[71] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t36,
            children: t.newsletterDesc
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[70] = t.newsletterDesc;
        $[71] = t36;
        $[72] = t37;
    } else {
        t37 = $[72];
    }
    const t38 = `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`;
    let t39;
    if ($[73] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: t38
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[73] = t38;
        $[74] = t39;
    } else {
        t39 = $[74];
    }
    const t40 = `text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`;
    let t41;
    if ($[75] !== t.phone || $[76] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t40,
            children: t.phone
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[75] = t.phone;
        $[76] = t40;
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    let t42;
    if ($[78] !== t39 || $[79] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t39,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[78] = t39;
        $[79] = t41;
        $[80] = t42;
    } else {
        t42 = $[80];
    }
    const t43 = `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`;
    let t44;
    if ($[81] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: t43
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[81] = t43;
        $[82] = t44;
    } else {
        t44 = $[82];
    }
    const t45 = `text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`;
    let t46;
    if ($[83] !== t.email || $[84] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t45,
            children: t.email
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[83] = t.email;
        $[84] = t45;
        $[85] = t46;
    } else {
        t46 = $[85];
    }
    let t47;
    if ($[86] !== t44 || $[87] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t44,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[86] = t44;
        $[87] = t46;
        $[88] = t47;
    } else {
        t47 = $[88];
    }
    const t48 = `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`;
    let t49;
    if ($[89] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: t48
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[89] = t48;
        $[90] = t49;
    } else {
        t49 = $[90];
    }
    const t50 = `text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`;
    let t51;
    if ($[91] !== t.address || $[92] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t50,
            children: t.address
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[91] = t.address;
        $[92] = t50;
        $[93] = t51;
    } else {
        t51 = $[93];
    }
    let t52;
    if ($[94] !== t49 || $[95] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t49,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[94] = t49;
        $[95] = t51;
        $[96] = t52;
    } else {
        t52 = $[96];
    }
    let t53;
    if ($[97] !== t42 || $[98] !== t47 || $[99] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t42,
                t47,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[97] = t42;
        $[98] = t47;
        $[99] = t52;
        $[100] = t53;
    } else {
        t53 = $[100];
    }
    let t54;
    if ($[101] !== t35 || $[102] !== t37 || $[103] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t35,
                t37,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[101] = t35;
        $[102] = t37;
        $[103] = t53;
        $[104] = t54;
    } else {
        t54 = $[104];
    }
    let t55;
    if ($[105] !== t25 || $[106] !== t29 || $[107] !== t33 || $[108] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: [
                t25,
                t29,
                t33,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[105] = t25;
        $[106] = t29;
        $[107] = t33;
        $[108] = t54;
        $[109] = t55;
    } else {
        t55 = $[109];
    }
    const t56 = `text-sm font-medium mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`;
    let t57;
    if ($[110] !== t.social || $[111] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: t56,
            children: t.social
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[110] = t.social;
        $[111] = t56;
        $[112] = t57;
    } else {
        t57 = $[112];
    }
    let t58;
    if ($[113] !== isDark) {
        t58 = socialLinks.map({
            "Footer[socialLinks.map()]": (social, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: social.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `p-2 rounded-lg border transition-all hover:scale-110 ${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:text-white hover:border-purple-500" : "bg-white border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-400"}`,
                    "aria-label": social.label,
                    children: [
                        social.icon === "facebook" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                                lineNumber: 471,
                                columnNumber: 510
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                            lineNumber: 471,
                            columnNumber: 445
                        }, this),
                        social.icon === "telegram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                                lineNumber: 471,
                                columnNumber: 912
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                            lineNumber: 471,
                            columnNumber: 847
                        }, this),
                        social.icon === "linkedin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                                lineNumber: 471,
                                columnNumber: 1519
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                            lineNumber: 471,
                            columnNumber: 1454
                        }, this),
                        social.icon === "instagram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                                lineNumber: 471,
                                columnNumber: 2134
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                            lineNumber: 471,
                            columnNumber: 2069
                        }, this),
                        social.icon === "github" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            }, void 0, false, {
                                fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                                lineNumber: 471,
                                columnNumber: 3318
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                            lineNumber: 471,
                            columnNumber: 3253
                        }, this)
                    ]
                }, index_1, true, {
                    fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                    lineNumber: 471,
                    columnNumber: 57
                }, this)
        }["Footer[socialLinks.map()]"]);
        $[113] = isDark;
        $[114] = t58;
    } else {
        t58 = $[114];
    }
    let t59;
    if ($[115] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: t58
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[115] = t58;
        $[116] = t59;
    } else {
        t59 = $[116];
    }
    let t60;
    if ($[117] !== t57 || $[118] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[117] = t57;
        $[118] = t59;
        $[119] = t60;
    } else {
        t60 = $[119];
    }
    const t61 = `text-sm text-center md:text-right ${isDark ? "text-gray-400" : "text-gray-600"}`;
    let t62;
    if ($[120] !== t.copyright) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: t.copyright
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[120] = t.copyright;
        $[121] = t62;
    } else {
        t62 = $[121];
    }
    let t63;
    if ($[122] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "w-3 h-3 text-red-500 animate-pulse"
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[122] = t63;
    } else {
        t63 = $[122];
    }
    let t64;
    if ($[123] !== t.by || $[124] !== t.madeWith) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center justify-center md:justify-end gap-1 mt-1",
            children: [
                t.madeWith,
                t63,
                t.by
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 513,
            columnNumber: 11
        }, this);
        $[123] = t.by;
        $[124] = t.madeWith;
        $[125] = t64;
    } else {
        t64 = $[125];
    }
    let t65;
    if ($[126] !== t61 || $[127] !== t62 || $[128] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t61,
            children: [
                t62,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[126] = t61;
        $[127] = t62;
        $[128] = t64;
        $[129] = t65;
    } else {
        t65 = $[129];
    }
    let t66;
    if ($[130] !== t60 || $[131] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 pt-8 border-t border-gray-700/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-6",
                children: [
                    t60,
                    t65
                ]
            }, void 0, true, {
                fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
                lineNumber: 532,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[130] = t60;
        $[131] = t65;
        $[132] = t66;
    } else {
        t66 = $[132];
    }
    let t67;
    if ($[133] !== t55 || $[134] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl lg:max-w-4xl mx-auto px-4 py-12",
            children: [
                " ",
                t55,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[133] = t55;
        $[134] = t66;
        $[135] = t67;
    } else {
        t67 = $[135];
    }
    let t68;
    if ($[136] !== t13 || $[137] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: t13,
            children: [
                t14,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/wasp2-ai/src/components/layout/Footer.jsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        $[136] = t13;
        $[137] = t67;
        $[138] = t68;
    } else {
        t68 = $[138];
    }
    return t68;
}
_s(Footer, "SIzclHlyV106jt3ST0Z7bIlvwSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$wasp2$2d$ai$2f$src$2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=wasp2-ai_src_b4312f5c._.js.map