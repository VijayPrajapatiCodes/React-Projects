import React from "react";
import  Nav  from "./component/Nav";
import CartProvider from "./Context/CartProvider"

 function App(){
  return(
    <>
    <CartProvider>
      <Nav/>
    </CartProvider>
    </>
  )
}

export default App;