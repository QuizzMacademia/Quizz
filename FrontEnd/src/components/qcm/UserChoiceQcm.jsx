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

function UserChoiceQcm() {

    //  Déclaration des variables utilisées dans le component
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [isLoading, setLoading] = useState(false);
    const [messageError, setMessageError] = useState(false);
    let history = useHistory();

    //  Permet de simuler le chargement du backend, change l'affichage du bouton
    const simulateNetworkRequest = () => {
        return new Promise((resolve) => {
            //setTimeout(handleClose, 2000)
        });
    }

    //  Permet de simuler le chargement du backend, change l'affichage du bouton
    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    //  Envoi le choix de l'utilisateur pour son questionnaire d'entrainement (sujet et niveau) au backend
    //  En retour le backend, retourne l'ID du questionnaire générer pour l'utilisateur
    const handleSubmit = (values,{ resetForm}) => {
        //quizz/id?type=TRAINING&theme=javascript&category=Les conditions

        axios.get(`/quizz/id?type=TRAINING&theme=${values.theme}&category=${values.theme}`)
            .then(res => {
                if (res.status === 200) {
                 //  Suite au retour du backend, switch sur le component affichant la première question
                    history.push({pathname: `/Accueil/Qcm/${res.data}`});
                    console.log(res.data)
                }
            }, (error) => {
                console.error(error);
                setMessageError(true);
                setLoading(false);
                resetForm({Formik});

            });

        setLoading(true);
        resetForm();
    };

    //  Permet d'informer l'utilisateur des champs obligatoires dans le formulaire
    const validationSchema = Yup.object().shape({
        theme: Yup.string().required("Sélectionner un sujet d'entreinement."),
        category: Yup.string().required("Sélectionner un niveau d'entreinement.")
    });

    //  Permet d'initialiser le formulaire à ses valeurs par default
    const initialValues = {
    //        type:"TRAINING",
        type:"EXERCISING",
        theme: "choisir",
        category: "choisir",
        level: "1"
    };

    //  Ajoute les valeurs suivantes dans la liste des sujet de choix pour l'utilisateur.
    const MOCK_SUJET = [
        {sel:"true", value: "", label: "Choisir un sujet"},
        {sel:"false", value: "JavaScript", label: "JavaScript"}
    ];

    //  Ajoute les valeurs suivantes dans la liste des niveaux de choix pour l'utilisateur.
    const [category, setCategory] = useState([
            {value: "choisir", label: "Choisir une catégorie"}
        ]
    );

    const MOCK_DATA_SELECT = [
        {value: "choisir", label: "Choisir une catégorie"}
    ]

    const addNewDataToCategory = (theme) => {
        const categoryTab = [...MOCK_DATA_SELECT];

        axios.get(`/quizz/categories?type=TRAINING&theme=${theme}`)
            .then(res => {
                if (res.status === 200) {
                    res.data.map((item) => (
                    categoryTab.push({value: item.category, label: item.category})
                    ));
                    setCategory(categoryTab);
                }
            }, (error) => {
                console.error(error);

            });

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
                                            <Form.Control as="select" onChange={handleChange} onBlur={e => {
                                                // call the built-in handleBur
                                                handleBlur(e);
                                                if(values.theme !== "") addNewDataToCategory(values.theme);
                                                }} >
                                                {MOCK_SUJET.map((item, idx) => (
                                                <option key={`theme-${idx}`} value={item.value} label={item.label} />))}
                                            </Form.Control>
                                            {errors.theme && touched.theme &&
                                            <div className="error-message">
                                                {errors.theme}
                                            </div>}
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="category">
                                            <Form.Label>Catégorie</Form.Label>
                                            <Form.Control as="select" defaultValue={"choisir"} onChange={handleChange} onBlur={handleBlur}>
                                                {category.map((item, idx) => (
                                                    <option key={`level-${idx}`} value={item.value} label={item.label} />))}
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
                                       <pre>{JSON.stringify(errors, null, 4)}</pre>
                                        <p>--------------------------------------------</p>
                                        <pre>{JSON.stringify(values, null, 4)}</pre>
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
