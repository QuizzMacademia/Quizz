import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './UserChoiceExercising.css';
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useHistory} from "react-router";
import Loader from "react-loader-spinner";


function UserChoiceExercising({disabledModal}) {

    //  Déclaration des variables utilisées dans le component
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        disabledModal();
    }
    const [isLoading, setIsLoading] = useState(false);
    const [messageError, setMessageError] = useState(false);
    let history = useHistory();

    const MOCK_DATA_SELECT = [
        {value: "", label: " Sélectionner un choix"}
    ]

    const [theme, setTheme] = useState(MOCK_DATA_SELECT);
    const [levels, setLevels] = useState(MOCK_DATA_SELECT);

    //  Envoi le choix de l'utilisateur pour son questionnaire d'entrainement (sujet et niveau) au backend
    //  En retour le backend, retourne l'ID du questionnaire générer pour l'utilisateur
    const handleSubmit = (values, {resetForm}) => {
        setIsLoading(true);
        axios.post('/quizz/generate', null, {params: values})
            .then(res => {
                if (res.status === 200) {
                    //  Suite au retour du backend, switch sur le component affichant la première question
                    setIsLoading(false);
                    history.push({pathname: `/Accueil/Entrainement/${res.data.quizzId}`}, res.data.quizzQuestionNumber );
                }
            }, (error) => {
                console.error(error);
                setMessageError(true);
                setIsLoading(false);
                resetForm();
            });
        resetForm();
        setIsLoading(true);
        handleClose();
    };

    const addNewDataToTheme = () => {
        const themeTab = [...MOCK_DATA_SELECT];

        setIsLoading(true);
        axios.get(`/quizz/exercising/themes?type=ToExercise`)
            .then(res => {
                if (res.status === 200) {
                    res.data.map((item) => (
                        themeTab.push({value: item.theme, label: item.theme})
                    ));
                    setTheme(themeTab);
                    setIsLoading(false);
                }
            }, (error) => {
                console.error(error);
                setIsLoading(false);
            });
        setIsLoading(false);
    };
    const addNewDataToLevel = (valuesTheme) => {
        const levelTab = [...MOCK_DATA_SELECT];
        setIsLoading(true);
        console.log("In addnewdatatolevel !!!")
        axios.get(`/quizz/levels?type=ToExercise&theme=${valuesTheme}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    res.data.map((item) => (
                        levelTab.push({value: item, label: item})
                    ));
                    setLevels(levelTab);
                    setIsLoading(false);
                }
            }, (error) => {
                console.error(error);
                setIsLoading(false);
            });
        setIsLoading(false);
    };

    //  Appeler une seule fois après le premier render, il va aller récuperer la première question dans le backend.
    useEffect(() => {
        addNewDataToTheme();
    }, []);

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
                                            <Form.Control as="select" value={values.theme} onChange={event => {
                                                handleChange(event)
                                                event.target.value === "" ? setLevels(MOCK_DATA_SELECT) : addNewDataToLevel(event.target.value);
                                            }} onBlur={handleBlur} >
                                                {theme.map((item, idx) => (
                                                <option key={`theme-${idx}`} value={item.value} label={item.label} />))}
                                            </Form.Control>
                                            {errors.theme && touched.theme &&
                                            <div className="error-message">
                                                {errors.theme}
                                            </div>}
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="level">
                                            <Form.Label>Niveau de difficulté</Form.Label>
                                            <Form.Control as="select" value={values.level} onChange={handleChange}  onBlur={handleBlur}>
                                                {levels.map((item, idx) => (
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
                                        {isLoading && <Loader
                                            type="Circles"
                                            color="#ff4b82"
                                            height={80}
                                            width={80}
                                            className={"loading"}
                                        />}
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
