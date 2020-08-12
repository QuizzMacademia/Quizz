import React, {useState} from "react";
import {Card, Carousel} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import './accueil.css'
import UserChoiceQcm from "../qcm/UserChoiceQcm";
import UserChoiceExercising from "../training/UserChoiceExercising";

function Home() {
    const [showModalQCM, setShowModalQCM] = useState(false);
    const [showModalExercising, setShowModalExercising] = useState(false);

    const funcShowModalQCM = () => {
        setShowModalQCM(true)
    }

    const funcDisabledModalQCM = () => {
        setShowModalQCM(false)
    }

    const funcShowModalExercising = () => {
        setShowModalExercising(true)
    }

    const funcDisabledModalExercising = () => {
        setShowModalExercising(false)
    }

    return (
        <div className={"container"}>
            <Carousel className="question">
                <Carousel.Item>
                    <Card.Body style={{margin: '40px auto 20px', width: "80%", padding: "20px "}}>
                        <Card.Title> Q.C.M </Card.Title>
                        <Card.Text style={{color: 'dimgrey', paddingTop: '20px', paddingRight: "20px"}}>
                            Q.C.M est un ensemble de questionnaires utilisés pour vérifier l’acquisition de
                            connaissances et
                            compétences.
                        </Card.Text>
                        <Card.Link>
                            <Button className={"buttonMacademia"} onClick={funcShowModalQCM}>
                                Accéder à cette page
                            </Button>
                        </Card.Link>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Body style={{margin: '40px auto 20px', width: "80%", padding: "20px "}}>
                        <Card.Title>S'EXERCER</Card.Title>
                        <Card.Text style={{color: 'dimgrey', paddingTop: '20px', paddingRight: "20px"}}>
                            S'exercer vous permettront d'accroître vos connaissances et d'évaluer votre niveau. Les QCM
                            sont
                            classés par catégories thématiques et par difficulté:
                            <ul>
                                <li>Niveau facile</li>
                                <li>Niveau intermédiaire</li>
                                <li>Niveau difficile</li>
                            </ul>
                        </Card.Text>
                        <Card.Link>
                            <Button className={"buttonMacademia"} onClick={funcShowModalExercising}>
                                Testez-vous avec des exercices
                            </Button>
                        </Card.Link>
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Body style={{margin: '40px auto 20px', width: "80%", padding: "20px "}}>
                        <Card.Title>CERTIFICAT</Card.Title>
                        <Card.Text style={{color: 'dimgrey', paddingTop: '20px', paddingRight: "20px"}}>
                            Macademia offre le certificat de développeur JavaScript aux candidats intéressés à obtenir
                            une
                            certification pour leurs compétences JS. Outre l'expertise en JavaScript,
                            le certificat évalue et valide la capacité d'un candidat à manipuler le DOM HTML .
                            Toutes les questions qui apparaissent dans l'examen du certificat de développeur JavaScript
                            sont
                            basées sur:
                            <ul>
                                <li>Le cours</li>
                                <li>Quiz</li>
                            </ul>
                        </Card.Text>
                        <Card.Link>
                            <Link to={"/Accueil/Certificat"}>
                                <Button className={"buttonMacademia"}>
                                    Obtenir une certification
                                </Button>
                            </Link>
                        </Card.Link>
                    </Card.Body>
                </Carousel.Item>
            </Carousel>
            {showModalQCM && <UserChoiceQcm disabledModal={funcDisabledModalQCM}/>}
            {showModalExercising && <UserChoiceExercising disabledModal={funcDisabledModalExercising}/>}
        </div>
    );
}

export default Home;
