import React from "react";
import hero from '../Assets/hero_image.png'
const Hero = () =>{

    return(<header>
    <div className="flex pt-3 xl:pt-0 md:pl-5" 
    style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
            <div className="flex-1 flex flex-col items-center  justify-center">
                <h2 className="xl:text-[53px] md:text-5xl text-[20px] ml-4 md:ml-0 font-bold text-[#090909]">NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="flex flex-col items-start ">
                        <p className="md:text-[90px] text-[30px] font-bold text-[#171717]">new</p>
                        <p className="md:text-[90px] text-[30px] font-bold text-[#171717]">collections</p>
                    <p className="md:text-[90px] text-[30px] font-bold text-[#171717]">for everyone</p>
                    </div>
                    
                </div>
                <div>
                    <div className="flex justify-center items-center bg-[#ff4141] text-white font-medium text-[18px] w-[180px] h-[40px] rounded-3xl md:h-20 md:w-[350px] md:text-4xl md:rounded-[50px] xl:w-[310px] xl:h-[70px] xl:rounded-[75px] mt-[30px]">
                        Latest Collections
                    </div>
                </div>
            </div>
            <div className="flex-1 flex pt-9 items-center justify-center">
                    <img src={hero} className='h-[100%] md:h-[80%]' alt="Hero img" />
            </div>
    </div>
    </header>
   )
}

export default Hero