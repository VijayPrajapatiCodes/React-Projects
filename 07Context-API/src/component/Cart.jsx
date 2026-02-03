import { useContext } from "react";
import { CartContext } from "../Context/CreateContext";

export function Cart() {
  const { cart, removeToCart, clearToCart } = useContext(CartContext);

  return (
    <div>
      <h3>Cart</h3>

      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={()=>removeToCart(item.id)}>X</button>
        </div>
      ))}

      <button onClick={clearToCart}>Clear All</button>
    </div>
  );
}
