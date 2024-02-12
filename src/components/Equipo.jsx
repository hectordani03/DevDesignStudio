export const ImagenEquipo = ({name, route, role}) =>{
    return (
        <div>
            <img src={route} alt="" />
            <div className='mt-7 text-center'>
                    <p className='text-2xl font-bold dark:text-white'>{name}</p>
                    <p className='text-xl font-bold text-emerald-400'>{role}</p>
            </div>
        </div>
    )
}