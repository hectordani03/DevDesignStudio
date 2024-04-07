import { CardProyects } from './CardProyect';
import ForUs from '../assets/For-Us.png'
import SportX from '../assets/Sportx.png'
import Cinehub from '../assets/For-Us.png'

export const Proyectos = () => {
    const modalImagesForUs = [
        {
            label: 'HomePage',
            imgPath: '../assets/For-Us.png',
        },
        {
            label: 'Posts',
            imgPath: '../assets/For-Us-2.png',
            
        },
        {
            label: 'Profile',
            imgPath: '../assets/For-Us-4.png',
        },
    ];

    const modalImagesSportX = [
        {
            label: 'DashBoard',
            imgPath: '../assets/SportX.png',
        },
    ];

    const modalImagesCineHub = [
        {
            label: 'HomePage',
            imgPath: '../assets/Cinehub.jpeg',
        },
        {
            label: 'Posts',
            imgPath: '../assets/Cinehub-2.jpeg',
        },
    ];

    return (
        <section id='proyectos' className="flex flex-col items-center justify-center dark:bg-slate-800">
            <h1 className=' mt-20 text-center mb-10 text-3xl sm:text-4xl md:text-5xl  font-bold w-12/12 dark:text-slate-300'>Nuestros<span className='text-emerald-400 ml-2 lg:ml-4'>Proyectos</span></h1>
            <div className="grid gap-8 justify-items-center grid-cols-1 xl:grid-cols-2">
                <CardProyects
                    src={ForUs}
                    title={"For Us"}
                    info={"Foro Web de discusiones sobre objetivos de la Onu"}
                    modalImages={modalImagesForUs}
                />
                <CardProyects
                    src={SportX}
                    title={"For Us"}
                    info={"Aplicacion Web sobre un sistema de gestion de almacen"}
                    modalImages={modalImagesSportX}
                />
                <CardProyects
                    src={Cinehub}
                    title={"For Us"}
                    info={"Blog Web sobre Cine"}
                    modalImages={modalImagesCineHub}
                />
            </div>
        </section>
    );
};
