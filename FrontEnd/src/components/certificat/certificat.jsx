
import React, {useEffect} from "react";
import Prism from "prismjs";
//import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import {Form} from "react-bootstrap";
import Answer from "../shared/question/answer";
import FormGroup from "react-bootstrap/FormGroup";
import FormCheck from "react-bootstrap/FormCheck";


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

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return <div className="question">

        <div style={{width: "70%", margin: "auto", borderRadius: "5px"}}>
            <br/>
            <h5>
        <pre className={"line-numbers"}>
        <code className="language-js">
          {MOCK_QUESTION_CODE.questionText}
        </code>
      </pre>
            </h5>
            <br/>

            <Form style={{textAlign: "left", marginLeft: "10px"}}>
                {MOCK_QUESTION_CODE.choices.map((item, idx) => (
                    <div key={idx}>


                        <div key={`custom-${MOCK_QUESTION_CODE.choiceType}-${idx}`}>
                            <FormGroup>
                                <FormCheck custom id={`custom-${MOCK_QUESTION_CODE.choiceType}-${idx}`} value={item.id}
                                           type={MOCK_QUESTION_CODE.choiceType}
                                           label={item.choice}/>
                            </FormGroup>
                        </div>

                    </div>
                ))}
                <Answer explication={MOCK_QUESTION_CODE.explanation}/>
            </Form>
        </div>
        ;
    </div>;
}

export default Certificat;
