import React, {Fragment} from "react";
import './accueil.css'
import {Route} from "react-router-dom";
import Training from "./Training";
import Menu from "./menu";
import {Switch} from "react-router";
import Certificat from "./certificat";

const Accueil = () => {
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path='/Accueil' render={() => <Fragment>
                                                                <div className="question">
                                                                    <h4>Bienvenue </h4>
                                                                </div>
                                                            </Fragment>}/>
                <Route exact path='/Accueil/Entainement' component={Training}/>
                <Route exact path='/Accueil/QCM' render={() => <h1> Q C M</h1>}/>
                <Route exact path='/Accueil/Certificat' component={Certificat}/>
            </Switch>
        </div>
    );
};

export default Accueil;
