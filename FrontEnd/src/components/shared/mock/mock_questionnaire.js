const MOCK_QUESTIONNAIRE = {
    id: 1,
    type: 'training',
    level: 1,
    theme: 'JavaScript',
    name: 'Premier questionnaire JavaScript',
    questions: [{
        id: 1,
        questionText: 'Avant d\'être appelé JavaScript, le langage s\'appelait :',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 1, choice: 'JScript'},
            {id: 2, choice: 'LiveScript'},
            {id: 3, choice: 'CoffeeScript'},
            {id: 4, choice: 'ECMAScript'},
            {id: 5, choice: 'ActionScript'}
        ],
        correctAnswer: [2],
        explanation: 'Brendan Eich développe le LiveScript, un langage de script qui s\'inspire du langage Java, et qui est destiné à être installé sur les serveurs développés par Netscape. Netscape se met à développer une version client du LiveScript, qui sera renommée JavaScript en hommage au langage Java créé par la société Sun Microsystems. En effet, à cette époque, le langage Java était de plus en plus populaire, et appeler le LiveScript JavaScript était une manière de faire de la publicité, et au Java, et au JavaScript lui-même.\n' +
            'Issu du livre Dynamisez vos sites web avec JavaScript !'
    }, {
        id: 2,
        questionText: 'Le JavaScript est principalement utilisé en tant que langage :',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 6, choice: 'client-side'},
            {id: 7, choice: 'server-side'},
            {id: 8, choice: 'client-side et server-side'}
        ],
        correctAnswer: [0],
        explanation: 'Le JavaScript est un langage conçu pour dynamiser les pages Web après leur téléchargement par les navigateurs, il est donc client-side vu qu\'il s\'exécute par le biais du navigateur. Cependant, il est possible de l\'utiliser dans des applications server-side mais nous n\'aborderons pas ce concept dans ce cours.'
    }, {
        id: 3,
        questionText: 'Le JavaScript peut s\'utiliser conjointement avec :',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 9, choice: 'du HTML'},
            {id: 10, choice: 'du xHTML'},
            {id: 11, choice: 'du PHP'},
            {id: 12, choice: 'du C'},
            {id: 13, choice: 'de nombreux langages'}
        ],
        correctAnswer: [4],
        explanation: 'Le JavaScript est un langage dont l\'utilisation majoritaire se fait conjointement avec du HTML, mais il peut s\'utiliser avec beaucoup d\'autre langages. Par exemple, Firefox s\'en sert pour son interface en XUL, et Adobe AIR exploite aussi ce langage pour sa plateforme portable (concurrente de Java).'
    }, {
        id: 4,
        questionText: 'Le JavaScript est un langage...',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'radio',
        choices: [
            {id: 14, choice: 'compilé'},
            {id: 15, choice: 'précompilé'},
            {id: 16, choice: 'interprété'}
        ],
        correctAnswer: [2],
        explanation: 'Le JavaScript est un langage interprété. Il est nécessaire de posséder un interpréteur, inclus dans les navigateurs, pour exécuter un code JavaScript.\n' +
            '\n' +
            'Cela dit, côté technique, les interprétateurs agissent de plus en plus en compilant le code, de manière à l’exécuter plus rapidement : on appelle ça la compilation JIT : Just In Time, ou « en temps réel ».'
    }, {
        id: 5,
        questionText: 'Quelle est la bonne syntaxe pour afficher un message à l\'écran ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 17, choice: 'alert(\'Hello world!\')'},
            {id: 18, choice: 'alert(\'Hello world!\');'},
            {id: 19, choice: 'alert \'Hello world!\';'},
            {id: 20, choice: 'alert(Hello world!)'}
        ],
        correctAnswer: [1],
        explanation: 'Seule la deuxième réponse est correcte car la première ne contient pas de point-virgule (il n\'est pas obligatoire, certes, mais il s\'agit d\'une très mauvaise pratique) et la troisième ne contient pas les apostrophes qui doivent encadrer le texte à afficher.\n' +
            '\n' +
            'Pour le moment, l\'utilisation de cette fonction doit vous paraître bien abstraite mais rassurez-vous : vous en saurez beaucoup plus au prochain chapitre :) !'
    }, {
        id: 6,
        questionText: 'Quels syntaxe dois-je utiliser pour écrire un commentaire de fin de ligne ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 21, choice: '// Commentaire de fin de ligne'},
            {id: 22, choice: '|| Commentaire de fin de ligne'},
            {id: 23, choice: '# Commentaire de fin de ligne'},
            {id: 24, choice: '\\\\ Commentaire de fin de ligne'},
            {id: 25, choice: '&& Commentaire de fin de ligne'}
        ],
        correctAnswer: [0],
        explanation: 'Les commentaires de fin de ligne s\'écrivent en commençant par les caractères // tandis que les commentaires multilignes utilisent les caractères /* et */.'
    }, {
        id: 7,
        questionText: 'Où dois-je placer de préférence mon code JavaScript dans une page web ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 26, choice: 'Dans la balises <head> qui est prévu à cet effet.'},
            {id: 27, choice: 'Entre les balises <head> et <body>.'},
            {id: 28, choice: 'Juste avant la fin de la balise <body>.'}
        ],
        correctAnswer: [2],
        explanation: 'Pour des raisons de rapidité d\'exécution du code, il est préférable de placer votre code JavaScript avant la fin de la balise <body> afin que les vieux navigateurs ne chargent pas le JavaScript avant le contenu de la page Web.'
    }, {
        id: 8,
        questionText: 'Par quoi est encadrée une chaîne de caractères ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 29, choice: 'Par des guillemets : " "'},
            {id: 30, choice: 'Par des chevrons : < >'},
            {id: 31, choice: 'Par des apostrophes : \' \''},
            {id: 32, choice: 'Il est possible d\'utiliser les trois ci-dessus.'},
            {id: 33, choice: 'Par des apostrophes ou des guillemets, cela a peu d\'importance.'}
        ],
        correctAnswer: [4],
        explanation: 'Les chaînes de caractères peuvent être entourées de guillemets ou d\'apostrophes, cela ne change rien à votre code. Sachez juste les utiliser à bon escient, par exemple n\'allez pas mettre des apostrophes pour encadrer votre texte alors que celui-ci contient plein d\'apostrophes'
    }, {
        id: 9,
        questionText: 'Je viens de réaliser une concaténation, est-elle correcte : var text = "J\'aime " - \'le JavaScript !\'; ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 34, choice: 'Oui'},
            {id: 35, choice: 'Non, il faut utiliser le signe + au lieu du - !'},
            {id: 36, choice: 'Non, car on ne peut pas faire une concaténation dès la déclaration d\'une variable.'},
            {id: 37, choice: 'Non, il faut utiliser les apostrophes sur les deux chaînes de caractères.'}
        ],
        correctAnswer: [1],
        explanation: 'Pour faire une concaténation, il vous faudra toujours utiliser le signe + entre les deux chaînes de caractères à concaténer. Rien de plus compliqué. ^^'
    }, {
        id: 10,
        questionText: 'Que va être le résultat de cette condition ? var result = 8 % 2 > 0 || !(3 % 2 < 1);',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 38, choice: 'true'},
            {id: 39, choice: 'false'},
            {id: 40, choice: 'Ce code renvoie une erreur'},
            {id: 41, choice: '42'}
        ],
        correctAnswer: [0],
        explanation: 'Si vous vous êtes trompés c\'est que cette condition était un peu complexe pour vous, rappelez-vous qu\'il faut toujours décomposer les conditions en plusieurs étapes :\n' +
            '\n' +
            '// Condition initiale :\n' +
            'var result = 8 % 2 > 0 || !(3 % 2 < 1);\n' +
            '\n' +
            '// Condition décomposée en trois parties :\n' +
            'var result1 = 8 % 2 > 0,\n' +
            'result2 = !(3 % 2 < 1),\n' +
            'result3 = result1 || result2;\n' +
            'La condition ainsi décomposée est déjà plus facile à cerner :\n' +
            '\n' +
            'Pour result1 on fait le calcul 8 % 2 = 0 et on obtient ainsi la comparaison 0 > 0 qui renvoie donc false.\n' +
            'Pour result2 on fait le calcul 3 % 2 = 1 et on obtient ainsi la comparaison 1 > 1 qui renvoie donc false. En revanche là on constate que la condition est entourée de parenthèses et est précédée de l\'opérateur NON, il nous faut donc inverser le résultat de la condition, ainsi, false devient true !\n' +
            'Et pour terminer, dans result3, nous utilisons l\'opérateur logique OU qui renvoie true si l\'une des valeurs soumises vaut true elle aussi. Ainsi, false || true = true !\n' +
            'Au final, notre condition renvoie true !'
    }, {
        id: 11,
        questionText: 'Dans quel ordre doit-on voir apparaître ces structures ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 42, choice: 'if > else > else if'},
            {id: 43, choice: 'else if > if > else'},
            {id: 44, choice: 'if > else if > else'},
            {id: 45, choice: 'else > else if > if'}
        ],
        correctAnswer: [2],
        explanation: 'L\'ordre de ces trois structures est très important et doit toujours être le suivant :\n' +
            '\n' +
            'if (condition) {\n' +
            '\n' +
            '} else if (condition) {\n' +
            '// Faire un truc\n' +
            '} else {\n' +
            '// Faire un autre truc\n' +
            '}'
    }, {
        id: 12,
        questionText: 'Quel est l\'avantage important des ternaires ? Faut-il s\'en servir le plus souvent possible ? Pourquoi ?',
        type: 'trainning',
        theme: 'JavaScript',
        level: 1,
        choiceType: 'checkbox',
        choices: [
            {id: 46, choice: 'Elles sont rapides à écrire mais leur utilisation doit être modérée car le code risque de devenir rapidement illisible.'},
            {id: 47, choice: 'Elles sont bien plus puissantes que les autres conditions, si on peut s\'en servir on doit le faire car elles feront gagner du temps lors de l\'exécution du code !'},
            {id: 48, choice: 'Elles sont très lisibles mais leur utilisation est prohibée car elles sont lentes à l\'exécution.'}
        ],
        correctAnswer: [0],
        explanation: 'Les ternaires sont pratiques, elles vous permettent de raccourcir considérablement certaines parties de votre code, mais je vous déconseille d\'en abuser car vous aurez du mal à vous y retrouver par la suite.'
    }]
};

export default MOCK_QUESTIONNAIRE;
