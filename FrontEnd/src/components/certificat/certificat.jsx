import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import Answer from "../shared/question/answer";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";
import CodeReadOnly from "../shared/Code/CodeReadOnly";
import CodeEditor from "../shared/Code/CodeEditor";
import {Check, X} from "react-bootstrap-icons";

function Certificat() {

    const MOCK_QUESTION_CODE = {
        id: 9,
        questionText: `var var = 4;
text = 'Hello !';
var variable = 5.781e+8;
var 1variable = 10;`,
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 34, choice: 'var'},
            {id: 35, choice: 'text'},
            {id: 36, choice: 'variable'},
            {id: 37, choice: '1variable'}
        ],
        correctAnswer: [36],
        explanation: 'Pour déclarer une variable, il faut respecter plusieurs étapes :\n' +
            '\n' +
            'Écrire le mot-clé var ;\n' +
            'Utiliser un nom de variable valide, vous pouvez retrouver au début de ce chapitre ce qui constitue un nom de variable valide ;\n' +
            'Assigner une valeur si on le souhaite, elle peut être un chiffre, un nombre exponentiel, du texte, etc. ;\n' +
            'Ne pas oublier le point-virgule.'
    };
    const MOCK_QUESTION_CODE1 = {
        id: 10,
        questionText: 'Est-il possible de raccourcir la troisième ligne de ce code ?' +
            '#4# var number1 = 60, number2 = 2;' +
            'number1 = number2 + 40; #4#',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 38, choice: 'Oui, il suffit d\'utiliser l\'opérateur +='},
            {id: 39, choice: 'Non'}
        ],
        correctAnswer: [39],
        explanation: 'Pour ceux qui auraient répondu « Oui » je vous conseille de regarder attentivement le code qui suit :\n' +
            '\n' +
            '#4# number1 = number1 + 40; // On ajoute 40 à la variable "number1".' +
            'number1 += 40;          // On fait la même chose mais de façon raccourcie.' +
            'number1 = number2 + 40; // Là on n\'ajoute rien du tout à \"number1\", on remplace juste sa valeur actuelle par celle de "number2" additionnée à la valeur 40.' +
            '// De ce fait, on ne peut donc pas écrire :' +
            'number1 += 40;#4#',
    };

    function sliceQuestionText(str) {
        let tabQustionText = [];
       let indexOfFirst = str.indexOf('#4#');
        if (indexOfFirst === -1) {
            tabQustionText.push({
                type: "text",
                value: str
            });
        } else {
            tabQustionText.push({
                type: "text",
                value: str.slice(0, indexOfFirst)
            });
            tabQustionText.push({
                type: "code",
                value: str.slice(indexOfFirst + 3, str.length - 3)
            });
        }
        return tabQustionText;
    }

    return (
        <>
            <div className="question">

                <div style={{width: "70%", margin: "auto"}}>

                    <br/>
                    <CodeReadOnly codeValue={MOCK_QUESTION_CODE.questionText} uniqueIdName={'Test123'}/>

                    <br/>
                    <CodeEditor codeValue={MOCK_QUESTION_CODE.questionText} uniqueIdName={'Test123456'}/>

                    <Form style={{textAlign: "left", marginLeft: "10px"}}>
                        {MOCK_QUESTION_CODE.choices.map((item, idx) => (
                            <div key={idx}>


                                <div key={`custom-${MOCK_QUESTION_CODE.choiceType}-${idx}`}>
                                    <FormGroup>
                                        <FormCheck custom id={`custom-${MOCK_QUESTION_CODE.choiceType}-${idx}`}
                                                   value={item.id}
                                                   type={MOCK_QUESTION_CODE.choiceType}
                                                   label={item.choice}/>
                                    </FormGroup>
                                </div>

                            </div>
                        ))}
                        <Answer explication={MOCK_QUESTION_CODE.explanation}/>
                    </Form>
                </div>
            </div>
            <div className="question">

                <div style={{width: "70%", margin: "auto"}}>
                    {MOCK_QUESTION_CODE1.questionText.slice(0, 61)}
                    <CodeReadOnly codeValue={MOCK_QUESTION_CODE1.questionText.slice(64, 119)} uniqueIdName={'Test123'}/>
                    {MOCK_QUESTION_CODE1.questionText.indexOf('#4#')}
                    <Form style={{textAlign: "left", marginLeft: "10px"}}>
                        {MOCK_QUESTION_CODE1.choices.map((item, idx) => (
                            <div key={idx}>


                                <div key={`custom-${MOCK_QUESTION_CODE1.choiceType}-${idx}`}>
                                    <FormGroup>
                                        <FormCheck custom id={`custom-${MOCK_QUESTION_CODE.choiceType}-${idx}`}
                                                   value={item.id}
                                                   type={MOCK_QUESTION_CODE1.choiceType}
                                                   label={item.choice}/>
                                    </FormGroup>
                                </div>

                            </div>
                        ))}
                        <Answer explication={MOCK_QUESTION_CODE1.explanation}/>
                    </Form>
                </div>
            </div>
            <div className="question">

                <div style={{width: "70%", margin: "auto"}}>
                    <span>
                            {sliceQuestionText(MOCK_QUESTION_CODE1.questionText).map((item1, idx1) => (
                            <div key={idx1}>
                                {item1.type === 'text'
                                ? <p>{item1.value}</p>
                                : <CodeReadOnly codeValue={item1.value}  uniqueIdName={`code-${idx1}`}/>}
                            </div>
                             ))}
                            <Form style={{textAlign: "left", marginLeft: "10px"}}>
                            {MOCK_QUESTION_CODE1.choices.map((item, idx) => (
                                <div key={idx}>
                                    <div key={`custom-${MOCK_QUESTION_CODE1.choiceType}-${idx}`}>
                                        <FormGroup>
                                            <FormCheck custom id={`custom-${MOCK_QUESTION_CODE1.choiceType}-${idx}`}
                                                       value={item.id}
                                                       type={MOCK_QUESTION_CODE1.choiceType}
                                                       label={item.choice}/>
                                        </FormGroup>
                                    </div>
                                </div>
                            ))}
                                {sliceQuestionText(MOCK_QUESTION_CODE1.explanation).map((item1, idx1) => (
                                    <div key={idx1}>
                                        {item1.type === 'text'
                                            ? <p>{item1.value}</p>
                                            : <CodeReadOnly codeValue={item1.value}  uniqueIdName={`code-${idx1}`}/>}
                                    </div>
                                ))}

                        </Form>
                        </span>
                </div>
            </div>
        </>
    )
}

export default Certificat;
