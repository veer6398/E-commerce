import React, { useContext } from "react";
import { NavLink,useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import carticon from "../Assets/cart_icon.png";
import { ShopContext } from "../context/shopcontext";


const Navbar = () => {
     const [open, setOpen] = React.useState(false)
       
           const {totalCartItems} = useContext (ShopContext);
       return (
           <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
   
               <a href="#">
                   <img className="h-8 sm:h-14" src={logo} alt="logo" />
                   <p className="text-[#171717] text-[18px] font-serif font-bold hidden lg:block mr-5">SHOPPER</p>
               </a>
   
               {/* Desktop Menu */}
               <div className="hidden mr-8 sm:flex md:text-3xl font-medium items-center gap-8 xl:gap-20">
                   <NavLink to={'/'}>Shop</NavLink>
                   <NavLink to={'/mens'}>Men</NavLink>
                   <NavLink to={'/womens'}>Women</NavLink>
                   <NavLink to={'/kids'}>Kids</NavLink>
   
                   <div className="relative xl:mr-20 cursor-pointer">
                     <NavLink to={'/cart'}> <img className="h-6 sm:h-8" src={carticon} alt="cart" />
                       <button className="absolute -top-2 -right-3 text-xs text-white bg-red-400 w-[18px] h-[18px] rounded-full">{totalCartItems()}</button></NavLink> 
                   </div>
                    <NavLink to="/logsin">
                   <button className="cursor-pointer ml-5 mr-[-80px] px-8 py-2 bg-white hover:bg-[#F8F8FF] transition border text-black rounded-full">
                       Login
                   </button></NavLink>
               </div>

               <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                   {/* Menu Icon SVG */}
                   <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <rect width="21" height="1.5" rx=".75" fill="#426287" />
                       <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                       <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                   </svg>
               </button>
   
               {/* Mobile Menu */}
               <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to={'/'}><span onClick={()=>setOpen(false)}>Shop</span></NavLink>
                   <NavLink to={'/mens'}><span onClick={()=>setOpen(false)}>Men</span></NavLink>
                   <NavLink to={'/womens'}><span onClick={()=>setOpen(false)}>Women</span></NavLink>
                   <NavLink to={'/kids'}><span onClick={()=>setOpen(false)}>Kids</span></NavLink>
                   <NavLink to="/logsin">
                   <button  onClick={()=>setOpen(false)} className="cursor-pointer px-6 py-2 mt-2 bg-white hover:bg-[#F8F8FF] border transition text-black rounded-full text-sm">
                       Login
                   </button>
                   </NavLink>
               </div>
   
           </nav>
       )
};

export default Navbar;
