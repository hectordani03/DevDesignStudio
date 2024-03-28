import { CardProyects } from './CardProyect';

export const Proyectos = () => {
    const modalImagesForUs = [
        {
            label: 'HomePage',
            imgPath: '../src/assets/For-Us.png',
        },
        {
            label: 'Posts',
            imgPath: '../src/assets/For-Us-2.png',
        },
        {
            label: 'Profile',
            imgPath: '../src/assets/For-Us-4.png',
        },
    ];

    const modalImagesSportX = [
        {
            label: 'DashBoard',
            imgPath: '../src/assets/SportX.png',
        },
    ];

    const modalImagesCineHub = [
        {
            label: 'HomePage',
            imgPath: '../src/assets/Cinehub.jpeg',
        },
        {
            label: 'Posts',
            imgPath: '../src/assets/Cinehub-2.jpeg',
        },
    ];

    return (
        <section id='proyectos' className="flex flex-col items-center justify-center dark:bg-slate-800">
            <h1 className=' mt-20 text-center mb-10 text-3xl sm:text-4xl md:text-5xl  font-bold w-12/12 dark:text-slate-300'>Nuestros<span className='text-emerald-400 ml-2 lg:ml-4'>Proyectos</span></h1>
            <div className="grid gap-8 justify-items-center grid-cols-1 xl:grid-cols-2">
                <CardProyects
                    src={"../src/assets/For-Us.png"}
                    title={"For Us"}
                    info={"Foro Web de discusiones sobre objetivos de la Onu"}
                    modalImages={modalImagesForUs}
                />
                <CardProyects
                    src={"../src/assets/Sportx.png"}
                    title={"For Us"}
                    info={"Aplicacion Web sobre un sistema de gestion de almacen"}
                    modalImages={modalImagesSportX}
                />
                <CardProyects
                    src={"../src/assets/cinehub-2.jpeg"}
                    title={"For Us"}
                    info={"Blog Web sobre Cine"}
                    modalImages={modalImagesCineHub}
                />
            </div>
        </section>
    );
};
