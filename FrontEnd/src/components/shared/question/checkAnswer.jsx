import React, {memo} from "react";
import {Check, X} from "react-bootstrap-icons";


const CheckAnswer = ({question, item, values}) => (
    (question.correctAnswer.includes(item.id) || values.userChoice.includes(item.id + ''))
    && < span>
            {
                question.correctAnswer.includes(item.id)
                    ? <Check color="green" size={20}/>
                    : <X color="red" size={20}/>
            }
       </span>
);

export default  memo(CheckAnswer);
