/*
	J'affiche un msg de bienvenue
*/
alert("Bienvenue sur mon site");

/*
	prompt : affiche une boîte de dialogue demandant une intéraction avec l'utilisateur, le paramétre est le msg à afficher.
	prompt renvoie un élément de type string d'où l'intérêt de transformer, de parser la chaine de caractère en nombre avec parseInt
	On met le tout dans la variable age
*/
var age = parseInt(prompt("Quel est votre âge ?"));
// me permet de verifier le type de la variable age et son contenu
// le paramètre est une chaine de caractère ici contenant le type de la variable age auquel je concatene un espace pui le contenu de la variable age.
console.log(typeof age + " " + age);
/*
// isNaN teste si le paramètre n'est pas un nombre 
// NaN = Not a Number
// renvoi true ou faux
// j'enchaine les diffèrents cas de figure
// si aucun cas prévu n'est rencontré cela veux dire que le nombre n'est pas entre 0 et 120 ans

if(isNaN(age)) {
	alert("Ce n'est pas une donnée acceptable !");
} else if(age > 0 && age <= 17) {
	alert("Vous êtes mineur !");
} else if(age > 17 && age <= 49) {
	alert("Vous êtes majeur mais pas senior !");
} else if(age > 49 && age <= 59) {
	alert("Vous êtes senior !");
} else if(age > 59 && age <= 120) {
	alert("Profitez de votre temps libre !");
} else {
	alert("L'âge n'est pas réaliste");
}
*/

/********************************************************/
//avec switch 2 cas possibles : soit on prévoit tous les cas possible et on les liste, soit on fait par intervals
// ici on teste la valeur de la variable age
/*
switch(age){
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
		//Si age prend une valeur comprise entre 1 et 17 alors j'affiche mon msg
		alert("Vous êtes mineur !");
		//break permet de sortir du switch
		break;
	case 18:
	case 19:
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	case 25:
	case 26:
	case 27:
	case 28:
	case 29:
	case 30:
	case 31:
	case 32:
	case 33:
	case 34:
	case 35:
	case 36:
	case 37:
	case 38:
	case 39:
	case 40:
	case 41:
	case 42:
	case 43:
	case 44:
	case 45:
	case 46:
	case 47:
	case 48:
	case 49:
		//Si age prend une valeur comprise entre 18 et 49 alors j'affiche mon msg
		alert("Vous êtes majeur mais pas senior !");
		//break permet de sortir du switch
		break;
	case 50:
	case 51:
	case 52:
	case 53:
	case 54:
	case 55:
	case 56:
	case 57:
	case 58:
	case 59:
		//Si age prend une valeur comprise entre 49 et 59 alors j'affiche mon msg
		alert("Vous êtes senior !");
		//break permet de sortir du switch
		break;
	case 60:
	case 61:
	case 62:
	case 63:
	case 64:
	case 65:
	case 66:
	case 67:
	case 68:
	case 69:
	case 70:
	case 71:
	case 72:
	case 73:
	case 74:
	case 75:
	case 76:
	case 77:
	case 78:
	case 79:
	case 80:
	case 81:
	case 82:
	case 83:
	case 84:
	case 85:
	case 86:
	case 87:
	case 88:
	case 89:
	case 90:
	case 91:
	case 92:
	case 93:
	case 94:
	case 95:
	case 96:
	case 97:
	case 98:
	case 99:
	case 100:
	case 101:
	case 102:
	case 103:
	case 104:
	case 105:
	case 106:
	case 107:
	case 108:
	case 109:
	case 110:
	case 111:
	case 112:
	case 113:
	case 114:
	case 115:
	case 116:
	case 117:
	case 118:
	case 119:
	case 120:
		//Si age prend une valeur comprise entre 59 et 120 alors j'affiche mon msg
		alert("Profitez de votre temps libre !");
		//break permet de sortir du switch
		break;
	default:
		// tous les autres cas
		alert("L'âge n'est pas bon");
		//break permet de sortir du switch
		break; 
}
*/
// là j'utilise des intervals
// c'est comme si je faisais une comparaison avec pour opérateur true && "les différents cas"

switch(true){
	//Si age prend une valeur comprise entre 0 et 17 alors j'affiche mon msg
	case age > 0 && age <= 17 :
		alert("Vous êtes mineur !");
		break;
		//Si age prend une valeur comprise entre 18 et 49 alors j'affiche mon msg
	case age > 17 && age <= 49 :
		alert("Vous êtes majeur mais pas senior !");
		break;
		//Si age prend une valeur comprise entre 50 et 59 alors j'affiche mon msg
	case age > 49 && age <= 59 :
		alert("Vous êtes senior !");
		break;
		//Si age prend une valeur comprise entre 60 et 120 alors j'affiche mon msg
	case age > 59 && age <= 120 :
		alert("Profitez de votre temps libre !");
		break;
	default:
		//dans tous les autres cas
		alert("L'âge n'est pas bon");
		break;
}