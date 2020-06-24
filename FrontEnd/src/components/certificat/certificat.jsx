import React from "react";
import {Form} from "react-bootstrap";

import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";
import CodeReadOnly from "../shared/Code/CodeReadOnly";
import MOCK_QUESTION_WITH_CODE from "../shared/mock/MOCK_Question_With_Code";

function Certificat() {

    function sliceQuestionText(str) {
        const deliminator = "#4#";
        let tabQuestionText = [];

            const types = str.startsWith(deliminator) ? ["code", "text"] : ["text", "code"];
            tabQuestionText = str
                .split(deliminator)
                .map((value, index) => ({
                    type: types[index % 2],
                    value
                }));

        return tabQuestionText;
    }

    return (
        <>
            {/*<div className="question">

                <div style={{width: "70%", margin: "auto"}}>

                    <br/>
                    <CodeReadOnly codeValue={MOCK_QUESTION_CODE.questionText} uniqueIdName={'Test123'}/>

                    <br/>
                    <CodeEditor codeValue={MOCK_QUESTION_CODE.questionText} uniqueIdName={'Test123456'}/>

                    <Form style={{textAlign: "left", marginLeft: "10px"}}>
                        {MOCK_QUESTION_CODE.choices.map((item, idx) => (
                            <div key={idx}>


                                <div key={`custom-${MOCK_QUESTION_CODE.choiceType}-${idx}`}>
                                    <FormGroup>
                                        <FormCheck custom id={`custom-${MOCK_QUESTION_CODE.choiceType}-${idx}`}
                                                   value={item.id}
                                                   type={MOCK_QUESTION_CODE.choiceType}
                                                   label={item.choice}/>
                                    </FormGroup>
                                </div>

                            </div>
                        ))}
                        <Answer explication={MOCK_QUESTION_CODE.explanation}/>
                    </Form>
                </div>
            </div>
*/}
            {MOCK_QUESTION_WITH_CODE.questions.map((question, rang) => (
                <div className="question" key={rang}>

                    <div style={{width: "70%", margin: "auto"}}>

                        {sliceQuestionText(question.questionText).map((item1, idx1) => (
                            <div key={idx1}>
                                {item1.type === 'text'
                                    ? <p>{item1.value}</p>
                                    : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`}/>}
                            </div>
                        ))}
                        <Form style={{textAlign: "left", marginLeft: "10px"}}>
                            {question.choices.map((item, idx) => (
                                <div key={idx}>
                                    <div key={`custom-${question.choiceType}-${idx}`}>
                                        <FormGroup>
                                            <FormCheck custom id={`custom-${question.choiceType}-${idx}`}
                                                       value={item.id}
                                                       type={question.choiceType}
                                                       label={item.choice}/>
                                        </FormGroup>
                                    </div>
                                </div>
                            ))}
                            {sliceQuestionText(question.explanation).map((item1, idx1) => (
                                <div key={idx1}>
                                    {item1.type === 'text'
                                        ? <p>{item1.value}</p>
                                        : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`}/>}
                                </div>
                            ))}

                        </Form>

                    </div>
                </div>

            ))}
        </>
    )
}

export default Certificat;
