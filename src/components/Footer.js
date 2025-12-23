import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaViber, 
  FaWhatsapp, 
  FaTelegramPlane, 
  FaEnvelope 
} from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";

const icons = [
  { icon: <FaFacebookF />, link: "#", title: "Facebook", color: "hover:bg-blue-600" },
  { icon: <FaInstagram />, link: "#", title: "Instagram", color: "hover:bg-pink-600" },
  { icon: <FaViber />, link: "#", title: "Viber", color: "hover:bg-purple-600" },
  { icon: <FaWhatsapp />, link: "#", title: "WhatsApp", color: "hover:bg-green-600" },
  { icon: <FaTelegramPlane />, link: "#", title: "Telegram", color: "hover:bg-sky-500" },
  { icon: <FaEnvelope />, link: "mailto:info@invest-zakarpattia.com", title: "Email", color: "hover:bg-red-500" },
];

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 mt-auto border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">
                <FaMountainSun size={24} />
              </div>
              <span className="text-xl font-bold uppercase tracking-tight font-display">Zakarpattia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              {t('footer.brandDescription')}
            </p>
          </div>

          {/* Quick Links / Socials */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 mb-8">{t('footer.socialTitle')}</h3>
            <div className="flex flex-wrap gap-4">
              {icons.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.title}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    w-12 h-12 flex items-center justify-center
                    rounded-2xl glass border border-white/10
                    text-white text-xl transition-all duration-300
                    shadow-lg hover:shadow-xl
                    ${item.color}
                  `}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter / Contact Hint */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 mb-8">{t('footer.contactTitle')}</h3>
            <p className="text-gray-400 text-sm mb-4 font-medium">{t('footer.contactHint')}</p>
            <a href="mailto:info@invest-zakarpattia.com" className="text-lg font-bold hover:text-blue-400 transition-colors tracking-tight">
              info@invest-zakarpattia.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} {t('footer.rights')}</p>
          <div className="flex gap-8">
            <a href="#!" className="hover:text-blue-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#!" className="hover:text-blue-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
