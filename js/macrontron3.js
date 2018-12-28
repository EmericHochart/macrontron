/* Projet n°5 - Parcours Développeur Front End - OpenClassRoom
Author : Emeric Hochart
Git : https://github.com/EmericHochart/macrontron
*/

// Création de tableaux à partir de variables chaînes
// La séparation se fait par le caractère &
const macronTexte="Le Gaulois réfractaire au changement&aime son pays&c'est pour se plaindre&L'horticulteur&traverse la rue&il trouve le bonheur&Le Français&parle librement&c'est la seule chose qu'il n'a pas le droit de faire&L'adolescent de Banlieue&m'appelle Manu&c'est pour donner des leçons aux autres&Le pauvre&reste pauvre&c'est pas pour s'en sortir&Le Fainéant&pense qu'on ne doit pas bouger&c'est parce que la France n'est pas réformable&Le gilet Jaune&attend au rond point&c'est pour manifester son mécontentement&Un parent&a 7 ou 8 enfants&c'est un manque d'éducation&Un ex-salarié&fout le bordel&il ferait mieux d'aller regarder s'il ne peut pas avoir un poste&Quelqu'un&n'est rien&il peut devenir quelqu'un qui réussit&Un jeune&travaille avec un T-shirt&c'est pour se payer un costard&Un illétré&fait la grève&c'est souvent parce qu'il est ouvrier&Un usager des transports&voyage en car&c'est parce que le train est onéreux&Un Kwassa-Kwassa&pêche peu&c'est parce qu'il ramène du Comorien";
const giletTexte="Le pouvoir d'achat&n'est pas dans les débats&on nous prend pour des cons&Le travailleur&est dans le même pétrin que nous&on n'est pas là pour l'embêter&L'écologie&n'est pas le but premier&çà ne nous préoccupe pas pour l'instant&L'information à la télévision&dit tout et n'importe quoi&on le voit sur Facebook&Un manifestant&tombe à cause du gouvernement&c'est sûrement un policier le responsable."


class Macrontron{
	constructor(){
		this.macronTexte="Le Gaulois réfractaire au changement&aime son pays&c'est pour se plaindre&L'horticulteur&traverse la rue&il trouve le bonheur&Le Français&parle librement&c'est la seule chose qu'il n'a pas le droit de faire&L'adolescent de Banlieue&m'appelle Manu&c'est pour donner des leçons aux autres&Le pauvre&reste pauvre&c'est pas pour s'en sortir&Le Fainéant&pense qu'on ne doit pas bouger&c'est parce que la France n'est pas réformable&Le gilet Jaune&attend au rond point&c'est pour manifester son mécontentement&Un parent&a 7 ou 8 enfants&c'est un manque d'éducation&Un ex-salarié&fout le bordel&il ferait mieux d'aller regarder s'il ne peut pas avoir un poste&Quelqu'un&n'est rien&il peut devenir quelqu'un qui réussit&Un jeune&travaille avec un T-shirt&c'est pour se payer un costard&Un illétré&fait la grève&c'est souvent parce qu'il est ouvrier&Un usager des transports&voyage en car&c'est parce que le train est onéreux&Un Kwassa-Kwassa&pêche peu&c'est parce qu'il ramène du Comorien";
		this.giletTexte="Le pouvoir d'achat&n'est pas dans les débats&on nous prend pour des cons&Le travailleur&est dans le même pétrin que nous&on n'est pas là pour l'embêter&L'écologie&n'est pas le but premier&çà ne nous préoccupe pas pour l'instant&L'information à la télévision&dit tout et n'importe quoi&on le voit sur Facebook&Un manifestant&tombe à cause du gouvernement&c'est sûrement un policier le responsable."
		// Création du Menu 
		console.log("Bienvenue dans le générateur de citations !");
		// Initialisation de la condition
		this.condition=true;
		// Boucle du menu
		while(this.condition){
			// Affichage du menu
			console.log("\n1 : Macrotron");
			console.log("2 : Giletotron");
			console.log("0 : Quitter");
			// On demande à l'utilisateur de choisir une option
			let optionGeneral=prompt("Choisissez une option :");
			if (optionGeneral==="0"){
				// Le choix 0 permet de quitter le programme
				this.condition=false;
				console.log("\nAu revoir !");
			}
			else if (optionGeneral==="1"){
				// Le choix 1 oriente vers le sous-menu avec en condition macronTexte
				this.pipotron(this.macronTexte);
			}
			else if (optionGeneral==="2"){
				// Le choix 2 oriente vers le sous-menu avec en condition giletTexte
				this.pipotron(this.giletTexte);
			}
			else {
				// Un autre choix indique de saisir un choix valide
				console.log("\nMerci de choisir une option valide !");
			};
		};
	}
	genererEntierAleatoire(min, max) {
	// La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.
	min = Math.ceil(min);
	// La fonction Math.floor() renvoie le plus grand entier qui est inférieur ou égal au nombre donné.
	max = Math.floor(max);
	// La fonction Math.random() renvoie un nombre flottant compris dans l'intervalle [0, 1[
	// Le résultat renvoyé est un entier compris dans l'intervalle [min,max]
	return Math.floor(Math.random() * (max - min +1)) + min;
	};
	// Fonction qui génère la phrase aléatoire
	phraseAleatoire(texte){
		// On crée un tableau à partir du texte via la séparation &
		let morceauxPhrase=texte.split('&');
		let longueur=morceauxPhrase.length-1;
		// On intialise par des assertions fausses afin que la condition soit prise au moins une fois 
		let positionDebut=1;
		let positionMilieu=2;
		let positionFin=3;
		// On ne prend que les débuts de phrase
		while (positionDebut%3!==0)
			{positionDebut=this.genererEntierAleatoire(0,longueur);};
		// On ne prend que les milieux de phrase
		while (positionMilieu%3!==1)
			{positionMilieu=this.genererEntierAleatoire(0,longueur);};
		// On ne prend que les fins de phrase
		while (positionFin%3!==2)
			{positionFin=this.genererEntierAleatoire(0,longueur);};
		// On construit la phrase aléatoire
		let phrase=morceauxPhrase[positionDebut]+" "+morceauxPhrase[positionMilieu]+", "+morceauxPhrase[positionFin];
		phrase=this.normaliserPhrase(phrase);
		// On renvoie la phrase
		return phrase;
	};
	// Fonction qui met une majuscule à la première lettre du début de la phrase et un point à la fin.
	normaliserPhrase(phrase){
		// On récupère la première lettre de la phrase et on la met en majuscule
		let premiereLettre=phrase.charAt(0).toUpperCase();
		// On récupère la longueur de la phrase
		let longueurPhrase=phrase.length;
		// On récupère la dernière lettre de la phrase
		let derniereLettre=phrase.charAt(longueurPhrase-1);
		// On remplace la première lettre de la phrase par sa majuscule
		let phraseNormalise = phrase.replace(phrase.charAt(0),premiereLettre);
		// Si la dernière lettre n'est pas un point, on ajoute un point
		if (derniereLettre!=="."&&derniereLettre!=="!"&&derniereLettre!=="?") {
			phraseNormalise+=".";
		};
		//On renvoie la phrase normalisée
		return phraseNormalise;
	}
	// Fonction pour le sous-menu
	pipotron(texte){
		let pipotron=true;
			while(pipotron){
			// Affichage du menu
			console.log("\n1 : Nombre de citations");
			console.log("0 : Retour");
			let optionPipotron=prompt("Choisissez une option");
				if (optionPipotron==="1"){
					let nombreCitations=Number(prompt("Combien de citations ? (entre 1 et 5)"));
					if (nombreCitations>=1&&nombreCitations<=5){
						for (let i=1;i<=nombreCitations;i++){
							console.log(this.phraseAleatoire(texte));
						}
					}
					else {
						console.log("Ce choix n'est pas valide");
					};
				}
				else if (optionPipotron==="0"){
					pipotron=false;
				}
				else {
					// Un autre choix indique de saisir un choix valide
					console.log("\nMerci de choisir une option valide !");
				}
			};
	};

};

new Macrontron();