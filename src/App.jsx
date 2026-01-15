import React from 'react'
import { useState } from 'react'

const App = () => {
   const [color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-1'>
        <div className='flex flex-wrap justify-center gap-1 shadow-lg bg-white p-2 rounded-full px-2 py-1 '>
          <button className='bg-red-500 rounded-full px-3 py-1' onClick={()=>setColor("red")}>Red</button> 
          <button className='bg-yellow-500 rounded-full px-3 py-1' onClick={()=>setColor("yellow")}>Yellow</button> <button className='bg-green-500 rounded-full px-3 py-1' onClick={()=>setColor("Green")}>Green</button> 
        <button className='bg-blue-500 rounded-full px-3 py-1' onClick={()=>setColor("blue")}>Blue</button></div>
         </div>
         </div>
  )
}

export default App