import React, {useState} from 'react';
import './App.css';
import Login from "./login/login";

function App() {
    const [users, setUsers] = useState([
        {id:1, userEmail: "admin@gmail.com", userMdp: "admin"}
        ]);


  return (
    <div className="App">
      <Login listeUtilisateur={users}/>
    </div>
  );
}

export default App;
