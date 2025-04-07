import React, { useContext } from "react";
import { ShopContext} from '../context/shopcontext'
import remove from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {allproduct, cartItems, removeFromCart, totalCart} = useContext(ShopContext);
    return(
        <div className="md:mx-24 mx-10 my-40">
            <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center md:gap-16 gap-5 text-[#454545] font-semibold text-[14px] md:text-[18px]">
                <p>Proudcts</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-1 " />
            {allproduct.map((e) => {
    if (cartItems[e.id] > 0) {
        return (
            <div key={e.id}>
                <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center md:gap-16 gap-5 text-[#454545] font-medium text-[14px] md:text-[18px]">
                    <img className="" src={e.image} alt={e.name} />
                    <p className="text-[15px]">{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="w-16 h-12 border-2 bg-white border-[#ebebeb]">{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className="w-3.5 cursor-pointer my-10"
                        src={remove} 
                        alt="Remove item" 
                        onClick={() => removeFromCart(e.id)} 
                        style={{ cursor: 'pointer' }} 
                    />
                </div>
                <hr />
            </div>
        );
    }
    return null;
})}
        <div className="flex mx-auto items-center">
            <div className="flex-1 flex flex-col mr-48 gap-10 ">
                <h1 className="mt-10 font-bold text-2xl">Cart Totals</h1>
                <div>
                    <div className="flex justify-between py-4">
                        <p>Subtotal</p>
                        <p>${totalCart()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-4">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                        
                    </div>
                    <hr className="bg-black" />
                    <div className="flex justify-between py-4">
                        <h3>Total</h3>
                        <h3>${totalCart()}</h3>
                    </div>
                    <button className="w-[262px] h-14 bg-red-600 text-white text-[16px] font-semibold cursor-pointer">Proceed To Checkout</button>
                </div>
                </div>
                <div className="flex-1 hidden md:block mt-10 text-[16px] font-medium">
                    <p className="text-gray-500">If you have a promocode enter it here</p>
                    <div className="mt-4 flex items-center h-14 bg-[#eaeaea]">
                        <input className="bg-transparent text-center text-[16px] h-full xl:w-[330px]" type="text" name="" id="" placeholder="Promocode" />
                        <button className="bg-black xl:ml-4 text-white h-full w-44 xl:w-56">Submit</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default CartItems