import React, {useState} from "react";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './accueil.css'
import UserChoiceQcm from "../qcm/UserChoiceQcm";
import UserChoiceExercising from "../training/UserChoiceExercising";

const  Menu = () => {
    const [showModalQCM, setShowModalQCM] = useState(false);
    const [showModalExercising, setShowModalExercising] = useState(false);

    const funcShowModalQCM = () => {
        setShowModalQCM(true)
    }

    const funcDisabledModalQCM = () => {
        setShowModalQCM(false)
    }

    const funcShowModalExercising = () => {
        setShowModalExercising(true)
    }

    const funcDisabledModalExercising = () => {
        setShowModalExercising(false)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand> <img
                    src="/img/Macademia-logo.svg"
                    className="d-inline-block align-top"
                    alt={"logo-macademia"}/>
                </Navbar.Brand>
                <Nav  className="mr-auto">
                    <Link className="link" to={"/Accueil"}>ACCUEIL</Link>
                    <Link className="link" onClick={funcShowModalQCM}>Q.C.M</Link>
                    <Link className="link" onClick={funcShowModalExercising}>S'EXERCER</Link>
                    <Link className="link" to={"/Accueil/Certificat"}>CERTIFICATION</Link>
                    <Link className="link" to={"/Deconnexion"}><img
                        src="/img/Logout.svg"
                        alt={"Déconnection de l'application"}/>
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            {showModalQCM && <UserChoiceQcm disabledModal={funcDisabledModalQCM}/>}
            {showModalExercising && <UserChoiceExercising disabledModal={funcDisabledModalExercising}/>}
        </>
    );
};

export default Menu;
