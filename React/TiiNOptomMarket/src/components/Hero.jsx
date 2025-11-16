import React from 'react';
import heroImage from '../assets/logo.png'; // Rasmingizni joylashtiring

const heroTexts = {
  uz: {
    title: "TIIN OPTOM MARKETGA XUSH KELIBSIZ!",
    subtitle: "Eng arzon narxlar va yuqori sifat — barchasi bizda!",
    button: "Mahsulotlarni ko‘rish",
  },
  ru: {
    title: "ДОБРО ПОЖАЛОВАТЬ В TIIN ОПТОМ МАРКЕТ!",
    subtitle: "Лучшие цены и высокое качество — у нас!",
    button: "Смотреть товары",
  },
  en: {
    title: "WELCOME TO TIIN OPTOM MARKET!",
    subtitle: "The best prices and highest quality — all here!",
    button: "Browse Products",
  },
};

const Hero = ({ lang }) => {
  const t = heroTexts[lang] || heroTexts.uz;

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#2F9E44] via-[#4BC96B] to-[#A1E3B2] py-24 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT: Text content */}
        <div className="md:w-1/2" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg mb-6">{t.subtitle}</p>
          <a
            href="#markets"
            className="inline-block bg-[#FFDC4A] text-[#348C44] font-semibold px-6 py-3 rounded shadow hover:shadow-lg transition"
          >
            {t.button}
          </a>
        </div>

        {/* RIGHT: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0" data-aos="fade-left">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md md:max-w-lg mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
