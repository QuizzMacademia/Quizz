import React from "react";
import './accueil.css'
import {Route} from "react-router-dom";
import Menu from "./menu";
import {Switch} from "react-router";
import Certificat from "../certificat/certificat";
import Home from "./home";
import Footer from "./footer";
import UserChoiceExercising from "../training/UserChoiceExercising";
import Training from "../training/Training";

const Accueil = () => {
    return (
        <div>
            <Menu/>
            <div id={"main"}>
                <Switch>
                    <Route exact path='/Accueil' component={Home}/>
                    <Route exact path='/Accueil/Entrainement' component={UserChoiceExercising}/>
                    <Route exact path='/Accueil/Entrainement/:id' component={Training}/>
                    <Route exact path='/Accueil/QCM' render={() => <h1> Q C M</h1>}/>
                    <Route exact path='/Accueil/Certificat' component={Certificat}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
};

export default Accueil;
