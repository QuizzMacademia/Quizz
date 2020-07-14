import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './Login.css'
import {useHistory} from "react-router";
import {ErrorMessage, Field, Formik} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import Row from "react-bootstrap/Row";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';
import axios from "axios";

const Inscription = () => {
    //const [loginError, setLoginError] = useState(false);
    const insUser = {email: "", password: "",passwordConfirmation:""};
    const [isLoding, setIsLoding] = useState(false);
    let history = useHistory();
    const[message,setMessage]=useState("");
    const MOCK_Email = ["John@yahoo.fr","Angelina@yahoo.fr","Frank@gmail.fr","Nina@yahoo.fr","Jennifer@yahoo.fr"];

    const onSubmit = (values, {resetForm}) => {
        setIsLoding(true);
        console.log(values);
        axios.post('/register', values)
            .then((res, rej)=> {
                debugger
                console.log(res);
                console.log(rej.statusText);
                if (res.status === 200) {
                    history.push('/');
                    console.log("200")
                }


                })
            .catch((e)=>{
                console.log("400");
                console.log(e.response.status);
                if(e.response.status === 400)
                    setMessage("Cette adresse e-mail est déjà utilisée");
                else
                    setMessage("Les deux mots de passent ne correspondent pas!");

            });

        resetForm();
        setIsLoding(false);
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email doit être valide").required("Ce champs est obligatoire"),
        password: Yup.string().required("Ce champs est obligatoire").min(8, " mot de passe doit contenir au moins 8 caractères").max(20," mot de passe doit contenir au plus 20 caractères"),
        passwordConfirmation:Yup.string().required("Ce champs est obligatoire").min(8, " mot de passe doit contenir au moins 8 caractères").max(20," mot de passe doit contenir au plus 20 caractères")
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
                                <Field name="passwordConfirmation">
                                    {({field}) => (<FormGroup as={Row} controlId="passwordConfirmation">
                                            <FormLabel>Confirmation du mot de passe </FormLabel>
                                            <FormControl type={"password"} value={field.value} onChange={field.onChange}
                                                         placeholder="Entrer à nouveau votre mot de passe"
                                                         className={`form-control ${
                                                             touched.passwordConfirmation && errors.passwordConfirmation ? "is-invalid" : ""
                                                         }`}
                                            />
                                        </FormGroup>
                                    )}
                                </Field>
                                <ErrorMessage name="passwordConfirmation">{msg => <div
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
