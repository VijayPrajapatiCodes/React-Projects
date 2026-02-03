import {  useReducer } from "react"

   const reducer=(state,action)=>{
    console.log(state,action);
    
     if(action.type==="Increament"){
      return state <20 ? state+1:state;
     }
     if(action.type==="Decreament"){
      return state >0 ?state-1:state;
     }
     if(action.type==="Reset"){
      return action.payload??5;
     }
     return state;
   }
export default function App(){
  const [count,dispatch]=useReducer(reducer,0)
  return(
    <> 
      
    <div>
      <h1>{count}</h1>
      <button disabled={count>=20} onClick={()=>dispatch({type:"Increament"})}>Increament</button>
      <button disabled={count<=0} onClick={()=>dispatch({type:"Decreament"})}>Decreamnent</button>
      <button onClick={()=>dispatch({type:"Reset",payload:5})}>Reset</button>
    </div>
    </>
  )
}