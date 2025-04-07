import React from "react";
import footlogo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pint from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Foot = () => {

    return(<footer     style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 80%)" }}
     className="mb-4 gap-12 flex flex-col justify-center items-center md:w-[90%] md:m-auto">
            <div className="flex items-center gap-5">
                <img src={footlogo} alt="" />
                <p className="text-[#383838] text-4xl md:text-5xl font-bold">SHOPPER</p>
            </div>
            <ul className="flex gap-3 md:gap-5 text-[#252525] text-[19px] md:text-3xl">
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">Offices</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <div className="flex gap-5">
            <div>
                <div className="p-2.5 hover:bg-zinc-200 border-[gray] border-2 rounded-full"><img src={insta} alt="" /></div>
            </div>
            <div>
                <div className="p-2.5 hover:bg-zinc-200 border-[gray] border-2 rounded-full"><img src={pint} alt="" /></div>
            </div>
             <div>
                <div className="p-2.5 hover:bg-zinc-200 border-[gray] border-2 rounded-full"><img src={whatsapp} alt="" /></div>
            </div>
            </div>
            <div className="flex items-center flex-col w-full">
                <hr className="w-[80%] mb-5 rounded-2xl h-1 bg-gray-300 border-none"/>
                <p className="text-[#383838] md:text-5xl text-[20px] font-bold">Copyright @ 2025 -All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Foot