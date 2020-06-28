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

const Inscription = () => {
    //const [loginError, setLoginError] = useState(false);
    const insUser = {email: "", password: "",confirmationPassword:""};
    const [isLoding, setIsLoding] = useState(false);
    let history = useHistory();
    const[message,setMessage]=useState("");
    const MOCK_Email = ["John@yahoo.fr","Angelina@yahoo.fr","Frank@gmail.fr","Nina@yahoo.fr","Jennifer@yahoo.fr"];

    const onSubmit = (values, {resetForm}) => {
        setIsLoding(true);
        console.log(values);
        let emailExist = MOCK_Email.indexOf(values.email);
        console.log(emailExist)
        debugger
        if(emailExist !== -1)

        {setMessage("Cette adresse e-mail est déjà utilisée");
            setIsLoding(false);
            history.push('/Inscription')}
        else if(emailExist === -1 && values.password === values.confirmationPassword)
        {history.push('/');
        setIsLoding(false);}
        else
        {history.push('/Inscription');
        setMessage("Mot de passe invalide");
        setIsLoding(false);}
        resetForm();
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email doit être valide").required("Ce champs est obligatoire"),
        password: Yup.string().required("Ce champs est obligatoire").min(4, " mot de passe doit contenir au moins 3 caractères").max(18," mot de passe doit contenir au plus 18 caractères"),
        confirmationPassword:Yup.string().required("Ce champs est obligatoire").min(4, " mot de passe doit contenir au moins 3 caractères").max(18," mot de passe doit contenir au plus 18 caractères")
    });

    return (
        <div className={'container'}>
            <div className="login">
                <h2>S'inscrire </h2>
                <hr/>
                <Formik validationSchema={validationSchema}
                        initialValues={insUser}
                        onSubmit={onSubmit}
                >
                    {({errors, touched, handleSubmit,isSubmitting}) => (
                        <Form onSubmit={handleSubmit}>
                            {!isLoding &&  <span style={{color: "#c3002f"}}>{message}</span>}
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
                                <ErrorMessage name="password">{msg =>
                                    <div className={'error-message'}> {msg} </div>}
                                </ErrorMessage>
                            </div>
                            <div className={"section"}>
                                <Field name="confirmationPassword">
                                    {({field}) => (<FormGroup as={Row} controlId="confirmationPassword">
                                            <FormLabel>Confirmation du mot de passe </FormLabel>
                                            <FormControl type={"password"} value={field.value} onChange={field.onChange}
                                                         placeholder="Entrer à nouveau votre mot de passe"
                                                         className={`form-control ${
                                                             touched.confirmationPassword && errors.confirmationPassword ? "is-invalid" : ""
                                                         }`}
                                            />
                                        </FormGroup>
                                    )}
                                </Field>
                                <ErrorMessage name="confirmationPassword">{msg => <div
                                    className={'error-message'}>{msg}</div>}</ErrorMessage>
                            </div>
                            {isLoding && <Loader
                                type="Circles"
                                color="#ff4b82"
                                height={80}
                                width={80}
                                className={"loading"}
                            />}
                            <Button variant="success" type={"submit"} disabled={isSubmitting}>
                                S'inscrire
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default Inscription;
