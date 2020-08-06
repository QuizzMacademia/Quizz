import React, {useContext, useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import CodeReadOnly from "../shared/Code/CodeReadOnly";
import MOCK_QUESTION_WITH_CODE from "../shared/mock/MOCK_Question_With_Code";
import CodeEditor from "../shared/Code/CodeEditor";
import QuizzContext from "../shared/Context/QuizzContext";

function Certificat() {

    const [codeVal, setCodeVal] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [codeResponse, setCodeResponse] = useState("");
    const [color, setColor] = useState(true);
    const majCodeVal = (newval) => {
        setCodeVal(newval);
    };


    function checkResponse(){
        let config = {
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
                setColor(false)
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

                        <CodeEditor codeValue={codeVal} uniqueIdName={`code-${rang}`} codeMode={"python"} majValue={majCodeVal}/>

                        <Button style={{width:"100%", backgroundColor:"#ff4b82", borderRadius:"0  0 7px 7px ", border:"none"}} onClick={checkResponse}>Valider</Button>

                        {showResponse &&
                        <>
                            <span style={{marginTop:"30px", display: "block", textAlign: "left"}}>Résultat du code :</span>
                            <span className={color?"responseTrue ace-iplastic":"responseFalse ace-iplastic" } >

                                <CodeReadOnly   codeValue={codeResponse} uniqueIdName={`code-${rang}`}  theme={"iplastic"} />
                            </span>


                            {sliceQuestionText(question.explanation).map((item1, idx1) => (
                                <div key={idx1} style={{marginTop:"30px"}}>
                                    {item1.type === 'text'
                                        ? <p>{item1.value}</p>
                                        : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`} codeMode={"python"} theme={"monokai"}/>}
                                </div>
                            ))}


                            <Button  style={{ background: "linear-gradient(45deg,#ff4b82 0,#ef8f5f 100%)", marginTop:"20px"}}>
                                {/*!(index+1 === quizzSize)
                                    ? "Question Suivante"
                                    :"Consultez Resultat"
                                */}
                                {(rang !== MOCK_QUESTION_WITH_CODE.questions.length)
                                    ? "Question Suivante"
                                    :"Consultez Resultat"
                                }
                            </Button>
                        </>}
                    </div>

                </div>

            ))}
        </>
    )
}

export default Certificat;
