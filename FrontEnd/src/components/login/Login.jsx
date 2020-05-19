import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './Login.css'
import {useHistory} from "react-router";
import {object, string} from "yup";
import {ErrorMessage, Field, Formik} from "formik";
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
                    Login: string().email().required(),
                    password: string().required().min(4).max(18)
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
                    {({errors, touched, handleSubmit}) => (
                        <Form  onSubmit={handleSubmit}>
                            <div className={"section"}>
                                <Field name="Login">
                                    {({field}) => (<FormGroup as={Row} controlId="Login">
                                            <FormLabel>Adresse email : </FormLabel>
                                            <FormControl value={field.value} onChange={field.onChange}
                                                         placeholder="Entrer votre email"
                                                         className={`form-control ${
                                                             touched.Login && errors.Login ? "is-invalid" : ""
                                                         }`}
                                            />
                                        </FormGroup>
                                    )}
                                </Field>
                                <ErrorMessage name="Login">{msg => <div className={'error-message'}>{msg}</div>}</ErrorMessage>
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
