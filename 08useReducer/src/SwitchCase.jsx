import { useReducer } from "react"
const Actions={
    Increament:"Increament",
    Decreament:"Decreament",
    Reset:"Reset"
}
const reducer=(state,action)=>{
       switch(action.type){
        case Actions.Increament:
        return state<20?state+1:state;

        case Actions.Decreament:
            return state>0?state-1:state;
        
        case Actions.Reset:
            return action.payload??5;  
       }
}

 function SwitchCase(){
    const[count,dispatch]=useReducer(reducer,0);
    return(
        <>
         <button onClick={()=>dispatch({type:"Increament"})}>Increament</button>
         <button onClick={()=>dispatch({type:"Decreament"})}>Decreament</button>
         <button onClick={()=>dispatch({type:"Reset",payload:5})}> Reset</button>
         <h1>{count}</h1>
        </>
    )
}
export default SwitchCase;