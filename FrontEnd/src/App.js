import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {Switch} from "react-router";
import './App.css';
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import Accueil from "./components/accueil/Accueil";
import LoginContext from "./components/shared/Context/LoginContext";
import RequireAuth from "./components/shared/Route/RequireAuth";

function App() {

    const [loggedInUser, setLoggedInUser] = useState("");
    const [isLogged, setIsLogged] = useState(0);

    const contextLoginValue = {
        loggedInUser,
        isLogged,
        updateLoggedInUser: setLoggedInUser,
        updateIsLogged: setIsLogged
    };

    return (
        <LoginContext.Provider value={contextLoginValue}>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/Deconnexion' component={Logout}/>
                    <RequireAuth>
                        <Route path='/Accueil' component={Accueil}/>
                    </RequireAuth>
                </Switch>
            </div>
        </LoginContext.Provider>
    );
}

export default App;
