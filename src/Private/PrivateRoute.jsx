/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
   const {user,isLoading} = useAuth()
   if(isLoading){
    return <div className="text-center pt-[20%] mx-auto max-w-xs"><span className="loading loading-bars loading-lg"></span></div>
   }
   if(user){
    return children
   }
  return <Navigate  to={'/login'}></Navigate>
};

export default PrivateRoute;