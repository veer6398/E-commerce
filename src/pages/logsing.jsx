
import React from "react";
import { useState } from "react";


const Logsin = () => {

    return(
        <div className="w-full bg-[#fce3fe] py-16  mb-6">
            <div className="bg-white m-auto md:px-10 px-3 rounded-2xl py-8 md:w-lg md:h-[580px] w-[85%]">
                <h1 className="mx-5 font-bold text-2xl">Sign Up</h1>
                <div className="flex flex-col gap-8 mt-8">
                    <input className="border pl-1.5 h-10 text-[14px] w-[80%] md:w-[98%] mx-auto md:h-14 md:text-[18px] rounded-[10px]" type="text" placeholder="Your Name"/>
                    <input className="border pl-1.5 h-10 text-[14px] w-[80%] md:w-[98%] mx-auto md:h-14 md:text-[18px] rounded-[10px]" type="email" placeholder="Email Address"/>
                    <input className="border pl-1.5 h-10 text-[14px] w-[80%] md:w-[98%] mx-auto md:h-14 md:text-[18px] rounded-[10px]" type="password" placeholder="Password"/>
                </div>
                <button className="md:w-full ml-8 rounded-2xl mt-7 md:text-2xl text-[14px] md:mx-auto font-medium cursor-pointer text-white bg-[#ff4141] w-[80%]  h-10 md:h-[60px]">Continue</button>
                <p className="mt-5 text-[18px] ml-4 font-medium text-gray-600">Already have an Account
                     <span className="ml-2 font-bold text-[#e93737]">Login Here</span></p>
                <div className="flex items-center gap-5">
                    <input className="mt-6" type="checkbox" name="" id="" />
                    <p className=" mt-6 font-medium ">By continuing I agree to the terms & conditions.</p>
                </div>
            </div>
        </div>
    )
}

export default Logsin