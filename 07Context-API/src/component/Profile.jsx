import { useContext } from "react";
import { UserContext } from "../Context/CreateContext";
 export function Profile(){
    const {user,setUser}=useContext(UserContext);
    return(
        <>
        <h1>Hello {user}</h1>
        <button onClick={()=>setUser("Mr Vijay Prajapati")}
            >Change Name</button>
        </>
    )
 }