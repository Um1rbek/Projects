import React from 'react';
import {
  GiCheckMark,
  GiStarMedal,
  GiDeliveryDrone,
  GiTeamIdea,
} from 'react-icons/gi';

const translations = {
  uz: {
    title: 'Bizning + tomonlarimiz',
    subtitle: 'Nega aynan bizni tanlashingiz kerak?',
    items: [
      {
        title: 'Sifatli mahsulotlar',
        desc: 'Mahsulotlarimiz sinovdan o‘tgan va sertifikatlangan.',
      },
      {
        title: 'Ishonchli xizmat',
        desc: 'Yillik tajriba va mijozlar ishonchi.',
      },
      {
        title: 'Tez yetkazib berish',
        desc: 'Buyurtmalaringizni 24 soat ichida yetkazamiz.',
      },
      {
        title: 'Mijozlarga qulaylik',
        desc: '24/7 xizmat, qulay interfeys.',
      },
    ],
  },
  ru: {
    title: 'Наши преимущества',
    subtitle: 'Почему выбирают нас?',
    items: [
      {
        title: 'Качественные продукты',
        desc: 'Все товары сертифицированы и проверены.',
      },
      {
        title: 'Надежный сервис',
        desc: 'Опыт и доверие клиентов — наш успех.',
      },
      {
        title: 'Быстрая доставка',
        desc: 'Доставим в течение 24 часов.',
      },
      {
        title: 'Удобство для клиентов',
        desc: 'Поддержка 24/7 и понятный интерфейс.',
      },
    ],
  },
  en: {
    title: 'Our Advantages',
    subtitle: 'Why choose us?',
    items: [
      {
        title: 'Quality Products',
        desc: 'All products are certified and tested.',
      },
      {
        title: 'Reliable Service',
        desc: 'Years of experience and customer trust.',
      },
      {
        title: 'Fast Delivery',
        desc: 'We deliver within 24 hours.',
      },
      {
        title: 'Customer Friendly',
        desc: '24/7 support and user-friendly design.',
      },
    ],
  },
};

const icons = [
  <GiStarMedal className="text-4xl transition duration-300 group-hover:text-black text-[#348C44]" />,
  <GiCheckMark className="text-4xl transition duration-300 group-hover:text-black text-[#348C44]" />,
  <GiDeliveryDrone className="text-4xl transition duration-300 group-hover:text-black text-[#348C44]" />,
  <GiTeamIdea className="text-4xl transition duration-300 group-hover:text-black text-[#348C44]" />,
];

const Advantages = ({ lang }) => {
  const t = translations[lang] || translations.uz;

  return (
    <section className="py-20 " id="advantages">
<div className="flex flex-col items-center justify-center text-center mb-12 space-y-3">
<h2
  className="text-3xl sm:text-4xl font-bold text-black transition-all duration-500 ease-in-out 
             hover:bg-yellow-400 hover:scale-110 hover:text-black 
             active:bg-yellow-300 active:scale-110 
             focus-visible:bg-yellow-300 focus-visible:scale-110 
             py-2 px-4 rounded-md inline-block transform origin-left"
>
  {t.title}
</h2>

<p
  className="text-black text-base transition-transform duration-500 ease-in-out 
             hover:scale-105 active:scale-105 focus-visible:scale-105 
             inline-block origin-left mt-2"
>
  {t.subtitle}
</p>

</div>


    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
  {t.items.map((item, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl p-6 text-center shadow-md border border-[#FFDC4A] 
                 hover:bg-[#FFDC4A] hover:shadow-yellow-400 
                 transition-all duration-500 ease-in-out transform hover:scale-[1.03]"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="mb-4 flex justify-center transition-all duration-500 ease-in-out">
        {icons[index]}
      </div>
      <h3
        className="bg-[#FFDC4A] text-[#348C44] text-xl font-semibold mb-2 
                   transition-all duration-500 ease-in-out group-hover:text-black group-hover:bg-white 
                   inline-block px-2 py-1 rounded"
      >
        {item.title}
      </h3>
      <p
        className="text-gray-600 text-sm mt-2 transition-all duration-500 ease-in-out 
                   group-hover:text-black"
      >
        {item.desc}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Advantages;
