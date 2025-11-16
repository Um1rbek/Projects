import React from "react";

const translations = {
  uz: {
    title: "So‘nggi yangiliklar",
    subtitle: "Tiin Optom Marketdagi eng so‘nggi voqealardan xabardor bo‘ling",
    news: [
      {
        title: "Yangi filial ochildi!",
        description: "Toshkentda yangi Tiin Optom Market filialimiz ochildi.",
        date: "15-iyul, 2025",
      },
      {
        title: "Yozgi chegirmalar boshlandi",
        description: "Butun iyul davomida barcha mahsulotlarga chegirma!",
        date: "10-iyul, 2025",
      },
      {
        title: "Tiin ilovasi yangilandi",
        description: "Ilovamizga yangi qulayliklar va cashback tizimi qo‘shildi.",
        date: "1-iyul, 2025",
      },
    ],
  },
  ru: {
    title: "Последние новости",
    subtitle: "Будьте в курсе последних событий Tiin Optom Market",
    news: [
      {
        title: "Открытие нового филиала!",
        description: "В Ташкенте открылся новый филиал Tiin Optom Market.",
        date: "15 июля, 2025",
      },
      {
        title: "Летние скидки начались",
        description: "Скидки на все товары в течение июля!",
        date: "10 июля, 2025",
      },
      {
        title: "Обновлено приложение Tiin",
        description: "Добавлены новые функции и система кэшбэка.",
        date: "1 июля, 2025",
      },
    ],
  },
  en: {
    title: "Latest News",
    subtitle: "Stay up to date with the latest from Tiin Optom Market",
    news: [
      {
        title: "New branch opened!",
        description: "Our new Tiin Optom Market branch is now open in Tashkent.",
        date: "July 15, 2025",
      },
      {
        title: "Summer sales are here",
        description: "Enjoy discounts on all products throughout July!",
        date: "July 10, 2025",
      },
      {
        title: "Tiin app updated",
        description: "We’ve added new features and a cashback system.",
        date: "July 1, 2025",
      },
    ],
  },
};

const News = ({ lang }) => {
  const t = translations[lang] || translations.uz;

  return (
    <section id="news" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">




<div className="text-center mb-12 flex flex-col items-center px-4">
  <h2
    className="text-3xl sm:text-4xl font-bold text-[#FFDC4A] px-6 py-2 rounded-md inline-block max-w-2xl break-words 
               transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:bg-[#FFDC4A] hover:text-black"
    data-aos="fade-up"
  >
    {t.title}
  </h2>

  <p
    className="text-black mt-2 px-4 py-1 rounded-md inline-block max-w-2xl break-words
               transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:bg-[#FFDC4A] hover:text-black"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    {t.subtitle}
  </p>
</div>


        <div className="grid md:grid-cols-3 gap-8">
          {t.news.map((item, i) => (
            <div
              key={i}
              className="group bg-[#F8FFE9] border-l-4 border-[#FFDC4A] p-6 rounded-xl shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-300 relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#348C44] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <p className="text-sm text-gray-500 mb-2 group-hover:text-[#348C44]">
                {item.date}
              </p>
              <h3 className="text-lg font-semibold text-[#348C44] group-hover:underline underline-offset-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm group-hover:text-gray-800">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
