import React from "react";
import './accueil.css'
import {Route} from "react-router-dom";
import Training from "./Training";
import Menu from "./menu";
import {Switch} from "react-router";
import Certificat from "./certificat";
import Home from "./home";
import Footer from "./footer";
import UserChoiceExercising from "./UserChoiceExercising";

const Accueil = () => {
    return (
        <div>
            <Menu/>
            <div id={"main"}>
                <Switch>
                    <Route exact path='/Accueil' component={Home}/>
                    <Route exact path='/Accueil/Entrainement' component={Training}/>
                    <Route exact path='/Accueil/QCM' component={UserChoiceExercising}/>
                    <Route exact path='/Accueil/Certificat' component={Certificat}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
};

export default Accueil;
