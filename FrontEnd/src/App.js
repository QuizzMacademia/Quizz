import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {Switch} from "react-router";
import './App.css';
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import Accueil from "./components/accueil/Accueil";
import LoginContext from "./components/shared/Context/LoginContext";
import RequireAuth from "./components/shared/Route/RequireAuth";
import Inscription from "./components/login/inscription";
import QuizzContext from "./components/shared/Context/QuizzContext";

function App() {

    const [loggedInUser, setLoggedInUser] = useState("");
    const [isLogged, setIsLogged] = useState(0);
    const [quizzTheme, setQuizzTheme] = useState("");
    const [quizzId, setQuizzId] = useState(null);

    const contextLoginValue = {
        loggedInUser,
        isLogged,
        updateLoggedInUser: setLoggedInUser,
        updateIsLogged: setIsLogged
    };

    const contextQuizzValue = {
        quizzTheme,
        quizzId,
        updateQuizzTheme: setQuizzTheme,
        updateQuizzId: setQuizzId
    };

    return (
        <QuizzContext.Provider value={contextQuizzValue}>
            <LoginContext.Provider value={contextLoginValue}>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/Deconnexion' component={Logout}/>
                        <Route exact path='/Inscription' component={Inscription}/>
                        <RequireAuth>
                            <Route path='/Accueil' component={Accueil}/>
                        </RequireAuth>
                    </Switch>
                </div>
            </LoginContext.Provider>
        </QuizzContext.Provider>
    );
}

export default App;
