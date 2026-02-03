import { useState } from "react";
import {CartContext} from "./CartContext"

  export default function CartProvider({children}){
         const [cart,setCart]=useState([]);
         const addToCart=(item)=>{
                setCart(prev=>[...prev,item]);
         }
        const removeToCart=(id)=>{
            setCart(prev=>prev.filter(item=>item.id!==id))
        };
        const clearToCart=()=>{
             setCart([]);
        }

    return(
        <>
           <CartContext.Provider value={{cart,addToCart,removeToCart,clearToCart}}>
            {children}
           </CartContext.Provider>
        </>
    )
 }

