import React from "react";
import {Form} from "react-bootstrap";
import "./question.css"
import Answer from "./answer";
import {useField} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";


const Question = ({question, show, onHandleValidation, showButton, errors, values, isValid, handleSubmit, handleBlur, handleChange}) => {

    return (
        <Form onSubmit={handleSubmit} style={{textAlign: "left", marginLeft: "10px"}}>
            {
                question.choices.map((item, idx) => (<>
                        <MyCheckbox className="option" item={item.choice} name={`correctChoice`}
                                    value={item.id} type={question.choiceType} idx={item.id} hdlChange={handleChange}
                                    hdlBlur={handleBlur}/>
                    </>

                ))}
            {show && <Answer explication={question.explanation}/>}

            <div className="button-container">
                {!showButton &&
                <button onClick={onHandleValidation}
                        disabled={(!isValid || values['correctChoice'].length === 0)}>Valider</button>}
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

export function MyCheckbox({name, value, type, idx, item, hdlChange, hdlBlur}) {
    const [field] = useField({
        name,
        value
    });
    return (
        <div key={`custom-${type}-${idx}`}>
            <FormGroup>
                <FormCheck custom {...field} id={`custom-${type}-${idx}`} value={parseInt(value)} type={type}
                           label={item} onChange={hdlChange} onBlur={hdlBlur}/>
            </FormGroup>
        </div>
    )
}

