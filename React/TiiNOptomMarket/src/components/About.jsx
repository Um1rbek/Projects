import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const content = {
  uz: {
    title: "Biz haqimizda",
    desc:
      "Tiin Optom Market —  bu 2021 yili ochilgan zamonaviy, ishonchli va qulay narxlardagi supermarketlar tarmog‘i bo‘lib, mijozlarga sifatli mahsulotlar, tezkor xizmat va doimiy aksiyalarni taqdim etadi. Bizning maqsadimiz – har bir mijoz uchun qulay va foydali xarid tajribasini yaratish. Ta’minot zanjiri to‘g‘ridan-to‘g‘ri ishlab chiqaruvchilardan tashkil etilgani tufayli, bizda mahsulotlar arzon va kafolatli. Fresh meva-sabzavotlar, kundalik oziq-ovqat, gigiyena vositalari, bolalar mahsulotlari, uy-ro‘zg‘or buyumlari va boshqa minglab toifalar bizda mavjud. ",
    stats: [
      { value: "100+", label: "Doimiy hamkorlar" },
      { value: "5000+", label: "Mahsulotlar" },
      { value: "10+", label: "Filiallar" },
      { value: "99%", label: "Mijoz mamnunligi" },
    ],
  },
  ru: {
    title: "О нас",
    desc:
      "Tiin Optom Market — это современная, надёжная и доступная сеть супермаркетов, предлагающая клиентам качественные товары, быстрое обслуживание и регулярные акции. Наша цель — создать удобный и выгодный опыт покупок для каждого клиента. Благодаря прямой цепочке поставок от производителей, у нас низкие цены и гарантии. Свежие овощи и фрукты, повседневные продукты, гигиенические средства, товары для детей, бытовая утварь и тысячи других категорий доступны у нас.",
    stats: [
      { value: "100+", label: "Постоянные партнёры" },
      { value: "5000+", label: "Товары" },
      { value: "10+", label: "Филиалы" },
      { value: "99%", label: "Удовлетворённость клиентов" },
    ],
  },
  en: {
    title: "About Us",
    desc:
      "Tiin Optom Market is a modern, reliable, and affordable supermarket chain that offers customers high-quality products, fast service, and ongoing promotions. Our goal is to create a convenient and beneficial shopping experience for every customer. Thanks to a direct supply chain from manufacturers, our products are affordable and guaranteed. Fresh fruits and vegetables, daily groceries, hygiene products, baby items, household goods, and thousands of other categories are available here.",
    stats: [
      { value: "100+", label: "Regular partners" },
      { value: "5000+", label: "Products" },
      { value: "10+", label: "Branches" },
      { value: "99%", label: "Customer satisfaction" },
    ],
  },
};

const About = ({ lang = "uz" }) => {
  const { title, desc, stats } = content[lang] || content["uz"];
  const words = desc.split(" ");

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);


};

export default About;