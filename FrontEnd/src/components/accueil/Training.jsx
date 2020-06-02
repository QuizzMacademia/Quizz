import React, {Fragment, useState} from 'react';
import MOCK_QUESTIONNAIRE from "../shared/mock/mock_questionnaire";
import * as Yup from "yup";
import {Formik} from "formik";
import './question.css';
import Question from "./question";

function Training() {

    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const questionData = MOCK_QUESTIONNAIRE.questions[index];
    const [lastQuestion, setLastQuestion] = useState(false);
    const [listQuestion, setListQuestion] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [answerChoice, setAnswerChoice] = useState(false);
    const [answerChoiceCss, setAnswerChoiceCss] = useState(false);
    const [userResult,setUseResult] = useState(0);
    const handleValidation = (values) => {
        setShowAnswer(true);
        setShowButton(true);
        setAnswerChoice(true);
        setAnswerChoiceCss(true);
        console.log(typeof values.userChoice);
        if((typeof values.userChoice === "object" && values.userChoice.join() === questionData.correctAnswer.join()) ||
            (typeof values.userChoice === "string"&& values.userChoice in  questionData.correctAnswer)){
            setUseResult(userResult+1);
        }

        console.log(userResult);
    };

    const validationSchemaCheckbox = Yup.object().shape({
        userChoice: Yup.array().required("At least one checkbox is required")
    });

    const validationSchemaRadio = Yup.object().shape({
        userChoice: Yup.string().required("At least one radio is required")
    });

    const initialValues = {
        userChoice: []
    };

    const handleNextQuestion = (values, {resetForm}) => {
        resetForm();
        if (index < MOCK_QUESTIONNAIRE.questions.length - 1) {
            setIndex(index + 1);
            setShowAnswer(false);
            setShowButton(false);
            setAnswerChoice(false);
            setAnswerChoiceCss(false);
        } else {
            setListQuestion(false);
            setLastQuestion(true);
            console.log("derniere question")
        }
        console.log(values);
    };

    return (
        <div className="question">
            {!lastQuestion && <div >
                <h4> {questionData.questionText} </h4>
                <div className="options-container">
                    <div className="options">
                        <Formik
                            validationSchema={questionData.choiceType === 'checkbox' ? validationSchemaCheckbox : validationSchemaRadio}
                            initialValues={initialValues}
                            onSubmit={handleNextQuestion}>

                            {({errors, values, isValid, handleSubmit, handleBlur, handleChange}) => (
                                <>
                                    {listQuestion &&
                                    <Question question={questionData} show={showAnswer} showButton={showButton}
                                              onHandleValidation={()=>handleValidation(values)} answerChoice={answerChoice}
                                              answerChoiceCss={answerChoiceCss}  nbQuestion={MOCK_QUESTIONNAIRE.questions.length }
                                              errors={errors} values={values}
                                              isValid={isValid} handleSubmit={handleSubmit} handleBlur={handleBlur}
                                              handleChange={handleChange}/>}
                                </>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>}

            {lastQuestion && <Fragment>
                <div className=" result">
                    <h2>Exercice termier</h2>
                    <h3> *** Resultat : {userResult} /{MOCK_QUESTIONNAIRE.questions.length -1} ***</h3>
                    <h5 className={userResult > 7 ? "correct" : "incorrect"}>
                     {userResult > 7 ? "Bravo ! Vous avez réussi cet exercice !"
                        : "Vous n'avez pas validé ce quiz.Vous n'avez pas atteint le seuil de validation de cet exercice," +
                        " c'est-à-dire 70%. Ce n'est pas très grave car vous pourrez repasser le quiz dans 24h."}</h5>

                </div>
            </Fragment>}
        </div>
    );
}

export default Training;
