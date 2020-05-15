import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './Login.css'
import {fromJS} from "immutable";
import {useHistory} from "react-router";

function Login({listeUtilisateur}) {
    const [actuelUser, setActuelUser] = useState({actuelEmail:"", actuelMdp:""});
    let history = useHistory();


    const handleChangeEmail = event => {
        let newActuelUser = fromJS(actuelUser);
        newActuelUser = newActuelUser.setIn(['actuelEmail'], event.currentTarget.value);
        setActuelUser(newActuelUser.toJS());
    }

    const handleChangeMdp = event => {
        let newActuelUser = fromJS(actuelUser);
        newActuelUser = newActuelUser.setIn(['actuelMdp'], event.currentTarget.value);
        setActuelUser(newActuelUser.toJS());
    }
    const onValider = () => {
//        console.log(actuelUser.actuelEmail);
//        console.log(actuelUser.actuelMdp);
        if(listeUtilisateur[0].userEmail === actuelUser.actuelEmail && listeUtilisateur[0].userMdp === actuelUser.actuelMdp){
            console.log("OK");
            history.push('/Accueil');

//            alert("OK");
        }
        else {
            console.log(("KO"))
//            alert(("KO"));
        }
    }

    return (
        <div className="container ">
            <div className="login ">
                <h2>Se Connecter</h2>
                <hr/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse email</Form.Label>
                        <Form.Control type="email" onChange={handleChangeEmail} placeholder="Entrer votre email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" onChange={handleChangeMdp} placeholder="Entrer votre mot de passe" />
                    </Form.Group>

                    <Button variant="success" onClick={onValider} type="submit">
                        Valider
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
