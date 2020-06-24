import React, {useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
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

    const RequireAuth = ({children}) => {
        if (!isLogged) {
            return <Redirect to={'/'}/>;
        }
        return children;
    };

    return (
        <LoginContext.Provider value={contextLoginValue}>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <RequireAuth>
                        <Route path='/Accueil' component={Accueil}/>
                    </RequireAuth>
                </Switch>
            </div>
        </LoginContext.Provider>
    );
}

export default App;
