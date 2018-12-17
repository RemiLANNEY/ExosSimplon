var nb; // ici je déclare la variable qui contiendra le nb de nom que l'on veux rentrer
// la boucle do While permet de repeter une suite d'instruction au moins une fois et tant que la condition du while n'est pas remplie
do{
	// je demande un nombre
	nb = parseInt(prompt("Entrez le nombre de nom que vous voulez enregistrer"));
// tant que ce que l'utilisateur rentre n'est pas un nombre je pose la question
} while(isNaN(nb));

// ici je déclare une variable et je l'initialise avec un debut de texte 
// cette variable me servira a stocker la chaine de caractère que je vais afficher
var lesNoms = "Voici les noms rentrés :\n";

// la boucle for est généralement utilisée lorsqu'on connait précisement le nombre de répétition
// ici le nb de répétition est connue c'est nb
// Pour i commençant à 0 et augmentant de 1 jusqu'à ateindre nb
// for(var i=0; i<nb; i++){
	// je concatène le nom rentré à la fin de la variable lesNoms
// 	lesNoms += prompt("Un nom ?") + "\n";
// }

// la boucle for est généralement utilisée lorsqu'on ignore le nombre d'itération
// Ici tant que nb est supérieur à 0 j'enregistre les noms
while(nb>0){
	lesNoms += prompt("Un nom ?") + "\n";
	// il ne faut surtout pas oublier de décrémenter nb sinon on entre dans une boucle infinie foutant en l'air le serveur
	nb--;
}

// j'affiche le contenu la variable avec un alert 
alert(lesNoms);
// j'affiche le contenu la variable dans la console 
console.log(lesNoms);
// j'affiche dans le html
// Avec document.getElementById("text") je recupère "l'adresse" de la balise possédant l'id text et grace à innerHTML j'insert du le contenu de ma variable dedans
document.getElementById("text").innerHTML = lesNoms;