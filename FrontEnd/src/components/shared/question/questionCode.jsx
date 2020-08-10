import React, {memo, useState} from "react";
import CodeEditor from "../Code/CodeEditor";
import Button from "react-bootstrap/Button";
import CodeReadOnly from "../Code/CodeReadOnly";
import axios from "axios";
import "./question.css"

const  QuestionCode=({question, quizzSize, sliceQuestionText, index, getQuestion, setIndex,setLastQuestion})=>{
    const [codeVal, setCodeVal] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [codeResponse, setCodeResponse] = useState("");
    const [color, setColor] = useState(true);
    const majCodeVal = (newval) => {
        setCodeVal(newval);
    };

    const handleNextQuestionCode = () => {
        //  Fonction pour passer à la question suivante, réinitialise le formulaire, télécharge la question et l'affiche.

        if (index < quizzSize - 1) {
            getQuestion(index + 1);
            setIndex(index + 1);
            //setShowAnswerChoiceButton(false);
        } else {
            setLastQuestion(true);
        }
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
                setColor(false);
                setShowResponse(true);
                setCodeResponse(e.response.data.message)
            });
    }
    return(
        <>
            <CodeEditor codeValue={codeVal} uniqueIdName={`code-${index}`} codeMode={"python"} majValue={majCodeVal}/>

            <Button style={{width:"100%", backgroundColor:"#ff4b82", borderRadius:"0  0 7px 7px ", border:"none"}} onClick={checkResponse}>Valider</Button>

            {showResponse &&
            <>
                <span style={{marginTop:"30px", display: "block", textAlign: "left"}}>Résultat du code :</span>
                <span className={color?"responseTrue ace-iplastic":"responseFalse ace-iplastic" } >

                                <CodeReadOnly   codeValue={codeResponse} uniqueIdName={`code-${index}`}  theme={"iplastic"} />
                            </span>


                {sliceQuestionText(question.explanation).map((item1, idx1) => (
                    <div key={idx1} style={{marginTop:"30px"}}>
                        {item1.type === 'text'
                            ? <p>{item1.value}</p>
                            : <CodeReadOnly codeValue={item1.value} uniqueIdName={`code-${idx1}`} codeMode={"python"} theme={"monokai"}/>}
                    </div>
                ))}


                <Button  style={{ background: "linear-gradient(45deg,#ff4b82 0,#ef8f5f 100%)", marginTop:"20px"}} onClick={handleNextQuestionCode} >
                    {/*!(index+1 === quizzSize)
                                    ? "Question Suivante"
                                    :"Consultez Resultat"
                                */}
                    {(index !==quizzSize)
                        ? "Question Suivante"
                        :"Consultez Resultat"
                    }
                </Button>
            </>}
        </>
    )

}
export default  memo( QuestionCode);
