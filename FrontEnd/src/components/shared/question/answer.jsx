import React, {memo} from "react";
import "./question.css"
import CodeReadOnly from "../Code/CodeReadOnly";

const Answer = ({explication, sliceQuestionText})=>(
        <div>
                {sliceQuestionText(explication).map((item1, idx1) => (
                    <div key={idx1}>
                            {item1.type === 'text'
                                ? <p>{item1.value}</p>
                                : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`}/>}
                    </div>
                ))}
        </div>
);
export default  memo( Answer);
