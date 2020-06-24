const MOCK_QUESTION_WITH_CODE = {
    id: 2,
    type: 'training',
    level: 1,
    theme: 'JavaScript',
    name: 'Premier questionnaire JavaScript avec du code',
    questions: [{
        id: 13,
        questionText: 'Je viens de réaliser une concaténation, est-elle correcte : #4#var text = "J\'aime " - \'le JavaScript !\';#4# ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 49, choice: 'Oui'},
            {id: 50, choice: 'Non, il faut utiliser le signe + au lieu du - !'},
            {id: 51, choice: 'Non, car on ne peut pas faire une concaténation dès la déclaration d\'une variable.'},
            {id: 52, choice: 'Non, il faut utiliser les apostrophes sur les deux chaînes de caractères.'}
        ],
        correctAnswer: [49],
        explanation: 'Pour faire une concaténation, il vous faudra toujours utiliser le signe + entre les deux chaînes de caractères à concaténer. Rien de plus compliqué. ^^'
    }, {
        id: 14,
        questionText: 'Que va être le résultat de cette condition ? #4#var result = 8 % 2 > 0 || !(3 % 2 < 1);#4#',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 53, choice: 'true'},
            {id: 54, choice: 'false'},
            {id: 55, choice: 'Ce code renvoie une erreur'},
            {id: 56, choice: '42'}
        ],
        correctAnswer: [53],
        explanation: 'Si vous vous êtes trompés c\'est que cette condition était un peu complexe pour vous, rappelez-vous qu\'il faut toujours décomposer les conditions en plusieurs étapes :\n' +
            '\n' +
            '#4#// Condition initiale :\n' +
            'var result = 8 % 2 > 0 || !(3 % 2 < 1);\n' +
            '\n' +
            '// Condition décomposée en trois parties :\n' +
            'var result1 = 8 % 2 > 0,\n' +
            'result2 = !(3 % 2 < 1),\n' +
            'result3 = result1 || result2;\n#4#' +
            'La condition ainsi décomposée est déjà plus facile à cerner :\n' +
            '\n' +
            'Pour result1 on fait le calcul 8 % 2 = 0 et on obtient ainsi la comparaison 0 > 0 qui renvoie donc false.\n' +
            'Pour result2 on fait le calcul 3 % 2 = 1 et on obtient ainsi la comparaison 1 > 1 qui renvoie donc false. En revanche là on constate que la condition est entourée de parenthèses et est précédée de l\'opérateur NON, il nous faut donc inverser le résultat de la condition, ainsi, false devient true !\n' +
            'Et pour terminer, dans result3, nous utilisons l\'opérateur logique OU qui renvoie true si l\'une des valeurs soumises vaut true elle aussi. Ainsi, false || true = true !\n' +
            'Au final, notre condition renvoie true !'

    }, {
        id: 15,
        questionText: 'Est-il possible de raccourcir la troisième ligne de ce code ? #4#var number1 = 60, number2 = 2;\n' +
            '\t\t\t\n' +
            'number1 = number2 + 40;#4#',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 57, choice: 'Oui, il suffit d\'utiliser l\'opérateur +='},
            {id: 58, choice: 'Non'}
        ],
        correctAnswer: [58],
        explanation: 'Pour ceux qui auraient répondu « Oui » je vous conseille de regarder attentivement le code qui suit : #4#number1 = number1 + 40; // On ajoute 40 à la variable "number1".\n' +
            'number1 += 40;          // On fait la même chose mais de façon raccourcie.\n' +
            'number1 = number2 + 40; // Là on n\'ajoute rien du tout à "number1", on remplace juste sa valeur actuelle par celle de "number2" additionnée à la valeur 40.\n' +
            '\n' +
            '// De ce fait, on ne peut donc pas écrire :\n' +
            'number1 += 40;#4#'
    }, {
        id: 16,
        questionText: 'Quel est le résultat de ce code ? #4#var number1 = "2", number2 = "3", resultat;\n' +
            'resultat = number1 + number2;\n' +
            'alert(resultat);#4#',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 59, choice: '-1'},
            {id: 60, choice: '5'},
            {id: 61, choice: '23'},
            {id: 62, choice: 'Rien, le script rencontre une erreur'}
        ],
        correctAnswer: [61],
        explanation: 'N\'oubliez pas : les chaînes de caractères se concatènent avec l\'opérateur + même si elles contiennent des chiffres. Si vous voulez faire le calcul, pensez bien à utiliser la fonction parseInt() sur chaque chaîne !'
    }, {
        id: 17,
        questionText: 'Laquelle de ces variables sera déclarée correctement ? #4#var var = 4;\n' +
            'text = \'Hello !\';\n' +
            'var variable = 5.781e+8;\n' +
            'var 1variable = 10;#4#',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 63, choice: 'var'},
            {id: 64, choice: 'text'},
            {id: 65, choice: 'variable'},
            {id: 66, choice: '1variable'}
        ],
        correctAnswer: [65],
        explanation: 'Pour déclarer une variable, il faut respecter plusieurs étapes :\n' +
            '\n' +
            'Écrire le mot-clé var ;\n' +
            'Utiliser un nom de variable valide, vous pouvez retrouver au début de ce chapitre ce qui constitue un nom de variable valide ;\n' +
            'Assigner une valeur si on le souhaite, elle peut être un chiffre, un nombre exponentiel, du texte, etc. ;\n' +
            'Ne pas oublier le point-virgule.'
    }
    ]
}

export default MOCK_QUESTION_WITH_CODE;
