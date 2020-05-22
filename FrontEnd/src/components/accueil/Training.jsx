import React, {Fragment, useState} from 'react';
import MOCK_QUESTIONNAIRE from "../shared/mock/mock_questionnaire";
import {Form} from "react-bootstrap";
import Question from "./question";

function Training() {

    const [index, setIndex] = useState(0);
    const[showAnswer, setShowAnswer] = useState(false);
    const questionData = MOCK_QUESTIONNAIRE.questions[index];
    const [lastQuestion, setLastQuestion]=useState(false);
    const [listQuestion, setListQuestion]=useState(true);
    const[showButton, setShowButton] = useState(false);
    const validationUtilisateur = (evt) => {
        evt.preventDefault();
        setShowAnswer(true) ;
        console.log(evt);
        setShowButton(true)
    };

    const handleNextQuestion = (event) => {
        event.preventDefault();
        if(index < MOCK_QUESTIONNAIRE.questions.length -1){
        setIndex(index + 1);
        setShowAnswer(false) ;
            setShowButton(false);
        console.log(index);
        }else{
            setListQuestion(false);
            setLastQuestion(true);
            console.log("derniere question")
        }
    };

    return (
        <div>
            <Form>
                {listQuestion && <Question question={questionData} show={showAnswer} showButton={showButton}  onHandleValidation={validationUtilisateur} onHandleNextQuestion={handleNextQuestion}/>}
                {lastQuestion &&  <Fragment>
                                        <div className="question">
                                            <h4>Exercice termier</h4>
                                        </div>
                                  </Fragment>}
            </Form>
        </div>
    );
}

export default Training;
