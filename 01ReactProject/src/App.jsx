import { useState } from "react"

function App(){
 let [count,setCount]=useState(1)

 const addValue=()=>{
   
        setCount(prevCount=>prevCount+1)
        setCount(prevCount=>prevCount+1)
        setCount(prevCount=>prevCount+1)
        setCount(prevCount=>prevCount+1)
 }

   const removeValue=()=>{
    if(count>=1){
      setCount(count-1)
    }else{
      alert("limit is exceed")
    }
   }
 
  return(

 <>
 <button onClick={addValue}>Add </button>
 <h1>Counter value is : {count}</h1>
 <button onClick={removeValue}>Remove</button>
 <h1>{count}</h1>

 <p>{count}</p>
 </>
  )
}

export default App