import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";

function UserChoiceExercising(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [isLoading, setLoading] = useState(false);

    const simulateNetworkRequest = () => {
        return new Promise((resolve) => {
            setTimeout(handleClose, 2000)
        });
    }

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Merci de choisir le sujet et le niveau.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group as={Col} controlId="formGridSubject">
                        <Form.Label>Sujet de l'entreinement</Form.Label>
                        <Form.Control as="select">
                            <option>Choisir...</option>
                            <option>Angular</option>
                            <option>JavaScript</option>
                            <option>Java</option>
                        </Form.Control>
                    </Form.Group>
                        <Form.Group as={Col} controlId="formGridLevel">
                            <Form.Label>Niveau de difficulté</Form.Label>
                            <Form.Control as="select">
                                <option>Choisir...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        disabled={isLoading}
                        onClick={!isLoading ? handleClick : null}
                    >
                        {isLoading ? 'Chargement…' : 'Commencer'}
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserChoiceExercising;
