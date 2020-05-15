import React, {Fragment} from "react";
import {Button, Form} from "react-bootstrap";
import "./question.css"
import Answer from "./answer";


const Question = ({question, show, onHandleValidation, onHandleNextQuestion}) => {
    const handleClicked = (event) => {
        console.log("reponse choidsie", question.choixQuestion, event?.target?.id)
    };
    return (
        <Fragment>
            <div className="question">
                <h4> {question.questionName} </h4>
                <div className="options-container">
                    <div className="options">
                        {question.choixQuestion.map((item, idx) => (
                            <Form.Check className="option" custom key={idx} id={idx + 1} label={item} name='choix'
                                        type={question.typeChoix} onChange={handleClicked}/>
                        ))}
                    </div>
                    {show && <Answer explication={question.explication}/>}
                    <div className="button-container">
                        <button onClick={onHandleValidation}>Valider</button>
                        <Button type={'submit'} onClick={onHandleNextQuestion}>Question suivante</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default Question;
