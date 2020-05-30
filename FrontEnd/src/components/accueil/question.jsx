import React, {useState} from "react";
import {Form} from "react-bootstrap";
import "./question.css"
import Answer from "./answer";
import {Check, X} from "react-bootstrap-icons";
import {MyCheckbox} from "./MyCheckbox";
import classNames from "classnames";

const Question = ({question, show, onHandleValidation, showButton, errors, answerChoice, values, isValid, handleSubmit, handleBlur, handleChange}) => {
    console.log(question);
    console.log(values);
    return (
        <Form onSubmit={handleSubmit} style={{textAlign: "left", marginLeft: "10px"}}>

            {question.choices.map((item, idx) => (
                <div className={classNames("choice-style", {
                    "incorrect": answerChoice && values.userChoice.includes(item.id + '') && !question.correctAnswer.includes(item.id),
                    "correct": answerChoice && question.correctAnswer.includes(item.id)
                })} key={idx}>

                    <div className={"choice-icon"}>

                        {answerChoice &&
                        (question.correctAnswer.includes(item.id) || values.userChoice.includes(item.id + '')) &&
                        < span>
                        {
                            question.correctAnswer.includes(item.id)
                                ? <Check color="green" size={20}/>
                                : <X color="red" size={20}/>
                        }
                        </span>
                        }

                    </div>
                    <MyCheckbox className="option" item={item.choice} name={`userChoice`}
                                value={item.id} type={question.choiceType} idx={item.id} hdlChange={handleChange}
                                hdlBlur={handleBlur}/>


                </div>

            ))}
            {show && <Answer explication={question.explanation}/>}

            <div className="button-container">
                {!showButton &&
                <button onClick={onHandleValidation}
                        disabled={(!isValid || values['userChoice'].length === 0)}>Valider</button>}
                {showButton &&
                <button type={'submit'}>Question suivante</button>}

            </div>
            {/*<pre>{JSON.stringify(errors, null, 4)}</pre>
                            <p>--------------------------------------------</p>
                            <pre>{JSON.stringify(values, null, 4)}</pre>*/}
        </Form>
    )
};
export default Question;



