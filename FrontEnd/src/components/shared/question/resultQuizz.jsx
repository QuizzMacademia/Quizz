import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const ResultQuizz = ({quizzSize, userResult, resultReview, isQCM}) => (
    <div className=" result">
        <h2>Exercice Termié</h2>
        <h3> *** Resultat : {userResult} /{quizzSize} ***</h3>
        <h5 className={(userResult >(quizzSize * 0.7)) ? "correct" : "incorrect"}>
            {(userResult > (quizzSize  * 0.7))
                ? "Bravo ! Vous avez réussi cet exercice !"
                : "Vous n'avez pas validé ce quiz. Vous n'avez pas atteint le seuil de validation de cet exercice,"
                + " c'est-à-dire 70%."}
        </h5>

        {isQCM && (resultReview.length !== 0 && userResult < (quizzSize * 0.7))
        && <h4 style={{marginLeft: "30px", textIndent: "20px", color: "#5b5a5e"}}>
            Compétences évaluées:
        </h4>}
        {isQCM && (resultReview.length !== 0 && (userResult <  (quizzSize * 0.7)))
        && <Accordion>
            <Card style={{width: "50%", margin: "auto"}}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Categorie
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{textAlign: "left", marginLeft: "10px"}}>
                        {resultReview.map((item, idx) => (
                            <h6 key={idx}>- {item}</h6>))}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        }

    </div>
);

export default ResultQuizz;
