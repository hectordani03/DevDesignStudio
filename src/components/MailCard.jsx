import { IoMailOutline } from "react-icons/io5";

export const MailCard = () =>{
    return (
        <div className="w-60 rounded-md overflow-hidden shadow-lg text-center mb-10 dark:bg-slate-700">
            <div className="flex flex-col justify-center items-center">
                <IoMailOutline className="text-5xl mt-10 dark:text-white"></IoMailOutline>
                <h2 className="text-xl font-semibold mt-5 dark:text-white">Numero de <span className="text-emerald-400 block">Telefono</span></h2>
                <div className="text-gray-500 mt-5 mb-7 dark:text-gray-300">
                    <p>+234 911 8328 807</p>
                    <p>+234 911 8328 807</p>
                </div>
            </div>
        </div>
    )
}