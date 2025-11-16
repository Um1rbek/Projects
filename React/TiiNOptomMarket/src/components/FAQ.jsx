import React, { useState } from "react";

const translations = {
  uz: {
    title: "Ko‘p so‘raladigan savollar",
    faqs: [
      {
        question: "TIIN ilovasini qanday yuklab olaman?",
        answer: "Siz uni App Store yoki Google Play orqali bepul yuklab olishingiz mumkin.",
      },
      {
        question: "Yetkazib berish xizmati mavjudmi?",
        answer: "Ha, barcha filiallarimiz orqali tez va ishonchli yetkazib berish xizmati mavjud.",
      },
      {
        question: "TIIN kartasi nima?",
        answer: "TIIN kartasi orqali siz chegirmalar va cashback tizimlaridan foydalanishingiz mumkin.",
      },
    ],
  },
  ru: {
    title: "Часто задаваемые вопросы",
    faqs: [
      {
        question: "Как скачать приложение TIIN?",
        answer: "Вы можете бесплатно скачать его через App Store или Google Play.",
      },
      {
        question: "Есть ли служба доставки?",
        answer: "Да, во всех наших филиалах доступна быстрая и надежная доставка.",
      },
      {
        question: "Что такое карта TIIN?",
        answer: "С помощью карты TIIN вы можете воспользоваться скидками и системой кешбэка.",
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "How can I download the TIIN app?",
        answer: "You can download it for free via App Store or Google Play.",
      },
      {
        question: "Is delivery service available?",
        answer: "Yes, fast and reliable delivery is available at all our branches.",
      },
      {
        question: "What is the TIIN card?",
        answer: "With the TIIN card, you can enjoy discounts and cashback benefits.",
      },
    ],
  },
};

const FAQ = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const t = translations[lang] || translations.uz;

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold bg-[#FFDC4A] text-black py-3 px-6 inline-block shadow-md transition duration-500"
        >
          {t.title}
        </h2>

        {/* FAQ List */}
        <div className="mt-10 space-y-4 text-left">
          {t.faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`cursor-pointer rounded-xl border-l-4 p-6 transition-all duration-300 ease-in-out group ${
                activeIndex === index
                  ? "bg-[#FFDC4A] border-[#348C44] shadow-lg"
                  : "bg-yellow-100 border-transparent hover:bg-[#fff7c0] hover:shadow-md"
              }`}
            >
              {/* Question */}
              <div className="flex justify-between items-center text-[#1f1f1f] font-semibold text-lg transition duration-300">
                {faq.question}
                <span className="text-2xl text-[#348C44] transition-all duration-300 group-hover:rotate-180">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Animated Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
