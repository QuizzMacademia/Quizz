import React from 'react';
import './App.css';
import Login from "./components/login/Login";
import { Route } from 'react-router-dom';
import Accueil from "./components/accueil/Accueil";

import {Switch} from "react-router";

function App() {

  return (
      <div className="App">
          <Switch>
              <Route exact path='/' render={() => <Login/>}/>
              <Route path='/Accueil' component={Accueil}/>
          </Switch>
      </div>
  );
}

export default App;
