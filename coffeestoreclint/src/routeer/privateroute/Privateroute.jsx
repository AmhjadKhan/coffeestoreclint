import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({children}) => {
    const {user} = useContext(AuthContext);

    const location = useLocation()
    console.log(location.pathname)

    if(user){
        return children;
    }
  return <Navigate state={location.pathname} to='/singin'></Navigate>
}
export default Privateroute
