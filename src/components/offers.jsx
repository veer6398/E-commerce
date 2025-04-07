import React from "react";
import eximage from '../Assets/exclusive_image.png'
const Offer = () => {

    return(<div className=" flex md:mt-14 items-center justify-center w-full">
        <div className="flex  w-[90%]"
        style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
            <div className="flex-1 md:pl-16  flex flex-col justify-center">
                <h1 className="md:text-7xl text-1xl py-2 pl-2 font-semibold text-[#171717]">Exclusive</h1>
                <h1 className="md:text-7xl text-1xl py-2 pl-2 font-semibold text-[#171717]">Offers For You</h1>
                <p className="md:text-2xl text-1xl py-2 pl-2 font-semibold text-[#171717]">ONLY ON BEST SELLERS PRODUCTS</p><br />
                <button className="md:w-2xs md:h-20 bg-[#ff4141] text-2xl text-white font-semibold
                 rounded-4xl cursor-pointer">Check Now</button>
            </div>
            <div className="flex-1 flex items-center justify-end pt-[50px] ">
                <img className="pr-10" src={eximage} alt="exclusive image" />
            </div>
        </div>
        </div>
    )
}

export default Offer