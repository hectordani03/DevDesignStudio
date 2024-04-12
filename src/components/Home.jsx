import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import SvgHome from '../svg/home-img.svg';
import SvgHomeDark from '../svg/home-img-2.svg'; // Nueva importación de la imagen para el modo oscuro
import '../index.css';

export const Home = ({ theme }) => { // Recibe 'theme' como una prop

  return (
    <section className='min-h-screen relative dark:bg-slate-800'>
      <section className='flex justify-between flex-col items-center lg:flex-row'>
      <img
        className={`w-auto max-w-full h-auto sm:mr-12 lg:mr-0`}
        src={theme === 'dark' ? SvgHomeDark : SvgHome} // Decide qué imagen mostrar según el tema
        alt=""
      />
        <div className="flex flex-col lg:w-1/2 w-10/12 text-center mt-10 mb-10 lg:mr-28 lg:mt-20">
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold dark:text-slate-300'>Soluciones Web <span className='text-emerald-400 block'>innovadoras</span></h1>
          <p className='mt-5 dark:text-slate-300 w-full font-semibold'>Descubre la innovación digital con <span className='text-emerald-400 font-semibold'>Dev Design Studio</span>. Nuestro equipo especializado en <span className='text-emerald-400 font-semibold'> Desarrollo Web</span> está aquí para ofrecerte soluciones creativas y funcionales que llevarán tu presencia en línea a nuevas alturas. Explora nuestras propuestas y déjanos transformar tus ideas en realidad digital. ¡Bienvenido al futuro web con <span className='text-emerald-400 font-semibold'>Dev Design Studio</span>!</p>
        </div>
      </section>
      <aside className='flex flex-col relative bottom-42 w-6/12 mx-auto items-center pb-20 lg:absolute lg:bottom-24 lg:right-0 lg:w-6/12 lg:mx-auto lg:items-start lg:pb-0'>
        <h2 className='text-xl font-semibold dark:text-slate-300'>Explora</h2>
        <MdKeyboardDoubleArrowDown className='text-6xl mt-5 animate-bounce ml-2 dark:text-slate-300' />
      </aside>
    </section>
  )
}