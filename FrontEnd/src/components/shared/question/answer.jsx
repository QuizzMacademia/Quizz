import React, {memo} from "react";
import "./question.css"

const Answer = ({explication})=>(
        <p >{explication}</p>
);
export default  memo( Answer);
