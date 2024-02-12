import SvgStar from '../svg/stars.svg'

export const Card = ({children,route,name,proffesion}) =>{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg dark:bg-slate-700">
            <img className="w-full h-80 object-cover object-top mx-auto" src={route}/>
            <div className="flex justify-center">
                <div className='mt-5 text-center'>
                    <p className='text-2xl font-bold dark:text-white'>{name}</p>
                    <p className='text-xl font-bold text-emerald-400 dark:text-white'>{proffesion}</p>
                </div>
            </div>
            <div className="px-6 py-4 text-center">
                <p className="text-gray-500 text-md dark:text-white">
                    {children}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex gap-2 justify-center mb-5">
                <img src={SvgStar} alt="" />
                <img src={SvgStar} alt="" />
                <img src={SvgStar} alt="" />
                <img src={SvgStar} alt="" />
                <img src={SvgStar} alt="" />
            </div>
        </div>
    )
}