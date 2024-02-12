import { ImagenEquipo } from '../components/Equipo';
import SvgEquipo from '../svg/equipo.svg'
import SvgClient1 from '../svg/client-2.svg'
import SvgClient2 from '../svg/client-3.svg'
import SvgClient3 from '../svg/client-4.svg'
import SvgClient4 from '../svg/client-5.svg'

export const NuestroEquipo = () =>{
    return (
        <section className="flex flex-col w-full justify-center items-center mt-10 dark:bg-slate-800">
        {/* FILE 1 */}
        <div className="flex gap-20 mt-10 flex-wrap justify-center lg:flex-nowrap lg:justify-start lg:gap-60">
            <ImagenEquipo
            name={"Marco Lopez"}
            role={"Director General"}
            route={SvgClient1}></ImagenEquipo>
            <ImagenEquipo
            name={"Diego Rojas"}
            role={"CiberSeguridad"}
            route={SvgEquipo}></ImagenEquipo>
        </div>
        {/* FILE 2 */}
        <div className="flex gap-20 mt-16 flex-wrap justify-center lg:flex-nowrap lg:justify-start lg:gap-60">
        <ImagenEquipo
            name={"William Ruffalo"}
            role={"Desarrollador Frontend"}
            route={SvgClient2}></ImagenEquipo>
        <ImagenEquipo
        name={"Charun Hari"}
        role={"Desarrollador Backend"}
        route={SvgClient3}></ImagenEquipo>
        </div>
        {/* FILE 3 */}
        <div className="flex gap-20 justify-center mt-10 flex-wrap justify-center lg:flex-nowrap lg:justify-start lg:gap-60">
        <ImagenEquipo
        name={"Marta Sanchez"}
        role={"Desarrolladora UX / UI"}
        route={SvgClient4}></ImagenEquipo>
        </div>
      </section>
    )
}