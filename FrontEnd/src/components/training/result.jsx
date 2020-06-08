import React from "react";


const Result = ({quizzSize,userResult}) => (
        <div className=" result">
            <h2>Exercice Termier</h2>
            <h3> *** Resultat : {userResult} /{quizzSize} ***</h3>
            <h5 className={userResult > 7 ? "correct" : "incorrect"}>
                {userResult > 7 ? "Bravo ! Vous avez réussi cet exercice !"
                    : "Vous n'avez pas validé ce quiz.Vous n'avez pas atteint le seuil de validation de cet exercice," +
                    " c'est-à-dire 70%. "}</h5>
        </div>
            );

export default Result;
