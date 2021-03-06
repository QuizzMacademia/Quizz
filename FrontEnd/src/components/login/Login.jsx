import React, {useContext, useState} from 'react';
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
import Loader from 'react-loader-spinner';
import LoginContext from "../shared/Context/LoginContext";
import {Link} from "react-router-dom";

const Login = () => {
    const [loginError, setLoginError] = useState(false);
    const actualUser = {email: "", password: ""};
    const [isLoading, setisLoading] = useState(false);
    let history = useHistory();

    const {updateLoggedInUser, updateIsLogged} = useContext(LoginContext);

    const onSubmit = (values) => {
        setisLoading(true);
        axios.post('/login', values)
            .then(res => {
                if (res.status === 200) {
                    setisLoading(false);
                    updateLoggedInUser(values.email);
                    updateIsLogged(1);
                    localStorage.setItem('isLogged', JSON.stringify(1))
                    history.push('/Accueil');
                }
            }, (error) => {
                console.error(error);
                setLoginError(true);
                setTimeout(() => {
                    values.email = "";
                    values.password = "";
                    setLoginError(false);
                    setisLoading(false);
                }, 1000);
            })
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email doit être valide").required("Ce champs est obligatoire"),
        password: Yup.string().required("Ce champs est obligatoire").min(4, " mot de passe doit contenir au moins 3 caractères").max(18," mot de passe doit contenir au plus 18 caractères")
    });

    return (
        <div className={'container'}>
            <div className="login">
                <h2>Se Connecter</h2>
                <hr/>
                <Formik validationSchema={validationSchema}
                        initialValues={actualUser}
                        onSubmit={onSubmit}
                >
                    {({errors, touched, handleSubmit, isSubmitting}) => (
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
                            {isLoading && <Loader
                                type="Circles"
                                color="#ff4b82"
                                height={80}
                                width={80}
                                className={"loading"}
                            />}
                            <Button variant="success" type={"submit"} disabled={isLoading}>
                                Valider
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Link className="link" to={"/Inscription"}>Je m'inscris</Link>
            </div>
        </div>
    )
};

export default Login;
