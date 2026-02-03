import React from "react";
import {NavLink} from "react-router-dom"
function Header(){
    return(
        <>
        <header className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="max-w-7xl flex  items-center py-4 px-4">
                <h1 className="text-xl font-bold">VijayShop</h1>
             <nav className="mx-auto space-x-12 ">
               <NavLink to="/" className={({isActive})=>
               isActive ?  "text-yellow-300 font-bold" : "text-white font-bold"
                }>Home</NavLink>
               <NavLink to="/service" className={({isActive})=>
               isActive ?  "text-yellow-300 font-bold" : "text-white font-bold"
                }>Service</NavLink>
               <NavLink to="/pricing" className={({isActive})=>
               isActive ?  "text-yellow-300 font-bold" : "text-white font-bold"
                }>Pricing</NavLink>
                <NavLink to="/contact" className={({isActive})=>
               isActive ?  "text-yellow-300 font-bold" : "text-white font-bold"
                }>Contact Us</NavLink>
                <NavLink to="/about" className={({isActive})=>
               isActive ?  "text-yellow-300 font-bold" : "text-white font-bold"
                }>About Us</NavLink>
             </nav>
             <button className="p-2 bg-amber-400 text-xl font-black rounded-lg">Login</button>
            </div>
        </header>
        </>
    )
}

export default Header;