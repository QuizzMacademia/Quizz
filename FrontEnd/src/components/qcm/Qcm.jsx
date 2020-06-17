import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import '../shared/question/question.css';
import Question from "../shared/question/question";
import axios from "axios";
import ResultQcm from "./resultQcm";
import Loader from "react-loader-spinner";

function Qcm({match:{params:{id}}}) {
    //  Déclaration des constantes utilisées dans le component
    const [index, setIndex] = useState(0);
    const [quizzSize] = useState(10);
    const [questionData, setQuestionData] = useState({});
    const [lastQuestion, setLastQuestion] = useState(false);
    const [showAnswerChoiceButton, setShowAnswerChoiceButton] = useState(false);
    const [userResult, setUseResult] = useState(0);
    const [firstGetQuestion, setFirstGetQuestion] = useState(false);
    const [isLoding, setIsLoding] = useState(false);
    const [resultReview,setResultReview] = useState([]);
    function arraysIdentical(array1, array2) {
        //fontion pour comparer deux tableaux
        if (array1.length === array2.length && array1.every(x => array2.includes(parseInt(x))))
        {
            return true;
        }
    }
    //  Fonction utiliser sur le bouton validation, permet de valider le choix de l'utilisateur et d'afficher l'explication.
    const handleValidation = (values) => {
        setShowAnswerChoiceButton(true);
        if((typeof values.userChoice === "object" && arraysIdentical( values.userChoice, questionData.correctAnswer ))
            ||(typeof values.userChoice === "string" && parseInt(values.userChoice) ===  questionData.correctAnswer[0])) {
            setUseResult(userResult + 1);
        }else {
            setResultReview([...resultReview, questionData.questionText]);
            console.log(resultReview);
        }
    };

    //  Permet d'informer l'utilisateur qu'il faut selectionner au moins une checkbox
    const validationSchemaCheckbox = Yup.object().shape({
        userChoice: Yup.array().required("Selectionner au moins une checkbox.")
    });

    //  Permet d'informer l'utilisateur qu'il faut selectionner un radio bouton
    const validationSchemaRadio = Yup.object().shape({
        userChoice: Yup.string().required("Selectionner un radio bouton.")
    });

    //  Initialisation des valeurs du formulaire à vide.
    const initialValues = {
        userChoice: []
    };

    //  Fonction pour passer à la question suivante, réinitialise le formulaire, télécharge la question et l'affiche.
    const handleNextQuestion = (values, {resetForm}) => {
        resetForm();
        if (index < quizzSize - 1) {
            getQuestion(index+1);
            setIndex(index + 1);
            setShowAnswerChoiceButton(false);
        } else {
            setLastQuestion(true);
        }
    };

    //  Appeler une seule fois après le premier render, il va aller récuperer la première question dans le backend.
    useEffect( () => {
        console.log("useEffect IN !!!");
        getQuestion(index);
    }, []);

    //  API pour récupérer une question dans le backend.
    const getQuestion = (idx) => {
        setIsLoding(true);
        //  Récupère la question idx du questionnaire id
        axios.get(`/quizz/${id}/question/${idx}`)
            .then(res => {
                if (res.status === 200) {
                    setIsLoding(false);
                    console.log(res.data);
                    //  Enregistre dans le hooks questionData la question retourné par le backend
                    setQuestionData(res.data);
                    //  Permet de réaliser l'affichage de la première question.
                    if(firstGetQuestion === false) setFirstGetQuestion(true)
                }
            }, (error) => {
                console.error(error);
            })
    };

    return (
        <div className="question">
            {isLoding
            && <Loader
                type="Circles"
                color="#ff4b82"
                height={80}
                width={80}
                className={"loading"}
            />}
            {firstGetQuestion && <>
            {!lastQuestion && <div >
                <h4> {questionData.questionText} </h4>
                <div className="options-container">
                    <div className="options">
                        <Formik
                            validationSchema={questionData.choiceType === 'checkbox' ? validationSchemaCheckbox : validationSchemaRadio}
                            initialValues={initialValues}
                            onSubmit={handleNextQuestion}>

                            {({errors, values, isValid, handleSubmit, handleBlur, handleChange}) => (

                                <Question question={questionData}
                                          onHandleValidation={()=>handleValidation(values)}
                                          showAnswerChoiceButton={showAnswerChoiceButton}
                                          quizzSize={quizzSize}
                                          errors={errors}
                                          values={values}
                                          index={index}
                                          isValid={isValid}
                                          handleSubmit={handleSubmit}
                                          handleBlur={handleBlur}
                                          handleChange={handleChange}/>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>}

            {lastQuestion &&  <ResultQcm quizzSize={quizzSize} userResult={userResult} resultReview={resultReview}/>}
            </>}
        </div>
    );
}

export default Qcm;
