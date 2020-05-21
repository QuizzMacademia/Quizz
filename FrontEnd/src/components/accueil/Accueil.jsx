import React from "react";
import './accueil.css'
import {Route} from "react-router-dom";
import Training from "./Training";
import Menu from "./menu";
import {Switch} from "react-router";
import Certificat from "./certificat";
import Home from "./home";

const Accueil = () => {
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path='/Accueil' component ={Home}/>
                <Route exact path='/Accueil/Entainement' component={Training}/>
                <Route exact path='/Accueil/QCM' render={() => <h1> Q C M</h1>}/>
                <Route exact path='/Accueil/Certificat' component={Certificat}/>
            </Switch>
        </div>
    );
};

export default Accueil;
