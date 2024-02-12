import SvgHtml from '../svg/html.svg'
import SvgCss from '../svg/css.svg'
import SvgJs from '../svg/js.svg'
import SvgReact from '../svg/react.svg'
import SvgPython from '../svg/python.svg'
import SvgNode from '../svg/node.svg'
import SvgVue from '../svg/vue.svg'
import SvgAngular from '../svg/angular.svg'
import SvgMongo from '../svg/mongo.svg'
import SvgPhp from '../svg/php.svg'
import SvgFigma from '../svg/figma.svg'





export const Stack = () => {
    return (
        <section className="bg-emerald-400 mt-10 dark:bg-slate-700">
            {/* STACK TEXT */}
            <div className="lg:w-1/2 w-10/12 text-center mx-auto pt-10">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100'>Nuestro Stack <span className='text-emerald-700 dark:text-emerald-400'> Tecnologico</span></h1>
                <p className='mt-5 sm:text-lg md:text-xl font-medium text-gray-100'>Las últimas <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>tendencias tecnológicas</span> convergen para dar forma a experiencias digitales <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>excepcionales.</span> Descubre cómo nuestras elecciones cuidadosas en <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>lenguajes de programación</span>, <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>frameworks</span> y plataformas que <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>impulsan</span> el éxito de tus proyectos.

</p>
            </div>
            {/* STACK ICONS */}
            <div className="flex w-full flex-col mt-5">
                {/* FILE 1 */}
                <div className='w-full flex justify-center items-center gap-10 flex-wrap'>
                    <img src={SvgHtml} alt="" />
                    <img src={SvgCss} alt="" />
                    <img src={SvgJs} alt="" />
                    <img src={SvgReact} alt="" />
                    <img src={SvgPython} alt="" />
                    <img src={SvgNode} alt="" />
                </div>
                {/* FILE 2 */}
                <div className='w-full flex  justify-center items-center gap-10 flex-wrap'>
                    <img src={SvgVue} alt="" />
                    <img src={SvgAngular} alt="" />
                    <img src={SvgMongo} alt="" />
                    <img src={SvgPhp} alt="" />
                    <img src={SvgFigma} alt="" />
                </div>
                <p className='text-gray-100 w-1/2 mx-auto text-center mt-5 mb-5 font-bold'>Y mas. <span className='text-emerald-700 dark:text-emerald-400'> SQL,  MySQL, PostgreSQL, Django, Bootstrap, TailwindCSS, Redis, Sqlite, Cifrado, MFA, IAM</span></p>
            </div>
        </section>
    )
}