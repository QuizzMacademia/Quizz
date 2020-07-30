const MOCK_QUESTION_WITH_CODE = {
    id: 2,
    type: 'training',
    level: 1,
    theme: 'Python',
    name: 'Premier questionnaire Python avec du code',
    questions: [{
        id: 13,
        questionText: 'Ecrire une fonction qu\'on nommera f() qui prend en paramètre un nombre x et qui renvoie son carré ?',
        type: 'trainning',
        theme: 'Python',
        level: 1,
        choiceType: 'code',
        choices: [
            {id: 49, choice: 'def carré(x):\n' +
                             '    return x**2 '},
        ],
        correctAnswer: [49],
        explanation: 'Pour les puissances, on double simplement la multiplication. Ainsi \n x^n s\'obtiendra en écrivant x**n.'
    }]
};

export default MOCK_QUESTION_WITH_CODE;
