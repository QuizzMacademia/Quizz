import {useField} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";
import React from "react";

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
