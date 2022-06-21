// 1) on pose une question
// on sait qu'on va avoit besoin d'écouter plusieurs fois la réponse, donc on a se servir de la méthode .on qui écoute l'évènement 'line'


const readline = require('readline');

// on crée l'interface
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// STEP 2) on change notre question pour qu'elle contienne un ombre alétoire 
// générer un onmbre aléatoire : on va utiliser Math.random

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// on crée 3 variables qui vont nous être bien utiles :
let minBoundary = 1;
let maxBoundary = 101;
// on récupère la valeur de retour de cette fonction
let proposition = getRandomInt(minBoundary, maxBoundary);

// on change la question posée à l'utilisateur pour y inclure notre nombre aléatoire :
console.log(`Est-ce que tu penses au nombre ${proposition} ?`);

// STEP 3) En fonction de la réponse de l'utilisateur, afficher un message détaillant ce que le programme va faire par la suite. Si c'est gagné du premier coup, afficher un message de victoire.
// on veut regarder les réponses saisies par l'utilisateur, pour ceci on utilise la méthode .on qui écoute l'évènement 'line'

// version avec fonction anonyme : on écrit dirrectement la définition de la fonction dans les arguments de la méthode .on
interface.on('line', (userInput) => {
    console.log(`tu as répondu : ${userInput}`);
    if (userInput === "+" || userInput === "Plus") {
        console.log("je vais te proposer un nombre plus grand !");

        minBoundary = proposition + 1;
        proposition = getRandomInt(minBoundary, maxBoundary);
        console.log(`Alors peut être : ${proposition}`);

    } 
    else if (userInput === "-" || userInput === "Moins") {
        console.log("je vais te proposer un nombre plus petit !");

        maxBoundary = proposition;
        proposition = getRandomInt(minBoundary, maxBoundary);
        console.log(`Alors peut être : ${proposition}`);
    }
    else if (userInput === "=" || userInput === "Ok") {
        console.log("Whouhou je suis trop fort !!");
        interface.close();
    } else {
        console.log('Pas compris...');
    }
})