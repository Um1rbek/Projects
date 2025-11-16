import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import googlePlay from "../assets/GOOGLEplay.png";
import appStore from "../assets/APPStore.png";

const translations = {
  uz: {
    contact: "Aloqa",
    download: "Ilovani yuklab oling",
    rights: "© 2025 Tiin Optom Market. Barcha huquqlar himoyalangan.",
  },
  ru: {
    contact: "Контакты",
    download: "Скачать приложение",
    rights: "© 2025 Tiin Optom Market. Все права защищены.",
  },
  en: {
    contact: "Contact",
    download: "Download the app",
    rights: "© 2025 Tiin Optom Market. All rights reserved.",
  },
};

const Footer = ({ lang }) => {
  const t = translations[lang] || translations.uz;

  return (
    <footer className="bg-[#348C44] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
          <div className="flex items-center gap-2 mb-2">
            <FiPhone className="text-yellow-400" />
            <span>+998 90 123 45 67</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FiMail className="text-yellow-400" />
            <span>info@tiinmarket.uz</span>
          </div>
          <div className="flex gap-4 text-lg">
            <a href="#" target="_blank" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="hover:text-yellow-300">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Center: App Downloads */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.download}</h3>
          <div className="flex flex-col gap-4">
            <a href="#" target="_blank">
              <img src={googlePlay} alt="Google Play" className="h-12" />
            </a>
            <a href="#" target="_blank">
              <img src={appStore} alt="App Store" className="h-12" />
            </a>
          </div>
        </div>

        {/* Right: Map or Extra Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tiin Optom Market</h3>
          <p className="text-white/80">
            Biz siz uchun qulay narxlar, keng assortiment va tez yetkazib
            berishni taklif qilamiz.
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-white/80 text-sm">
        {t.rights}
      </div>
    </footer>
  );
};

export default Footer;
