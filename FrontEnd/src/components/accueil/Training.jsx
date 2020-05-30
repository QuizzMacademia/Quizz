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

    const handleValidation = (evt) => {
        evt.preventDefault();
        setShowAnswer(true);
        console.log(evt);
        setShowButton(true);
        setAnswerChoice(true);
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
            console.log(index);
        } else {
            setListQuestion(false);
            setLastQuestion(true);
            console.log("derniere question")
        }
        console.log(values);
    };

    return (
        <div>
            {!lastQuestion && <div className="question">
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
                                              onHandleValidation={handleValidation} answerChoice={answerChoice}
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
                <div className="question">
                    <h4>Exercice termier</h4>
                </div>
            </Fragment>}
        </div>
    );
}

export default Training;
