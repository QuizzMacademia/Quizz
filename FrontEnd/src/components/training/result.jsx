import React, {memo} from "react";
/* Affichage de la  resultat  finale de quizz*/

const Result = ({quizzSize, userResult}) => (
    <div className=" result">
        <h2>Exercice Terminé</h2>
        <h3> *** Resultat : {userResult} /{quizzSize} ***</h3>
        <h5 className={userResult > 7
            ? "correct"
            : "incorrect"
        }>
            {userResult > 7
                ? "Bravo ! Vous avez réussi cet exercice !"
                : "Vous n'avez pas validé ce quiz.Vous n'avez pas atteint le seuil de validation de cet exercice," +
                " c'est-à-dire 70%. "
            }</h5>
    </div>
);

export default  memo(Result);
