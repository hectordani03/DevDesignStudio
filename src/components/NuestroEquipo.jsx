import { ImagenEquipo } from '../components/Equipo';
import SvgEquipo from '../svg/equipo.svg'
import SvgEsteban from '../svg/esteban.svg'
import SvgHector from '../svg/hector.svg'


export const NuestroEquipo = () =>{
    return (
        <section className="flex flex-col w-full justify-center items-center mt-10 dark:bg-slate-800">
        {/* FILE 1 */}
        <div className="flex gap-20 mt-10 flex-wrap justify-center lg:flex-nowrap lg:justify-start lg:gap-60">
            <ImagenEquipo
            name={"Hector Martinez"}
            role={"Frontend Developer"}
            route={SvgHector}></ImagenEquipo>
            <ImagenEquipo
            name={"Esteban Mancilla"}
            role={"Backend Developer"}
            route={SvgEsteban}></ImagenEquipo>
        </div>
      </section>
    )
}