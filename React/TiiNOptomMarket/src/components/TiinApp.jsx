import React from "react";
import appImage from "../assets/PHON.png";
import googlePlay from "../assets/GOOGLEplay.png";
import appStore from "../assets/APPStore.png";

const translations = {
  uz: {
    title: "TIIN ilovasini yuklab oling!",
    subtitle:
      "TIIN cashback ilovasi orqali supermarketimizdagi narxlarni bilib oling va har bir xariddan cashback oling.",
    download: "Ilovani yuklab olish",
  },
  ru: {
    title: "Скачайте приложение TIIN!",
    subtitle:
      "С помощью приложения TIIN вы можете узнать цены в наших супермаркетах и получить кэшбэк за каждую покупку.",
    download: "Скачать приложение",
  },
  en: {
    title: "Download the Tiin Loyalty app!",
    subtitle:
      "Through the Tiin cashback app, you can find out the prices in our supermarket and get cashback for every purchase.",
    download: "Download the app",
  },
};

const TiinApp = ({ lang }) => {
  const t = translations[lang] || translations.uz;

  return (
    <section id="tiin-app" className="py-24 px-6">
      <div
        className=" rounded-2xl px-6 py-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
        data-aos="fade-up"
      >

                {/* O‘ng taraf: telefon rasmi */}
        <div className="flex-1 flex justify-center" data-aos="zoom-in">
          <img
            src={appImage}
            alt="TIIN App"
            className="w-[240px] sm:w-[280px] lg:w-[300px] drop-shadow-xl hover:scale-105 transition duration-300"
          />
        </div>



    <div className="flex-1 text-center lg:text-left space-y-6">
      {/* Title */}
<h2 className="text-3xl sm:text-4xl font-bold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-110 hover:text-black  py-2 rounded-md inline-block transform origin-left">
  {t.title}
</h2>


<p className="text-black text-base transition-all duration-300 transform hover:scale-105 inline-block origin-left">
  {t.subtitle}
</p>


      {/* App store buttons */}
<div className="flex justify-center lg:justify-start gap-4 border">
  <a href="#" target="_blank" rel="noreferrer">
    <img
      src={googlePlay}
      alt="Google Play"
      className="h-12 rounded-md hover:scale-105 transition-transform duration-300"
    />
  </a>
  <a href="#" target="_blank" rel="noreferrer">
    <img
      src={appStore}
      alt="App Store"
      className="h-12 rounded-md hover:scale-105 transition-transform duration-300"
    />
  </a>
</div>

    </div>


      </div>
    </section>
  );
};

export default TiinApp;
