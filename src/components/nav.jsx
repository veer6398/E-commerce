import React, { useContext } from "react";
import { NavLink,useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import carticon from "../Assets/cart_icon.png";
import { ShopContext } from "../context/shopcontext";

const menuItems = [
  { name: "Shop", path: "/" },
  { name: "Men", path: "/mens" },
  { name: "Women", path: "/womens" },
  { name: "Kids", path: "/kids" },
];

const Navbar = () => {
    const location = useLocation();

    const {totalCartItems} = useContext (ShopContext);

  return (
    <nav className="flex justify-around w-full sm:p-4 p-2 shadow-sm">
      <div className="flex items-center gap-2.5">
        <img className="h-10 sm:h-20" src={logo} alt="logo" />
        <p className="text-[#171717] text-2xl font-serif font-bold hidden lg:block mr-5">SHOPPER</p>
      </div>

      <ul className="flex items-center md:gap-16 sm:gap-12 gap-3 text-[#626262] md:text-3xl font-medium">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-[#ff4141]" : "hover:text-[#fb8677]"
              }
            >
              {item.name}
            </NavLink>
            <div
  className={`w-4/5 h-1 rounded-full bg-[#f72727] ${
    location.pathname === item.path ? "block" : "hidden"
  }`}
/>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-11">
        <NavLink to="/logsin">
          <button
            type="button"
            className="md:w-26 w-12 md:h-12 h-6 pb-1 border rounded-full border-gray-600 font-medium md:text-2xl text-[15px] text-[#515151]
             active:bg-[#f3f3f3] bg-white cursor-pointer hover:bg-gray-50"
          >
            Login
          </button>
        </NavLink>
        <div className="reletive">
        <NavLink to="/cart">
          <img src={carticon} alt="cart-icon" />
        </NavLink>
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white absolute top-1 right-1 lg:right-4 lg:top-7 xl:top-7 xl:right-24">
        {totalCartItems()}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
