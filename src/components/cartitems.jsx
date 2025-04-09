import React, { useContext } from "react";
import { ShopContext } from '../context/shopcontext';
import remove from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { allproduct, cartItems, removeFromCart, totalCart } = useContext(ShopContext);

  return (
    <div className="mx-4 md:mx-24 my-20">
      {/* Header Row */}
      <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-5 text-[#454545] font-semibold text-sm md:text-lg mb-4">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="mb-4" />

      {/* Cart Items */}
      {allproduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="mb-6">
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-5 text-[#454545] font-medium text-sm md:text-lg">
                <img src={e.image} alt={e.name} className="w-full max-w-[80px]" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-16 h-12 border-2 bg-white border-[#ebebeb]">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove}
                  alt="Remove item"
                  className="w-4 cursor-pointer"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col gap-3 bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <img src={e.image} alt={e.name} className="w-20 h-20 object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold text-base">{e.name}</p>
                    <p className="text-sm text-gray-600">Price: ${e.new_price}</p>
                    <p className="text-sm text-gray-600">Qty: {cartItems[e.id]}</p>
                    <p className="text-sm font-medium">Total: ${e.new_price * cartItems[e.id]}</p>
                  </div>
                  <img
                    src={remove}
                    alt="Remove"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Totals + Promo */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
        {/* Totals */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Cart Totals</h1>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <div className="flex justify-between py-2">
              <p>Subtotal</p>
              <p>${totalCart()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-2 font-semibold">
              <h3>Total</h3>
              <h3>${totalCart()}</h3>
            </div>
            <button className="w-full mt-4 h-12 bg-red-600 text-white font-semibold text-base rounded hover:bg-red-700">
              Proceed To Checkout
            </button>
          </div>
        </div>

        {/* Promo Code */}
        <div className="flex-1">
          <p className="text-gray-600">If you have a promo code, enter it here</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center bg-[#eaeaea] rounded-lg shadow gap-2">
            <input
              className="flex-1 bg-transparent text-center text-base outline-none h-12 px-4"
              type="text"
              placeholder="Promo code"
            />
            <button className="bg-black text-white h-12 w-full sm:w-44 rounded hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
