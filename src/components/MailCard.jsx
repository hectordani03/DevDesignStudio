import { IoMailOutline } from "react-icons/io5";

export const MailCard = () =>{
    return (
        <div className="w-64 rounded-md overflow-hidden shadow-lg text-center mb-10 dark:bg-slate-700">
            <div className="flex flex-col justify-center items-center">
                <IoMailOutline className="text-5xl mt-10 dark:text-white"></IoMailOutline>
                <h2 className="text-xl font-semibold mt-5 dark:text-white">Correo<span className="text-emerald-400 block">Electronico</span></h2>
                <div className="text-gray-500 mt-5 mb-7 dark:text-gray-300 text-sm">
                    <p>devdesignstudioinfo<span className="block">@gmail.com</span></p>
                </div>
            </div>
        </div>
    )
}