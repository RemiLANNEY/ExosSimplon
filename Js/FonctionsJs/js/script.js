// dans cette variable je vais stocker le nombre que je testerai
// la portée est globale : cette variable sera visible dans toutes les fonctions !
var nb;

// fonction qui demande un nombre à l'utilisateur
function demandeNombre(){
	// Je demande un nombre
	nb = parseInt(prompt("Donne moi un nombre STP !"));
	// tant que nb est négatif ou que nb n'est pas un nombre
	while(nb < 0 || isNaN(nb)){
		// je demande un vrai nombre que j'attribue à NB
		nb = parseInt(prompt("Donne moi un vrai nombre STP !"));	
	}
}

// fonction qui determine si nb est premier ou non
function isPremier(){
	// j'appelle la fonction demandeNombre()
	demandeNombre(); 

	// Si nb vaux 0 ou 1 alors le script réagis
	if(nb == 0 || nb == 1){
		alert("Ce n'est pas un nombre premier !");
	} else {
		// Sinon
		// Je part du principe que le nombre est premier et je le symbolise par une variable vallant vrai
		var estPremier = true;
		// Ensuite je teste chaque nombre compris entre 2 et nb
		for (var diviseur = 2; diviseur < nb; diviseur++) {
			// Si je rencontre un diviseur de nb, cela veut dire que mon nb n'est pas premier
			if(nb % diviseur == 0){
				// dans ce cas je met ma variable à faux
				estPremier = false;
				//break;
			}
		}

		// Si ma variable de teste est vrai, cela veut dire qu'elle n'a aucun diviseur autre que 1 et lui-même donc premier
		if (estPremier) {
			alert(nb + " est premier !");
		} else {
			// Sinon le nombre n'est pas premier
			alert(nb + " n'est pas premier !");
		}
	}
}

// j'appelle ma fonction determinant si un nombre est premier ou non
isPremier();