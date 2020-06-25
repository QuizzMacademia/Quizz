import React, {useContext} from "react";
import {Redirect} from "react-router";
import LoginContext from "../Context/LoginContext";

const RequireAuth = ({children}) => {
    const {isLogged} = useContext(LoginContext);

//    const isLogged =  parseInt(localStorage.getItem('isLogged'));
    console.log(typeof(isLogged))

    if (isLogged == 0) {
        return <Redirect to={'/'}/>;
    }
    return children;
};

export default RequireAuth;
