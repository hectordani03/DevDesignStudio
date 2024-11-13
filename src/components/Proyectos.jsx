import { CardProyects } from './CardProyect';

import ForUs from '../assets/For-Us.png'
import ForUs2 from '../assets/For-Us-2.png'
import ForUs3 from '../assets/For-Us-4.png'

import SportX from '../assets/Sportx.png'

import Cinehub from '../assets/Cinehub-2.jpeg'
import Cinehub2 from '../assets/Cinehub.jpeg'

import Josefina1 from '../assets/1.png'
import Josefina2 from '../assets/2.png'
import Josefina3 from '../assets/3.png'
import Josefina4 from '../assets/4.png'
import Josefina5 from '../assets/5.png'
import Josefina7 from '../assets/7.png'

export const Proyectos = () => {
    const modalImagesForUs = [
        {
            label: 'HomePage',
            imgPath: ForUs,
        },
        {
            label: 'Posts',
            imgPath: ForUs2,
            
        },
        {
            label: 'Profile',
            imgPath: ForUs3,
        },
    ];

    const modalImagesSportX = [
        {
            label: 'DashBoard',
            imgPath: SportX,
        },
    ];

    const modalImagesCineHub = [
        {
            label: 'HomePage',
            imgPath: Cinehub2,
        },
        {
            label: 'Posts',
            imgPath: Cinehub,
        },
    ];

    const modalImagesJosefina = [
        {
            label: 'Galeria',
            imgPath: Josefina7,
        },
        {
            label: 'Galeria',
            imgPath: Josefina2,
        },
        {
            label: 'Contacto',
            imgPath: Josefina3,
        },
        {
            label: 'Contacto',
            imgPath: Josefina4,
        },
        {
            label: 'Presentacion',
            imgPath: Josefina5,
        },
    ];

    return (
        <section id='proyectos' className="flex flex-col items-center justify-center dark:bg-slate-800">
            <h1 className=' mt-20 text-center mb-10 text-3xl sm:text-4xl md:text-5xl  font-bold w-12/12 dark:text-slate-300 scroll-animation'>Nuestros<span className='text-emerald-400 ml-2 lg:ml-4'>Proyectos</span></h1>
            <div className="grid gap-8 justify-items-center grid-cols-1 xl:grid-cols-2">
                <CardProyects
                    src={ForUs}
                    title={"For Us"}
                    info={"Foro Web de discusiones sobre objetivos de la Onu"}
                    modalImages={modalImagesForUs}
                    className=" scroll-animation"
                />
                <CardProyects
                    src={SportX}
                    title={"SportX"}
                    info={"Aplicacion Web sobre un sistema de gestion de almacen"}
                    modalImages={modalImagesSportX}
                    className=" scroll-animation"
                />
                <CardProyects
                    src={Cinehub}
                    title={"Cine-Hub"}
                    info={"Blog Web sobre Cine"}
                    modalImages={modalImagesCineHub}
                    className=" scroll-animation"
                />
                <CardProyects
                    src={Josefina5}
                    title={"Luna Creciente"}
                    info={"Pagina web para salon de spa"}
                    modalImages={modalImagesJosefina}
                    className=" scroll-animation"
                />
            </div>
        </section>
    );
};
