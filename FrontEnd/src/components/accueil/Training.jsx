import React, {Fragment, useEffect, useState} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import './question.css';
import Question from "./question";
import axios from "axios";

function Training() {

    const [index, setIndex] = useState(0);
    const [quizzSize] = useState(10);
    const [showAnswer, setShowAnswer] = useState(false);
//    const questionData = MOCK_QUESTIONNAIRE.questions[index];
    const [questionData, setQuestionData] = useState({});
    const [lastQuestion, setLastQuestion] = useState(false);
    const [listQuestion, setListQuestion] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [answerChoice, setAnswerChoice] = useState(false);
    const [answerChoiceCss, setAnswerChoiceCss] = useState(false);
    const [userResult,setUseResult] = useState(0);
    const [firstGetQuestion, setFirstGetQuestion] = useState(false);

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
        getQuestion();
        if (index < quizzSize - 1) {
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

    useEffect( () => {
        console.log("useEffect IN !!!");
        axios.get(`http://localhost:8080/quizz/1/question/0`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    setQuestionData(res.data);
                    setFirstGetQuestion(true)
                }
            }, (error) => {
                console.error(error);
            })
    }, []);

    const getQuestion = () => {
        axios.get(`http://localhost:8080/quizz/1/question/${index}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    setQuestionData(res.data);
                }
            }, (error) => {
                console.error(error);
            })
    }

    return (
        <div className="question">
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
                                <>
                                    {console.log(questionData)}
                                    {listQuestion &&
                                    <Question question={questionData} show={showAnswer} showButton={showButton}
                                              onHandleValidation={()=>handleValidation(values)} answerChoice={answerChoice}
                                              answerChoiceCss={answerChoiceCss} quizzSize={quizzSize}
                                              errors={errors} values={values} index={index}
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
                    <h3> *** Resultat : {userResult} /{quizzSize} ***</h3>
                    <h5 className={userResult > 7 ? "correct" : "incorrect"}>
                     {userResult > 7 ? "Bravo ! Vous avez réussi cet exercice !"
                        : "Vous n'avez pas validé ce quiz.Vous n'avez pas atteint le seuil de validation de cet exercice," +
                        " c'est-à-dire 70%. Ce n'est pas très grave car vous pourrez repasser le quiz dans 24h."}</h5>
                </div>
            </Fragment>}
            </>}
        </div>
    );
}

export default Training;
