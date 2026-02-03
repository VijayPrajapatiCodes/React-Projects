import { useContext } from "react";
import { CartContext } from "../Context/CreateContext";

const products = [
  { id: 1, name: "Shoes" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Watch" }
];

export function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name}</span>
          <button onClick={()=>addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}
