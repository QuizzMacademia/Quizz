import React from "react";
import Nav from "react-bootstrap/Nav";
import './accueil.css'
import {Route, Link} from "react-router-dom";
import Training from "./Training";

const  Menu = () => {
    return (
        <div className="nav justify-content-center menu">
            {/*            <Nav justify variant="pills" >
                <Nav.Item>
                    <Nav.Link href="/Accueil/QCM">Q.C.M</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Accueil/Entainement">S'Entrainer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Accueil/Certificat">Certificat</Nav.Link>
                </Nav.Item>
            </Nav>*/}
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/Accueil">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/Accueil/QCM">Q.C.M</Link>
                    </li>
                    <li>
                        <Link to="/Accueil/Entainement">S'Entrainer</Link>
                    </li>
                    <li>
                        <Link to="/Accueil/Certificat">Certificat</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
