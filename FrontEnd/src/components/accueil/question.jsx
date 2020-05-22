import React from "react";
import { Form} from "react-bootstrap";
import "./question.css"
import Answer from "./answer";
import * as Yup from "yup";
import { Formik, useField} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";



const Question = ({question, show, onHandleValidation,showButton, onHandleNextQuestion}) => {
    {/*const handleClicked = (event) => {
        console.log("reponse choidsie", question.choixQuestion, event?.target?.id)
    };*/}
    const validationSchema = Yup.object().shape({


    });
    const initialValues = {

        correctChoice1: [],
        correctChoice2: []
    };

    return (
        <div className="question">
            <h4> {question.questionName} </h4>
            <div className="options-container">
                <div className="options">
                    <Formik validationSchema={validationSchema}
                            initialValues={initialValues}
                            onSubmit={onHandleNextQuestion}>

                        {({errors, values, isValidating, dirty, isValid, handleSubmit}) => (

                            <Form onSubmit={handleSubmit} style={{textAlign:"left", marginLeft:"10px"}}>
                                {
                                    question.choixQuestion.map((item, idx) => (
                                    <MyCheckbox className="option" custom key={idx}  label={item}
                                                name={ `correctChoice${question.id}`} value={item} type={question.typeChoix}/>

                                ))}
                                {show && <Answer explication={question.explication}/>}

                                <div className="button-container">
                                    {!showButton && <button onClick={onHandleValidation} disabled={(!isValid)} >Valider</button>}
                                    {showButton && <button type={'submit'} onClick={onHandleNextQuestion}>Question suivante</button>}

                                </div>
                                {/*} <pre>{JSON.stringify(errors, null, 4)}</pre>
                                <p>--------------------------------------------</p>
                                <pre>{JSON.stringify(values, null, 4)}</pre>*/}
                            </Form>

                        )}
                    </Formik>
                </div>
            </div>

        </div>
)
};
export default Question;

export function MyCheckbox({name, value,type}) {
    const [field] = useField({
        name,
        value,
        type,
        label: value
    });
    return (<FormGroup><FormCheck {...field} name={name} type={type} value={value} label={value}/></FormGroup>)
}

