import React, { useState, useContext } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LanguageContext } from "../LanguageContext";
import { API_BASE } from "../config";
import { AuthContext } from "../context/AuthContext";

import { motion } from "framer-motion";
import { FaMountainSun } from "react-icons/fa6";
import { FaUserShield, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
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
        {
          path: "/international",
          labelUk: "Міжнародна співпраця",
          labelEn: "International",
        },
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
        <motion.button
          onClick={() => navigate("/login")}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="p-2 text-green-500 hover:text-green-400 transition"
          title="Login"
        >
          <FaSignInAlt size={20} />
        </motion.button>
      )}
    </div>

  );


  return (
    <header className="fixed top-0 w-full bg-[#171836] text-white shadow-md z-50">
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex justify-between items-center">
        <FaMountainSun size={30} />

        <nav className="hidden lg:flex flex-1 justify-center space-x-6">
          {menuLinks.map((link, index) => {
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
                  className={`px-4 py-2 rounded transition-all duration-300 ${
                    isActive
                      ? "text-white border-b-2 border-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => {
                    if (link.external) {
                      window.open(link.url, "_blank");
                    } else if (link.subLinks.length === 0) {
                      window.location.href = link.path;
                    } else {
                      setDropdownOpen((prev) => (prev === index ? null : index));
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    {link.icon && <link.icon className="text-lg" />}
                    {language === "uk" ? link.labelUk : link.labelEn}
                  </div>
                </button>

                {link.subLinks.length > 0 && (
                  <div
                    className={`absolute left-0 top-full mt-2 w-56 bg-gray-800 text-white rounded shadow-lg z-50 transition-all duration-200 ${
                      dropdownOpen === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subLink.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700 font-semibold" : ""
                          }`
                        }
                        onClick={() => setDropdownOpen(null)}
                      >
                        <div className="flex items-center gap-2">
                          {subLink.icon && <subLink.icon className="text-lg" />}
                          {language === "uk" ? subLink.labelUk : subLink.labelEn}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <LanguageSwitcher />

        {!menuOpen && (
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu />
          </button>
        )}

        {menuOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-start p-6 w-3/4 h-screen overflow-y-auto">
            <button
              className="text-white text-2xl self-end mb-4 z-30"
              onClick={() => setMenuOpen(false)}
            >
              <HiX />
            </button>

            {menuLinks.map((link, index) => (
              <div key={index} className="w-full mb-2">
                <div className="text-gray-400 uppercase tracking-wide text-sm px-1">
                  <div className="flex items-center gap-2">
                    {link.icon && <link.icon className="text-md" />}
                    {language === "uk" ? link.labelUk : link.labelEn}
                  </div>
                </div>
                {link.subLinks.length > 0 ? (
                  <div className="pl-4">
                    {link.subLinks.map((subLink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subLink.path}
                        className={({ isActive }) =>
                          `py-2 text-md w-full text-left block ${
                            isActive
                              ? "text-blue-400 font-semibold"
                              : "text-white"
                          } hover:bg-gray-700`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex items-center gap-2">
                          {subLink.icon && <subLink.icon className="text-lg" />}
                          {language === "uk" ? subLink.labelUk : subLink.labelEn}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                ) : link.external ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 text-md w-full text-left block text-white hover:bg-gray-700 pl-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      {link.icon && <link.icon className="text-lg" />}
                      {language === "uk" ? link.labelUk : link.labelEn}
                    </div>
                  </a>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `py-2 text-md w-full text-left block ${
                        isActive ? "text-blue-400 font-semibold" : "text-white"
                      } hover:bg-gray-700 pl-4`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      {link.icon && <link.icon className="text-lg" />}
                      {language === "uk" ? link.labelUk : link.labelEn}
                    </div>
                  </NavLink>
                )}
              </div>
            ))}

            {/* Mobile language switcher */}
            <div className="mt-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                {language === "uk" ? (
                  <>
                    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm">
                      <rect width="20" height="7.5" fill="#0057B7"/>
                      <rect y="7.5" width="20" height="7.5" fill="#FFD700"/>
                    </svg>
                    <span>UK → EN</span>
                  </>
                ) : (
                  <>
                    <svg width="20" height="15" viewBox="0 0 60 30" className="rounded-sm">
                      <rect width="60" height="30" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="inset(0)"/>
                      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
                    </svg>
                    <span>EN → UK</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="mt-4 flex gap-4">
               {user ? (
                  <>
                    <a
                      href={`${API_BASE}/admin`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
                    >
                      <FaUserShield size={20} />
                      <span>Admin</span>
                    </a>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
                    >
                      <FaSignOutAlt size={20} />
                      <span>{language === "uk" ? "Вихід" : "Logout"}</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                  >
                     <FaSignInAlt size={20} />
                     <span>{language === "uk" ? "Вхід" : "Login"}</span>
                  </button>
                )}
            </div>

          </div>

        )}
      </div>
    </header>
  );
}

export default Header;
