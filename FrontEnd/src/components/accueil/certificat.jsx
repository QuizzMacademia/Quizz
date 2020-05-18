import {ErrorMessage, Field, Form, Formik, useField} from 'formik';
import React from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import {array, boolean, mixed, number, object, string} from "yup";
import Row from "react-bootstrap/Row";


const Certificat = () => {
    const initialValues = {
        fullName: "",
        initialInvestment: 0,
        investmentRisk: [],
        commentAboutInvestmentRisk: "",
        dependents: -1,
        acceptedTermsAndConditions: false
    };

    return (
        <div className={'container'}>
            <h1>New Account</h1>
            <Formik
                validationSchema={object({
                    fullName: string().required().min(2).max(100),
                    initialInvestment: number().required(),
                    investmentRisk: array(string().oneOf(["High", "Medium", "Low"])).min(1),
                    commentAboutInvestmentRisk: mixed().when('investmentRisk', {
                        is: (investmentRisk) => investmentRisk.find(irr => irr === "High"),
                        then: string().required().min(20).max(200),
                        otherwise: string().min(20).max(200)
                    }),
                    dependents: number().required().min(0).max(5),
                    acceptedTermsAndConditions: boolean().oneOf([true])
                })}
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                    return new Promise(res =>{setTimeout(()=>{
                        console.log(values);
                        console.log(formikHelpers);
                        res();
                    }, 2000)} )

                }}>
                {({values, errors, isSubmitting}) => (
                    <div>
                        <Form>
                            {/* <Field name="fullName" render={({field, formProps}) => (
                                <FormGroup controlId="fullName">
                                    <FormLabel>fullName : </FormLabel>
                                    <FormControl type={'text'} value={field.value} onChange={field.onChange}/>
                                </FormGroup>
                            )}/>*/}

                            <Field name="fullName">
                                {({field, formProps}) => (<FormGroup as={Row} controlId="fullName">
                                        <FormLabel>fullName : </FormLabel>
                                        <FormControl  type={'text'} value={field.value} onChange={field.onChange}/>
                                    </FormGroup>
                                )}

                            </Field>


                            <Field name="initialInvestment" render={({field, formProps}) => (
                                <FormGroup as={Row} controlId="initialInvestment">
                                    <FormLabel>initialInvestment : </FormLabel>
                                    <FormControl type={'number'} value={field.value} onChange={field.onChange}/>
                                </FormGroup>
                            )}/>
                            <MyCheckbox name="investmentRisk" value="High"/>
                            <MyCheckbox name="investmentRisk" value="Medium"/>
                            <MyCheckbox name="investmentRisk" value="Low"/>

                            {/*<Field name="investmentRisk" value="Medium" type={"checkbox"}/>
                        <Field name="investmentRisk" value="Low" type={"checkbox"}/>*/}


                            <Field name="commentAboutInvestmentRisk" render={({field, formProps}) => (
                                <FormGroup as={Row} controlId="commentAboutInvestmentRisk">
                                    <FormLabel>initialInvestment : </FormLabel>
                                    <FormControl as="textarea" rows="3" value={field.value} onChange={field.onChange}/>
                                </FormGroup>
                            )}/>


                            <Field name="dependents" render={({field, formProps}) => (
                                <FormGroup as={Row} controlId="dependents">
                                    <FormLabel>dependents :</FormLabel>
                                    <FormControl as="select" value={field.value} onChange={field.onChange}>
                                        <option value={0}> 0</option>
                                        <option value={1}> 1</option>
                                        <option value={2}> 2</option>
                                        <option value={3}> 3</option>
                                        <option value={4}> 4</option>
                                        <option value={5}> 5</option>
                                    </FormControl>
                                </FormGroup>
                            )}/>

                            <MyCheckbox name="acceptedTermsAndConditions"/>
                            {/*<Field name="acceptedTermsAndConditions" type={"checkbox"}/>*/}

                            <button  type={'submit'} disabled={isSubmitting}>Submit</button>

                            <pre>{JSON.stringify(errors, null, 4)}</pre>
                            <p>--------------------------------------------</p>
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
};
export default Certificat;

export function MyCheckbox({name, value}) {
    const [field] = useField({
        name,
        value,
        label: value
    });
    return (<FormGroup as={Row}><FormCheck {...field} name={name} type={'checkbox'} value={value} label={value}/></FormGroup>)
}
{/*import React, {useState} from "react";
import mock_questionnaire from '../shared/mock/mock_questionnaire';
import Form from "react-bootstrap/Form";
function Certificat() {
    const [verif, setVerif] = useState(false);
    const handleResponse = () => {

    }
    const verifReponse = evt => {
        evt.preventDefault();
        console.log('ok')
        setVerif(true)
    }

    return <div>

        <Form>
            <h2> Q.C.M</h2>
            {mock_questionnaire.questions.map((question, rang) =>
                (<>
                    <h3>{rang + 1}: {question.questionName}</h3>
                    {question.choixQuestion.map((choix, index) => (
                        <Form.Check type={question.typeChoix} id={Date.now().toString()} key={"choix" + index}
                                    name='test'
                                    label={choix} onchange={handleResponse}/>
                    ))}
                    <button onClick={verifReponse}> Valider</button>
                    <br/>
                    {verif && question.explication}
                </>)
            )}
        </Form>


    </div>;
}

export default Certificat;*/}
