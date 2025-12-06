(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Sidebar/Sidebar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "discover-gradient": "Sidebar-module__sTeV3q__discover-gradient",
  "home-gradient": "Sidebar-module__sTeV3q__home-gradient",
  "menuContainer": "Sidebar-module__sTeV3q__menuContainer",
  "my-podcasts-gradient": "Sidebar-module__sTeV3q__my-podcasts-gradient",
  "my-queue-gradient": "Sidebar-module__sTeV3q__my-queue-gradient",
  "recents-gradient": "Sidebar-module__sTeV3q__recents-gradient",
  "titleText": "Sidebar-module__sTeV3q__titleText",
});
}),
"[project]/app/components/Sidebar/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Sidebar/Sidebar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const menuItems = [
    {
        name: "Home",
        path: "/",
        icon: "/icons/home.svg",
        activeIcon: "/icons/home-active.svg",
        gradientClass: "home-gradient"
    },
    {
        name: "Discover",
        path: "/discover",
        icon: "/icons/discover.svg",
        activeIcon: "/icons/discover-active.svg",
        gradientClass: "discover-gradient"
    },
    {
        name: "YOUR STUFF",
        children: [
            {
                name: "My Queue",
                path: "/my-queue",
                icon: "/icons/my-queue.svg",
                activeIcon: "/icons/my-queue-active.svg",
                gradientClass: "my-queue-gradient"
            },
            {
                name: "My Podcasts",
                path: "/my-podcasts",
                icon: "/icons/my-podcasts.svg",
                activeIcon: "/icons/my-podcasts-active.svg",
                gradientClass: "my-podcasts-gradient"
            },
            {
                name: "Recents",
                path: "/recents",
                icon: "/icons/recents.svg",
                activeIcon: "/icons/recents-active.svg",
                gradientClass: "recents-gradient"
            }
        ]
    }
];
const Sidebar = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleNavigation = (path)=>{
        if (path) router.push(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuContainer} fixed left-0 top-0 w-2/12 min-h-screen p-4 flex-col lg:flex hidden`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/logo.svg",
                alt: "Logo",
                width: "45",
                height: "50"
            }, void 0, false, {
                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: " mt-8",
                children: menuItems.map((item)=>{
                    if (item.children) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "!mt-4 mb-2 text-xs py-1 text-gray-400 uppercase font-bold",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: item.children.map((child)=>{
                                        const isActive = pathname === child.path;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onClick: ()=>handleNavigation(child.path),
                                            className: `flex items-center gap-3 p-2 rounded cursor-pointer  font-medium ${isActive ? " text-[#BA6FDE]" : "text-white"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: isActive ? child.activeIcon ?? "" : child.icon ?? "",
                                                    alt: child.name,
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleText,
                                                    children: child.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, child.name, true, {
                                            fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.name, true, {
                            fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                    const isActive = pathname === item.path;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleNavigation(item.path),
                        className: `menuItem flex items-center gap-3 p-2 rounded cursor-pointer font-medium  ${isActive ? `text-[#BA6FDE] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][item.gradientClass ?? ""]}` : "text-white "}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: isActive ? item.activeIcon ?? "" : item.icon ?? "",
                                alt: item.name,
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleText,
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.name, true, {
                        fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer text-gray-400 text-xs mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Podbay v2.9.6 by",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "hover:underline",
                                href: "https://fancysoups.com/",
                                children: "Fancy Soups"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "hover:underline",
                                href: "https://podbay.fm/about",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "hover:underline",
                                href: "https://podbay.fm/podcasts",
                                children: "All Podcasts"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Sidebar/Sidebar.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Buttons/NavigationArrows.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const NavigationArrows = ({ scrollRef, scrollAmount = 200, type = "scroll" })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const hasQuery = searchParams && Array.from(searchParams.keys()).length > 0;
    const pathname = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
    const handleLeft = ()=>{
        if (type === "scroll") {
            if (scrollRef?.current) {
                scrollRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth"
                });
            }
        } else if (type === "history") {
            if (pathname === "/search" && !hasQuery) {
                // تخطّي صفحة /search بالـ history — ارجع للي قبلها
                window.history.go(-2);
            } else {
                window.history.back();
            }
        }
    };
    const handleRight = ()=>{
        if (type === "scroll") {
            if (scrollRef?.current) {
                scrollRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        } else if (type === "history") {
            if (pathname === "/search" && !hasQuery) {
                // تخطّي /search إلى الصفحة بعده
                window.history.go(2);
            } else {
                window.history.forward();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:flex gap-1 hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLeft,
                className: "group p-1 cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5.10703 6L8.08594 3.02344C8.30625 2.80312 8.30625 2.44687 8.08594 2.22891C7.86563 2.00859 7.50938 2.01094 7.28906 2.22891L3.91406 5.60156C3.70078 5.81484 3.69609 6.15703 3.89766 6.37734L7.28672 9.77344C7.39688 9.88359 7.54219 9.9375 7.68516 9.9375C7.82813 9.9375 7.97344 9.88359 8.08359 9.77344C8.30391 9.55312 8.30391 9.19687 8.08359 8.97891L5.10703 6Z",
                        className: "fill-gray-500 group-hover:fill-white"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Buttons/NavigationArrows.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Buttons/NavigationArrows.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Buttons/NavigationArrows.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleRight,
                className: "group p-1 cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.89297 6L3.91406 3.02344C3.69375 2.80313 3.69375 2.44688 3.91406 2.22891C4.13437 2.01094 4.49062 2.01094 4.71094 2.22891L8.08594 5.60156C8.29922 5.81484 8.30391 6.15703 8.10234 6.37734L4.71328 9.77344C4.60312 9.88359 4.45781 9.9375 4.31484 9.9375C4.17187 9.9375 4.02656 9.88359 3.91641 9.77344C3.69609 9.55313 3.69609 9.19688 3.91641 8.97891L6.89297 6Z",
                        className: "fill-gray-500 group-hover:fill-white"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Buttons/NavigationArrows.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Buttons/NavigationArrows.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Buttons/NavigationArrows.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Buttons/NavigationArrows.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NavigationArrows, "A57ZQKsSKoH4xi482IWIv7kTTfs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = NavigationArrows;
const __TURBOPACK__default__export__ = NavigationArrows;
var _c;
__turbopack_context__.k.register(_c, "NavigationArrows");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Buttons/Dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Dropdown = ({ items, fillColor })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            const handleClickOutside = {
                "Dropdown.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                        setOpen(false);
                    }
                }
            }["Dropdown.useEffect.handleClickOutside"];
            document.addEventListener("click", handleClickOutside);
            return ({
                "Dropdown.useEffect": ()=>document.removeEventListener("click", handleClickOutside)
            })["Dropdown.useEffect"];
        }
    }["Dropdown.useEffect"], []);
    const handleButtonClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open);
    };
    const handleItemClick = (action, href)=>{
        console.log("🖱️ Item clicked!");
        if (action) {
            console.log("🚀 Executing action...");
            action();
        }
        if (href) {
            console.log("🔗 Navigating to:", href);
        }
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: handleButtonClick,
                className: "cursor-pointer p-1 rounded hover:bg-black/30",
                "aria-label": "Open menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11 7.33333C12.0083 7.33333 12.8333 6.50833 12.8333 5.5C12.8333 4.49167 12.0083 3.66667 11 3.66667C9.99167 3.66667 9.16667 4.49167 9.16667 5.5C9.16667 6.50833 9.99167 7.33333 11 7.33333ZM11 9.16667C9.99167 9.16667 9.16667 9.99167 9.16667 11C9.16667 12.0083 9.99167 12.8333 11 12.8333C12.0083 12.8333 12.8333 12.0083 12.8333 11C12.8333 9.99167 12.0083 9.16667 11 9.16667ZM11 14.6667C9.99167 14.6667 9.16667 15.4917 9.16667 16.5C9.16667 17.5083 9.99167 18.3333 11 18.3333C12.0083 18.3333 12.8333 17.5083 12.8333 16.5C12.8333 15.4917 12.0083 14.6667 11 14.6667Z",
                        fill: fillColor
                    }, void 0, false, {
                        fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full mt-1 z-[99999] min-w-[180px] transform-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "dropdown bg-gradient-to-tr from-[#404080] to-[#6B4080] rounded-lg shadow-xl text-white p-2 border border-white/10",
                    children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "px-3 py-2 text-xs rounded-md hover:bg-black/30 transition cursor-pointer",
                                    children: item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>{
                                            console.log("🔗 LINK CLICKED:", item.label);
                                            setOpen(false);
                                        },
                                        className: "block w-full text-left",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                                        lineNumber: 83,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            console.log("🎯 BUTTON CLICKED:", item.label);
                                            console.log("🎯 Action exists?", !!item.action);
                                            if (item.action) {
                                                console.log("🚀 Calling action...");
                                                item.action();
                                            }
                                            setOpen(false);
                                        },
                                        className: "w-full text-left",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                                        lineNumber: 94,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.hasDivider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                                    lineNumber: 112,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, `${item.label}-${index}`, true, {
                            fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Buttons/Dropdown.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Buttons/Dropdown.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dropdown, "4ieTq0JoNkk3+UNAr1DkVlheEfQ=");
_c = Dropdown;
const __TURBOPACK__default__export__ = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Products/ProductCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "compactCard": "ProductCard-module__8BLwlW__compactCard",
});
}),
"[project]/app/components/Products/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Products/ProductCard.module.css [app-client] (css module)");
;
;
;
;
;
const DYNAMIC_COLORS = [
    "#FF6B8B",
    "#4ECDC4",
    "#FFD166",
    "#06D6A0",
    "#118AB2",
    "#EF476F",
    "#7209B7",
    "#F3722C",
    "#577590",
    "#90BE6D",
    "#F94144",
    "#43AA8B",
    "#F8961E",
    "#5778A8",
    "#277DA1"
];
const getArtistColor = (id)=>{
    const colorIndex = id % DYNAMIC_COLORS.length;
    return DYNAMIC_COLORS[colorIndex];
};
const getColorFromText = (text)=>{
    let hash = 0;
    for(let i = 0; i < text.length; i++){
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % DYNAMIC_COLORS.length;
    return DYNAMIC_COLORS[index];
};
const ProductCard = ({ id, title, artist, collectionName, ranking, image, hrefLink = "#", cardType = "standard", onClick, dropdownItems, showDropdown = true })=>{
    console.log("🚨 ProductCard DEBUG:", {
        id,
        title,
        hasTitle: !!title,
        titleValue: title,
        cardType,
        allProps: {
            id,
            title,
            artist,
            ranking,
            image
        }
    });
    const imageUrl = image || "/images/default-podcast.jpg";
    const artistColor = getArtistColor(id);
    const defaultDropdownItems = [
        {
            label: "Add to My Podcasts",
            hasDivider: true
        },
        {
            label: "Go to Podcasts",
            hasDivider: true
        },
        {
            label: "Share podcast",
            hasDivider: true
        },
        {
            label: "Hide podcast"
        }
    ];
    const itemsToUse = dropdownItems || defaultDropdownItems;
    if (cardType === "image-only") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: hrefLink,
            className: "relative group cursor-pointer flex-shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: title,
                    width: 210,
                    height: 100,
                    className: "rounded-sm object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-3 left-0 right-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white text-center text-sm font-medium     px-2 py-1 rounded mx-2 group-hover:underline line-clamp-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/Products/ProductCard.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Products/ProductCard.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (cardType === "button") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-36 h-36 flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: hrefLink,
                className: "absolute inset-0 w-full h-full p-4 rounded-md    bg-black/20 hover:bg-black/30 transition-all    text-gray-400 font-light shadow-lg hover:shadow-xl   flex items-center justify-center text-center text-xs line-clamp-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/Products/ProductCard.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Products/ProductCard.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (cardType === "compact") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactCard} flex items-start gap-3 !rounded-lg`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-24 h-24 flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: imageUrl,
                        alt: title,
                        fill: true,
                        className: "object-cover",
                        sizes: "(max-width: 96px) 100vw, 96px"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Products/ProductCard.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content flex justify-between w-full p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col max-w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium line-clamp-1",
                                    style: {
                                        color: artistColor
                                    },
                                    children: artist || collectionName || "Unknown"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-sm font-medium line-clamp-1",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                ranking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 mt-7",
                                    children: [
                                        "#",
                                        ranking
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: itemsToUse,
                                fillColor: "#6A7282"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Products/ProductCard.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Products/ProductCard.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (cardType === "list") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group flex items-center gap-3 !rounded-lg hover:bg-black/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-24 h-24 flex-shrink-0 p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: imageUrl,
                            alt: title,
                            fill: true,
                            className: "object-cover rounded group-hover:brightness-50 transition duration-200",
                            sizes: "(max-width: 96px) 100vw, 96px"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 items-center justify-center hidden group-hover:flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "28",
                                height: "28",
                                viewBox: "0 0 11 12",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9.94687 5.03128L1.69688 0.153936C1.02656 -0.242158 0 0.142218 0 1.1219V10.8742C0 11.7532 0.953906 12.2828 1.69688 11.8422L9.94687 6.96722C10.6828 6.53362 10.6852 5.46487 9.94687 5.03128Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Products/ProductCard.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content flex justify-between w-full h-[100px] py-2 border-b border-b-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-sm font-medium line-clamp-1 hover:underline cursor-pointer",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium line-clamp-1",
                                    style: {
                                        color: artistColor
                                    },
                                    children: artist || collectionName || "Unknown"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                ranking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 mt-7",
                                    children: [
                                        "#",
                                        ranking
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/icons/play.svg",
                                    alt: "Play",
                                    width: 16,
                                    height: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    items: itemsToUse,
                                    fillColor: "#6A7282"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Products/ProductCard.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: hrefLink,
        className: "card-container flex-shrink-0 w-[190px] rounded-sm snap-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-square mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: title,
                    width: 190,
                    height: 190,
                    className: "rounded-sm object-cover",
                    sizes: "(max-width: 190px) 100vw, 190px"
                }, void 0, false, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Products/ProductCard.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ps-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                ranking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 text-sm",
                                    children: [
                                        "#",
                                        ranking
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "info min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white font-medium hover:underline text-sm line-clamp-1",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium line-clamp-1",
                                            style: {
                                                color: artistColor
                                            },
                                            children: artist || collectionName || "Unknown"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: itemsToUse,
                                fillColor: "#6A7282"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Products/ProductCard.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Products/ProductCard.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Products/ProductCard.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Products/ProductCard.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Products/ProductCard.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Products/ProductsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Products/ProductCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const ProductsList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ products, view, cardType = "standard", dropdownItems }, ref)=>{
    const baseClass = "products-list py-5 mx-4 px-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#7a7af0] scrollbar-track-transparent";
    const getViewClass = ()=>{
        switch(view){
            case "list":
                return "flex flex-col gap-4";
            case "grid":
                return "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 !gap-4";
            case "compact":
                return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4";
            case "scroll":
                return "flex gap-4 overflow-x-auto snap-x snap-mandatory";
            default:
                return "flex gap-4";
        }
    };
    const viewClass = getViewClass();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${baseClass} ${viewClass}`,
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: product.id,
                title: product.title,
                collectionName: product.collectionName,
                artist: product.artist,
                ranking: product.ranking,
                image: product.image,
                hrefLink: product.hrefLink,
                cardType: cardType,
                dropdownItems: dropdownItems
            }, product.id, false, {
                fileName: "[project]/app/components/Products/ProductsList.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/app/components/Products/ProductsList.tsx",
        lineNumber: 43,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ProductsList;
ProductsList.displayName = "ProductsList";
const __TURBOPACK__default__export__ = ProductsList;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductsList$forwardRef");
__turbopack_context__.k.register(_c1, "ProductsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Products/ProductsContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$NavigationArrows$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/NavigationArrows.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Products/ProductsList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ProductsContainer = ({ title, description, products, containerType = "standard", goToLink = "/trending", goToLabel = "Go to Trending Podcasts", availableViews = containerType === "special" ? [
    "grid",
    "scroll",
    "list",
    "compact"
] : [
    "scroll",
    "grid"
], customDropdownItems, cardDropdownItems, cardTypeToShow = "standard" })=>{
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(availableViews[0]);
    const [dropdownKey, setDropdownKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const getCardTypeForView = (view)=>{
        if (view === "compact") {
            return "compact";
        } else if (view === "list") {
            return "list";
        }
        return cardTypeToShow;
    };
    const currentCardType = getCardTypeForView(currentView);
    const dropdownItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductsContainer.useMemo[dropdownItems]": ()=>{
            if (customDropdownItems) {
                return customDropdownItems;
            }
            const items = [];
            if (containerType === "standard") {
                if (availableViews.includes("scroll") && availableViews.includes("grid")) {
                    items.push({
                        label: currentView === "scroll" ? "Switch to Grid View" : "Switch to Scroll View",
                        action: {
                            "ProductsContainer.useMemo[dropdownItems]": ()=>{
                                const newView = currentView === "scroll" ? "grid" : "scroll";
                                console.log(`🚀 Changing view to: ${newView}`);
                                setCurrentView(newView);
                                setDropdownKey({
                                    "ProductsContainer.useMemo[dropdownItems]": (prev)=>prev + 1
                                }["ProductsContainer.useMemo[dropdownItems]"]);
                            }
                        }["ProductsContainer.useMemo[dropdownItems]"],
                        hasDivider: true
                    });
                }
                items.push({
                    label: goToLabel,
                    href: goToLink
                });
            } else if (containerType === "special") {
                if (availableViews.includes("grid") && availableViews.includes("scroll")) {
                    items.push({
                        label: currentView === "grid" ? "Switch to Scroll View" : "Switch to Grid View",
                        action: {
                            "ProductsContainer.useMemo[dropdownItems]": ()=>{
                                const newView = currentView === "grid" ? "scroll" : "grid";
                                console.log(`🚀 Changing view to: ${newView}`);
                                setCurrentView(newView);
                                setDropdownKey({
                                    "ProductsContainer.useMemo[dropdownItems]": (prev)=>prev + 1
                                }["ProductsContainer.useMemo[dropdownItems]"]);
                            }
                        }["ProductsContainer.useMemo[dropdownItems]"]
                    });
                }
                items.push({
                    label: "List View",
                    action: {
                        "ProductsContainer.useMemo[dropdownItems]": ()=>{
                            console.log(`🚀 ${title} - Switching to LIST view`);
                            setCurrentView("list");
                            setDropdownKey({
                                "ProductsContainer.useMemo[dropdownItems]": (prev)=>prev + 1
                            }["ProductsContainer.useMemo[dropdownItems]"]);
                        }
                    }["ProductsContainer.useMemo[dropdownItems]"]
                });
                items.push({
                    label: "Compact View",
                    action: {
                        "ProductsContainer.useMemo[dropdownItems]": ()=>{
                            console.log(`🚀 ${title} - Switching to COMPACT view`);
                            setCurrentView("compact");
                            setDropdownKey({
                                "ProductsContainer.useMemo[dropdownItems]": (prev)=>prev + 1
                            }["ProductsContainer.useMemo[dropdownItems]"]);
                        }
                    }["ProductsContainer.useMemo[dropdownItems]"],
                    hasDivider: true
                });
                items.push({
                    label: goToLabel,
                    href: goToLink
                });
            }
            return items;
        }
    }["ProductsContainer.useMemo[dropdownItems]"], [
        currentView,
        containerType,
        availableViews,
        goToLink,
        goToLabel,
        customDropdownItems,
        title
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mt-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex ps-4 pe-2 items-center justify-between border-b border-b-gray-700 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "top-section py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-white font-semibold hover:underline",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "description text-sm font-semiboold text-gray-500",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "buttons flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$NavigationArrows$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "scroll",
                                scrollRef: scrollRef,
                                scrollAmount: 250
                            }, void 0, false, {
                                fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: dropdownItems,
                                fillColor: "white"
                            }, dropdownKey, false, {
                                fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                products: products,
                view: currentView,
                ref: scrollRef,
                cardType: currentCardType,
                dropdownItems: cardDropdownItems
            }, void 0, false, {
                fileName: "[project]/app/components/Products/ProductsContainer.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Products/ProductsContainer.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductsContainer, "DYADSnrrqUEzpjUU63hzdfMWSd8=");
_c = ProductsContainer;
const __TURBOPACK__default__export__ = ProductsContainer;
var _c;
__turbopack_context__.k.register(_c, "ProductsContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Header/Searchbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Searchbar.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Searchbar = ({ initialTerm = "", onSearch })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTerm);
    const [isSearchPage, setIsSearchPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Searchbar.useEffect": ()=>{
            // التحقق من المسار الحالي عند تحميل المكون
            const pathname = window.location.pathname;
            setIsSearchPage(pathname === "/search");
            // إذا كان هناك initialTerm، عينه
            if (initialTerm) {
                setSearchTerm(initialTerm);
            }
        }
    }["Searchbar.useEffect"], [
        initialTerm
    ]);
    // تركيز تلقائي عند فتح صفحة البحث
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Searchbar.useEffect": ()=>{
            if (isSearchPage && inputRef.current) {
                setTimeout({
                    "Searchbar.useEffect": ()=>{
                        if (inputRef.current) {
                            inputRef.current.focus();
                            // وضع المؤشر في نهاية النص
                            if (searchTerm) {
                                inputRef.current.setSelectionRange(searchTerm.length, searchTerm.length);
                            }
                        }
                    }
                }["Searchbar.useEffect"], 100);
            }
        }
    }["Searchbar.useEffect"], [
        isSearchPage,
        searchTerm
    ]);
    const handleFocus = ()=>{
        if (!isSearchPage) {
            // إذا كنا في الصفحة الرئيسية، انقل إلى صفحة البحث
            if (searchTerm.trim()) {
                window.location.href = `/search?term=${encodeURIComponent(searchTerm.trim())}`;
            } else {
                window.location.href = "/search";
            }
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && searchTerm.trim()) {
            if (isSearchPage) {
                // إذا كنا في صفحة البحث، استخدم onSearch
                if (onSearch) {
                    onSearch(searchTerm);
                }
            } else {
                // إذا كنا في الصفحة الرئيسية، انتقل إلى صفحة البحث
                window.location.href = `/search?term=${encodeURIComponent(searchTerm.trim())}`;
            }
        }
    };
    const handleChange = (e)=>{
        const value = e.target.value;
        setSearchTerm(value);
    // إذا كان في صفحة البحث ونريد بحث في الوقت الحقيقي (اختياري)
    // if (isSearchPage && onSearch) {
    //   onSearch(value);
    // }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: inputRef,
            type: "text",
            value: searchTerm,
            onChange: handleChange,
            onFocus: handleFocus,
            onKeyPress: handleKeyPress,
            readOnly: !isSearchPage,
            className: "searchbar focus:placeholder-transparent   border w-full px-1 py-1 text-sm h-9 border-gray-600 rounded-xl text-center text-white focus:!bg-[#232432] focus:!border-[#7a7af0] focus:!outline-none",
            placeholder: "Search through over 70 million podcasts and episodes..."
        }, void 0, false, {
            fileName: "[project]/app/components/Header/Searchbar.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Header/Searchbar.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Searchbar, "5JtfdpkvXncXr4R7FFNssyXgqis=");
_c = Searchbar;
const __TURBOPACK__default__export__ = Searchbar;
var _c;
__turbopack_context__.k.register(_c, "Searchbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Buttons/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Button = ({ children, onClick, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `
        cursor-pointer
        px-4 self-start py-2 rounded-md !text-xs text-white transition-all duration-300
         bg-gradient-to-b from-[#40678c] to-[#2c5378]
        hover:brightness-120
        ${className ?? ""}
      `,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Buttons/Button.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Header/HeaderContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/HeaderContainer.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Searchbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header/Searchbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$NavigationArrows$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/NavigationArrows.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const HeaderContainer = ({ searchTerm = "", onSearch })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header w-full flex gap-2 justify-between items-center lg:py-2 !py-1 lg:px-1 px-3 lg:mt-1 mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/logo.svg",
                alt: "Logo",
                width: "45",
                height: "50",
                className: "lg:hidden block"
            }, void 0, false, {
                fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$NavigationArrows$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "history"
            }, void 0, false, {
                fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:w-9/12 md:w-8/12 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Searchbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    initialTerm: searchTerm,
                    onSearch: onSearch
                }, void 0, false, {
                    fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:flex gap-1 hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Sign up"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: [
                            {
                                label: "Settings",
                                href: "/settings",
                                hasDivider: true
                            },
                            {
                                label: "About Podabay",
                                href: "/about-podabay"
                            },
                            {
                                label: "What's News",
                                href: "/whats-news"
                            },
                            {
                                label: "Podcaster FAQ",
                                href: "/podcaster-faq"
                            },
                            {
                                label: "Privacy",
                                href: "/privacy"
                            },
                            {
                                label: "Terms",
                                href: "/terms",
                                hasDivider: true
                            },
                            {
                                label: "Contact & Feedback",
                                href: "/contact-feedback"
                            },
                            {
                                label: "Clear Data..",
                                href: "/clear-data"
                            }
                        ],
                        fillColor: 'white'
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header/HeaderContainer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header/HeaderContainer.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeaderContainer;
const __TURBOPACK__default__export__ = HeaderContainer;
var _c;
__turbopack_context__.k.register(_c, "HeaderContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data/first-container-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"title\":\"The Daily\",\"ranking\":1,\"artist\":\"The New York Times\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy83ZjJmNGMwNS05YzJmLTRkZWItODJiNy1iNTM4MDYyYmMyMmQvNzM1NDliZjEtOTRiMy00MGZmLThhZWItYjQwNTQ4NDhlYzFiLzMwMDB4MzAwMC90aGUtZGFpbHktYWxidW0tYXJ0LW9yaWdpbmFsLmpwZz9haWQ9cnNzX2ZlZWQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMTEvdjQvY2EvMzkvYjIvY2EzOWIyY2YtOWYzMy0xNWQ0LTgyNGEtZmZmNDYwY2MzODM5L216YV8xMjY2ODcxMzgzMzQ3ODAzMDU5Mi5qcGcvNjAweDYwMGJiLmpwZyJ9.lSp33sWZn9SOT7mh-oNa4NpWXbF0g2EVcRZnXNzbyow.jpg?width=400&height=400\"},{\"id\":2,\"title\":\"The Joe Rogan Experience\",\"ranking\":2,\"artist\":\"Joe Rogan\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvOGU1YmNlYmMtY2ExNi0xMWVlLTg5ZjAtMGZhMGI5YmRmYzdjL2ltYWdlL2MxMWI3NjczOWJiNmRlMzg1NjMzZDViYzRmZjA4NDViLmpwZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvODkvNGYvOTQvODk0Zjk0ZjItM2Q2YS1lMzRkLWVjNGYtMWM2ZGJmMjM5NTExL216YV8xMDQwOTU4NDUxMjg0MjMwNDY5NS5qcGcvNjAweDYwMGJiLmpwZyJ9.bLPfX6DBHZZ54X6wrma-z3LIu4h2CB5qFbdfjLtQgBM.jpg?width=400&height=400\"},{\"id\":3,\"title\":\"Crime Junkie\",\"ranking\":3,\"artist\":\"Audiochuck\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hMWE4N2I2Ny0yODY1LTQyMzQtYTA4Ny1iMzQyYWEzMGMzNTgvYWU0MmQ1MWItZGY5OS00YjE5LWJiM2YtMDlmMjU1OThiY2RkLzMwMDB4MzAwMC9jcmltZWp1bmtpZS1sb2dvLXJlZ2lzdGVyZWQuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czEyNi92NC84Yy8zNS8wNC84YzM1MDQzMC0yZmJmLTk4ZDAtMGEyNS0wMGI3NjU1MGZmZWIvbXphXzEzNDQ1MjA0MTUxMjIxODg4MDg2LmpwZy82MDB4NjAwYmIuanBnIn0.XNqRzKycNIyrPF-cCTMj6zFHxfeo9K6LXXb1H3PBT7g.jpg?width=400&height=400\"},{\"id\":4,\"title\":\"Dateline NBC\",\"ranking\":4,\"artist\":\"NBC News\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hZTE4M2ZlMi1jNjM0LTQ1OGEtOTNkZC01NzcwZjA2NzZmNzcvYjAxMDgwOWEtYzMxMS00MjVjLTkzMjUtMjIzNWMyMWU2OTM5LzMwMDB4MzAwMC83ZjA0MjFmNzNkMmNlMGNhMjcyZTM5MmM5MzdlMWEzMDEyODVkNDRmZTdjNmQ3MTBjMjg0NGQ4MGMwYzdiYjFhM2U5ODM4YWMwM2VlODBmYzY0MTk5ODkxY2I5ZDVjNmU5ZDQ0OTBmNTA4MWZiMzc5YzBhYjIzMTdmMmNhZGYxNC5qcGVnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czExNS92NC84Yy8wMC83YS84YzAwN2E0Mi1lNTUwLTAyMTQtZDRjYi1iNTljZDdlZGYxOTQvbXphXzUzMDU2NjQwODM5MzU2NzQ0NzIuanBlZy82MDB4NjAwYmIuanBnIn0.Z9L_sGM47rNeR3UMsnLSGy2dqch27wgE9BaoWbK6YFE.jpg?width=400&height=400\"},{\"id\":5,\"title\":\"Rachel Maddow Presents Burn Order\",\"ranking\":5,\"artist\":\"Rachel Maddow, MS NOW\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9iNDViM2YzZi05YmMwLTRjZGYtODM3NS1kOTQ2MDU1ZTRjMTEvYjJjZjQ2NjItMzRjZi00NzRiLWExNzMtZDdiYTlkMjkwMmQxLzMwMDB4MzAwMC9tc25vdy1idXJub3JkZXItdXBkYXRlLTViMy01ZC1qcGcuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC9lYy80ZS9hZS9lYzRlYWU2ZS1lOTdiLTdmYjgtOTRiMi1iMzY0MTJkMGYwYjYvbXphXzkzMTIyNTIyOTU5NTAzNTc2MjAuanBnLzYwMHg2MDBiYi5qcGcifQ.JX9Dpm3KgfC412t_YYNaHzk38q9RDKz3uElXs3Pz9Tw.jpg?width=400&height=400\"},{\"id\":6,\"title\":\"Up First From NPR\",\"ranking\":6,\"artist\":\"NPR\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZGlhLm5wci5vcmcvYXNzZXRzL2ltZy8yMDIyLzA5LzIzL3VwLWZpcnN0X3RpbGVfbnByLW5ldHdvcmstMDFfc3EtOTU4MWNiNzc4OWEwZTlmNjkzZDQ1YjdkOWY4YTYzYzM3MDQyM2UyYS5qcGc_cz0xNDAwJmM9NjYmZj1qcGciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvYTYvMTkvNjIvYTYxOTYyYWQtY2VjZi00Nzk2LWE3NTItMmJiZGIyMTg3Yjg3L216YV84OTg0Nzc3NTg4NzE2ODE2ODIyLmpwZy82MDB4NjAwYmIuanBnIn0.HdLLuxInOy-piQ1p6WRFQ6tpqtpUUre3d63h7rXpnM4.jpg?width=400&height=400\"},{\"id\":7,\"title\":\"1537788786\",\"ranking\":7,\"artist\":\"Goalhanger\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvMDBjMGExMTgtMjQyNi0xMWVlLWIyNTgtNzNkMzMxZDAxMjNiL2ltYWdlLzkxNTEyYjU3M2MzYzU2OTI3ZmMxOWUwY2E3NGZkNjQ3LnBuZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvZjMvZTYvMmYvZjNlNjJmNDUtNDUxNi05MGI0LTEzYWItNTg0Nzg1ZTI4NTczL216YV8xMDM1MjQwOTU5OTM3OTY1NDE2NS5wbmcvNjAweDYwMGJiLmpwZyJ9.ZyeYJxu1-pJHHsnbRBur6cLlN6z4rFuUHVQnqwEjpQc.jpg?width=400&height=400\"},{\"id\":8,\"title\":\"The Megyn Kelly Show\",\"ranking\":8,\"artist\":\"SiriusXM\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy84NDM2ZTNjMS0yNDc5LTQ0NjYtYWM0OC1mYTU4MjU5OTYwYmIvNGQ0OWI1YTEtMzg3OC00MjY2LWJhODItMjA1NDI5YTYyNjk5LzMwMDB4MzAwMC9zeG0tY292ZXItbWVneW4ta2VsbHktc2hvdy1yMjAyNS0zMDAweDMwMDAtZmluYWwuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC8zZS85Zi9jMS8zZTlmYzEzYy04MDMwLWI1N2UtZjI5ZS0wZjE0ZGM4ZGIxMGQvbXphXzYwMjIxMzkzMDk0NDI3MjMzMy5qcGcvNjAweDYwMGJiLmpwZyJ9.Kjf1_oGPzrZ0hLR-E5fCoXu1dBNk-NlQDruKCNQIyCI.jpg?width=400&height=400\"},{\"id\":9,\"title\":\"Pardon My Take\",\"ranking\":9,\"artist\":\"Barstool Sports\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2NodW1sZXkuYmFyc3Rvb2xzcG9ydHMuY29tL3VuaW9uLzIwMjQvMDIvMjEvUE1ULURLLjk5NGU3NDc4LmpwZz9jcm9wPTMwMDAlM0EzMDAwJTJDc21hcnQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvMzUvNzQvNmEvMzU3NDZhMGMtNzY4Ny03ZGRlLWZmMDQtMzM4ZDkzZTc4MzAzL216YV8xMDM3NzA3ODU1NjAwOTIyMzU0Ni5qcGcvNjAweDYwMGJiLmpwZyJ9.MKZnDSk96lN6O9MZyU1xGWi8KgEf89RoDVVCt2bT5Og.jpg?width=400&height=400\"},{\"id\":10,\"title\":\"Pod Save America\",\"ranking\":10,\"artist\":\"Crooked Media\",\"image\":\"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ab/a3/aa/aba3aaca-9f10-0265-a2fb-0abcb3543c43/mza_5842517054339068824.jpg/600x600bb.jpg\"},{\"id\":11,\"title\":\"The Daily\",\"ranking\":1,\"artist\":\"The New York Times\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy83ZjJmNGMwNS05YzJmLTRkZWItODJiNy1iNTM4MDYyYmMyMmQvNzM1NDliZjEtOTRiMy00MGZmLThhZWItYjQwNTQ4NDhlYzFiLzMwMDB4MzAwMC90aGUtZGFpbHktYWxidW0tYXJ0LW9yaWdpbmFsLmpwZz9haWQ9cnNzX2ZlZWQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMTEvdjQvY2EvMzkvYjIvY2EzOWIyY2YtOWYzMy0xNWQ0LTgyNGEtZmZmNDYwY2MzODM5L216YV8xMjY2ODcxMzgzMzQ3ODAzMDU5Mi5qcGcvNjAweDYwMGJiLmpwZyJ9.lSp33sWZn9SOT7mh-oNa4NpWXbF0g2EVcRZnXNzbyow.jpg?width=400&height=400\"},{\"id\":12,\"title\":\"The Joe Rogan Experience\",\"ranking\":2,\"artist\":\"Joe Rogan\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvOGU1YmNlYmMtY2ExNi0xMWVlLTg5ZjAtMGZhMGI5YmRmYzdjL2ltYWdlL2MxMWI3NjczOWJiNmRlMzg1NjMzZDViYzRmZjA4NDViLmpwZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvODkvNGYvOTQvODk0Zjk0ZjItM2Q2YS1lMzRkLWVjNGYtMWM2ZGJmMjM5NTExL216YV8xMDQwOTU4NDUxMjg0MjMwNDY5NS5qcGcvNjAweDYwMGJiLmpwZyJ9.bLPfX6DBHZZ54X6wrma-z3LIu4h2CB5qFbdfjLtQgBM.jpg?width=400&height=400\"},{\"id\":13,\"title\":\"Crime Junkie\",\"ranking\":3,\"artist\":\"Audiochuck\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hMWE4N2I2Ny0yODY1LTQyMzQtYTA4Ny1iMzQyYWEzMGMzNTgvYWU0MmQ1MWItZGY5OS00YjE5LWJiM2YtMDlmMjU1OThiY2RkLzMwMDB4MzAwMC9jcmltZWp1bmtpZS1sb2dvLXJlZ2lzdGVyZWQuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czEyNi92NC84Yy8zNS8wNC84YzM1MDQzMC0yZmJmLTk4ZDAtMGEyNS0wMGI3NjU1MGZmZWIvbXphXzEzNDQ1MjA0MTUxMjIxODg4MDg2LmpwZy82MDB4NjAwYmIuanBnIn0.XNqRzKycNIyrPF-cCTMj6zFHxfeo9K6LXXb1H3PBT7g.jpg?width=400&height=400\"},{\"id\":14,\"title\":\"Dateline NBC\",\"ranking\":4,\"artist\":\"NBC News\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hZTE4M2ZlMi1jNjM0LTQ1OGEtOTNkZC01NzcwZjA2NzZmNzcvYjAxMDgwOWEtYzMxMS00MjVjLTkzMjUtMjIzNWMyMWU2OTM5LzMwMDB4MzAwMC83ZjA0MjFmNzNkMmNlMGNhMjcyZTM5MmM5MzdlMWEzMDEyODVkNDRmZTdjNmQ3MTBjMjg0NGQ4MGMwYzdiYjFhM2U5ODM4YWMwM2VlODBmYzY0MTk5ODkxY2I5ZDVjNmU5ZDQ0OTBmNTA4MWZiMzc5YzBhYjIzMTdmMmNhZGYxNC5qcGVnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czExNS92NC84Yy8wMC83YS84YzAwN2E0Mi1lNTUwLTAyMTQtZDRjYi1iNTljZDdlZGYxOTQvbXphXzUzMDU2NjQwODM5MzU2NzQ0NzIuanBlZy82MDB4NjAwYmIuanBnIn0.Z9L_sGM47rNeR3UMsnLSGy2dqch27wgE9BaoWbK6YFE.jpg?width=400&height=400\"},{\"id\":15,\"title\":\"Rachel Maddow Presents Burn Order\",\"ranking\":5,\"artist\":\"Rachel Maddow, MS NOW\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9iNDViM2YzZi05YmMwLTRjZGYtODM3NS1kOTQ2MDU1ZTRjMTEvYjJjZjQ2NjItMzRjZi00NzRiLWExNzMtZDdiYTlkMjkwMmQxLzMwMDB4MzAwMC9tc25vdy1idXJub3JkZXItdXBkYXRlLTViMy01ZC1qcGcuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC9lYy80ZS9hZS9lYzRlYWU2ZS1lOTdiLTdmYjgtOTRiMi1iMzY0MTJkMGYwYjYvbXphXzkzMTIyNTIyOTU5NTAzNTc2MjAuanBnLzYwMHg2MDBiYi5qcGcifQ.JX9Dpm3KgfC412t_YYNaHzk38q9RDKz3uElXs3Pz9Tw.jpg?width=400&height=400\"},{\"id\":16,\"title\":\"Up First From NPR\",\"ranking\":6,\"artist\":\"NPR\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZGlhLm5wci5vcmcvYXNzZXRzL2ltZy8yMDIyLzA5LzIzL3VwLWZpcnN0X3RpbGVfbnByLW5ldHdvcmstMDFfc3EtOTU4MWNiNzc4OWEwZTlmNjkzZDQ1YjdkOWY4YTYzYzM3MDQyM2UyYS5qcGc_cz0xNDAwJmM9NjYmZj1qcGciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvYTYvMTkvNjIvYTYxOTYyYWQtY2VjZi00Nzk2LWE3NTItMmJiZGIyMTg3Yjg3L216YV84OTg0Nzc3NTg4NzE2ODE2ODIyLmpwZy82MDB4NjAwYmIuanBnIn0.HdLLuxInOy-piQ1p6WRFQ6tpqtpUUre3d63h7rXpnM4.jpg?width=400&height=400\"},{\"id\":17,\"title\":\"1537788786\",\"ranking\":7,\"artist\":\"Goalhanger\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvMDBjMGExMTgtMjQyNi0xMWVlLWIyNTgtNzNkMzMxZDAxMjNiL2ltYWdlLzkxNTEyYjU3M2MzYzU2OTI3ZmMxOWUwY2E3NGZkNjQ3LnBuZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvZjMvZTYvMmYvZjNlNjJmNDUtNDUxNi05MGI0LTEzYWItNTg0Nzg1ZTI4NTczL216YV8xMDM1MjQwOTU5OTM3OTY1NDE2NS5wbmcvNjAweDYwMGJiLmpwZyJ9.ZyeYJxu1-pJHHsnbRBur6cLlN6z4rFuUHVQnqwEjpQc.jpg?width=400&height=400\"},{\"id\":18,\"title\":\"The Megyn Kelly Show\",\"ranking\":8,\"artist\":\"SiriusXM\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy84NDM2ZTNjMS0yNDc5LTQ0NjYtYWM0OC1mYTU4MjU5OTYwYmIvNGQ0OWI1YTEtMzg3OC00MjY2LWJhODItMjA1NDI5YTYyNjk5LzMwMDB4MzAwMC9zeG0tY292ZXItbWVneW4ta2VsbHktc2hvdy1yMjAyNS0zMDAweDMwMDAtZmluYWwuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC8zZS85Zi9jMS8zZTlmYzEzYy04MDMwLWI1N2UtZjI5ZS0wZjE0ZGM4ZGIxMGQvbXphXzYwMjIxMzkzMDk0NDI3MjMzMy5qcGcvNjAweDYwMGJiLmpwZyJ9.Kjf1_oGPzrZ0hLR-E5fCoXu1dBNk-NlQDruKCNQIyCI.jpg?width=400&height=400\"},{\"id\":19,\"title\":\"Pardon My Take\",\"ranking\":9,\"artist\":\"Barstool Sports\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2NodW1sZXkuYmFyc3Rvb2xzcG9ydHMuY29tL3VuaW9uLzIwMjQvMDIvMjEvUE1ULURLLjk5NGU3NDc4LmpwZz9jcm9wPTMwMDAlM0EzMDAwJTJDc21hcnQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvMzUvNzQvNmEvMzU3NDZhMGMtNzY4Ny03ZGRlLWZmMDQtMzM4ZDkzZTc4MzAzL216YV8xMDM3NzA3ODU1NjAwOTIyMzU0Ni5qcGcvNjAweDYwMGJiLmpwZyJ9.MKZnDSk96lN6O9MZyU1xGWi8KgEf89RoDVVCt2bT5Og.jpg?width=400&height=400\"},{\"id\":20,\"title\":\"Pod Save America\",\"ranking\":10,\"artist\":\"Crooked Media\",\"image\":\"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ab/a3/aa/aba3aaca-9f10-0265-a2fb-0abcb3543c43/mza_5842517054339068824.jpg/600x600bb.jpg\"},{\"id\":21,\"title\":\"The Daily\",\"ranking\":1,\"artist\":\"The New York Times\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy83ZjJmNGMwNS05YzJmLTRkZWItODJiNy1iNTM4MDYyYmMyMmQvNzM1NDliZjEtOTRiMy00MGZmLThhZWItYjQwNTQ4NDhlYzFiLzMwMDB4MzAwMC90aGUtZGFpbHktYWxidW0tYXJ0LW9yaWdpbmFsLmpwZz9haWQ9cnNzX2ZlZWQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMTEvdjQvY2EvMzkvYjIvY2EzOWIyY2YtOWYzMy0xNWQ0LTgyNGEtZmZmNDYwY2MzODM5L216YV8xMjY2ODcxMzgzMzQ3ODAzMDU5Mi5qcGcvNjAweDYwMGJiLmpwZyJ9.lSp33sWZn9SOT7mh-oNa4NpWXbF0g2EVcRZnXNzbyow.jpg?width=400&height=400\"},{\"id\":22,\"title\":\"The Joe Rogan Experience\",\"ranking\":2,\"artist\":\"Joe Rogan\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvOGU1YmNlYmMtY2ExNi0xMWVlLTg5ZjAtMGZhMGI5YmRmYzdjL2ltYWdlL2MxMWI3NjczOWJiNmRlMzg1NjMzZDViYzRmZjA4NDViLmpwZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvODkvNGYvOTQvODk0Zjk0ZjItM2Q2YS1lMzRkLWVjNGYtMWM2ZGJmMjM5NTExL216YV8xMDQwOTU4NDUxMjg0MjMwNDY5NS5qcGcvNjAweDYwMGJiLmpwZyJ9.bLPfX6DBHZZ54X6wrma-z3LIu4h2CB5qFbdfjLtQgBM.jpg?width=400&height=400\"},{\"id\":23,\"title\":\"Crime Junkie\",\"ranking\":3,\"artist\":\"Audiochuck\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hMWE4N2I2Ny0yODY1LTQyMzQtYTA4Ny1iMzQyYWEzMGMzNTgvYWU0MmQ1MWItZGY5OS00YjE5LWJiM2YtMDlmMjU1OThiY2RkLzMwMDB4MzAwMC9jcmltZWp1bmtpZS1sb2dvLXJlZ2lzdGVyZWQuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czEyNi92NC84Yy8zNS8wNC84YzM1MDQzMC0yZmJmLTk4ZDAtMGEyNS0wMGI3NjU1MGZmZWIvbXphXzEzNDQ1MjA0MTUxMjIxODg4MDg2LmpwZy82MDB4NjAwYmIuanBnIn0.XNqRzKycNIyrPF-cCTMj6zFHxfeo9K6LXXb1H3PBT7g.jpg?width=400&height=400\"},{\"id\":24,\"title\":\"Dateline NBC\",\"ranking\":4,\"artist\":\"NBC News\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hZTE4M2ZlMi1jNjM0LTQ1OGEtOTNkZC01NzcwZjA2NzZmNzcvYjAxMDgwOWEtYzMxMS00MjVjLTkzMjUtMjIzNWMyMWU2OTM5LzMwMDB4MzAwMC83ZjA0MjFmNzNkMmNlMGNhMjcyZTM5MmM5MzdlMWEzMDEyODVkNDRmZTdjNmQ3MTBjMjg0NGQ4MGMwYzdiYjFhM2U5ODM4YWMwM2VlODBmYzY0MTk5ODkxY2I5ZDVjNmU5ZDQ0OTBmNTA4MWZiMzc5YzBhYjIzMTdmMmNhZGYxNC5qcGVnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czExNS92NC84Yy8wMC83YS84YzAwN2E0Mi1lNTUwLTAyMTQtZDRjYi1iNTljZDdlZGYxOTQvbXphXzUzMDU2NjQwODM5MzU2NzQ0NzIuanBlZy82MDB4NjAwYmIuanBnIn0.Z9L_sGM47rNeR3UMsnLSGy2dqch27wgE9BaoWbK6YFE.jpg?width=400&height=400\"},{\"id\":25,\"title\":\"Rachel Maddow Presents Burn Order\",\"ranking\":5,\"artist\":\"Rachel Maddow, MS NOW\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9iNDViM2YzZi05YmMwLTRjZGYtODM3NS1kOTQ2MDU1ZTRjMTEvYjJjZjQ2NjItMzRjZi00NzRiLWExNzMtZDdiYTlkMjkwMmQxLzMwMDB4MzAwMC9tc25vdy1idXJub3JkZXItdXBkYXRlLTViMy01ZC1qcGcuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC9lYy80ZS9hZS9lYzRlYWU2ZS1lOTdiLTdmYjgtOTRiMi1iMzY0MTJkMGYwYjYvbXphXzkzMTIyNTIyOTU5NTAzNTc2MjAuanBnLzYwMHg2MDBiYi5qcGcifQ.JX9Dpm3KgfC412t_YYNaHzk38q9RDKz3uElXs3Pz9Tw.jpg?width=400&height=400\"},{\"id\":26,\"title\":\"Up First From NPR\",\"ranking\":6,\"artist\":\"NPR\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZGlhLm5wci5vcmcvYXNzZXRzL2ltZy8yMDIyLzA5LzIzL3VwLWZpcnN0X3RpbGVfbnByLW5ldHdvcmstMDFfc3EtOTU4MWNiNzc4OWEwZTlmNjkzZDQ1YjdkOWY4YTYzYzM3MDQyM2UyYS5qcGc_cz0xNDAwJmM9NjYmZj1qcGciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvYTYvMTkvNjIvYTYxOTYyYWQtY2VjZi00Nzk2LWE3NTItMmJiZGIyMTg3Yjg3L216YV84OTg0Nzc3NTg4NzE2ODE2ODIyLmpwZy82MDB4NjAwYmIuanBnIn0.HdLLuxInOy-piQ1p6WRFQ6tpqtpUUre3d63h7rXpnM4.jpg?width=400&height=400\"},{\"id\":27,\"title\":\"1537788786\",\"ranking\":7,\"artist\":\"Goalhanger\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvMDBjMGExMTgtMjQyNi0xMWVlLWIyNTgtNzNkMzMxZDAxMjNiL2ltYWdlLzkxNTEyYjU3M2MzYzU2OTI3ZmMxOWUwY2E3NGZkNjQ3LnBuZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvZjMvZTYvMmYvZjNlNjJmNDUtNDUxNi05MGI0LTEzYWItNTg0Nzg1ZTI4NTczL216YV8xMDM1MjQwOTU5OTM3OTY1NDE2NS5wbmcvNjAweDYwMGJiLmpwZyJ9.ZyeYJxu1-pJHHsnbRBur6cLlN6z4rFuUHVQnqwEjpQc.jpg?width=400&height=400\"},{\"id\":28,\"title\":\"The Megyn Kelly Show\",\"ranking\":8,\"artist\":\"SiriusXM\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy84NDM2ZTNjMS0yNDc5LTQ0NjYtYWM0OC1mYTU4MjU5OTYwYmIvNGQ0OWI1YTEtMzg3OC00MjY2LWJhODItMjA1NDI5YTYyNjk5LzMwMDB4MzAwMC9zeG0tY292ZXItbWVneW4ta2VsbHktc2hvdy1yMjAyNS0zMDAweDMwMDAtZmluYWwuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC8zZS85Zi9jMS8zZTlmYzEzYy04MDMwLWI1N2UtZjI5ZS0wZjE0ZGM4ZGIxMGQvbXphXzYwMjIxMzkzMDk0NDI3MjMzMy5qcGcvNjAweDYwMGJiLmpwZyJ9.Kjf1_oGPzrZ0hLR-E5fCoXu1dBNk-NlQDruKCNQIyCI.jpg?width=400&height=400\"},{\"id\":29,\"title\":\"Pardon My Take\",\"ranking\":9,\"artist\":\"Barstool Sports\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2NodW1sZXkuYmFyc3Rvb2xzcG9ydHMuY29tL3VuaW9uLzIwMjQvMDIvMjEvUE1ULURLLjk5NGU3NDc4LmpwZz9jcm9wPTMwMDAlM0EzMDAwJTJDc21hcnQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvMzUvNzQvNmEvMzU3NDZhMGMtNzY4Ny03ZGRlLWZmMDQtMzM4ZDkzZTc4MzAzL216YV8xMDM3NzA3ODU1NjAwOTIyMzU0Ni5qcGcvNjAweDYwMGJiLmpwZyJ9.MKZnDSk96lN6O9MZyU1xGWi8KgEf89RoDVVCt2bT5Og.jpg?width=400&height=400\"},{\"id\":30,\"title\":\"Pod Save America\",\"ranking\":10,\"artist\":\"Crooked Media\",\"image\":\"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ab/a3/aa/aba3aaca-9f10-0265-a2fb-0abcb3543c43/mza_5842517054339068824.jpg/600x600bb.jpg\"},{\"id\":31,\"title\":\"The Daily\",\"ranking\":1,\"artist\":\"The New York Times\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy83ZjJmNGMwNS05YzJmLTRkZWItODJiNy1iNTM4MDYyYmMyMmQvNzM1NDliZjEtOTRiMy00MGZmLThhZWItYjQwNTQ4NDhlYzFiLzMwMDB4MzAwMC90aGUtZGFpbHktYWxidW0tYXJ0LW9yaWdpbmFsLmpwZz9haWQ9cnNzX2ZlZWQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMTEvdjQvY2EvMzkvYjIvY2EzOWIyY2YtOWYzMy0xNWQ0LTgyNGEtZmZmNDYwY2MzODM5L216YV8xMjY2ODcxMzgzMzQ3ODAzMDU5Mi5qcGcvNjAweDYwMGJiLmpwZyJ9.lSp33sWZn9SOT7mh-oNa4NpWXbF0g2EVcRZnXNzbyow.jpg?width=400&height=400\"},{\"id\":32,\"title\":\"The Joe Rogan Experience\",\"ranking\":2,\"artist\":\"Joe Rogan\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvOGU1YmNlYmMtY2ExNi0xMWVlLTg5ZjAtMGZhMGI5YmRmYzdjL2ltYWdlL2MxMWI3NjczOWJiNmRlMzg1NjMzZDViYzRmZjA4NDViLmpwZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvODkvNGYvOTQvODk0Zjk0ZjItM2Q2YS1lMzRkLWVjNGYtMWM2ZGJmMjM5NTExL216YV8xMDQwOTU4NDUxMjg0MjMwNDY5NS5qcGcvNjAweDYwMGJiLmpwZyJ9.bLPfX6DBHZZ54X6wrma-z3LIu4h2CB5qFbdfjLtQgBM.jpg?width=400&height=400\"},{\"id\":33,\"title\":\"Crime Junkie\",\"ranking\":3,\"artist\":\"Audiochuck\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hMWE4N2I2Ny0yODY1LTQyMzQtYTA4Ny1iMzQyYWEzMGMzNTgvYWU0MmQ1MWItZGY5OS00YjE5LWJiM2YtMDlmMjU1OThiY2RkLzMwMDB4MzAwMC9jcmltZWp1bmtpZS1sb2dvLXJlZ2lzdGVyZWQuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czEyNi92NC84Yy8zNS8wNC84YzM1MDQzMC0yZmJmLTk4ZDAtMGEyNS0wMGI3NjU1MGZmZWIvbXphXzEzNDQ1MjA0MTUxMjIxODg4MDg2LmpwZy82MDB4NjAwYmIuanBnIn0.XNqRzKycNIyrPF-cCTMj6zFHxfeo9K6LXXb1H3PBT7g.jpg?width=400&height=400\"},{\"id\":34,\"title\":\"Dateline NBC\",\"ranking\":4,\"artist\":\"NBC News\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9hZTE4M2ZlMi1jNjM0LTQ1OGEtOTNkZC01NzcwZjA2NzZmNzcvYjAxMDgwOWEtYzMxMS00MjVjLTkzMjUtMjIzNWMyMWU2OTM5LzMwMDB4MzAwMC83ZjA0MjFmNzNkMmNlMGNhMjcyZTM5MmM5MzdlMWEzMDEyODVkNDRmZTdjNmQ3MTBjMjg0NGQ4MGMwYzdiYjFhM2U5ODM4YWMwM2VlODBmYzY0MTk5ODkxY2I5ZDVjNmU5ZDQ0OTBmNTA4MWZiMzc5YzBhYjIzMTdmMmNhZGYxNC5qcGVnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czExNS92NC84Yy8wMC83YS84YzAwN2E0Mi1lNTUwLTAyMTQtZDRjYi1iNTljZDdlZGYxOTQvbXphXzUzMDU2NjQwODM5MzU2NzQ0NzIuanBlZy82MDB4NjAwYmIuanBnIn0.Z9L_sGM47rNeR3UMsnLSGy2dqch27wgE9BaoWbK6YFE.jpg?width=400&height=400\"},{\"id\":35,\"title\":\"Rachel Maddow Presents Burn Order\",\"ranking\":5,\"artist\":\"Rachel Maddow, MS NOW\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy9iNDViM2YzZi05YmMwLTRjZGYtODM3NS1kOTQ2MDU1ZTRjMTEvYjJjZjQ2NjItMzRjZi00NzRiLWExNzMtZDdiYTlkMjkwMmQxLzMwMDB4MzAwMC9tc25vdy1idXJub3JkZXItdXBkYXRlLTViMy01ZC1qcGcuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC9lYy80ZS9hZS9lYzRlYWU2ZS1lOTdiLTdmYjgtOTRiMi1iMzY0MTJkMGYwYjYvbXphXzkzMTIyNTIyOTU5NTAzNTc2MjAuanBnLzYwMHg2MDBiYi5qcGcifQ.JX9Dpm3KgfC412t_YYNaHzk38q9RDKz3uElXs3Pz9Tw.jpg?width=400&height=400\"},{\"id\":36,\"title\":\"Up First From NPR\",\"ranking\":6,\"artist\":\"NPR\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZGlhLm5wci5vcmcvYXNzZXRzL2ltZy8yMDIyLzA5LzIzL3VwLWZpcnN0X3RpbGVfbnByLW5ldHdvcmstMDFfc3EtOTU4MWNiNzc4OWEwZTlmNjkzZDQ1YjdkOWY4YTYzYzM3MDQyM2UyYS5qcGc_cz0xNDAwJmM9NjYmZj1qcGciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvYTYvMTkvNjIvYTYxOTYyYWQtY2VjZi00Nzk2LWE3NTItMmJiZGIyMTg3Yjg3L216YV84OTg0Nzc3NTg4NzE2ODE2ODIyLmpwZy82MDB4NjAwYmIuanBnIn0.HdLLuxInOy-piQ1p6WRFQ6tpqtpUUre3d63h7rXpnM4.jpg?width=400&height=400\"},{\"id\":37,\"title\":\"1537788786\",\"ranking\":7,\"artist\":\"Goalhanger\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL21lZ2FwaG9uZS5pbWdpeC5uZXQvcG9kY2FzdHMvMDBjMGExMTgtMjQyNi0xMWVlLWIyNTgtNzNkMzMxZDAxMjNiL2ltYWdlLzkxNTEyYjU3M2MzYzU2OTI3ZmMxOWUwY2E3NGZkNjQ3LnBuZz9peGxpYj1yYWlscy00LjMuMSZtYXgtdz0zMDAwJm1heC1oPTMwMDAmZml0PWNyb3AmYXV0bz1mb3JtYXQsY29tcHJlc3MiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvZjMvZTYvMmYvZjNlNjJmNDUtNDUxNi05MGI0LTEzYWItNTg0Nzg1ZTI4NTczL216YV8xMDM1MjQwOTU5OTM3OTY1NDE2NS5wbmcvNjAweDYwMGJiLmpwZyJ9.ZyeYJxu1-pJHHsnbRBur6cLlN6z4rFuUHVQnqwEjpQc.jpg?width=400&height=400\"},{\"id\":38,\"title\":\"The Megyn Kelly Show\",\"ranking\":8,\"artist\":\"SiriusXM\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2ltYWdlLnNpbXBsZWNhc3RjZG4uY29tL2ltYWdlcy84NDM2ZTNjMS0yNDc5LTQ0NjYtYWM0OC1mYTU4MjU5OTYwYmIvNGQ0OWI1YTEtMzg3OC00MjY2LWJhODItMjA1NDI5YTYyNjk5LzMwMDB4MzAwMC9zeG0tY292ZXItbWVneW4ta2VsbHktc2hvdy1yMjAyNS0zMDAweDMwMDAtZmluYWwuanBnP2FpZD1yc3NfZmVlZCIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczEtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czIxMS92NC8zZS85Zi9jMS8zZTlmYzEzYy04MDMwLWI1N2UtZjI5ZS0wZjE0ZGM4ZGIxMGQvbXphXzYwMjIxMzkzMDk0NDI3MjMzMy5qcGcvNjAweDYwMGJiLmpwZyJ9.Kjf1_oGPzrZ0hLR-E5fCoXu1dBNk-NlQDruKCNQIyCI.jpg?width=400&height=400\"},{\"id\":39,\"title\":\"Pardon My Take\",\"ranking\":9,\"artist\":\"Barstool Sports\",\"image\":\"https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2NodW1sZXkuYmFyc3Rvb2xzcG9ydHMuY29tL3VuaW9uLzIwMjQvMDIvMjEvUE1ULURLLjk5NGU3NDc4LmpwZz9jcm9wPTMwMDAlM0EzMDAwJTJDc21hcnQiLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMyMjEvdjQvMzUvNzQvNmEvMzU3NDZhMGMtNzY4Ny03ZGRlLWZmMDQtMzM4ZDkzZTc4MzAzL216YV8xMDM3NzA3ODU1NjAwOTIyMzU0Ni5qcGcvNjAweDYwMGJiLmpwZyJ9.MKZnDSk96lN6O9MZyU1xGWi8KgEf89RoDVVCt2bT5Og.jpg?width=400&height=400\"},{\"id\":40,\"title\":\"Pod Save America\",\"ranking\":10,\"artist\":\"Crooked Media\",\"image\":\"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ab/a3/aa/aba3aaca-9f10-0265-a2fb-0abcb3543c43/mza_5842517054339068824.jpg/600x600bb.jpg\"}]"));}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Sidebar/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Products/ProductsContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$HeaderContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header/HeaderContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$first$2d$container$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/first-container-data.json (json)");
"use client";
;
;
;
;
;
function Home() {
    const productsData = [
        {
            id: 1,
            title: "Podcast One",
            artist: "artist A",
            ranking: 1,
            image: "/images/product.png"
        },
        {
            id: 2,
            title: "Podcast Two",
            artist: "artist B",
            ranking: 2,
            image: "/images/product.png"
        },
        {
            id: 3,
            title: "Podcast Three",
            artist: "artist C",
            ranking: 3,
            image: "/images/product.png"
        },
        {
            id: 4,
            title: "Podcast Four",
            artist: "artist D",
            ranking: 4,
            image: "/images/product.png"
        },
        {
            id: 5,
            title: "Podcast Five",
            artist: "artist E",
            ranking: 5,
            image: "/images/product.png"
        },
        {
            id: 6,
            title: "Podcast Six",
            artist: "artist F",
            ranking: 6,
            image: "/images/product.png"
        },
        {
            id: 7,
            title: "Podcast Seven",
            artist: "artist G",
            ranking: 7,
            image: "/images/product.png"
        },
        {
            id: 8,
            title: "Podcast Eight",
            artist: "artist H",
            ranking: 8,
            image: "/images/product.png"
        },
        {
            id: 9,
            title: "Podcast Nine",
            artist: "artist I",
            ranking: 9,
            image: "/images/product.png"
        },
        {
            id: 10,
            title: "Podcast Ten",
            artist: "artist J",
            ranking: 10,
            image: "/images/product.png"
        }
    ];
    const secondContainerData = [
        {
            id: 1,
            title: "All genres",
            hrefLink: "/",
            image: "/images/all-genres-1.png"
        },
        {
            id: 2,
            title: "Arts",
            hrefLink: "/",
            image: "/images/genre-2.png"
        },
        {
            id: 3,
            title: "Comedy",
            hrefLink: "/",
            image: "/images/genre-3.png"
        },
        {
            id: 4,
            title: "Education",
            hrefLink: "/",
            image: "/images/genre-4.png"
        },
        {
            id: 5,
            title: "Kids & Family",
            hrefLink: "/",
            image: "/images/genre-5.png"
        },
        {
            id: 6,
            title: "TV & Film",
            hrefLink: "/",
            image: "/images/genre-6.png"
        },
        {
            id: 7,
            title: "Music",
            hrefLink: "/",
            image: "/images/all-genres-1.png"
        },
        {
            id: 8,
            title: "Religion and Spirituality",
            hrefLink: "/",
            image: "/images/genre-5.png"
        },
        {
            id: 9,
            title: "Technology",
            hrefLink: "/",
            image: "/images/genre-4.png"
        },
        {
            id: 10,
            title: "Busiens",
            hrefLink: "/",
            image: "/images/genre-3.png"
        },
        {
            id: 6,
            title: "TV & Film",
            hrefLink: "/",
            image: "/images/genre-2.png"
        },
        {
            id: 7,
            title: "Music",
            hrefLink: "/",
            image: "/images/all-genres-1.png"
        }
    ];
    const thidrContainerData = [
        {
            id: 1,
            title: "Your Podcast Here",
            hrefLink: "/"
        },
        {
            id: 2,
            title: "Your Podcast Here",
            hrefLink: "/"
        },
        {
            id: 3,
            title: "Your Podcast Here",
            hrefLink: "/"
        },
        {
            id: 4,
            title: "Your Podcast Here",
            hrefLink: "/"
        },
        {
            id: 5,
            title: "Your Podcast Here",
            hrefLink: "/"
        },
        {
            id: 6,
            title: "Your Podcast Here",
            hrefLink: "/"
        },
        {
            id: 7,
            title: "Your Podcast Here",
            hrefLink: "/"
        },
        {
            id: 8,
            title: "Your Podcast Here",
            hrefLink: "/"
        }
    ];
    const fourthContainerCustomDropdown = [
        {
            label: "Play episode"
        },
        {
            label: "Add to my queue",
            hasDivider: true
        },
        {
            label: "Go to episode"
        },
        {
            label: "Go to podcast",
            hasDivider: true
        },
        {
            label: "Download file",
            hasDivider: true
        },
        {
            label: "Hide podcast"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content lg:w-[83%] lg:ml-[16.8%] w-full ml-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$HeaderContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Trending podcasts in all genre",
                        description: "The most popular podcasts overall  now. Last updated an hour ago.",
                        products: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$first$2d$container$2d$data$2e$json__$28$json$29$__["default"],
                        containerType: "standard",
                        goToLink: "/trending",
                        goToLabel: "Go to Trending Podcasts",
                        cardTypeToShow: "standard"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Browse by genre",
                        description: "The most popular podcasts and episodes now categorized by genre. Last updated an hour ago.",
                        products: secondContainerData,
                        containerType: "standard",
                        goToLink: "/recommended",
                        goToLabel: "Go to browse by genre",
                        cardTypeToShow: "image-only"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Promoted Podcasts",
                        description: "These podcasts are promoted by podcasters, listeners, and the Podbay team.",
                        products: thidrContainerData,
                        containerType: "standard",
                        goToLink: "/new-releases",
                        goToLabel: "Browse New Releases",
                        cardTypeToShow: "button"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Products$2f$ProductsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Trending episodes in all genres",
                        description: "The most popular podcast episodes overall  now. Last updated an hour ago.",
                        products: productsData,
                        containerType: "special",
                        availableViews: [
                            "grid",
                            "scroll",
                            "list",
                            "compact"
                        ],
                        cardTypeToShow: "standard",
                        cardDropdownItems: fourthContainerCustomDropdown
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_a02a1bab._.js.map