import React, { useState, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LanguageContext } from "../LanguageContext";
import { motion } from "framer-motion";
import { FaMountainSun } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

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
    <div className="hidden lg:flex space-x-2">
      {[
        { code: "uk", flag: "🇺🇦" },
        { code: "en", flag: "🇬🇧" },
      ].map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => language !== lang.code && toggleLanguage()}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className={`px-2 py-1 rounded transition ${
            language === lang.code ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          {lang.flag}
        </motion.button>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 w-full bg-[#171836] text-white p-4 flex justify-between items-center z-50 shadow-md">
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

          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => language !== "uk" && toggleLanguage()}
              className={`px-3 py-1 rounded ${
                language === "uk" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              🇺🇦
            </button>
            <button
              onClick={() => language !== "en" && toggleLanguage()}
              className={`px-3 py-1 rounded ${
                language === "en" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              🇬🇧
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
