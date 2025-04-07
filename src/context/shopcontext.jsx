import React, {createContext, useState} from 'react';
import allproduct from '../Assets/all_product'

export const ShopContext = createContext(null);
   
const getCart = () => {
        let cart = {};
        for (let i = 0; i < allproduct.length+1; i++) {
            cart[i] = 0;
        }

        return cart;
    }

const ShopContextProvider = (props) => {
        const [cartItems, setCartItems] = useState(getCart());
        
 

    const addToCart = (ItemId) => {
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
    }

    const removeFromCart = (ItemId) => {
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

    const totalCart =()=>{
       let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = allproduct.find((proudct)=>proudct.id===Number(item))
                totalAmount +=itemInfo.new_price*cartItems[item];
            }
               
        }
         return totalAmount
    }

    const totalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+= cartItems[item];
            }
        } return totalItem
    }
    
    const contextValue = {totalCartItems, totalCart, allproduct, cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;