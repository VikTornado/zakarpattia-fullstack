import React, { useState, useContext, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LanguageContext } from "../LanguageContext";
import { API_BASE } from "../config";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaMountainSun } from "react-icons/fa6";
import { FaUserShield, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);


  const { language, toggleLanguage } = useContext(LanguageContext);

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
        // {
        //   path: "/international",
        //   labelUk: "Міжнародна співпраця",
        //   labelEn: "International",
        // },
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

  const [dynamicPages, setDynamicPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/pages/?menu=true`);
        if (response.ok) {
          const data = await response.json();
          setDynamicPages(data);
        }
      } catch (error) {
        console.error("Failed to fetch dynamic pages:", error);
      }
    };
    fetchPages();
  }, []);

  
  const aboutPages = dynamicPages.filter(p => p.menu_category === 'about').map(page => ({
    labelUk: page.title_uk,
    labelEn: page.title_en,
    path: `/pages/${page.slug}`,
    subLinks: []
  }));

  const economyPages = dynamicPages.filter(p => p.menu_category === 'economy').map(page => ({
    labelUk: page.title_uk,
    labelEn: page.title_en,
    path: `/pages/${page.slug}`,
    subLinks: []
  }));

  const investmentPages = dynamicPages.filter(p => p.menu_category === 'investment').map(page => ({
    labelUk: page.title_uk,
    labelEn: page.title_en,
    path: `/pages/${page.slug}`,
    subLinks: []
  }));

  // Create a new array with updated subLinks to ensure immutability and correct rendering behavior
  const allLinks = menuLinks.map(link => {
    if (link.path === '/about') {
      return { ...link, subLinks: [...link.subLinks, ...aboutPages] };
    }
    if (link.path === '/economy') {
      return { ...link, subLinks: [...link.subLinks, ...economyPages] };
    }
    if (link.path === '/investment') {
      return { ...link, subLinks: [...link.subLinks, ...investmentPages] };
    }
    return link;
  });

  const LanguageSwitcher = () => (
    <div className="hidden lg:flex items-center space-x-3">
      {/* Single flag that toggles language */}
      <motion.button
        onClick={toggleLanguage}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
        title={language === "uk" ? "Switch to English" : "Перемкнути на Українську"}
      >
        {language === "uk" ? (
          // Show Ukrainian flag
          <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm">
            <rect width="20" height="7.5" fill="#0057B7"/>
            <rect y="7.5" width="20" height="7.5" fill="#FFD700"/>
          </svg>
        ) : (
          // Show UK flag
          <svg width="20" height="15" viewBox="0 0 60 30" className="rounded-sm">
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="inset(0)"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
          </svg>
        )}
        <span className="text-xs font-medium text-gray-300">
          {language === "uk" ? "UK" : "EN"}
        </span>
      </motion.button>

      {user ? (
        <>
          <motion.a
            href={`${API_BASE}/admin`}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="p-2 text-yellow-400 hover:text-yellow-300 transition"
            title="Admin Panel"
          >
            <FaUserShield size={20} />
          </motion.a>
          <motion.button
            onClick={logout}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="p-2 text-red-500 hover:text-red-400 transition"
            title="Logout"
          >
            <FaSignOutAlt size={20} />
          </motion.button>
        </>
      ) : (
        <motion.a
          href={`${API_BASE}/admin/`}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="p-2 text-green-500 hover:text-green-400 transition"
          title="Admin Login"
        >
          <FaSignInAlt size={20} />
        </motion.a>
      )}
    </div>

  );


  return (
    <header className="fixed top-0 w-full glass-dark text-white shadow-2xl z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center transition-all">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
            <FaMountainSun size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 uppercase">
              Zakarpattia
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-semibold leading-none">
              Invest Hub
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1 px-8">
          {allLinks.map((link, index) => {
            const isSubActive = link.subLinks.some((sub) =>
              location.pathname.startsWith(sub.path)
            );
            const isActive = location.pathname === link.path || isSubActive;

            return (
              <div
                key={index}
                className="relative flex items-center"
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => {
                    if (link.external) {
                      window.open(link.url, "_blank");
                    } else if (link.subLinks.length > 0) {
                      setDropdownOpen((prev) => (prev === index ? null : index));
                    } else {
                      navigate(link.path);
                    }
                  }}
                >
                  {language === "uk" ? link.labelUk : link.labelEn}
                  {link.subLinks.length > 0 && (
                    <motion.span 
                      animate={{ rotate: dropdownOpen === index ? 180 : 0 }}
                      className="text-[10px]"
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
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-64 glass-dark rounded-xl shadow-2xl border border-white/10 p-2 overflow-hidden"
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subLink.path}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                              isActive 
                                ? "bg-blue-600/20 text-blue-400 font-semibold" 
                                : "text-gray-300 hover:bg-white/5 hover:text-white"
                            }`
                          }
                          onClick={() => setDropdownOpen(null)}
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
        </nav>

        {/* Actions & Language */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 glass-dark z-[110] flex flex-col p-6 shadow-2xl lg:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <FaMountainSun size={20} className="text-white" />
                  </div>
                  <span className="font-bold uppercase tracking-tight">Zakarpattia</span>
                </div>
                <button
                  className="p-2 text-white hover:bg-white/10 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <HiX size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto space-y-4 pr-2">
                {allLinks.map((link, index) => (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => {
                        if (link.subLinks.length > 0) {
                          setMobileOpenIndex(mobileOpenIndex === index ? null : index);
                        } else {
                          navigate(link.path);
                          setMenuOpen(false);
                        }
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-lg font-bold text-white hover:bg-white/5 transition-all"
                    >
                      <span>{language === "uk" ? link.labelUk : link.labelEn}</span>
                      {link.subLinks.length > 0 && (
                        <motion.span
                          animate={{ rotate: mobileOpenIndex === index ? 180 : 0 }}
                          className="text-blue-500"
                        >
                          ▼
                        </motion.span>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {mobileOpenIndex === index && link.subLinks.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 space-y-1"
                        >
                          {link.subLinks.map((subLink, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subLink.path}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 rounded-xl text-base transition-all ${
                                  isActive ? "bg-blue-600/30 text-blue-400 font-bold" : "text-gray-400 hover:text-white"
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
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <span className="font-semibold text-gray-300 group-hover:text-white">
                    {language === "uk" ? "Показати англійською" : "Switch to Ukrainian"}
                  </span>
                  <div className="flex items-center gap-2">
                    {language === "uk" ? "🇺🇦" : "🇬🇧"}
                  </div>
                </button>
                
                {user ? (
                  <div className="flex gap-2">
                    <a
                      href={`${API_BASE}/admin`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 bg-yellow-500/10 text-yellow-500 rounded-2xl font-bold border border-yellow-500/20"
                    >
                      <FaUserShield /> Admin
                    </a>
                    <button
                      onClick={() => { logout(); setMenuOpen(false); }}
                      className="flex-1 flex items-center justify-center gap-2 py-4 bg-red-500/10 text-red-500 rounded-2xl font-bold border border-red-500/20"
                    >
                      <FaSignOutAlt /> {language === "uk" ? "Вихід" : "Logout"}
                    </button>
                  </div>
                ) : (
                  <a
                    href={`${API_BASE}/admin/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaSignInAlt /> {language === "uk" ? "Адмін-панель" : "Admin Dashboard"}
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
