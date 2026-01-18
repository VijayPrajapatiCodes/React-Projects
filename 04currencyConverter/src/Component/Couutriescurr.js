import {useEffect, useState } from "react";
function Countrielist(){
    const [list,setlist]=useState([])
   useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
`)
.then((res)=>res.json())
.then((res)=>setlist(Object.entries(res)))
.catch((error)=>console.log(error));

   },[])
 return list 
}

export default Countrielist;