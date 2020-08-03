import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";
import CodeReadOnly from "../shared/Code/CodeReadOnly";
import MOCK_QUESTION_WITH_CODE from "../shared/mock/MOCK_Question_With_Code";
import CodeEditor from "../shared/Code/CodeEditor";

function Certificat() {

    const [codeVal, setCodeVal] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [codeResponse, setCodeResponse] = useState("");
    const majCodeVal = (newval) => {
        setCodeVal(newval);
    };


    function checkResponse(){
        var config = {
            headers: {
                'Content-Type': 'text/plain'
            },
            responseType: 'text'
        };

        console.log(codeVal);
        console.log(typeof codeVal);
        axios.post('/quizz/codePython', codeVal, config)
            .then((res)=> {
                console.log(res.data);
                if (res.status === 200) {
                    console.log(codeVal);
                    setShowResponse(true);
                    setCodeResponse(res.data.buffer)}

            })
            .catch((e)=>{
                console.error(e.response);
                setShowResponse(true);
                setCodeResponse(e.response.data.message)
            });
    }

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

                            <CodeEditor codeValue={codeVal} uniqueIdName={`code`} codeMode={"python"} majValue={majCodeVal}/>

                        <Button style={{width:"100%", backgroundColor:"#ff4b82", borderRadius:"0  0 7px 7px ", border:"none"}} onClick={checkResponse}>Valider</Button>

                        {showResponse&& <>
                            <CodeReadOnly codeValue={codeResponse} uniqueIdName={`code-3`}/>
                                {sliceQuestionText(question.explanation).map((item1, idx1) => (
                                <div key={idx1}>
                                    {item1.type === 'text'
                                        ? <p>{item1.value}</p>
                                        : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`}/>}
                                </div>
                            ))}
                        </>}
                    </div>

                </div>

            ))}
        </>
    )
}

export default Certificat;
