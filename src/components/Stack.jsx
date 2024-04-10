import SvgHtml from '../svg/html.svg'
import SvgCss from '../svg/css.svg'
import SvgJs from '../svg/js.svg'
import SvgReact from '../svg/react.svg'
import SvgPython from '../svg/python.svg'
import SvgPhp from '../svg/php.svg'
import SvgFigma from '../svg/figma.svg'
import SvgSql from '../svg/sql.svg'
import SvgTailwind from '../svg/tailwind.svg'
import SvgBootstrap from '../svg/boostrap.svg'
import SvgGit from '../svg/git.svg'
import '../index.css';





export const Stack = () => {
    return (
        <section id='tecnologias' className="bg-emerald-400 mt-10 dark:bg-slate-700 scroll-animation">
            {/* STACK TEXT */}
            <div className="lg:w-1/2 w-10/12 text-center mx-auto pt-10">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 scroll-animation'>Nuestro Stack <span className='text-emerald-700 dark:text-emerald-400'> Tecnologico</span></h1>
                <p className='mt-5 sm:text-lg md:text-xl font-medium text-gray-100 scroll-animation'>Las últimas <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>tendencias tecnológicas</span> convergen para dar forma a experiencias digitales <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>excepcionales.</span> Descubre cómo nuestras elecciones cuidadosas en <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>lenguajes de programación</span>, <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>frameworks</span> y plataformas que <span className='text-emerald-700 dark:text-emerald-400 font-semibold'>impulsan</span> el éxito de tus proyectos.

</p>
            </div>
            {/* STACK ICONS */}
            <div className="flex w-full flex-col mt-5">
                {/* FILE 1 */}
                <div className='w-full flex justify-center items-center gap-10 flex-wrap'>
                    <img className=' scroll-animation' src={SvgHtml} alt="" />
                    <img className=' scroll-animation' src={SvgCss} alt="" />
                    <img className=' scroll-animation' src={SvgJs} alt="" />
                    <img className=' scroll-animation' src={SvgReact} alt="" />
                    <img className=' scroll-animation' src={SvgPython} alt="" />
                    <img className=' scroll-animation' src={SvgTailwind} alt="" />
                </div>
                {/* FILE 2 */}
                <div className='w-full flex  justify-center items-center gap-10 flex-wrap'>
                    <img className=' scroll-animation' src={SvgSql} alt="" />
                    <img className=' scroll-animation' src={SvgGit} alt="" />
                    <img className=' scroll-animation' src={SvgPhp} alt="" />
                    <img className=' scroll-animation' src={SvgFigma} alt="" />
                    <img className=' scroll-animation' src={SvgBootstrap} alt="" />
                </div>
                <p className='text-gray-100 w-1/2 mx-auto text-center mt-5 mb-5 font-bold scroll-animation'>Y mas. <span className='text-emerald-700 dark:text-emerald-400'> PostgreSQL, Cifrado, Ajax, Jquery, Xampp</span></p>
            </div>
        </section>
    )
}