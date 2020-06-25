import React, {useContext} from "react";
import {Redirect} from "react-router";
import LoginContext from "../Context/LoginContext";

const RequireAuth = ({children}) => {
    const {isLogged, updateIsLogged} = useContext(LoginContext);

    if (! isLogged) {
        if(+localStorage.getItem('isLogged') === 1) {
            updateIsLogged(+localStorage.getItem('isLogged') || 0);
            return children;
        }
        return <Redirect to={'/'} />;
    } else {
        return children;
    }
};

export default RequireAuth;
