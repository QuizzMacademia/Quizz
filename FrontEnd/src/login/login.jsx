import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './login.css'
import Col from "react-bootstrap/Col";


function Login({email, mdp, onClick}) {
    return (
        <div className="container ">
            <div className="login ">
                <h2>Se Connecter</h2>
                <hr/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
