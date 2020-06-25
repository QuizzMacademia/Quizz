import React, {memo} from "react";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './accueil.css'

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
                    <Link className="link" to={"/Accueil"}>ACCUEIL</Link>
                    <Link className="link" to={"/Accueil/QCM"}>Q.C.M</Link>
                    <Link className="link" to={"/Accueil/Entrainement"}>S'EXERCER</Link>
                    <Link className="link" to={"/Accueil/Certificat"}>Certif</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default memo(Menu);
