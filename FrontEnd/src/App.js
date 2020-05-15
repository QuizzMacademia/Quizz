import React, {useState} from 'react';
import './App.css';
import Login from "./components/login/Login";
import { Route } from 'react-router-dom';
import Accueil from "./components/accueil/Accueil";

import {Switch} from "react-router";

function App() {
    const [users, setUsers] = useState([
        {id:1, userEmail: "admin@gmail.com", userMdp: "admin"}
        ]);


  return (
      <div className="App">
          {/*          <Route exact path='/' render={() => <Login listeUtilisateur={users}/>}/>
          <Route exact path='/Accueil' component={Accueil}/> */}
          <Switch>
              <Route exact path='/' render={() => <Login listeUtilisateur={users}/>}/>
              <Route path='/Accueil' component={Accueil}/>
          </Switch>
      </div>

  );
}

export default App;
