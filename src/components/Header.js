import React, { useState, useContext, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LanguageContext } from "../LanguageContext";
import { API_BASE } from "../config";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaMountainSun } from "react-icons/fa6";
import { FaUserShield, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";



const menuLinks = [
  {
    labelUk: "Головна",
    labelEn: "Home",
    path: "/",
    subLinks: [],
  },
  {
    labelUk: "Про регіон",
    labelEn: "About",
    path: "/about",
    subLinks: [
      { path: "/summary", labelUk: "Огляд", labelEn: "Summary" },
      { path: "/advantages", labelUk: "Переваги", labelEn: "Advantages" },
      {
        path: "/infrastructure",
        labelUk: "Інфраструктура",
        labelEn: "Infrastructure",
      },
      { path: "/tourism", labelUk: "Туризм", labelEn: "Tourism" },
      { path: "/education", labelUk: "Освіта", labelEn: "Education" },
    ],
  },
  {
    labelUk: "Економіка",
    labelEn: "Economy",
    path: "/economy",
    subLinks: [
      { path: "/industry", labelUk: "Промисловість", labelEn: "Industry" },
      {
        path: "/agriculture",
        labelUk: "Сільське господарство",
        labelEn: "Agriculture",
      },
      { path: "/minerals", labelUk: "Корисні копалини", labelEn: "Minerals" },
      { path: "/energy", labelUk: "Енергетика", labelEn: "Energy" },
    ],
  },
  {
    labelUk: "Інвестиції",
    labelEn: "Investment",
    path: "/investment",
    subLinks: [
      {
        path: "/opportunities",
        labelUk: "Можливості",
        labelEn: "Opportunities",
      },
      { path: "/catalog", labelUk: "Каталог", labelEn: "Catalog" },
      {
        path: "/tasting-halls",
        labelUk: "Дегустаційні зали",
        labelEn: "Tasting Halls",
      },
      { path: "/projects", labelUk: "Проєкти", labelEn: "Projects" },
      { path: "/taxation", labelUk: "Оподаткування", labelEn: "Taxation" },
      {
        path: "/parks",
        labelUk: "Індустріальні парки",
        labelEn: "Industrial Parks",
      },
      {
        path: "/relocated-enterprises",
        labelUk: "Переміщені підприємства",
        labelEn: "Relocated Enterprises",
      },
      {
        labelUk: "ІТ-сектор",
        labelEn: "IT Sector",
        path: "/it",
        subLinks: [],
      },
    ],
  },
  {
    labelUk: "Центр 4.5.0",
    labelEn: "Recovery Center",
    external: true,
    url: "https://450recovery.com.ua",
    subLinks: [],
  },
  {
    labelUk: "Контакти",
    labelEn: "Contacts",
    path: "/contacts",
    subLinks: [],
  },
  {
    labelUk: "Презентація",
    labelEn: "Presentation",
    path: "/presentation",
    subLinks: [],
  },
];

const LanguageSwitcher = ({ language, toggleLanguage, user, logout }) => (
  <div className="hidden lg:flex items-center space-x-3">
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
      title={language === "uk" ? "Switch to English" : "Перемкнути на Українську"}
    >
      {language === "uk" ? (
        <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm shadow-sm pointer-events-none">
          <rect width="20" height="7.5" fill="#0057B7"/>
          <rect y="7.5" width="20" height="7.5" fill="#FFD700"/>
        </svg>
      ) : (
        <svg width="20" height="15" viewBox="0 0 60 30" className="rounded-sm shadow-sm pointer-events-none">
          <rect width="60" height="30" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="inset(0)"/>
          <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      )}
      <span className="text-xs font-bold text-gray-200 pointer-events-none uppercase tracking-widest">
        {language === "uk" ? "UK" : "EN"}
      </span>
    </motion.button>

    {user ? (
      <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl">
        <motion.a
          href={`${API_BASE}/admin`}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="p-2 text-amber-400 hover:text-amber-300 transition-colors"
          title="CMS"
        >
          <FaUserShield size={18} />
        </motion.a>
        <motion.button
          onClick={logout}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="p-2 text-red-500 hover:text-red-400 transition-colors border-l border-white/5"
          title="Logout"
        >
          <FaSignOutAlt size={18} />
        </motion.button>
      </div>
    ) : (
      <motion.a
        href={`${API_BASE}/admin/`}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl hover:bg-blue-600/30 transition-all border border-blue-500/20 shadow-lg shadow-blue-500/5 group"
        title="Admin Panel"
      >
        <FaSignInAlt size={18} className="group-hover:translate-x-0.5 transition-transform" />
      </motion.a>
    )}
  </div>
);

function Header() {
  console.log("=== HEADER_VERSION_RADICAL_FIX_v2 ===");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const [dynamicPages, setDynamicPages] = useState([]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
      document.body.style.position = 'static';
      setMobileOpenIndex(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
      document.body.style.position = 'static';
    };
  }, [menuOpen]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/pages/?menu=true`);
        if (response.ok) {
          const data = await response.json();
          setDynamicPages(data || []);
        }
      } catch (error) {
        console.error("Failed to fetch dynamic pages:", error);
      }
    };
    fetchPages();
  }, []);

  const allLinks = React.useMemo(() => {
    const aboutPages = (dynamicPages || []).filter(p => p.menu_category === 'about').map(page => ({
      labelUk: page.title_uk,
      labelEn: page.title_en,
      path: `/pages/${page.slug}`,
      subLinks: []
    }));

    const economyPages = (dynamicPages || []).filter(p => p.menu_category === 'economy').map(page => ({
      labelUk: page.title_uk,
      labelEn: page.title_en,
      path: `/pages/${page.slug}`,
      subLinks: []
    }));

    const investmentPages = (dynamicPages || []).filter(p => p.menu_category === 'investment').map(page => ({
      labelUk: page.title_uk,
      labelEn: page.title_en,
      path: `/pages/${page.slug}`,
      subLinks: []
    }));

    return (menuLinks || []).map(link => {
      if (link.path === '/about') {
        const uniqueSubLinks = [...(link.subLinks || [])];
        aboutPages.forEach(p => {
          if (!uniqueSubLinks.some(s => s.path === p.path)) uniqueSubLinks.push(p);
        });
        return { ...link, subLinks: uniqueSubLinks };
      }
      if (link.path === '/economy') {
        const uniqueSubLinks = [...(link.subLinks || [])];
        economyPages.forEach(p => {
          if (!uniqueSubLinks.some(s => s.path === p.path)) uniqueSubLinks.push(p);
        });
        return { ...link, subLinks: uniqueSubLinks };
      }
      if (link.path === '/investment') {
        const uniqueSubLinks = [...(link.subLinks || [])];
        investmentPages.forEach(p => {
          if (!uniqueSubLinks.some(s => s.path === p.path)) uniqueSubLinks.push(p);
        });
        return { ...link, subLinks: uniqueSubLinks };
      }
      return link;
    });
  }, [dynamicPages]);

  return (
    <>
      <header className="fixed top-0 w-full bg-[#0f172a]/95 backdrop-blur-xl text-white shadow-2xl z-[1000] border-b border-white/5 h-16 sm:h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-3 group relative z-[1010]" onClick={() => setMenuOpen(false)}>
            <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:rotate-3">
              <FaMountainSun className="text-amber-400 text-xl sm:text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200 uppercase leading-none">
                Zakarpattia
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-blue-400 font-bold mt-1.5 opacity-80">
                Invest Hub
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1 px-8">
            {allLinks.map((link, index) => {
              const isActive = location.pathname === link.path || link.subLinks.some(s => location.pathname === s.path);

              return (
                <div
                  key={index}
                  className="relative group/nav"
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className={`px-4 py-2 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "text-blue-400 bg-blue-500/5"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => {
                      if (link.external) window.open(link.url, "_blank");
                      else if (link.subLinks.length > 0) setDropdownOpen(dropdownOpen === index ? null : index);
                      else navigate(link.path);
                    }}
                  >
                    {language === "uk" ? link.labelUk : link.labelEn}
                    {link.subLinks.length > 0 && (
                      <motion.span 
                        animate={{ rotate: dropdownOpen === index ? 180 : 0 }}
                        className="text-[10px] opacity-40 group-hover/nav:opacity-100 transition-opacity"
                      >
                        ▼
                      </motion.span>
                    )}
                  </button>

                  <AnimatePresence>
                    {dropdownOpen === index && link.subLinks.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-3xl p-2.5 z-[1020] ring-1 ring-black/20"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {link.subLinks.map((subLink, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subLink.path}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                  isActive 
                                    ? "bg-blue-600/20 text-blue-400 shadow-inner" 
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`
                              }
                              onClick={() => setDropdownOpen(null)}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full transition-all ${location.pathname === subLink.path ? 'bg-blue-500 scale-125' : 'bg-white/10'}`} />
                              {language === "uk" ? subLink.labelUk : subLink.labelEn}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* ActionsArea */}
          <div className="flex items-center gap-2 sm:gap-4 relative z-[1010]">
            <LanguageSwitcher 
              language={language} 
              toggleLanguage={toggleLanguage} 
              user={user} 
              logout={logout} 
            />

            <button
              className="lg:hidden p-3.5 text-white hover:bg-blue-600/20 rounded-2xl transition-all active:scale-90 bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shadow-xl shadow-blue-900/10"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <HiMenu size={26} className="text-blue-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[2000] lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#020617] z-[2100] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)] lg:hidden h-full"
          >
            {/* Header in Menu */}
            <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[#020617] shrink-0 h-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30">
                  <FaMountainSun className="text-white text-xl" />
                </div>
                <span className="font-black uppercase tracking-tight text-white text-lg">Zakarpattia</span>
              </div>
              <button
                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all active:scale-90 border border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                <HiX size={28} />
              </button>
            </div>

            {/* Content Scroller */}
            <div className="flex-grow overflow-y-auto px-6 py-8 space-y-4 custom-scrollbar">
              {allLinks.map((link, index) => {
                const hasSub = link.subLinks && link.subLinks.length > 0;
                const isOpen = mobileOpenIndex === index;
                
                return (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() => {
                        if (hasSub) setMobileOpenIndex(isOpen ? null : index);
                        else {
                          if (link.external) window.open(link.url, "_blank");
                          else navigate(link.path);
                          setMenuOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl text-lg font-black transition-all duration-300 ${
                        isOpen 
                          ? "bg-blue-600 text-white shadow-xl shadow-blue-500/40" 
                          : "bg-white/5 text-gray-100 border border-white/5 hover:bg-white/10"
                      }`}
                    >
                      <span className="tracking-tight">{language === "uk" ? link.labelUk : link.labelEn}</span>
                      {hasSub && (
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className={isOpen ? "text-white" : "text-blue-500"}
                        >
                          ▼
                        </motion.span>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && hasSub && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden space-y-1.5 mt-2 pl-2"
                        >
                          {link.subLinks.map((subLink, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subLink.path}
                              className={({ isActive }) =>
                                `block px-8 py-4 rounded-xl text-base font-bold transition-all border-l-4 ${
                                  isActive 
                                    ? "bg-blue-600/20 text-blue-400 border-blue-500 shadow-inner" 
                                    : "text-gray-400 border-white/5 hover:text-white hover:bg-white/5"
                                }`
                              }
                              onClick={() => setMenuOpen(false)}
                            >
                              {language === "uk" ? subLink.labelUk : subLink.labelEn}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Footer in Menu */}
            <div className="p-6 border-t border-white/5 bg-[#020617] space-y-4 shrink-0">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-between px-6 py-5 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 active:bg-white/20"
              >
                <div className="flex items-center gap-3">
                   <span className="text-xl">{language === "uk" ? "🇬🇧" : "🇺🇦"}</span>
                   <span className="font-bold text-gray-200 uppercase tracking-widest text-xs">
                    {language === "uk" ? "English" : "Українська"}
                  </span>
                </div>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Switch</span>
              </button>
              
              {user ? (
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`${API_BASE}/admin`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-5 bg-amber-500/10 text-amber-500 rounded-2xl font-black border border-amber-500/20 text-xs uppercase"
                  >
                    <FaUserShield /> CMS
                  </a>
                  <button
                    onClick={() => { logout(); setMenuOpen(false); }}
                    className="flex items-center justify-center gap-2 py-5 bg-red-500/10 text-red-500 rounded-2xl font-black border border-red-500/20 text-xs uppercase"
                  >
                    <FaSignOutAlt /> {language === "uk" ? "Вихід" : "Logout"}
                  </button>
                </div>
              ) : (
                <a
                  href={`${API_BASE}/admin/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-blue-600 text-white rounded-2xl text-sm font-black shadow-2xl shadow-blue-500/40 active:scale-95 transition-all uppercase tracking-widest"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaSignInAlt /> {language === "uk" ? "Адмін-панель" : "Admin Panel"}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
