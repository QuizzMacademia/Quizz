import React, {useState} from 'react';
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import {Formik} from "formik";
import Question from "./question";
import ResultQuizz from "./resultQuizz";
import CodeReadOnly from "../Code/CodeReadOnly";

const Quizz = ({questionData,lengthQuizz, firstGetQuestion, isLoding ,getQuestion, index , setIndex, isTraining, isQCM}) => {

    const [quizzSize] = useState(lengthQuizz);
    const [lastQuestion, setLastQuestion] = useState(false);
    const [showAnswerChoiceButton, setShowAnswerChoiceButton] = useState(false);
    const [userResult, setUseResult] = useState(0);
    const [resultReview,setResultReview] = useState([]);

    function arraysIdentical(array1, array2) {
        //fontion pour comparer deux tableaux
        if (array1.length === array2.length && array1.every(x => array2.includes(parseInt(x)))) {
            return true;
        }
    }

    const handleValidation = (values) => {
        setShowAnswerChoiceButton(true);
        if ((typeof values.userChoice === "object" && arraysIdentical(values.userChoice, questionData.correctAnswer))
            || (typeof values.userChoice === "string" && parseInt(values.userChoice) === questionData.correctAnswer[0])) {
            setUseResult(userResult + 1);
        }else {
            setResultReview([...resultReview, questionData.questionText.replace(/#4#/g, "")]);
            console.log(resultReview);
        }
    };

    const validationSchemaCheckbox = Yup.object().shape({
        //  Permet d'informer l'utilisateur qu'il faut selectionner au moins une checkbox
        userChoice: Yup.array().required("Selectionner au moins une checkbox.")
    });


    const validationSchemaRadio = Yup.object().shape({
        //  Permet d'informer l'utilisateur qu'il faut selectionner un radio bouton
        userChoice: Yup.string().required("Selectionner un radio bouton.")
    });


    const initialValues = {
        //  Initialisation des valeurs du formulaire à vide.
        userChoice: []
    };

    const handleNextQuestion = (values, {resetForm}) => {
        //  Fonction pour passer à la question suivante, réinitialise le formulaire, télécharge la question et l'affiche.
        resetForm();
        if (index < quizzSize - 1) {
            getQuestion(index + 1);
            setIndex(index + 1);
            setShowAnswerChoiceButton(false);
        } else {
            setLastQuestion(true);
        }
    };
    function sliceQuestionText(str) {
        const deliminator = "#4#";
        let tabQuestionText = [];
        const types = str.startsWith(deliminator) ? ["code", "text"] : ["text", "code"];
        tabQuestionText = str
            .split(deliminator)
            .filter(x => x  )
            .map((value, index) => ({
                type: types[index % 2],
                value
            }));

        return tabQuestionText;
    }


    return (
        <div className="question">
            {isLoding
            && <Loader type="Circles"
                       color="#ff4b82"
                       height={80}
                       width={80}
                       className={"loading"}
            />}
            {firstGetQuestion
            && <>
                {!lastQuestion
                && <div>
                    <h4>  {sliceQuestionText(questionData.questionText).map((item1, idx1) => (
                        <div key={idx1}>
                            {item1.type === 'text'
                                ? <p>{item1.value}</p>
                                : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`}/>}
                        </div>
                    ))}

                        </h4>
                    <div className="options-container">
                        <div className="options">
                            <Formik
                                validationSchema={questionData.choiceType === 'checkbox' ? validationSchemaCheckbox : validationSchemaRadio}
                                initialValues={initialValues}
                                onSubmit={handleNextQuestion}>

                                {({errors, values, isValid, handleSubmit, handleBlur, handleChange}) => (

                                    <Question question={questionData}
                                              onHandleValidation={() => handleValidation(values)}
                                              showAnswerChoiceButton={showAnswerChoiceButton}
                                              quizzSize={quizzSize}
                                              errors={errors}
                                              values={values}
                                              index={index}
                                              isValid={isValid}
                                              handleSubmit={handleSubmit}
                                              handleBlur={handleBlur}
                                              handleChange={handleChange}
                                              sliceQuestionText={sliceQuestionText}
                                    />

                                )}
                            </Formik>
                        </div>
                    </div>
                </div>}

                {isTraining && lastQuestion && <ResultQuizz quizzSize={quizzSize} userResult={userResult} resultReview={resultReview} />}
                {isQCM && lastQuestion &&  <ResultQuizz quizzSize={quizzSize} userResult={userResult} resultReview={resultReview} isQCM={isQCM}/>}
            </>}
        </div>
    )
};
export default Quizz;
