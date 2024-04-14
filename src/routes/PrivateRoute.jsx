import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) =>{
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
            console.log(location.pathname);
 
    if (loading) {
        return <span className="loading loading-spinner loading-lg justify-center items-center ml-[650px] mt-44"></span>
    }
    if (user) {
        return children;
        
    }

    return <Navigate state={location.pathname} to='/yourAccountLogin'></Navigate>
};

export default PrivateRoute;