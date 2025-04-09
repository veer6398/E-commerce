import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopcontext";
import dropdown from '../Assets/dropdown_icon.png'
import Items from "../components/items";

const Shopcategory = (props) => {

    const {allproduct} = useContext(ShopContext)
    return(
         <div className="mb-10">
            <img className="block md:w-[85%] my-[30px] mx-auto " src={props.banner} alt="" />
            <div className="flex my-10 justify-between mx-3 items-center">
                <p>
                    <span className="font-semibold">Showing 1-12</span> out of 36 products
                </p>
                <div className="px-2.5 py-5 border-1 border-[#888] flex flex-col justify-center items-center  rounded-4xl">
                    Sort by <img src={dropdown} alt="" />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center w-[90%] md:w-[95%] gap-20 my-10 mx-5">
                {allproduct.map((item, i)=>{
                    if(props.category===item.category){
                        return <Items key={i} id={item.id} name={item.name}
                    image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    } else{
                        return(null);
                    }
                } )}
            </div>
            <div className="flex justify-center items-center  
                   mx-36 my-auto">
              <span className="w-[233px] flex items-center justify-center text-[#787878] rounded-[75px] bg-[#ededed] font-medium text-2xl cursor-pointer">Explore More</span>  
            </div>
         </div>
    )
}

export default Shopcategory