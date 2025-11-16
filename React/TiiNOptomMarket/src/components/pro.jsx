import React from "react";

const translations = {
  uz: {
    title: "Maxsus Takliflar",
    subtitle: "Eng so'nggi chegirmalar va aksiyalarni qo'ldan boy bermang!",
    promos: [
      {
        title: "1+1 Aksiya",
        description: "Bitta mahsulot xarid qiling – ikkinchisini bepul oling!",
      },
      {
        title: "Hafta Chegirmlari",
        description: "Har haftalik maxsus narxlar faqat Tiin Optom Marketda.",
      },
      {
        title: "Bonus ballar",
        description: "Xaridlaringiz uchun ball to‘plang va chegirmalarga aylantiring.",
      },
    ],
  },
  ru: {
    title: "Специальные предложения",
    subtitle: "Не упустите лучшие скидки и акции!",
    promos: [
      {
        title: "Акция 1+1",
        description: "Купите один товар – получите второй бесплатно!",
      },
      {
        title: "Скидки недели",
        description: "Специальные цены каждую неделю только в Tiin.",
      },
      {
        title: "Бонусные баллы",
        description: "Получайте баллы за покупки и обменивайте их на скидки.",
      },
    ],
  },
  en: {
    title: "Special Offers",
    subtitle: "Don't miss out on the latest deals and promotions!",
    promos: [
      {
        title: "Buy 1 Get 1 Free",
        description: "Purchase one item – get another one for free!",
      },
      {
        title: "Weekly Discounts",
        description: "Weekly special prices only at Tiin Optom Market.",
      },
      {
        title: "Bonus Points",
        description: "Earn points for purchases and turn them into discounts.",
      },
    ],
  },
};

const Promotions = ({ lang }) => {
  const t = translations[lang] || translations.uz;

  return (
    <section
      id="promotions"
      className="py-20 "
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold bg-[#FFDC4A] text-black py-3 px-6 inline-block shadow-md transition duration-500 mb-3"
          data-aos="fade-down"
        >
          {t.title}
        </h2>
        <p
          className="text-black text-lg mb-10 mb-10"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {t.promos.map((promo, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-yellow-300/50 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <h3 className="text-xl font-semibold text-[#348C44] mb-2">
                {promo.title}
              </h3>
              <p className="text-gray-600 text-sm">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
