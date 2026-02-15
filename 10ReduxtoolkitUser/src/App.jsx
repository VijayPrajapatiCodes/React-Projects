import {useSelector,useDispatch} from "react-redux"
import {login ,logout} from "./App/Auth"
import { Increment,Decrement,Reset} from "./App/Counter";
function App(){
  const dispatch=useDispatch();
  const {user,isLoggedIn}=useSelector((state)=>state.auth);
  const count=useSelector((state)=>state.counter.value)
  return (
    <>
     <h1>Authentication System</h1>
     {isLoggedIn ?(
      <>
      <p>Welcome{user}</p>
      <button onClick={()=>dispatch(logout())}>logout</button>
      </>
     ):(
     <>
     <button onClick={()=>dispatch(login("Vijay"))}>login</button>
     </>
     )}
 <hr />
  <h1>{count}</h1>
 <button onClick={()=>dispatch(Increment())}>+</button>
 <button onClick={()=>dispatch(Decrement())}>-</button>
 <button onClick={()=>dispatch(Reset())}>Reset</button>
    </>
  )
}

export default App;