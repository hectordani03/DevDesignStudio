import { FaMapPin } from "react-icons/fa";
import '../index.css';


export const AdressCard = () =>{
    return (
        <div className="w-60 rounded-md overflow-hidden shadow-lg text-center mb-10 dark:bg-slate-700 scroll-animation">
            <div className="flex flex-col justify-center items-center">
                <FaMapPin className="text-5xl mt-10 dark:text-white scroll-animation"></FaMapPin>
                <h2 className="text-xl font-semibold mt-5 dark:text-white">Ubicacion<span className="text-emerald-400 block scroll-animation">Pincipal</span></h2>
                <div className="text-gray-500 mt-5 mb-7 dark:text-gray-300">
                    <p className=" scroll-animation">Manzanillo, Colima, MX</p>
                </div>
            </div>
        </div>
    )
}