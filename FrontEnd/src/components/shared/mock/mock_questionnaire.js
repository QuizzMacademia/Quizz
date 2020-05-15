const MOCK_QUESTIONNAIRE = {
    id: 1,
    name: 'Premier questionnaire JavaScript',
    questions: [{
        id: 1,
        questionName: 'Avant d\'être appelé JavaScript, le langage s\'appelait :',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
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
        typeChoix: 'radio',
        choixQuestion: [
            'client-side',
            'server-side',
            'client-side et server-side'
        ],
        bonneReponse: [0],
        explication: 'Le JavaScript est un langage conçu pour dynamiser les pages Web après leur téléchargement par les navigateurs, il est donc client-side vu qu\'il s\'exécute par le biais du navigateur. Cependant, il est possible de l\'utiliser dans des applications server-side mais nous n\'aborderons pas ce concept dans ce cours.'
    }, {
        id: 3,
        questionName: 'Le JavaScript peut s\'utiliser conjointement avec :',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'du HTML',
            'du xHTML',
            'du PHP',
            'du C',
            'de nombreux langages'
        ],
        bonneReponse: [4],
        explication: 'Le JavaScript est un langage dont l\'utilisation majoritaire se fait conjointement avec du HTML, mais il peut s\'utiliser avec beaucoup d\'autre langages. Par exemple, Firefox s\'en sert pour son interface en XUL, et Adobe AIR exploite aussi ce langage pour sa plateforme portable (concurrente de Java).'
    }, {
        id: 4,
        questionName: 'Le JavaScript est un langage...',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'radio',
        choixQuestion: [
            'compilé',
            'précompilé',
            'interprété'
        ],
        bonneReponse: [2],
        explication: 'Le JavaScript est un langage interprété. Il est nécessaire de posséder un interpréteur, inclus dans les navigateurs, pour exécuter un code JavaScript.\n' +
            '\n' +
            'Cela dit, côté technique, les interprétateurs agissent de plus en plus en compilant le code, de manière à l’exécuter plus rapidement : on appelle ça la compilation JIT : Just In Time, ou « en temps réel ».'
    }, {
        id: 5,
        questionName: 'Quelle est la bonne syntaxe pour afficher un message à l\'écran ?',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'alert(\'Hello world!\')',
            'alert(\'Hello world!\');',
            'alert \'Hello world!\';',
            'alert(Hello world!)'
        ],
        bonneReponse: [1],
        explication: 'Seule la deuxième réponse est correcte car la première ne contient pas de point-virgule (il n\'est pas obligatoire, certes, mais il s\'agit d\'une très mauvaise pratique) et la troisième ne contient pas les apostrophes qui doivent encadrer le texte à afficher.\n' +
            '\n' +
            'Pour le moment, l\'utilisation de cette fonction doit vous paraître bien abstraite mais rassurez-vous : vous en saurez beaucoup plus au prochain chapitre :) !'
    }, {
        id: 6,
        questionName: 'Quels syntaxe dois-je utiliser pour écrire un commentaire de fin de ligne ?',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            '// Commentaire de fin de ligne',
            '|| Commentaire de fin de ligne',
            '# Commentaire de fin de ligne',
            '\\\\ Commentaire de fin de ligne',
            '&& Commentaire de fin de ligne',
        ],
        bonneReponse: [0],
        explication: 'Les commentaires de fin de ligne s\'écrivent en commençant par les caractères // tandis que les commentaires multilignes utilisent les caractères /* et */.'
    }, {
        id: 7,
        questionName: 'Où dois-je placer de préférence mon code JavaScript dans une page web ?',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'Dans la balises <head> qui est prévu à cet effet.',
            'Entre les balises <head> et <body>.',
            'Juste avant la fin de la balise <body>.'
        ],
        bonneReponse: [2],
        explication: 'Pour des raisons de rapidité d\'exécution du code, il est préférable de placer votre code JavaScript avant la fin de la balise <body> afin que les vieux navigateurs ne chargent pas le JavaScript avant le contenu de la page Web.'
    }, {
        id: 8,
        questionName: 'Par quoi est encadrée une chaîne de caractères ?',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'Par des guillemets : " "',
            'Par des chevrons : < >',
            'Par des apostrophes : \' \'',
            'Il est possible d\'utiliser les trois ci-dessus.',
            'Par des apostrophes ou des guillemets, cela a peu d\'importance.',
        ],
        bonneReponse: [4],
        explication: 'Les chaînes de caractères peuvent être entourées de guillemets ou d\'apostrophes, cela ne change rien à votre code. Sachez juste les utiliser à bon escient, par exemple n\'allez pas mettre des apostrophes pour encadrer votre texte alors que celui-ci contient plein d\'apostrophes'
    }, {
        id: 9,
        questionName: 'Je viens de réaliser une concaténation, est-elle correcte : var text = "J\'aime " - \'le JavaScript !\'; ?',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'Oui',
            'Non, il faut utiliser le signe + au lieu du - !',
            'Non, car on ne peut pas faire une concaténation dès la déclaration d\'une variable.',
            'Non, il faut utiliser les apostrophes sur les deux chaînes de caractères.'
        ],
        bonneReponse: [1],
        explication: 'Pour faire une concaténation, il vous faudra toujours utiliser le signe + entre les deux chaînes de caractères à concaténer. Rien de plus compliqué. ^^'
    }, {
        id: 10,
        questionName: 'Que va être le résultat de cette condition ? var result = 8 % 2 > 0 || !(3 % 2 < 1);',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'true',
            'false',
            'Ce code renvoie une erreur',
            '42'
        ],
        bonneReponse: [0],
        explication: 'Si vous vous êtes trompés c\'est que cette condition était un peu complexe pour vous, rappelez-vous qu\'il faut toujours décomposer les conditions en plusieurs étapes :\n' +
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
        questionName: 'Dans quel ordre doit-on voir apparaître ces structures ?',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'if > else > else if',
            'else if > if > else',
            'if > else if > else',
            'else > else if > if'
        ],
        bonneReponse: [2],
        explication: 'L\'ordre de ces trois structures est très important et doit toujours être le suivant :\n' +
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
        questionName: 'Quel est l\'avantage important des ternaires ? Faut-il s\'en servir le plus souvent possible ? Pourquoi ?',
        typeQuestion: 'trainning',
        categorie: 'JavaScript',
        nivieauDiff: 1,
        typeChoix: 'checkbox',
        choixQuestion: [
            'Elles sont rapides à écrire mais leur utilisation doit être modérée car le code risque de devenir rapidement illisible.',
            'Elles sont bien plus puissantes que les autres conditions, si on peut s\'en servir on doit le faire car elles feront gagner du temps lors de l\'exécution du code !',
            'Elles sont très lisibles mais leur utilisation est prohibée car elles sont lentes à l\'exécution.'
        ],
        bonneReponse: [0],
        explication: 'Les ternaires sont pratiques, elles vous permettent de raccourcir considérablement certaines parties de votre code, mais je vous déconseille d\'en abuser car vous aurez du mal à vous y retrouver par la suite.'
    }]
};

export default MOCK_QUESTIONNAIRE;
