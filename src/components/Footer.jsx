import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LogoWhite from '../assets/logo-dev-white.webp'
import '../index.css';

export const Footer = () => {
    const scrollToSection = (e, id) => {
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    };
  
    return (
      <section id="contactanos" className='w-full bg-emerald-500 grid grid-cols-1 sm:grid-cols-3 relative flex-wrap h-auto mt-20 pt-7 scroll-animation' style={{ height: 'auto' }}>
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-10 sm:mb-10">
          <img className="w-56 scroll-animation" src={LogoWhite} alt="" />
          <a href="mailto:devdesignstudioinfo@gmail.com" className="bg-emerald-600 p-4 px-10 text-white font-bold text-2xl rounded-full mt-5 mb-5">Contactanos</a>
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start ml-0 mt-10 sm:mt-0 sm:ml-20 text-center sm:text-start">
          <h2 className="text-white font-bold text-2xl mb-1 scroll-animation">Dev Design Studio</h2>
          <ul className="text-white font-semibold">
            <li><a href="/#" className="" onClick={(e) => scrollToSection(e, '#servicios')}>Servicios</a></li>
            <li><a href="/#" className="" onClick={(e) => scrollToSection(e, '#tecnologias')}>Tecnologias</a></li>
            <li><a href="/#" className="" onClick={(e) => scrollToSection(e, '#proyectos')}>Proyectos</a></li>
            <li><a href="/#" className="" onClick={(e) => scrollToSection(e, '#sobre-nosotros')}>Sobre Nosotros</a></li>
            <li><a href="/#" className="" onClick={(e) => scrollToSection(e, '#preguntas-frecuentes')}>Preguntas Frecuentes</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start mt-10 sm:mt-0 text-center sm:text-start mb-10 sm:mb-0">
          <h2 className="text-white font-bold text-2xl mb-3 scroll-animation">Contactanos</h2>
          <p className="text-white font-semibold">+52 314 166 9964</p>
          <p className="text-white font-semibol">+52 314 100 8320</p>
          <p className="text-white font-semibold">devdesignstudioinfo@gmail.com</p>
          <p className="text-white font-semibold">hectormtzinfo@gmail.com</p>
          <p className="text-white font-semibold">emancilla.loz14@gmail.com</p>
          <ul className="flex gap-4 mt-5">
            <li><a href="https://www.facebook.com/profile.php?id=61557872386888" className="">{<FaFacebook className="text-white text-4xl cursor-auto hover:cursor-pointer"></FaFacebook>}</a></li>
            <li><a href="/#" className="">{<FaInstagram className="text-white text-4xl hover:cursor-pointer"></FaInstagram>}</a></li>
            <li><a href="/#" className="">{<FaLinkedin className="text-white text-4xl hover:cursor-pointer"></FaLinkedin>}</a></li>
          </ul>
        </div>
      </section>
    )
  }