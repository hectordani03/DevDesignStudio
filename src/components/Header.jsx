import { useEffect, useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
import LogoHeader from '../assets/logo-dev.png'
import LogoHeader2 from '../assets/logo-dev-white.webp'
import '../index.css';

export const Header = () => {

  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);
  const [imageKey, setImageKey] = useState(0); // Nuevo estado para la clave de la imagen

  // Actualizar la clase en el html cuando cambia el tema
  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }

    // Guardar el tema en localStorage
    localStorage.setItem('theme', theme);
    setImageKey(prevKey => prevKey + 1);

    const header = document.querySelector('#header');
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0 ) {
        header.classList.remove('shadow-2xl');
        }else{
            header.classList.add('shadow-2xl');
        }
    });
  }, [theme]);

  // Cambiar el tema cuando se llama a HandleChangeTheme
  const HandleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const [esLinksHidden, setEsLinksHidden] = useState(true);


  useEffect(() => {
    const header = document.querySelector('header');

    if (esLinksHidden) {
      header.classList.remove('bg-emerald-400');
    } else {
      header.classList.add('bg-emerald-400');
    }
  }, [esLinksHidden]);
        
        function HiddenFunction () {
            const navLinks = document.querySelector('.links')
            navLinks.classList.toggle('hidden')
        }

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
<div id='header' className='sticky top-0 z-50 transition-all bg-white dark:bg-slate-800 '>
        <header className='bg-white dark:bg-slate-800 lg:bg-inherit'>
            <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
                {/* Log header */}
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="">
                        <img
                        key={imageKey}
                        className={`w-32`}
                        src={theme === 'dark' ? LogoHeader2 : LogoHeader}
                        alt="" />
                    </a>
                </div>
                 {/* HAMBURGER BUTTON */}
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-black border-black" onClick={HiddenFunction}>
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    </button>
                </div>
                {/* HEADER LINKS */}
                <div className={`links ${esLinksHidden ? 'hidden' : ''} w-full block lg:flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-md flex-col items-center lg:flex-row lg:flex-grow flex gap-1 justify-center">
                    <a
                        href="/#servicios"
                        className="text-black font-semibold  dark:text-slate-300 hover:bg-emerald-400 px-5 p-2 rounded-xl dark:hover:bg-emerald-700 transition-colors"
                        onClick={(e) => scrollToSection(e, '#servicios')}
                    >
                        Servicios
                    </a>
                    <a
                        href="/#tecnologias"
                        className="text-black font-semibold  dark:text-slate-300 hover:bg-emerald-400 px-5 p-2 rounded-xl dark:hover:bg-emerald-700 transition-colors"
                        onClick={(e) => scrollToSection(e, '#tecnologias')}
                    >
                        Tecnologias
                    </a>
                    <a
                        href="/#proyectos"
                        className="text-black font-semibold  dark:text-slate-300 hover:bg-emerald-400 px-5 p-2 rounded-xl dark:hover:bg-emerald-700 transition-colors"
                        onClick={(e) => scrollToSection(e, '#proyectos')}
                    >
                        Proyectos
                    </a>
                    <a
                        href="/#sobre-nosotros"
                        className="text-black font-semibold  dark:text-slate-300 hover:bg-emerald-400 px-5 p-2 rounded-xl dark:hover:bg-emerald-700 transition-colors"
                        onClick={(e) => scrollToSection(e, '#sobre-nosotros')}
                    >
                        Sobre nosotros
                    </a>
                    <a
                        href="/#preguntas-frecuentes"
                        className="text-black font-semibold  dark:text-slate-300 hover:bg-emerald-400 px-5 p-2 rounded-xl dark:hover:bg-emerald-700 transition-colors"
                        onClick={(e) => scrollToSection(e, '#preguntas-frecuentes')}
                    >
                        Preguntas Frecuentes
                    </a>
                    <a
                        href="/#contactanos"
                        className="text-black font-semibold bg-emerald-400 p-2 px-5 rounded-3xl -mt-0  dark:text-slate-300
                        dark:bg-emerald-700 dark:font-bold"
                        onClick={(e) => scrollToSection(e, '#contactanos')}
                    >
                        Contactanos
                    </a>
                    </div>
                    <div id='moon' className="flex gap-5 mr-5">
                    <a
                        href="#responsive-header"
                        className="text-black font-semibold"
                        onClick={HandleChangeTheme}
                    >
                        <FaRegMoon className="text-2xl  dark:text-slate-300"/>
                    </a>
                    </div>
                </div>
            </nav>
        </header>
</div>
                    )
                }