import React, {memo, useContext} from "react";
import "./question.css"
import CodeReadOnly from "../Code/CodeReadOnly";
import QuizzContext from "../Context/QuizzContext";

const Answer = ({explication, sliceQuestionText})=> {
        const {quizzTheme} = useContext(QuizzContext);

        return (
            <div>
                    {sliceQuestionText(explication).map((item1, idx1) => (
                        <div key={idx1}>
                                {item1.type === 'text'
                                    ? <p>{item1.value}</p>
                                    : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`} codeMode={quizzTheme}/>}
                        </div>
                    ))}
            </div>
        );
}
export default  memo( Answer);
