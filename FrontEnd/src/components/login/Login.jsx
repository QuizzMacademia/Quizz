import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './Login.css'
import {useHistory} from "react-router";
import {ErrorMessage, Field, Formik} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import Row from "react-bootstrap/Row";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import * as Yup from 'yup';

const Login = () => {
    const [loginError, setLoginError] = useState(false);
    const actualUser = {email: "", password: ""};

    let history = useHistory();

    const onSubmit = (values) => {
        axios.post('/login', values)
            .then(res => {
                if (res.status === 200) {
                    history.push('/Accueil');
                }
            }, (error) => {
                console.error(error);
                setLoginError(true);
                setTimeout(() => {
                    values.email = "";
                    values.password = "";
                    setLoginError(false);
                }, 2000);
            })
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password:Yup.string().required().min(4).max(18)
    })

    return (
        <div className={'container'}>
            <div className="login">
                <h2>Se Connecter</h2>
                <hr/>
                <Formik validationSchema={validationSchema}
                        initialValues={actualUser}
                        onSubmit={onSubmit}
                >
                    {({errors, touched, handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            {loginError && <span style={{color: "#c3002f"}}>Email ou Mot de passe incorrecte</span>}
                            <div className={"section"}>
                                <Field name="email">
                                    {({field}) => (<FormGroup as={Row} controlId="email">
                                            <FormLabel>Adresse email : </FormLabel>
                                            <FormControl value={field.value} onChange={field.onChange}
                                                         placeholder="Entrer votre email"
                                                         className={`form-control ${
                                                             touched.email && errors.email ? "is-invalid" : ""
                                                         }`}
                                            />
                                        </FormGroup>
                                    )}
                                </Field>
                                <ErrorMessage name="email">{msg => <div
                                    className={'error-message'}>{msg}</div>}</ErrorMessage>
                            </div>
                            <div className={"section"}>
                                <Field name="password">
                                    {({field}) => (<FormGroup as={Row} controlId="password">
                                            <FormLabel>Mot de passe : </FormLabel>
                                            <FormControl type={"password"} value={field.value} onChange={field.onChange}
                                                         placeholder="Entrer votre mot de passe"
                                                         className={`form-control ${
                                                             touched.password && errors.password ? "is-invalid" : ""
                                                         }`}
                                            />
                                        </FormGroup>
                                    )}
                                </Field>
                                <ErrorMessage name="password">{msg => <div
                                    className={'error-message'}>{msg}</div>}</ErrorMessage>
                            </div>

                            <Button variant="success" type={"submit"}>
                                Valider
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default Login;
