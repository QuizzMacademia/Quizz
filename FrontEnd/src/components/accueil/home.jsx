import React, {Fragment} from "react";
import './accueil.css'
import {Card} from 'react-bootstrap';
import Button from "react-bootstrap/Button";



const Home = () => (
           <div className={"container"}>
               <div className="question" style={{ margin: '20px auto', width:"80%" , padding:"20px "}}>
                   <Card.Body>
                       <Card.Title> Q.C.M </Card.Title>

                       <Card.Text style={{color:'dimgrey', paddingTop:'20px', paddingRight:"20px"}}>
                            Q.C.M est un ensemble de questionnaires utilisés pour vérifier l’acquisition de connaissances et compétences.
                       </Card.Text>
                       <Card.Link href="/Accueil/QCM"><Button style={{height:"60px", width:"200px", marginTop:"20px"}} variant="success">Accéder à cette page</Button></Card.Link>

                   </Card.Body>
               </div>
               <div className="question" style={{margin: '20px auto', width:"80%", padding:"20px "}}>
                   <Card.Body>
                       <Card.Title>S'EXERCER</Card.Title>

                       <Card.Text style={{color:'dimgrey', paddingTop:'20px', paddingRight:"20px"}} >
                           S'exercer vous permettront d'accroître vos connaissances et d'évaluer votre niveau. Les QCM sont classés par catégories thématiques et par difficulté:
                            <ul>
                                <li >Niveau facile</li>
                                <li >Niveau intermédiaire</li>
                                <li >Niveau difficile</li>
                            </ul>
                       </Card.Text>
                       <Card.Link href="/Accueil/Entainement"><Button variant="success" style={{height:"60px", width:"200px", marginTop:"20px"}}>Testez-vous avec des exercices</Button></Card.Link>

                   </Card.Body>
               </div>
               <div className="question" style={{ margin: '20px auto' , width:"80%", padding:"20px "}}>
                   <Card.Body>
                       <Card.Title>CERTIFICAT</Card.Title>

                       <Card.Text style={{color:'dimgrey', paddingTop:'20px', paddingRight:"20px"}}>
                          Macademia offre le certificat de développeur JavaScript aux candidats intéressés à obtenir une certification pour leurs compétences JS. Outre l'expertise en JavaScript,
                           le certificat évalue et valide la capacité d'un candidat à manipuler le DOM HTML .
                           Toutes les questions qui apparaissent dans l'examen du certificat de développeur JavaScript sont basées sur:
                           <ul>
                               <li>Le cours</li>
                               <li>Quiz</li>
                           </ul>
                       </Card.Text>
                       <Card.Link href="/Accueil/Certificat"><Button style={{height:"60px", width:"200px", marginTop:"20px"}} variant="success">Obtenir une certification</Button></Card.Link>

                   </Card.Body>
               </div>
            </div>
    );
export default Home;
