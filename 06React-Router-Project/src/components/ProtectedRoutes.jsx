import { Navigate } from "react-router-dom";
function ProtectedRoutes({children}){
     const isLogin=true;
     
     if(!isLogin){
        return <Navigate to="/" replace/>;

     }
     return children;
   
        
    
}
export default ProtectedRoutes;