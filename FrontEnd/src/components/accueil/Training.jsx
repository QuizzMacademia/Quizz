import React from "react";
import mock_questionnaire from '../shared/mock/mock_questionnaire';
import Form from "react-bootstrap/Form";

function Training() {

    return (
        <div>
            <Form>
                {mock_questionnaire.questions[0].questionName}
                <br />
                <Form.Check type='radio' id={0} name='test' label={mock_questionnaire.questions[0].choixQuestion[0]} />
                <Form.Check type='radio' id={1} name='test' label={mock_questionnaire.questions[0].choixQuestion[1]} />
                <Form.Check type='radio' id={2} name='test' label={mock_questionnaire.questions[0].choixQuestion[2]} />
                <Form.Check type='radio' id={3} name='test' label={mock_questionnaire.questions[0].choixQuestion[3]} />
                <Form.Check type='radio' id={4} name='test' label={mock_questionnaire.questions[0].choixQuestion[4]} />
                {['checkbox', 'radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />

                        <Form.Check
                            disabled
                            type={type}
                            label={`disabled ${type}`}
                            id={`disabled-default-${type}`}
                        />
                    </div>
                ))}
            </Form>
        </div>
    );
}

export default Training;
