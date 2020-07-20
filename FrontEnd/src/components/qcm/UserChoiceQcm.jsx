import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './UserChoiceQcm.css';
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useHistory} from "react-router";
import Loader from "react-loader-spinner";

function UserChoiceQcm({disabledModal}) {

    //  Déclaration des variables utilisées dans le component
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        disabledModal();
    }
    const [isLoading, setIsLoading] = useState(false);
    const [messageError, setMessageError] = useState(false);
    let history = useHistory();

    //  Envoi le choix de l'utilisateur pour son questionnaire d'entrainement (sujet et niveau) au backend
    //  En retour le backend, retourne l'ID du questionnaire générer pour l'utilisateur
    const handleSubmit = (values, {resetForm}) => {
        setIsLoading(true);
        axios.get(`/quizz/id/questionNumber?type=TRAINING&theme=${values.theme}&category=${values.category}`)
            .then(res => {
                if (res.status === 200) {
                 //  Suite au retour du backend, switch sur le component affichant la première question
                    setIsLoading(false);
                    history.push({pathname: `/Accueil/Qcm/${res.data.quizzId}`},  res.data.quizzQuestionNumber );
                }
            }, (error) => {
                console.error(error);
                setMessageError(true);
                setIsLoading(false);
                resetForm();
            });
        setIsLoading(false);
        resetForm();
        handleClose();
    };

    //  Permet d'informer l'utilisateur des champs obligatoires dans le formulaire
    const validationSchema = Yup.object().shape({
        theme: Yup.string().required("Sélectionner un sujet d'entrainement."),
        category: Yup.string().required("Sélectionner une catégorie.")
    });

    //  Permet d'initialiser le formulaire à ses valeurs par default
    const initialValues = {
        type:"TRAINING",
        theme: "",
        category: ""
    };

    const MOCK_DATA_SELECT = [
        {value: "", label: "Choisir une catégorie"}
    ]

    //  Ajoute les valeurs suivantes dans la liste des niveaux de choix pour l'utilisateur.
    const [category, setCategory] = useState(MOCK_DATA_SELECT);
    const [theme, setTheme] = useState(MOCK_DATA_SELECT);

    const addNewDataToTheme = () => {
        const themeTab = [...MOCK_DATA_SELECT];

        setIsLoading(true);
        axios.get(`/quizz/themes?type=TRAINING`)
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
    //  Appeler une seule fois après le premier render, il va aller récuperer la première question dans le backend.
    useEffect(() => {
        addNewDataToTheme();
    }, []);


    const addNewDataToCategory = (theme) => {
        const categoryTab = [...MOCK_DATA_SELECT];

        setIsLoading(true);
        axios.get(`/quizz/categories?type=TRAINING&theme=${theme}`)
            .then(res => {
                if (res.status === 200) {
                    res.data.map((item) => (
                    categoryTab.push({value: item.category, label: item.category})
                    ));
                    setCategory(categoryTab);
                    setIsLoading(false);
                }
            }, (error) => {
                console.error(error);
                setIsLoading(false);
            });
        setIsLoading(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <span className={"modalStyle"}>
                <Modal.Header closeButton>
                    <Modal.Title>Choisissez le sujet et la catégorie de votre Q.C.M.</Modal.Title>
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
                                            <Form.Label>Sujet</Form.Label>
                                            <Form.Control as="select" value={values.theme} onChange={event => {
                                                handleChange(event)
                                                event.target.value === "" ? setCategory(MOCK_DATA_SELECT) : addNewDataToCategory(event.target.value);
                                            }} onBlur={handleBlur} >
                                                {theme.map((item, idx) => (
                                                <option key={`theme-${idx}`} value={item.value} label={item.label} />))}
                                            </Form.Control>
                                            {errors.theme && touched.theme &&
                                            <div className="error-message">
                                                {errors.theme}
                                            </div>}
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="category">
                                            <Form.Label>Catégorie</Form.Label>
                                            <Form.Control as="select" value={values.category} onChange={handleChange} onBlur={handleBlur}>
                                                {category.map((item, idx) => (
                                                    <option key={`category-${idx}`} value={item.value} label={item.label} />))}
                                            </Form.Control>
                                            {errors.category &&
                                            touched.category &&
                                            <div className="error-message">
                                                {errors.category}
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
                                        {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
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

export default UserChoiceQcm;
