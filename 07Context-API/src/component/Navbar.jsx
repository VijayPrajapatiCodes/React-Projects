import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export function Navbar(){
    const {user,login,logout}=useContext(AuthContext);
    return(
        <>
         <div className="">
           <h1>My app</h1>
           { user ? (
            <>
            <span>{user.name}</span>
            <button onClick={logout}>Logout</button>
            </>
           ):(
            <button onClick={()=>login("Vijay")}>Login</button>
           )}

         </div>
        </>
    )
}   