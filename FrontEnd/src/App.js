import React, {useState} from 'react';
import './App.css';
import Login from "./components/login/Login";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Accueil from "./components/accueil/Accueil";
import Training from "./components/accueil/Training";

function App() {
    const [users, setUsers] = useState([
        {id:1, userEmail: "admin@gmail.com", userMdp: "admin"}
        ]);


  return (
      <Switch>
    <div className="App">
        <Route exact path='/' render={() => <Login listeUtilisateur={users} />}/>
        <Route exact path='/Accueil' component={Accueil} />

    </div>
      </Switch>
  );
}

export default App;
