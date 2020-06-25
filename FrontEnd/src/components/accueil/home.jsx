import React, {memo} from "react";
import {Card} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import './accueil.css'

const Home = () => (
    <div className={"container"}>
        <div className="question" style={{margin: '40px auto 20px', width: "80%", padding: "20px "}}>
            <Card.Body>
                <Card.Title> Q.C.M </Card.Title>
                <Card.Text style={{color: 'dimgrey', paddingTop: '20px', paddingRight: "20px"}}>
                    Q.C.M est un ensemble de questionnaires utilisés pour vérifier l’acquisition de connaissances et
                    compétences.
                </Card.Text>
                <Card.Link>
                    <Link to={"/Accueil/QCM"}>
                        <Button className={"buttonMacademia"}>
                            Accéder à cette page
                        </Button>
                    </Link>
                </Card.Link>
            </Card.Body>
        </div>
        <div className="question" style={{margin: '20px auto', width: "80%", padding: "20px "}}>
            <Card.Body>
                <Card.Title>S'EXERCER</Card.Title>
                <Card.Text style={{color: 'dimgrey', paddingTop: '20px', paddingRight: "20px"}}>
                    S'exercer vous permettront d'accroître vos connaissances et d'évaluer votre niveau. Les QCM sont
                    classés par catégories thématiques et par difficulté:
                    <ul>
                        <li>Niveau facile</li>
                        <li>Niveau intermédiaire</li>
                        <li>Niveau difficile</li>
                    </ul>
                </Card.Text>
                <Card.Link>
                    <Link to={"/Accueil/Entrainement"}>
                        <Button className={"buttonMacademia"}>
                            Testez-vous avec des exercices
                        </Button>
                    </Link>
                </Card.Link>
            </Card.Body>
        </div>
        <div className="question" style={{margin: '20px auto', width: "80%", padding: "20px "}}>
            <Card.Body>
                <Card.Title>CERTIFICAT</Card.Title>
                <Card.Text style={{color: 'dimgrey', paddingTop: '20px', paddingRight: "20px"}}>
                    Macademia offre le certificat de développeur JavaScript aux candidats intéressés à obtenir une
                    certification pour leurs compétences JS. Outre l'expertise en JavaScript,
                    le certificat évalue et valide la capacité d'un candidat à manipuler le DOM HTML .
                    Toutes les questions qui apparaissent dans l'examen du certificat de développeur JavaScript sont
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
        </div>
    </div>
);

export default memo(Home);
