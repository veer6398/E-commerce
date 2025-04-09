import React from "react";
import newcol from '../Assets/new_collections'
import Items from "./items";

const Newcoll = () => {

    return(
        <div className=" flex flex-col items-center md:pl-5 xl:pl-0 mt-24">
            <h1 className="font-semibold lg:text-5xl text-3xl text-[#171717]">NEW COLLECTIONS</h1>
            <hr className="w-[200px] mt-3 h-2 bg-[#252525] rounded-[10px]"  />
            <div className="mt-12 flex flex-wrap gap-7 md:gap-20 md:scale-[1.1] xl:gap-7 xl:scale-[1] md:mt-38 items-center justify-center mb-9 md:mb-30">
                {newcol.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name}
                    image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}   

export default Newcoll


