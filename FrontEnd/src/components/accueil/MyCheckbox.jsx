import {useField} from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";
import React from "react";

export function MyCheckbox({name, value, type, idx, item, hdlChange,hdlDisable ,hdlBlur,className}) {

    const [field] = useField({
        name,
        value
    });

    return (
        <div key={`custom-${type}-${idx}`} className={className}>
            <FormGroup>
                <FormCheck custom {...field} id={`custom-${type}-${idx}`} value={parseInt(value)} type={type}
                           label={item} onChange={hdlChange} onBlur={hdlBlur} disabled={hdlDisable}/>
            </FormGroup>
        </div>
    )
}
