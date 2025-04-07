import React, { useContext }  from "react";
import { ShopContext } from "../context/shopcontext";
import { useParams } from "react-router-dom";
import Info from "./info";
import Display from "./prodisplay";

const Products = () => {
    
    const {allproduct} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allproduct.find((item)=> item.id === Number(productId));

     return (
         <div>
            <Info product={product}/>
            <Display product={product}/>
            
         </div>
     )
}

export default Products