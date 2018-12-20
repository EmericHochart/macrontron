/* Projet n°5 - Parcours Développeur Front End - OpenClassRoom
Author : Emeric Hochart
Git : https://github.com/EmericHochart/macrontron
*/

// Création d'un tableau à partir d'une variable chaîne
// La séparation se fait par le caractère &
const texte="Le Gaulois réfractaire au changement&aime son pays&c'est pour se plaindre&L'horticulteur&traverse la rue&il trouve le bonheur&Le Français&parle librement&c'est la seule chose qu'il n'a pas le droit de faire&L'adolescent de Banlieue&m'appelle Manu&c'est pour donner des leçons aux autres&Le pauvre&reste pauvre&c'est pas pour s'en sortir&Le Fainéant&pense qu'on ne doit pas bouger&c'est parce que la France n'est pas réformable&Le gilet Jaune&attend au rond point&c'est pour manifester son mécontentement&Un parent&a 7 ou 8 enfants&c'est un manque d'éducation&Un ex-salarié&fout le bordel&il ferait mieux d'aller regarder s'il ne peut pas avoir un poste&Quelqu'un&n'est rien&il peut devenir quelqu'un qui réussit&Un jeune&travaille avec un T-shirt&c'est pour se payer un costard&Un illétré&fait la grève&c'est souvent parce qu'il est ouvrier&Un usager des transports&voyage en car&c'est parce que le train est onéreux&Un Kwassa-Kwassa&pêche peu&c'est parce qu'il ramène du Comorien";
let morceauxPhrase= texte.split('&');
let longueur=morceauxPhrase.length;
// Définition des fonctions
// On définit une fonction qui génère un entier aléatoire dans un intervalle [min, max]
function genererEntierAleatoire(min, max) {
	// La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.
	min = Math.ceil(min);
	// La fonction Math.floor() renvoie le plus grand entier qui est inférieur ou égal au nombre donné.
	max = Math.floor(max);
	// La fonction Math.random() renvoie un nombre flottant compris dans l'intervalle [0, 1[
	// Le résultat renvoyé est un entier compris dans l'intervalle [min,max]
	return Math.floor(Math.random() * (max - min +1)) + min;
};
// Fonction qui génère la phrase aléatoire
function phraseAleatoire(){
	// On intialise par des assertions fausses afin que la condition soit prise au moins une fois 
	let positionDebut=1;
	let positionMilieu=2;
	let positionFin=3;
	// On ne prend que les débuts de phrase
	while (positionDebut%3!==0)
		{positionDebut=genererEntierAleatoire(0,longueur-1);};
	// On ne prend que les milieux de phrase
	while (positionMilieu%3!==1)
		{positionMilieu=genererEntierAleatoire(0,longueur-1);};
	// On ne prend que les fins de phrase
	while (positionFin%3!==2)
		{positionFin=genererEntierAleatoire(0,longueur-1);};
	// On construit la phrase aléatoire
	let phrase=morceauxPhrase[positionDebut]+" "+morceauxPhrase[positionMilieu]+", "+morceauxPhrase[positionFin]+".";
	// On renvoie la phrase
	return phrase;
}
// On affiche la phrase aléatoire en faisant appel à la fonction phraseAleatoire();
console.log("La phrase aléatoire :");
console.log(phraseAleatoire());


/* TODO LIST
-petite fonction pour vérifier que la première lettre de la première phrase est en majuscule et une autre pour vérifier qu'il y a un point en fin de phrase ?
-peut-être faire 3 tableaux au lieu d'un ça sera plus simple ... mais moins fun
-faire le menu avec la boucle
-pourquoi pas utiliser les objets bien qu'inutile
-minimiser les lignes de codes
*/