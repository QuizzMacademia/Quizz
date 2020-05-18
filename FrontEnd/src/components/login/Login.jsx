import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './Login.css'
import {useHistory} from "react-router";
import {object, string} from "yup";
import {Field, Formik} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import Row from "react-bootstrap/Row";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

const Login = ({listeUtilisateur}) => {
    const [actuelUser, setActuelUser] = useState({Login: "", password: ""});
    let history = useHistory();

    return (
        <div className={'container'}>
            <div className="login">
                <h2>Se Connecter</h2>
                <hr/>
                <Formik validationSchema={object({
                    Login: string().email().max(100).required(),
                    password: string().required().min(4).max(100),
                })}
                        initialValues={actuelUser}
                        onSubmit={(values, formikHelpers) => {
                            console.log(values);
                            console.log(formikHelpers);
                            if (listeUtilisateur[0].Login === values.Login && listeUtilisateur[0].password === values.password) {
                                console.log("OK");
                                history.push('/Accueil');
                            } else {
                                console.log(("KO"))
                            }
                        }}
                >
                    {({handleSubmit}) => (
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Field name="Login">
                                    {({field, formProps}) => (<FormGroup as={Row} controlId="Login">
                                            <FormLabel>Adresse email : </FormLabel>
                                            <FormControl type={"email"} value={field.value} onChange={field.onChange}
                                                         placeholder="Entrer votre email"/>
                                        </FormGroup>
                                    )}

                                </Field>
                                <Field name="password">
                                    {({field}) => (<FormGroup as={Row} controlId="password">
                                            <FormLabel>Mot de passe : </FormLabel>
                                            <FormControl type={"password"} value={field.value} onChange={field.onChange}
                                                         placeholder="Entrer votre mot de passe"/>
                                        </FormGroup>
                                    )}
                                </Field>

                                <Button variant="success" type={"submit"}>
                                    Valider
                                </Button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>

    )
};
export default Login;
