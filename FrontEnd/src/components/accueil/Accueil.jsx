import React, {memo} from "react";
import {Route} from "react-router-dom";
import {Switch} from "react-router";
import './accueil.css'
import Menu from "./menu";
import Certificat from "../certificat/certificat";
import Home from "./home";
import Footer from "./footer";
import UserChoiceExercising from "../training/UserChoiceExercising";
import Training from "../training/Training";
import Qcm from "../qcm/Qcm";
import UserChoiceQcm from "../qcm/UserChoiceQcm";
import RequireAuth from "../shared/Route/RequireAuth";

const Accueil = () => {
    return (
        <div>
            <Menu/>
            <div id={"main"}>
                <Switch>
                    <RequireAuth>
                        <Route exact path='/Accueil' component={Home}/>
                        <Route exact path='/Accueil/Entrainement' component={UserChoiceExercising}/>
                        <Route exact path='/Accueil/Entrainement/:id' component={Training}/>
                        <Route exact path='/Accueil/QCM' component={UserChoiceQcm}/>
                        <Route exact path='/Accueil/QCM/:id' component={Qcm}/>
                        <Route exact path='/Accueil/Certificat' component={Certificat}/>
                    </RequireAuth>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
};

export default memo(Accueil);
