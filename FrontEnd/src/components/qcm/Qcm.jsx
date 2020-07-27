import React, {useEffect, useState} from 'react';
import '../shared/question/question.css';
import axios from "axios";
import Quizz from "../shared/question/quizz";
import {useLocation} from "react-router";

function Qcm({match:{params:{id}}}) {

    const [questionData, setQuestionData] = useState({});
    const [firstGetQuestion, setFirstGetQuestion] = useState(false);
    const [isLoding, setIsLoding] = useState(false);
    const [index, setIndex] = useState(0);
    const location = useLocation();

    const isQCM = true;

    useEffect( () => {
        //  Appeler une seule fois après le premier render, il va aller récuperer la première question dans le backend.
        console.log("useEffect IN !!!");
        getQuestionQCM(index);
    }, []);


    const getQuestionQCM = (idx) => {
        //  API pour récupérer une question dans le backend.
        setIsLoding(true);
        //  Récupère la question idx du questionnaire id
        axios.get(`/quizz/${id}/question/${idx}`)
            .then(res => {
                if (res.status === 200) {
                    setIsLoding(false);
                    console.log(res.data);
                    //  Enregistre dans le hooks questionData la question retourné par le backend
                    setQuestionData(res.data);
                    //  Permet de réaliser l'affichage de la première question.
                    if(firstGetQuestion === false)
                        setFirstGetQuestion(true)
                }
            }, (error) => {
                console.error(error);
            })
    };

    return (
        <>
            <Quizz questionData={questionData}
                   firstGetQuestion={firstGetQuestion}
                   isLoding={isLoding}
                   getQuestion={getQuestionQCM}
                   index={index}
                   setIndex={setIndex}
                   isQCM={isQCM}
                   lengthQuizz={location.state}/>
        </>
    );
}

export default Qcm;
