import React from "react";
import {Form} from "react-bootstrap";
import "./question.css"
import Answer from "./answer";
import {MyCheckbox} from "./MyCheckbox";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import CheckAnswer from "./checkAnswer";

const Question = ({question, show, onHandleValidation, showButton, errors,index, quizzSize, answerChoice, values, isValid, handleSubmit, handleBlur, handleChange}) => {

    return (
        <Form onSubmit={handleSubmit} style={{textAlign: "left", marginLeft: "10px"}}>
            {question.choices.map((item, idx) => (
                <div className={classNames("choice-style", {
                    "incorrect": answerChoice && values.userChoice.includes(item.id + '') && !question.correctAnswer.includes(item.id),
                    "correct": answerChoice && question.correctAnswer.includes(item.id)
                })} key={idx}>
                    <div className={"choice-icon"}>
                        {answerChoice &&
                        < CheckAnswer question={question} item={item} values={values}/>
                        }
                    </div>
                    <MyCheckbox className="option" item={item.choice} name={`userChoice`}
                                value={item.id} type={question.choiceType} idx={item.id} hdlChange={handleChange}
                                hdlBlur={handleBlur} hdlDisable={answerChoice}/>
                </div>
            ))}
            {show && <Answer explication={question.explanation}/>}
            <div className="button-container">
                {!showButton &&
                <Button variant={"success"}
                        onClick={onHandleValidation}
                        disabled={(!isValid || values['userChoice'].length === 0)}>
                    Valider
                </Button>}
                {showButton &&
                    <Button type={'submit'} style={{ background: "linear-gradient(45deg,#ff4b82 0,#ef8f5f 100%)"}}>
                        {!(index+1 === quizzSize)?"Question Suivante":"Consultez Resultat"}
                    </Button>
                }
            </div>
            {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
             <p>--------------------------------------------</p>
             <pre>{JSON.stringify(values, null, 4)}</pre> */}
        </Form>
    )
};

export default Question;
