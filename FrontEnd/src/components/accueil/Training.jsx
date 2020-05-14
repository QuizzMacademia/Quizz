import React, {useState} from 'react';
import MOCK_QUESTIONNAIRE from "../shared/mock/mock_questionnaire";
import {Form} from "react-bootstrap";
import Question from "./question";

function Training() {

    const [index, setIndex] = useState(0);
    const[showAnswer, setShowAnswer] = useState(false);

    const validationUtilisateur = (evt) => {
        evt.preventDefault();
        setShowAnswer(true) ;
        console.log(evt);
    };

    const handleNextQuestion = (event) => {
        event.preventDefault();
        setIndex(index + 1);
        setShowAnswer(false) ;
        console.log(index);
    }

    return (
        <div>
            <Form>
                <Question question={MOCK_QUESTIONNAIRE.questions[index]} show={showAnswer}  onHandleValidation={validationUtilisateur} onHandleNextQuestion={handleNextQuestion}/>
            </Form>
        </div>
    );
}

export default Training;
