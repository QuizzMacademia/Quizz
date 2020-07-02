import React, {memo} from "react";
import {Form} from "react-bootstrap";
import "./question.css"
import Answer from "./answer";
import {MyCheckbox} from "./MyCheckbox";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import CheckAnswer from "./checkAnswer";

const Question = ({question,onHandleValidation,  errors,index, quizzSize, showAnswerChoiceButton, values, isValid, handleSubmit, handleBlur, handleChange, sliceQuestionText}) => {

    return (
        <>
        <Form onSubmit={handleSubmit} style={{textAlign: "left", marginLeft: "10px"}}>
            {question.choices.map((item, idx) => (
                <div className={classNames("choice-style", {
                    "incorrect": showAnswerChoiceButton
                        && values.userChoice.includes(item.id + '')
                        && !question.correctAnswer.includes(item.id),
                    "correct": showAnswerChoiceButton
                        && question.correctAnswer.includes(item.id)
                })} key={idx}>
                    <div className={"choice-icon"}>
                        {showAnswerChoiceButton
                        && < CheckAnswer question={question} item={item} values={values}/>
                        }
                    </div>
                    <MyCheckbox className="option"
                                item={item.choice}
                                name={`userChoice`}
                                value={item.id}
                                type={question.choiceType}
                                idx={item.id}
                                hdlChange={handleChange}
                                hdlBlur={handleBlur}
                                hdlDisable={showAnswerChoiceButton}/>
                </div>
            ))}

            {showAnswerChoiceButton
            && <Answer explication={question.explanation} sliceQuestionText={sliceQuestionText}/>}
            <div className="button-container">
                {!showAnswerChoiceButton
                && <Button variant={"success"}
                        onClick={onHandleValidation}
                        disabled={(!isValid || values['userChoice'].length === 0)}>
                    Valider
                    </Button>
                }
                {showAnswerChoiceButton
                && <Button type={'submit'} style={{ background: "linear-gradient(45deg,#ff4b82 0,#ef8f5f 100%)"}}>
                        {!(index+1 === quizzSize)
                            ? "Question Suivante"
                            :"Consultez Resultat"
                        }
                   </Button>
                }
            </div>
            {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
             <p>--------------------------------------------</p>
             <pre>{JSON.stringify(values, null, 4)}</pre> */}
        </Form>
       </>
    )
};

export default  memo( Question);
