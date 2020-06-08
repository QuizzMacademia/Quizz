import React from "react";


const ResultQcm = ({quizzSize, userResult, resultReview}) => (
    <div className=" result">
        <h2>Exercice Termier</h2>
        <h3> *** Resultat : {userResult} /{quizzSize} ***</h3>
        <h5 className={userResult > 7 ? "correct" : "incorrect"}>
            {userResult > 7 ? "Bravo ! Vous avez réussi cet exercice !"
                : "Vous n'avez pas validé ce quiz.Vous n'avez pas atteint le seuil de validation de cet exercice," +
                " c'est-à-dire 70%."}</h5>
        {(resultReview.length !== 0 && userResult < 7  )&& <h4>Compétences évaluées: </h4>}
        {(resultReview.length !== 0 && userResult < 7  ) && resultReview.map((item, idx) => (
            <h5 key={idx}> {item}</h5>))}
        {console.log(resultReview)
        }
    </div>
);

export default ResultQcm;
