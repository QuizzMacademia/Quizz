import React from "react";

export default React.createContext({
    loggedInUser: "",
    isLogged: 0,
    updateLoggedInUser: user => {},
    updateIsLogged: loggedState => {}
});
