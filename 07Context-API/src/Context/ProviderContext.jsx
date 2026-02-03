import { useState } from "react";
import { UserContext } from "./CreateContext";

export default function UserProvider({children}){
    const [user,setUser]=useState("Vijay")

    return(
        <UserContext.Provider value={{user,setUser}}>
          {children}
        </UserContext.Provider>
    )
}
