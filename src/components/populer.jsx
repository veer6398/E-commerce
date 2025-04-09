import React from "react";
import deta from '../Assets/data'
import Items from "./items";

const Populer = () => {

    return(
        <div className=" flex flex-col items-center md:pl-5 xl:pl-0 mt-24">
            <h1 className="font-semibold lg:text-5xl text-3xl text-[#171717]">POPULER IN WOMEN</h1>
            <hr className="w-[200px] mt-3 h-1.5 bg-[#252525] rounded-[10px]" />
            <div className="mt-14 flex flex-wrap gap-7 md:gap-20 md:scale-[1.1] xl:gap-7 xl:scale-[1] md:mt-22 items-center justify-center">
                {deta.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name}
                    image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Populer