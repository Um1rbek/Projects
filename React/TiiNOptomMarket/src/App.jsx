import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Markets from './components/Markets';
import Promotions from './components/pro';
import News from './components/News';
import TiinApp from './components/TiinApp';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // ixtiyoriy: o‘zingiz yozgan global style bo‘lsa

const App = () => {
  const [lang, setLang] = useState('uz');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#2F9E44] via-[#4BC96B] to-[#36a046] text-gray-800">
      {/* Navbar with language switching */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Sections */}
      <main className="pt-20 space-y-20">
        <Slider lang={lang} />
        <About lang={lang} />
        <hr/>
        <Advantages lang={lang} />
        <Markets lang={lang} />
         <Promotions lang={lang} />
         <hr/>
         <News lang={lang} />
         <hr/>
        <TiinApp lang={lang} />
        <hr/>
        <FAQ lang={lang} /> 
      </main>  

      <h1>HHseiosux</h1>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
