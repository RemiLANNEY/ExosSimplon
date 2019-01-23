$(document).ready(function(){
	var liste 
	do{
		liste = prompt("Entrez un truc !");
		$("#maListe").append("<li>"+liste+"</li>");
	} while (liste != "exit");
	
	
});