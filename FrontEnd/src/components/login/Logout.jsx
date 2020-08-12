import React, {useContext, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import './Login.css'
import LoginContext from "../shared/Context/LoginContext";
import {Link} from "react-router-dom";

const Logout = () => {
    const {updateLoggedInUser, updateIsLogged} = useContext(LoginContext);

    useEffect(() => {
        console.log("useEffect IN !!!");
        updateLoggedInUser("");
        updateIsLogged(0);
        localStorage.removeItem("isLogged")
    }, []);

    return (
        <div className={'container'}>
            <div className="login">
                <h2>Déconnexion</h2>
                <hr/>
                <div style={{padding: "5px"}}>
                    <p style={{textAlign: "center", color: "black"}}>Vous avez bien été déconnecté.</p>
                    <p style={{textAlign: "center", color: "black"}}>Merci pour votre visite, A bientôt</p>
                </div>
                <Link to={"/"}>
                <Button variant="success" type={"button"}>
                    Retour Login
                </Button>
                </Link>
            </div>
        </div>
    )
};

export default Logout;
