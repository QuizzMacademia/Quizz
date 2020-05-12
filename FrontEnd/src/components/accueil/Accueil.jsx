import React from "react";
import Nav from "react-bootstrap/Nav";
import './accueil.css'
import {BrowserRouter as Switch, Route} from "react-router-dom";
import Login from "../login/Login";
import Training from "./Training";
import Menu from "./menu";

const  Accueil = () => {
    return (
        <Switch>
            <div >
                <Menu/>
                <Route exact path='/Accueil/QCM' component={Training} />
                <Route exact path='/Accueil/Entainement' component={Training} />
                <Route exact path='/Accueil/Certificat' component={Training} />
            </div>
        </Switch>

    );
};

export default Accueil;
