import React, { useContext } from "react";
import star from '../Assets/star_icon.png'
import stardull from '../Assets/star_dull_icon.png'
import { ShopContext } from "../context/shopcontext";

const Display = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="md:flex mt-10 px-10">
            <div className="flex flex-1 gap-4">
                <div className="flex flex-col gap-4">
                    
                    <img className="h-40 md:block hidden" src={product.image} alt="" />
                    <img className="h-40 md:block hidden" src={product.image} alt="" />
                    <img className="h-40 md:block hidden" src={product.image} alt="" />
                </div>    
                <div className="w-[600px] h-24">
                     <img src={product.image} alt="" />
                </div>
                <div className="flex-1 flex-col flex">
                    <h1 className="font-bold text-3xl md:text-4xl text-[#3d3d3d]">{product.name}</h1>
                    <div className="flex items-center gap-1 mt-3.5">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={stardull} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="flex mx-9 gap-7 text-2xl font-bold">
                        <div className="text-gray-700 line-through">
                            ${product.old_price}
                        </div>
                        <div className="text-red-500">
                            ${product.new_price}
                        </div>
                    </div>
                    <div>
                        <p>Stay Warm and Stylish with Our Winter Clothing Collection</p>
                        <p>Embrace the chill in style with our winter clothing collection, designed to keep you warm and cozy without compromising on fashion. From snug jackets and insulated coats to soft knit sweaters and wool scarves..</p>
                    </div>
                    <div >
                        <h1 className="mt-[55px] mb-5 text-gray-600 text-2xl font-semibold">Select Size</h1>
                        <div className="flex  gap-5">
                            <div className="px-5 hover:bg-gray-300 rounded-[5px] cursor-pointer py-5 bg-gray-200">S</div>
                            <div className="px-5 hover:bg-gray-300 rounded-[5px] cursor-pointer py-5 bg-gray-200">M</div>
                            <div className="px-5 hover:bg-gray-300 rounded-[5px] cursor-pointer py-5 bg-gray-200">L</div>
                            <div className="px-5 hover:bg-gray-300 rounded-[5px] cursor-pointer py-5 bg-gray-200">XL</div>
                            <div className="px-5 hover:bg-gray-300 rounded-[5px] cursor-pointer py-5 bg-gray-200">XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}} className="px-5 py-7  text-[16px] font-semibold w-[200px] text-white bg-red-600 cursor-pointer my-10 ">ADD TO CART</button>
                </div>
            </div>
            
        </div>
    )
}

export default Display