import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';

// Défini l'URL de base des requètes AXIOS d'après l'environnement utilisé (prod, dev, test)
axios.defaults.baseURL = process.env.REACT_APP_BE_URL;

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
