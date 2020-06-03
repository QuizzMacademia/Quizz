import React from "react";
import Nav from "react-bootstrap/Nav";
import './accueil.css'
import Navbar from "react-bootstrap/Navbar";

const  Menu = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand> <img
                    src="/img/macademia-icon.jpeg"
                    className="d-inline-block align-top"
                    alt={"logo-macademia"}/>
                </Navbar.Brand>
                <Nav  className="mr-auto">
                    <Nav.Link href="/Accueil">ACCUEIL</Nav.Link>
                    <Nav.Link href="/Accueil/QCM">Q.C.M</Nav.Link>
                    <Nav.Link href="/Accueil/Entrainement">S'EXERCER</Nav.Link>
                    <Nav.Link href="/Accueil/Certificat">CERTIFICAT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    );
};

export default Menu;
