import React, {Fragment, useEffect, useState} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import './question.css';
import Question from "./question";
import axios from "axios";
import {fromJS} from "immutable";
import Result from "./ result";

function Training({match:{params:{id}}}) {

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

   // const query = new URLSearchParams(props.location.search);

    const handleValidation = (values) => {
        setShowAnswer(true);
        setShowButton(true);
        setAnswerChoice(true);
        setAnswerChoiceCss(true);
        if((typeof values.userChoice === "object" && values.userChoice.join() === questionData.correctAnswer.join()) ||
            (typeof values.userChoice === "string"&& values.userChoice in  questionData.correctAnswer)){
            setUseResult(userResult+1);
        }
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
        if (index < quizzSize - 1) {
            getQuestion(index+1);
            setIndex(index + 1);
            setShowAnswer(false);
            setShowButton(false);
            setAnswerChoice(false);
            setAnswerChoiceCss(false);
        } else {
            setListQuestion(false);
            setLastQuestion(true);
        }
    };

    useEffect( () => {
        console.log("useEffect IN !!!");
        getQuestion(index);
    }, []);

    const getQuestion = (idx) => {
        axios.get(`http://localhost:8080/quizz/${id}/question/${idx}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                 /*   let newQuestionData = fromJS(questionData);
                    newQuestionData = newQuestionData.setIn(res.data);
                    setQuestionData(newQuestionData.toJS());*/
                    console.log(questionData);

                    setQuestionData(res.data);
                    if(firstGetQuestion === false) setFirstGetQuestion(true)
                }
            }, (error) => {
                console.error(error);
            })
    };

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

            {lastQuestion &&  <Result quizzSize={quizzSize} userResult={userResult} />}
            </>}
        </div>
    );
}

export default Training;
