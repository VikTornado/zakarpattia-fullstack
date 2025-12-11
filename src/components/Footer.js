import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaViber,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

const icons = [
  { icon: <FaFacebookF />, link: "#", title: "Facebook" },
  { icon: <FaInstagram />, link: "#", title: "Instagram" },
  { icon: <FaViber />, link: "#", title: "Viber" },
  { icon: <FaWhatsapp />, link: "#", title: "WhatsApp" },
  { icon: <FaTelegramPlane />, link: "#", title: "Telegram" },
  { icon: <FaEnvelope />, link: "mailto:info@example.com", title: "Email" },
];

function Footer() {
  return (
    <footer className="bg-[#171836] text-white py-6 mt-auto">
      <div className="flex justify-center gap-4 flex-wrap">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
            className={`
              text-white text-2xl sm:text-xl md:text-2xl 
              rounded-full p-3 sm:p-2 shadow-lg
              bg-gradient-to-t from-gray-700 to-gray-900
              hover:scale-110 transition-transform duration-300
              animate-pulse
            `}
            style={{
              animationDelay: `${index * 0.4}s`,
              animationDuration: "2.5s",
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
