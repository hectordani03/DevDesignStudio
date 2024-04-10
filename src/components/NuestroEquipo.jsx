import { ImagenEquipo } from '../components/Equipo';
import SvgEsteban from '../svg/esteban.svg'
import SvgHector from '../svg/hector.svg'
import '../index.css'


export const NuestroEquipo = () =>{
    return (
        <section className="flex flex-col w-full justify-center items-center mt-10 dark:bg-slate-800">
        {/* FILE 1 */}
        <div className="flex gap-20 mt-10 flex-wrap justify-center lg:flex-nowrap lg:justify-start lg:gap-60">
            <ImagenEquipo
            name={"Hector Martinez"}
            role={"Frontend Developer"}
            route={SvgHector}
            className=" scroll-animation"></ImagenEquipo>
            <ImagenEquipo
            name={"Esteban Mancilla"}
            role={"Backend Developer"}
            route={SvgEsteban}
            className=" scroll-animation"></ImagenEquipo>
        </div>
      </section>
    )
}