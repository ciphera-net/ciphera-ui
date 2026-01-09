"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Footer: () => Footer,
  Header: () => Header,
  ThemeToggle: () => ThemeToggle,
  UserMenu: () => UserMenu
});
module.exports = __toCommonJS(index_exports);

// src/components/Header.tsx
var import_react3 = require("react");

// src/components/ThemeToggle.tsx
var import_next_themes = require("next-themes");
var import_react = require("react");
var import_react_icons = require("@radix-ui/react-icons");
var import_jsx_runtime = require("react/jsx-runtime");
function ThemeToggle() {
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const { theme, setTheme } = (0, import_next_themes.useTheme)();
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-9 h-9 rounded-lg border border-neutral-200/50 bg-white/50" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      className: "relative w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50",
      "aria-label": "Toggle theme",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_icons.SunIcon, { className: "h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-neutral-500" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_icons.MoonIcon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-neutral-400" })
      ]
    }
  );
}

// src/components/UserMenu.tsx
var import_react2 = require("react");
var import_framer_motion = require("framer-motion");
var import_react_icons2 = require("@radix-ui/react-icons");
var import_jsx_runtime2 = require("react/jsx-runtime");
function UserMenu({ auth, LinkComponent: Link }) {
  var _a;
  const { user, loading, logout } = auth;
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const menuRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "h-9 w-9 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-800" });
  }
  if (user) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", ref: menuRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "flex items-center gap-2 rounded-full border border-neutral-200 bg-white p-1 pl-2 pr-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_icons2.PersonIcon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "hidden sm:block max-w-[100px] truncate", children: (_a = user.email) == null ? void 0 : _a.split("@")[0] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_icons2.ChevronDownIcon, { className: `h-4 w-4 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_framer_motion.AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: 10, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 10, scale: 0.95 },
          transition: { duration: 0.1 },
          className: "absolute right-0 top-full mt-2 w-56 origin-top-right divide-y divide-neutral-100 rounded-xl border border-neutral-200 bg-white shadow-xl ring-1 ring-black/5 focus:outline-none dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "px-1 py-1", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "px-3 py-2 text-xs text-neutral-500 dark:text-neutral-400", children: [
              "Signed in as ",
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "font-medium text-neutral-900 dark:text-white truncate block", children: user.email })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "px-1 py-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                Link,
                {
                  href: "/dashboard",
                  onClick: () => setIsOpen(false),
                  className: "group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_icons2.DashboardIcon, { className: "h-4 w-4 text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white" }),
                    "Dashboard"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                Link,
                {
                  href: "/settings",
                  onClick: () => setIsOpen(false),
                  className: "group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_icons2.GearIcon, { className: "h-4 w-4 text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white" }),
                    "Settings"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "px-1 py-1", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                onClick: () => {
                  setIsOpen(false);
                  logout();
                },
                className: "group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_icons2.ExitIcon, { className: "h-4 w-4 opacity-70" }),
                  "Sign Out"
                ]
              }
            ) })
          ]
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Link,
      {
        href: "/login",
        className: "text-sm font-medium text-neutral-600 hover:text-neutral-900 px-4 py-2 rounded-xl hover:bg-neutral-100/50 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/50",
        children: "Sign in"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Link,
      {
        href: "/signup",
        className: "btn-primary text-sm px-5 py-2.5",
        children: "Sign up"
      }
    )
  ] });
}

// src/components/Header.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Header({
  auth,
  LinkComponent: Link,
  logoSrc = "/drop_icon_no_margins.png",
  appName = "Drop"
}) {
  const { user, loading } = auth;
  const [isVisible, setIsVisible] = (0, import_react3.useState)(true);
  const lastScrollY = (0, import_react3.useRef)(0);
  (0, import_react3.useEffect)(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex w-full max-w-6xl items-center justify-between rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 px-4 sm:px-8 py-3.5 shadow-xl shadow-neutral-500/10 dark:shadow-black/20 backdrop-blur-2xl transition-all duration-300 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/50 hover:shadow-2xl hover:shadow-neutral-500/15 dark:hover:shadow-black/30", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          Link,
          {
            href: "/",
            className: "flex items-center gap-3 group relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  src: logoSrc,
                  alt: `${appName} Logo`,
                  className: "w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-brand-orange transition-colors duration-300", children: appName })
            ]
          }
        ),
        !loading && !user && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "hidden md:flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            Link,
            {
              href: "/about",
              className: "px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200",
              children: [
                "Why ",
                appName
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            Link,
            {
              href: "/faq",
              className: "px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200",
              children: "FAQ"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            Link,
            {
              href: "/security",
              className: "px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200",
              children: "Security"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ThemeToggle, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UserMenu, { auth, LinkComponent: Link })
        ] })
      ] })
    }
  );
}

// src/components/Footer.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Footer({
  LinkComponent: Link,
  onFeedbackClick,
  appName = "Ciphera Drop",
  year = (/* @__PURE__ */ new Date()).getFullYear()
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("footer", { className: "w-full py-8 mt-auto border-t border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: [
      "\xA9 ",
      year,
      " ",
      appName,
      ". All rights reserved."
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("nav", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Link,
        {
          href: "/about",
          className: "text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors",
          children: "Why Drop"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Link,
        {
          href: "/faq",
          className: "text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors",
          children: "FAQ"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Link,
        {
          href: "/security",
          className: "text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors",
          children: "Security"
        }
      ),
      onFeedbackClick && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "button",
        {
          onClick: onFeedbackClick,
          className: "text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors",
          children: "Feedback"
        }
      )
    ] })
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Footer,
  Header,
  ThemeToggle,
  UserMenu
});
//# sourceMappingURL=index.js.map