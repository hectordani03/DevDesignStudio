import { IoMailOutline } from "react-icons/io5";
import '../index.css';

export const MailCard = () =>{
    return (
        <div className="w-64 rounded-md overflow-hidden shadow-lg text-center mb-10 dark:bg-slate-700 scroll-animation">
            <div className="flex flex-col justify-center items-center">
                <IoMailOutline className="text-5xl mt-10 dark:text-white scroll-animation"></IoMailOutline>
                <h2 className="text-xl font-semibold mt-5 dark:text-white scroll-animation">Correo<span className="text-emerald-400 block">Electronico</span></h2>
                <div className="text-gray-500 mt-5 mb-7 dark:text-gray-300 text-sm">
                    <p className=" scroll-animation">devdesignstudioinfo<span className="block">@gmail.com</span></p>
                </div>
            </div>
        </div>
    )
}