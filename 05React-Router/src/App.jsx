import React from "react"

function App(){
  return(
    <>
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">VijayShop</h1>
              <div className="max-w-lg mx-auto justify-center items-center"> 
                <nav className="space-x-12 ">
                   <a className="px-2 py-2 bg-red-400 rounded-lg">Home</a>
                   <a className="px-2 py-2 bg-red-400 rounded-lg">Shopping</a>
                   <a className="px-2 py-2 bg-red-400 rounded-lg">About Us</a>
                   <a className="px-2 py-2 bg-red-400 rounded-lg">Customer Service</a>
                   
                </nav> 
                 <button className="">Login</button>
                </div>
          </nav>
        </div>
      </header>
    </>
  )
} 

export default App
