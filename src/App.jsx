import './App.css'
import './index.css'
import { Header } from './components/Header'
import { HeroScroll } from './components/HeroScroll';
import { Stack } from './components/Stack';
// import { Clientes } from './components/clientes';
import { NuestroEquipo } from './components/NuestroEquipo';
import { PhoneCard } from './components/PhoneCard';
import { MailCard } from './components/MailCard';
import { AdressCard } from './components/AdressCard';
import { PreguntasFrecuentes } from './components/Preguntas';
// import { FooterForm } from './components/FooterForm';
import { Footer } from './components/Footer';
import { Proyectos } from './components/Proyectos';
import { PREGUNTAS } from './preguntas';
import SvgInfo from '../src/svg/info.svg'

function App() {

  function checkScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (elementPosition < screenHeight * 0.84) {
        element.classList.add('animate');
      }
    });
  } 
  
  // Ejecutar la función cuando se carga la página y se desplaza
  window.addEventListener('load', checkScrollAnimation);
  window.addEventListener('scroll', checkScrollAnimation);

  
  return (
    <>
    <Header></Header>
    <section className='dark:bg-slate-800'>
    <HeroScroll></HeroScroll>
    <Stack></Stack>
    </section>
    <section className='dark:bg-slate-800'>
    <Proyectos></Proyectos>
    <section id='sobre-nosotros' className='min-h-screen relative bg-emerald-400 dark:bg-slate-700 mt-20 flex flex-col lg:flex-row scroll-animation'>
      <section className='flex justify-center text-white flex-col lg:ml-10 items-center text-center mt-10 lg:mt-0 lg:items-start lg:text-start'>
        <h1 className=' font-bold w-1/2 text-3xl sm:text-4xl md:text-6xl'>Sobre <span className='text-emerald-700 dark:text-emerald-400 scroll-animation'>Nosotros</span></h1>
        <p className='w-11/12 text-xl font-semibold mt-1 scroll-animation0'>En <span className='text-emerald-700 dark:text-emerald-400 font-bold'>Dev Design Studio,</span> fusionamos creatividad y tecnología para <span className='text-emerald-700 dark:text-emerald-400 font-bold'>transformar</span> ideas en experiencias digitales impactantes. Somos más que una agencia de desarrollo web; somos artesanos digitales dedicados a <span className='text-emerald-700 dark:text-emerald-400 font-bold'>impulsar</span> tu presencia en línea con soluciones <span className='text-emerald-700 dark:text-emerald-400 font-bold'>innovadoras.</span> <span className='text-emerald-700 dark:text-emerald-400 font-bold'>Colaboramos</span> estrechamente contigo para crear resultados excepcionales que trasciendan las expectativas. <span className='text-emerald-700 dark:text-emerald-400 font-bold'>Únete</span> a nosotros en este viaje digital.</p>
      </section>
        <img className='lg:mr-20 mt-10 w-auto max-w-full h-auto scroll-animation' src={SvgInfo} alt="" />
    </section>
    <section className='dark:bg-slate-800'>
      <h1 className='text-4xl md:text-5xl font-bold mt-20 text-center dark:text-white scroll-animation'>Nuestro <span className='text-emerald-400'>Equipo</span></h1>
      <NuestroEquipo></NuestroEquipo>
    </section>

    <section className='flex mt-20 flex-col dark:bg-slate-800'>
    <h1 className='text-4xl md:text-5xl font-bold mt-20 text-center dark:text-white scroll-animation'>Contacta<span className='text-emerald-400'>nos</span></h1>
    <div className='flex justify-center lg:gap-10 gap-5 mt-10 flex-wrap'>
      <PhoneCard></PhoneCard>
      <MailCard></MailCard>
      <AdressCard></AdressCard>
    </div>
    </section>
    <section className='flex flex-col items-center justify-center dark:bg-slate-800'>
    <h1 id='preguntas-frecuentes' className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-10 mb-16 dark:text-white scroll-animation'>Preguntas <span className='text-emerald-400'>Frecuentes</span></h1>
      {
        PREGUNTAS.map( preguntas => {
          const { pregunta, respuesta } = preguntas
          
          return (
            <PreguntasFrecuentes key={pregunta} question={pregunta}>
              {respuesta}
            </PreguntasFrecuentes>
          )
        })
      }
    </section>
    {/* <FooterForm></FooterForm> */}
    <Footer></Footer>
      </section>
  </>
  )
}

export default App
