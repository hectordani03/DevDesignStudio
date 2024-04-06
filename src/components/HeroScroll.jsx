export const HeroScroll = () => {
  return (
    <main id='servicios' className="lg:grid lg:grid-cols-2 lg:grid-rows-5 border-black dark:bg-slate-800">
      {/* SECCION 1 */}
        <div className="text flex flex-col items-center lg:-ml-10 lg:mt-32 text-center lg:text-start">
            <h1 className='text-3xl sm:text-4xl md:text-5xl  font-bold w-1/2 dark:text-slate-300'>Soluciones Web <span className='text-emerald-400 block'>innovadoras</span></h1>
            <p className='mt-5 lg:w-1/2 w-10/12 text-xl font-semibold dark:text-slate-300'>En <span className='text-emerald-400 font-semibold'> Dev Design Studio</span>, nos apasiona ofrecer soluciones web <span className='text-emerald-400 font-semibold'> innovadoras</span> que impulsan el <span className='text-emerald-400 font-semibold'>éxito</span> de tu negocio. Desde el diseño de sitios web impactantes hasta el desarrollo de aplicaciones personalizadas, nuestro equipo experto está aquí para satisfacer tus <span className='text-emerald-400 font-semibold'> necesidades digitales.</span></p>
            <div className='flex gap-1 sm:gap-5 md:gap-10 sm:text-start text-center justify-center lg:justify-start first-letter w-1/2 lg:w-1/2 sm:w-11/12 mt-5 mb-10 lg:mb-0 flex-wrap lg:flex-nowrap'>
              <ul className='list-disc ml-5 dark:text-slate-300'>
                  <li className='font-medium'>Diseño Web Creativo</li>
                  <li className='font-medium'>Desarrollo a Medida</li>
                  <li className='font-medium'>Optimizacion de Rendimiento</li>
                  <li className='font-medium'>Seguridad y Mantenimiento</li>
              </ul>
              <ul className='list-disc dark:text-slate-300'>
                  <li className='font-medium'>Integracion de Tecnologias Emergentes</li>
                  <li className='font-medium'>Estrategias de Contenido Dinamico</li>
                  <li className='font-medium'>Asesoramiento y Consultoria Digital</li>
              </ul>
            </div> 
        </div>
        <div className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative bg-fixed bg-[url('/src/assets/hero-1.png')]">
        </div>
        {/* SECCION 2 */}
        <div className="text flex flex-col items-center lg:-ml-10 mt-20 lg:mt-32 text-center lg:text-start">
            <h1 className='text-3xl sm:text-4xl md:text-5xl  font-bold w-1/2 dark:text-slate-300'>Desarrollo<span className='text-emerald-400 block'>Frontend</span></h1>
            <p className='mt-5 lg:w-1/2 w-10/12 text-xl font-semibold dark:text-slate-300'>En <span className='text-emerald-400 font-semibold'>Dev Design Studio</span>, llevamos la experiencia del usuario a nuevas alturas a través de nuestro servicio de <span className='text-emerald-400 font-semibold'>Desarrollo Frontend.</span> Nos apasiona transformar conceptos creativos en interfaces web visuales y altamente funcionales que <span className='text-emerald-400 font-semibold'>cautivan</span> a tu audiencia desde el primer <span className='text-emerald-400 font-semibold'>clic.</span></p>
            <div className='flex gap-1 sm:gap-5 md:gap-10 sm:text-start text-center justify-center lg:justify-start first-letter w-1/2 lg:w-1/2 sm:w-11/12 mt-5 mb-10 lg:mb-0 flex-wrap lg:flex-nowrap'>
              <ul className='list-disc lg:mt-5 dark:text-slate-300'>
                  <li className='font-medium'>Desarrollo de Interfaces Creativas</li>
                  <li className='font-medium'>Implementación de Diseño Responsivo</li>
                  <li className='font-medium'>Integración de Tecnologías Modernas</li>
              </ul>
              <ul className='list-disc dark:text-slate-300 md:ml-0 sm:ml-10'>
                  <li className='font-medium'>Optimización de Rendimiento</li>
                  <li className='font-medium'>Mantenimiento y Actualizaciones Continuas</li>
                  <li className='font-medium'>Colaboración Estrecha con Diseñadores</li>
              </ul>
            </div>
        </div>
        <div className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative bg-fixed bg-[url('/src/assets/hero-2.jpg')]">
        </div>
        {/* SECCION 2 */}
        <div className="text flex flex-col items-center lg:-ml-10 mt-20 lg:mt-32 text-center lg:text-start">
            <h1 className='text-3xl sm:text-4xl md:text-5xl  font-bold w-1/2 text-emerald-400'>UX / UI<span className='block text-black dark:text-slate-300'>Design</span></h1>
            <p className='mt-5 lg:w-1/2 w-10/12 text-xl font-semibold dark:text-slate-300'>En <span className='text-emerald-400 font-semibold'>Dev Design Studio</span>, creemos que el diseño va más allá de lo visual; es la esencia misma de la <span className='text-emerald-400 font-semibold'>experiencia del usuario (UX)</span> y la <span className='text-emerald-400 font-semibold'>interfaz de usuario (UI).</span> Nuestros servicios de <span className='text-emerald-400 font-semibold'>Diseño UX/UI</span> están diseñados para cautivar, inspirar y dejar una impresión <span className='text-emerald-400 font-semibold'>duradera</span> en cada interacción digital.</p>
            <div className='flex gap-1 sm:gap-5 md:gap-10 sm:text-start text-center justify-center lg:justify-start first-letter w-1/2 lg:w-1/2 sm:w-11/12 mt-5 mb-10 lg:mb-0 flex-wrap lg:flex-nowrap'>
              <ul className='list-disc lg:ml-5 dark:text-slate-300'>
                  <li className='font-medium'>Investigación de Usuario</li>
                  <li className='font-medium'>Wireframing y Prototipado</li>
                  <li className='font-medium'>Diseño de Interfaz de Usuario (UI)</li>
                  <li className='font-medium'>Diseño de Experiencia de Usuario (UX)</li>
              </ul>
              <ul className='list-disc dark:text-slate-300'>
                  <li className='font-medium'>Pruebas de Usabilidad</li>
                  <li className='font-medium'>Diseño Responsivo</li>
                  <li className='font-medium'>Integración de Tecnologías Emergentes</li>
                  <li className='font-medium'>Colaboración con Desarrolladores</li>
              </ul>
            </div>
        </div>
        <div className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative bg-fixed bg-[url('/src/assets/hero-3.jpg')]">
        </div>
        {/* SECCION 2 */}
        <div className="text flex flex-col items-center lg:-ml-10 mt-20 lg:mt-32 text-center lg:text-start">
            <h1 className='text-3xl sm:text-4xl md:text-5xl  font-bold w-1/2 dark:text-slate-300'>Desarrollo<span className='text-emerald-400 block'>Backend</span></h1>
            <p className='mt-5 lg:w-1/2 w-10/12 text-xl font-semibold dark:text-slate-300'>En <span className='text-emerald-400 font-semibold'>Dev Design Studio,</span> entendemos que el <span className='text-emerald-400 font-semibold'>Desarrollo Backend</span> es el motor que impulsa las experiencias digitales <span className='text-emerald-400 font-semibold'>excepcionales.</span> Nuestros servicios en esta área están diseñados para construir la columna vertebral robusta que respalda la <span className='text-emerald-400 font-semibold'>interactividad</span> y la <span className='text-emerald-400 font-semibold'>eficiencia</span> de tu plataforma en línea.</p>
            <div className='flex gap-1 sm:gap-5 md:gap-10 sm:text-start text-center justify-center lg:justify-start first-letter w-1/2 lg:w-1/2 sm:w-11/12 mt-5 mb-10 lg:mb-0 flex-wrap lg:flex-nowrap'>
              <ul className='list-disc lg:ml-5 dark:text-slate-300'>
                  <li className='font-medium'>Desarrollo de Arquitectura Escalable</li>
                  <li className='font-medium'>Desarrollo de API Robusta</li>
                  <li className='font-medium'>Integración de Bases de Datos</li>
                  <li className='font-medium'>Gestión Eficiente de Usuarios</li>
              </ul>
              <ul className='list-disc dark:text-slate-300'>
                  <li className='font-medium'>Automatización de Procesos</li>
                  <li className='font-medium'>Desarrollo de Aplicaciones Empresariales</li>
                  <li className='font-medium'>Optimización de Rendimiento</li>
                  <li className='font-medium'>Mantenimiento Continuo</li>
              </ul>
            </div>
        </div>
        <div className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative bg-fixed bg-[url('/src/assets/hero-4.jpg')]">
        </div>
        {/* SECCION 2 */}
        <div className="text flex flex-col items-center lg:-ml-10 mt-20 lg:mt-32 text-center lg:text-start">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold dark:text-slate-300'>Ciber<span className='text-emerald-400'>seguridad</span></h1>
            <p className='mt-5 lg:w-1/2 w-10/12 text-xl font-semibold dark:text-slate-300'>En un mundo cada vez más conectado, la seguridad digital es <span className='text-emerald-400 font-semibold'>fundamental.</span> En <span className='text-emerald-400 font-semibold'>Dev Design Studio,</span> entendemos la importancia crítica de salvaguardar tu presencia en línea contra <span className='text-emerald-400 font-semibold'>amenazas cibernéticas.</span> Nuestros servicios de <span className='text-emerald-400 font-semibold'>ciberseguridad</span> están diseñados para proporcionar capas sólidas de <span className='text-emerald-400 font-semibold'>protección,</span> garantizando la <span className='text-emerald-400 font-semibold'></span>integridad, <span className='text-emerald-400 font-semibold'>confidencialidad</span> y <span className='text-emerald-400 font-semibold'>disponibilidad</span> de tus activos digitales.</p>
            <div className='flex gap-1 sm:gap-5 md:gap-10 sm:text-start text-center justify-center lg:justify-start first-letter w-1/2 lg:w-1/2 sm:w-11/12 mt-5 mb-10 lg:mb-0 flex-wrap lg:flex-nowrap'>
              <ul className='list-disc lg:ml-5 dark:text-slate-300'>
                  <li className='font-medium'>Protecciónes basicas contra Ataques Cibernéticos</li>
                  <li className='font-medium'>Gestión de Identidad y Acceso (IAM)</li>
                  <li className='font-medium'>Cifrado de Datos</li>
              </ul>
              <ul className='list-disc dark:text-slate-300'>
                  <li className='font-medium'>Implementación de Políticas de Seguridad</li>
                  <li className='font-medium'>Cumplimiento Normativo</li>
              </ul>
            </div>
        </div>
        <div className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative bg-fixed bg-[url('/src/assets/hero-5.jpg')]">
        </div>
        
    </main>
  );
};
