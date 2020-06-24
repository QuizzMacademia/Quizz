import React, {useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Switch} from "react-router";
import Login from "./components/login/Login";
import Accueil from "./components/accueil/Accueil";
import LoginContext from "./components/shared/Context/LoginContext";

function App() {

    const [loggedInUser, setLoggedInUser] = useState("");
    const [isLogged, setIsLogged] = useState(false);

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
                    <Route path='/Accueil' component={Accueil}/>
                </Switch>
            </div>
        </LoginContext.Provider>
    );
}

export default App;
