import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './UserChoiceExercising.css';
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useHistory} from "react-router";

function UserChoiceExercising() {

//  Déclaration des variables utilisées dans le component
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messageError, setMessageError] = useState(false);
    let history = useHistory();

//  Envoi le choix de l'utilisateur pour son questionnaire d'entrainement (sujet et niveau) au backend
//  En retour le backend, retourne l'ID du questionnaire générer pour l'utilisateur
    const handleSubmit = (values, {resetForm}) => {
        setIsLoading(true);
        axios.post('/quizz/generate', null, {params: values})
            .then(res => {
                if (res.status === 200) {
//  Suite au retour du backend, switch sur le component affichant la première question
                    setIsLoading(false);
                    history.push({pathname: `/Accueil/Entrainement/${res.data}`});
                }
            }, (error) => {
                console.error(error);
                setMessageError(true);
                setIsLoading(false);
                resetForm();
            });
        resetForm();
        setIsLoading(true);
    };

//  Permet d'informer l'utilisateur des champs obligatoires dans le formulaire
    const validationSchema = Yup.object().shape({
        theme: Yup.string().required("Sélectionner un sujet d'entrainement."),
        level: Yup.string().required("Sélectionner un niveau d'entrainement.")
    });

//  Permet d'initialiser le formulaire à ses valeurs par default
    const initialValues = {
        type:"EXERCISING",
        theme: "",
        level: ""
    };

//  Ajoute les valeurs suivantes dans la liste des sujet de choix pour l'utilisateur.
    const MOCK_SUJET = [
        {value: "", label: "Choisir un sujet"},
        {value: "Javascript", label: "JavaScript"},
        {value: "Java", label: "Java"},
        {value: "Python", label: "Python"}
    ];

//  Ajoute les valeurs suivantes dans la liste des niveaux de choix pour l'utilisateur.
    const MOCK_LEVEL = [
        {value: "", label: "Choisir un niveau"},
        {value: "1", label: "1"},
        {value: "2", label: "2"},
        {value: "3", label: "3"},
        {value: "4", label: "4"},
        {value: "5", label: "5"},
        {value: "6", label: "6"}
    ];

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <span className={"modalStyle"}>
                <Modal.Header closeButton>
                    <Modal.Title>Choisissez le sujet et le niveau de votre entrainement.</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding: "30px 20px"}}>
                    {messageError &&
                    <div style={{textAlign: "center", color:"red"}}>Une erreur technique est survenue</div>}
                       <Formik
                            validationSchema={validationSchema}
                            initialValues={initialValues}
                            onSubmit={handleSubmit}>

                            {({errors, values, handleSubmit, handleBlur, handleChange, touched}) => (
                                <>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group as={Col} controlId="theme">
                                            <Form.Label>Sujet de l'entrainement</Form.Label>
                                            <Form.Control as="select" value={values.theme} onChange={handleChange} onBlur={handleBlur} >
                                                {MOCK_SUJET.map((item, idx) => (
                                                <option key={`theme-${idx}`} value={item.value} label={item.label} />))}
                                            </Form.Control>
                                            {errors.theme && touched.theme &&
                                            <div className="error-message">
                                                {errors.theme}
                                            </div>}
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="level">
                                            <Form.Label>Niveau de difficulté</Form.Label>
                                            <Form.Control as="select" value={values.level} onChange={handleChange} onBlur={handleBlur}>
                                                {MOCK_LEVEL.map((item, idx) => (
                                                    <option key={`level-${idx}`} value={item.value} label={item.label} />))}
                                            </Form.Control>
                                            {errors.level &&
                                            touched.level &&
                                            <div className="error-message">
                                                {errors.level}
                                            </div>}
                                        </Form.Group>
                                        <div className={"choiceButton"}>
                                            <Button
                                                style={{ background: "linear-gradient(45deg,#ff4b82 0,#ef8f5f 100%)" , border: "none"}}
                                                type={"submit"}
                                                variant="primary"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? 'Chargement…' : 'Commencer'}
                                            </Button>
                                        </div>
                                        {/*<pre>{JSON.stringify(errors, null, 4)}</pre>
                                        <p>--------------------------------------------</p>
                                        <pre>{JSON.stringify(values, null, 4)}</pre>*/}
                                    </Form>

                                </>
                            )}

                        </Formik>
                </Modal.Body>
                    </span>
            </Modal>
        </>
    );
}

export default UserChoiceExercising;
