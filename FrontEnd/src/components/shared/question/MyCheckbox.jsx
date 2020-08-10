import {useField} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";
import React, {useContext} from "react";
import CodeReadOnly from "../Code/CodeReadOnly";
import QuizzContext from "../Context/QuizzContext";

export function MyCheckbox({name, value, type, idx, item, hdlChange,hdlDisable ,hdlBlur,className, sliceQuestionText}) {
    const {quizzTheme} = useContext(QuizzContext);

    const [field] = useField({
        name,
        value
    });

    return (
        <div key={`custom-${type}-${idx}`} className={className}>
            <FormGroup>
                <FormCheck >
                    <FormCheck.Input custom {...field} id={`custom-${type}-${idx}`} value={parseInt(value)} type={type}
                                     onChange={hdlChange} onBlur={hdlBlur} disabled={hdlDisable} />
                        {item.startsWith("#4#")
                            ? <CodeReadOnly codeValue={item.replace(/#4#/g, "")} uniqueIdName={`code-${idx + 1}`} codeMode={quizzTheme} theme={"monokai"}/>
                            : <p style={{color:"#2a292b"}}>{item}</p>}
                </FormCheck>
            </FormGroup>
        </div>
    )
}
