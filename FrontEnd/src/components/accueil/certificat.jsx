
import React, {useState} from "react";
import mock_questionnaire from '../shared/mock/mock_questionnaire';
import Form from "react-bootstrap/Form";
function Certificat() {
    const [verif, setVerif] = useState(false);
    const handleResponse = () => {

    }
    const verifReponse = evt => {
        evt.preventDefault();
        console.log('ok')
        setVerif(true)
    }

    return <div>

        <Form>
            <h2> Q.C.M</h2>
            {mock_questionnaire.questions.map((question, rang) =>
                (<>
                    <h3>{rang + 1}: {question.questionName}</h3>
                    {question.choixQuestion.map((choix, index) => (
                        <Form.Check type={question.typeChoix} id={Date.now().toString()} key={"choix" + index}
                                    name='test'
                                    label={choix} onchange={handleResponse}/>
                    ))}
                    <button onClick={verifReponse}> Valider</button>
                    <br/>
                    {verif && question.explication}
                </>)
            )}
        </Form>


    </div>;
}

export default Certificat;
