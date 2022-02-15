import { Navigate } from "react-router-dom";


function PrivateRoute({ children }) {

    let auth = false
    if(localStorage.token){
        auth = true
    }

    return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute