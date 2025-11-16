import React, { useState } from 'react';
import logo from '../assets/logo.png'; // logoni joylashtiring
import { Globe } from 'react-feather';

const translations = {
  uz: { home: "Bosh sahifa", about: "Biz haqimizda", services: "Xizmatlar", contact: "Aloqa" },
  ru: { home: "Главная", about: "О нас", services: "Услуги", contact: "Контакты" },
  en: { home: "Home", about: "About", services: "Services", contact: "Contact" },
};

const Navbar = ({ lang, setLang }) => {
  const t = translations[lang];

  return (
    <nav className="bg-[#348C44] text-white py-4 px-6 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-yellow-300">{t.home}</a></li>
          <li><a href="#about" className="hover:text-yellow-300">{t.about}</a></li>
          <li><a href="#services" className="hover:text-yellow-300">{t.services}</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">{t.contact}</a></li>
        </ul>
        <div className="relative">
          <select
            onChange={(e) => setLang(e.target.value)}
            value={lang}
            className="bg-white text-[#348C44] font-semibold px-2 py-1 rounded shadow-md"
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
