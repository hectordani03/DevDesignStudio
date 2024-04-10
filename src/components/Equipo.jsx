import '../index.css'

export const ImagenEquipo = ({name, route, role}) =>{
    return (
        <div className=' scroll-animation'>
            <img className=' scroll-animation' src={route} alt="" />
            <div className='mt-7 text-center'>
                    <p className='text-2xl font-bold dark:text-white scroll-animation'>{name}</p>
                    <p className='text-xl font-bold text-emerald-400 scroll-animation'>{role}</p>
            </div>
        </div>
    )
}