import React from "react";

export default React.createContext({
    loggedInUser: "",
    isLogged: false,
    updateLoggedInUser: user => {},
    updateIsLogged: loggedState => {}
});
