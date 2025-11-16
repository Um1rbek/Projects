import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const translations = {
  uz: {
    title: "Bizning filialimiz",
    subtitle: "Yaqin oradagi Tiin Market filialimizga tashrif buyuring!",
    branch: {
      title: "Tiin Optom Market - Chilonzor",
      address: "Chilonzor-5, Toshkent, O‘zbekiston",
      phone: "+998 90 123 45 67",
      hours: "Dushanba - Yakshanba, 9:00 - 22:00",
    },
  },
  ru: {
    title: "Наш филиал",
    subtitle: "Посетите ближайший филиал Tiin Market!",
    branch: {
      title: "Tiin Оптовый рынок - Чиланзар",
      address: "Чиланзар-5, Ташкент, Узбекистан",
      phone: "+998 90 123 45 67",
      hours: "Пн - Вс, 9:00 - 22:00",
    },
  },
  en: {
    title: "Our Branch",
    subtitle: "Visit the nearest Tiin Market branch!",
    branch: {
      title: "Tiin Wholesale Market - Chilanzar",
      address: "Chilanzar-5, Tashkent, Uzbekistan",
      phone: "+998 90 123 45 67",
      hours: "Mon - Sun, 9:00 AM - 10:00 PM",
    },
  },
};

const Markets = ({ lang }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const t = translations[lang] || translations.uz;
  const branch = t.branch;

  return (
    <section id="markets" className="py-24 px-4 border border-[#348C44]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-black py-2 rounded-md inline-block transform origin-left transition-all duration-300 hover:bg-yellow-400 hover:scale-110 hover:text-black">
            {t.title}
          </h2>

          <p className="text-black text-base transition-transform duration-500 ease-in-out 
             hover:scale-105 active:scale-105 focus-visible:scale-105 
             inline-block origin-left mt-5 ">
            {t.subtitle}
          </p>

          {/* CARD - faqat card hover qiladi */}
          <div
            className="p-[50px]  m-[12px]  bg-[#348C44] text-white p-8 rounded-xl border-l-4 border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold px-3 py-1 rounded mb-3">
              {branch.title}
            </h3>
            <p className="text-white text-base mb-1">
              📍 {branch.address}
            </p>
            <p className="text-white text-base mb-1">
              ☎ {branch.phone}
            </p>
            <p className="text-sm italic text-yellow-100">
              🕘 {branch.hours}
            </p>
          </div>
        </div>

        {/* MAP - pastdan chiqsin */}
        <div
          className="w-full h-[350px] rounded-lg overflow-hidden shadow-xl transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <iframe
            title="Tiin Market Map"
            src="https://yandex.com/map-widget/v1/?um=constructor%3A3c84691e7a76800e9838886ff6e49d5f49b536e2b53b4fcd1e3b0e3447d0d010&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Markets;
