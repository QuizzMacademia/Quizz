import React from "react";
import Nav from "react-bootstrap/Nav";
import './accueil.css'

const  Menu = () => {
    return (
        <div className="nav justify-content-center menu">
            <Nav justify variant="pills" >
                <Nav.Item>
                    <Nav.Link href="/Accueil/QCM">Q.C.M</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Accueil/Entainement">S'entraîner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Accueil/Certificat">Certificat</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Menu;
