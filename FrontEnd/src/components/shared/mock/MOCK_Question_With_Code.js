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
            {id: 49, choice:  'The sum of 1.5 and 6.3 is 7.8\n'}
        ],
        correctAnswer: [49],
        explanation: 'Pour les puissances, on double simplement la multiplication. Ainsi \n x^n s\'obtiendra en écrivant x**n.#4#num1 = 1.5 \n' +
            'num2 = 6.3\n' +
            '\n' +
            'sum = num1 + num2\n' +
            '\n' +
            'print(\'The sum of {0} and {1} is {2}\'.format(num1, num2, sum ))#4#'
    },
        {
            id: 14,
            questionText: 'Ecrire une fonction qu\'on nommera f() qui prend en paramètre un nombre x et qui renvoie son carré ?',
            type: 'trainning',
            theme: 'Python',
            level: 1,
            choiceType: 'code',
            choices: [
                {id: 50, choice: 'The sum of 1.5 and 6.3 is 7.8\n'}
            ],
            correctAnswer: [50],
            explanation: 'Pour les puissances, on double simplement la multiplication. Ainsi \n x^n s\'obtiendra en écrivant x**n.#4#num1 = 1.5 \n' +
                'num2 = 6.3\n' +
                '\n' +
                'sum = num1 + num2\n' +
                '\n' +
                'print(\'The sum of {0} and {1} is {2}\'.format(num1, num2, sum ))#4#'
        }, {
            id: 15,
            questionText: 'Ecrire une fonction qu\'on nommera f() qui prend en paramètre un nombre x et qui renvoie son carré ?',
            type: 'trainning',
            theme: 'Python',
            level: 1,
            choiceType: 'code',
            choices: [
                {id: 51, choice:  'The sum of 1.5 and 6.3 is 7.8\n' }
            ],
            correctAnswer: [51],
            explanation: 'Pour les puissances, on double simplement la multiplication. Ainsi \n x^n s\'obtiendra en écrivant x**n.#4#num1 = 1.5 \n' +
                'num2 = 6.3\n' +
                '\n' +
                'sum = num1 + num2\n' +
                '\n' +
                'print(\'The sum of {0} and {1} is {2}\'.format(num1, num2, sum ))#4#'
        }]
};

export default MOCK_QUESTION_WITH_CODE;
