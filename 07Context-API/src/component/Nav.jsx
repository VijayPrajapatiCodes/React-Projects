import { useContext } from "react";
import {CartContext} from "../Context/CartContext";

function Nav(){
    const {cart}=useContext(CartContext);

    return(
        <>
        <div>
               <h2>Shop</h2>
      <span>🛒 {cart.length}</span>
        </div>
        </>
    )
}

export default Nav;