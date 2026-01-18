import React,{useState} from "react"
import Countrielist from "./Component/Couutriescurr"
import currencyInfo from "./hooks/useCurencyInfo";

function App(){
      const [currency,setcurrency]=useState("usd")
      const [con,setcon]=useState("inr")

    const curre=currencyInfo(currency);
    const currenc=Countrielist();
    return(
        <div 
  style={{ backgroundImage: "url('/theme.jpg')" }} 
  className="w-full h-screen flex justify-center items-center"
>
        <div className="w-full max-w-md shadow-md rounded-lg px-4  text-orange-500 bg-gray-700 text-center  ">
          <h1 className="font-bold text-cyan-400 text-2xl">Currency Converter</h1>
               <select value={con} onChange={(e)=>setcon(e.target.value)}>
             {currenc.map(([con,names])=>(
              <option key={con} value={con}>
                {names} ({con.toUpperCase()})
              </option>
             ))} 
        
           </select>
  
        <select  value={currency} onChange={(e)=>setcurrency(e.target.value)}>
            {currenc.map(([currency,name])=>(
               <option key={currency} value={currency}>
                {name} ({currency.toUpperCase()})
               </option>
            ))}

        </select>
      
      


<p  class="text-center text-emerald-400 font-bold mt-3 text-lg">
  Base ({currency.toUpperCase()}): {curre?.[currency] || 1}
</p>

<p  class="text-center text-emerald-400 font-bold mt-3 text-lg">
  Target ({con.toUpperCase()}): {curre?.[con] || "Loading..."}
</p>


        </div>
        </div>
    )
}

export default App;