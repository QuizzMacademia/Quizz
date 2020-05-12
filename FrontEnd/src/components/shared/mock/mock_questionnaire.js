import React from "react";

const MOCK_QUESTIONNAIRE = {
    id: 1,
    name: 'Premier questionnaire JavaScript',
    questions: [{
        id: 1,
        questionName: 'Avant d\'être appelé JavaScript, le langage s\'appelait :',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'simple',
        choixQuestion: [
            'JScript',
            'LiveScript',
            'CoffeeScript',
            'ECMAScript',
            'ActionScript'
        ],
        bonneReponse: [1],
        explication: 'Brendan Eich développe le LiveScript, un langage de script qui s\'inspire du langage Java, et qui est destiné à être installé sur les serveurs développés par Netscape. Netscape se met à développer une version client du LiveScript, qui sera renommée JavaScript en hommage au langage Java créé par la société Sun Microsystems. En effet, à cette époque, le langage Java était de plus en plus populaire, et appeler le LiveScript JavaScript était une manière de faire de la publicité, et au Java, et au JavaScript lui-même.\n' +
            'Issu du livre Dynamisez vos sites web avec JavaScript !'
    }, {
        id: 2,
        questionName: 'Le JavaScript est principalement utilisé en tant que langage :',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'simple',
        choixQuestion: [
            'client-side',
            'server-side',
            'client-side et server-side'
        ],
        bonneReponse: [0],
        explication: 'Le JavaScript est un langage conçu pour dynamiser les pages Web après leur téléchargement par les navigateurs, il est donc client-side vu qu\'il s\'exécute par le biais du navigateur. Cependant, il est possible de l\'utiliser dans des applications server-side mais nous n\'aborderons pas ce concept dans ce cours.'
    }]
};

export default MOCK_QUESTIONNAIRE;
