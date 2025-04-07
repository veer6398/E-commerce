import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {

    return (
        <div className="w-[350px] hover:scale-[1.03] duration-[0.6s]">
          <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p className="my-[6]">{props.name}</p>
            <div className="flex gap-[20px]">
                <div className="text-[#374151] text-[18px] font-semibold">
                    {props.new_price}
                </div>
                <div className="text-[#8c8c8c] line-through text-[18px] font-semibold">
                    {props.old_price}
                </div>
            </div>
        </div>
        
    )
    
}

export default Items