var nb; // ici je déclare la variable qui contiendra le nb de nom que l'on veux rentrer
// la boucle do While permet de repeter une suite d'instruction au moins une fois et tant que la condition du while n'est pas remplie
do{
	// je demande un nombre
	nb = parseInt(prompt("Entrez le nombre de nom que vous voulez enregistrer"));
// tant que ce que l'utilisateur rentre n'est pas un nombre je pose la question
} while(isNaN(nb));

var myArray = [], nbBon;

for(var i=0; i<nb; i++){
	// j'insère à la fin de mon tableau le nom rentré grâce au prompt
	do{
		// je demande un nombre
		nbBon = parseInt(prompt("Un nombre ?"));
		// tant que ce que l'utilisateur rentre n'est pas un nombre je pose la question
	} while(isNaN(nbBon));
	// si le nombre est bon je sors de ma boucle et je l'insert dans mon tableau
	myArray.push(nbBon);
}

// ici je déclare des variable qui me perttront de compter les nombres positifs, les nombres négatifs et les chaines de caractères
var nbPos = 0, nbNeg = 0, nbPasBon = 0;
// avec la boucle dans la boucle, la variable nbPasBon devient totalement inutile puisqu'on est certain qu'il y aura uniquement des nombres
// je parcours mon tableau avec une boucle for
for (var i = 0; i < myArray.length; i++) {
	if(myArray[i]>=0){
		nbPos++;
	} else if(myArray[i]<0){
		nbNeg++;
	} else {
		nbPasBon++;
	}
}
//j'affiche le resultat
document.getElementById("boucles_js").innerHTML = "Il y a " + nbPos + " nombres positifs, " + nbNeg + " nombres négatifs et " + nbPasBon + " chaine de caractère";