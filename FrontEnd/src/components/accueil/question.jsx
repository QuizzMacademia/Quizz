import React from "react";
import {Form} from "react-bootstrap";
import "./question.css"
import Answer from "./answer";
import {Check, X} from "react-bootstrap-icons";
import {MyCheckbox} from "./MyCheckbox";
import classNames from "classnames";
import Button from "react-bootstrap/Button";

const Question = ({question, show, onHandleValidation, showButton, errors, nbQuestion,answerChoice, values, isValid, handleSubmit, handleBlur, handleChange}) => {
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
                                hdlBlur={handleBlur} hdlDisable={answerChoice}/>


                </div>

            ))}
            {show && <Answer explication={question.explanation}/>}
            {console.log(nbQuestion === question.id)}
            <div className="button-container">
                {!showButton &&
                <Button variant={"success"} onClick={onHandleValidation}
                        disabled={(!isValid || values['userChoice'].length === 0)}>Valider</Button>}
                {showButton &&
                <Button type={'submit'} style={{ background: "linear-gradient(45deg,#ff4b82 0,#ef8f5f 100%)"}}>{!(nbQuestion === question.id)?"Question suivante":"consultez resultat"}</Button>}

            </div>
            {/*<pre>{JSON.stringify(errors, null, 4)}</pre>

                            <p>--------------------------------------------</p>
                            <pre>{JSON.stringify(values, null, 4)}</pre>*/}
        </Form>
    )
};
export default Question;



