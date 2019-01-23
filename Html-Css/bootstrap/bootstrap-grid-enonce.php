<?php ?>
<!DOCTYPE html>
<html lang="fr">

	<head>
		<title>Bootstrap - Système de grille</title>
		<meta charset="UTF-8">
		<!--insérer ci-dessous la balise meta viewport-->
		 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!--insérer ci-dessous le lien vers bootstrap css-->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<!--css maison-->
		<link href="./css/style.css" rel="stylesheet" type="text/css">
	

		
	</head>
	<body>
		<!--insérer ci-dessous le lien vers bootstrap JS (facultatif)-->
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


		<h1>-----Exercices Bootstrap Grid-----</h1>

		<div class="maConsigne pink">
			<p id="bigger">Initialisation : Ajoutez les liens Bootstrap css et js aux endroits prévus (fin du head, début du body). Les énoncés sont dans les div de classe "maConsigne". Les div de classe "borders" contiennent les bloc énoncé+exercice et sont accessibles en cliquant sur les boutons de titre. L'espace où vous devez mettre votre container est dans (ou sur) la balise de classe "votreReponse". En cas de blocage, prenez bien connaissance de tout le code présent sur index.php et des commentaires.</p>
			<!--Il y a du style css pur et jquery qui ne font pas partie de l'exercice, j'aurais pu afficher tout ça en Bootstrap mais aujourd'hui ça fait partie de l'exercice de charger le framework; donc ça n'aurait pas été beau. Le fichier events.js (jQuery) n'a pas besoin d'être touché.-->
		</div>

		<div class="container">
			<div class="row">
				<div class="col-md-3">Si Bootstrap CSS est correctement chargé, cette colonne prend à présent moins de place sur la page</div>
			</div>
		</div><br />


		<h3 class="titles"></span>Exercice 1 : Utilisation basique</h3>
		<div class="borders">
			<div class="maConsigne orange">
				<p>Consigne</p>
				<img src="img/layout-01.png" alt="rendu désiré">
				<p>Reproduisez le schéma ci-dessus à l'aide des row et des col. L'affichage doit être sur un écran de tablette. Une fois fini, testez d'autres configurations !</p>
				<!--Indice : 3 row contenant des col-sm./!\ colonnes n'aparaissent pas si aucun texte n'est dedans... Espace insécable-->
			</div>
			<div class="votreReponse">
				<p>Champ de réponse</p>
				
			</div>
		</div>










		<h3 class="titles">Exercice 2 : Saut de colonnes et responsive</h3>
		<div class="borders">
			<div class="maConsigne orange">
				<p>Consigne</p>
				<img src="img/layout-02.png" alt="rendu désiré">
				<p>Reproduisez le schéma ci-dessus en utilisant les offsets, et la combinaison de plusieurs tailles d'écran. Une fois fini, testez d'autres configurations !</p>
				<!--Indice : Pour le saut de colonne utiliser la classe offset-*-* (voir boîte à outils à la fin du fichier HTML); Pour l'affichage responsive attendu il faut combiner les classes col-md et col-sm; testez-le !-->
			</div>
			<div class="votreReponse">
				<p>Champ de réponse</p>
				
			</div>
		</div>










		<h3 class="titles">Exercice 3 : Colonnes imbriquées et échelle</h3>
		<div class="borders">
			<div class="maConsigne orange">
				<p>Consigne</p>
				<img src="img/layout-03.png" alt="rendu désiré">
				<p>Reproduisez le schéma ci-dessus en imbriquant les différentes row/col et en utilisant les offsets. Il y a trois niveaux d'imbrication, du plus foncé au plus clair.
				/!\Dû à l'imbrication, le schéma final ne sera pas à l'échelle (12 colonnes) du schéma demandé.</p>
				<!--Fun fact : La grille à 12 colonnes s'applique à l'élément parent; ce qui veut dire que mettre des colonnes dans un col-md-9 diminuera la largeur de chaque colonne comparativement à lorsqu'on travaille dans un col-md-12. -->
				<!--Indice : Le carré externe (jaune foncé) représente une seule row contenant d'autres row; comparativement à avant où on a affiché des col sur trois row différentes.-->
				<!--Indice : Pour sauter une ligne vide sans colonne on peut remplacer <div class="col-md-*"></div> par <div>&nbsp;</div>-->
			</div>
			<div class="votreReponse">
				<p>Champ de réponse</p>
				
			</div>
		</div>










		<h3 class="titles">Exercice 4 : Mise en page</h3>
		<div class="borders">
			<div class="maConsigne orange">
				<p>Consigne</p>
				<img src="img/layout-04.png" alt="rendu désiré">
				<p>Cet exercice donne une mise en page. Pour ce faire il faut encore utiliser des lignes et des colonnes imbriquées. Le cadre jaune contient trois niveaux d'imbrication, le plus élevé est coloré en gris (plus clair). Une fois fini, imaginez une mise en page pour tablette et/ou pour mobile en ajoutant des col-sm et col-xs !</p>
			</div>
			<div class="votreReponse">
				<p>Champ de réponse</p>
				
			</div>
		</div>










		<h3 class="titles">Exercice 5 : Cacher des sections</h3>
		<div class="borders">
			<div class="maConsigne orange">
				<p>Consigne</p>
				<p>Soient 5 row contenant chacune une col-lg-12, numérotées de 1 à 5. A l'aide des classes d-#-none et d-#-block:</p>
				<!--indice : pour cet affichage inspirez-vous des essais de l'exercice 1-->
				<ul>
					<li>Cachez la colonne 2 uniquement lorsque la taille d'écran est sm</li>
					<li>Cachez la colonne 3 uniquement lorsque la taille d'écran est lg</li>
					<li>Cachez la colonne 4 uniquement lorsque la taille d'écran est xs</li>
					<li>La colonne 5 est affichée uniquement lorque la taille d'écran est xs</li>
				</ul>
				<!--indice : Pour comprendre le fonctionnement de display référez vous à la documentation Bootstrap 4 : https://getbootstrap.com/docs/4.0/utilities/display/-->
			</div>
			<div class="votreReponse">
				<p>Champ de réponse</p>




			</div>
		</div>
		<hr style="border-top:6px ridge black; width:50%; margin:auto; margin-top:20px"/>
		<div style="height:150px;"></div><!--une div pour activer la barre de scroll au chargement de la page-->

		<!--js jQuery (effets collapse pour la lecture des énoncés)-->
		<script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>
		<script src="js/events.js"></script>
	</body>
	<!--Boîte à outils :
		*container - Range le contenu dans un container qui occupe le centre de l'écran (il y a des margin autour); responsive
		*container-fluid - Range le contenu dans un container qui occupe tout l'espace de l'écran; responsive
		*col-lg-[0-12] - Affiche une colonne sur grand écran; qui devient responsive sur plus petits écrans
		*col-md-[0-12] - Affiche une colonne sur écran moyen; qui devient responsive sur plus petits écrans; reste la même sur plus grands écrans
		*col-sm-[0-12] - Affiche une colonne sur écran petit; qui devient responsive sur plus petits écrans; reste la même sur plus grands écrans
		*col-xs-[0-12] - Affiche une colonne sur écran xtra-petit; reste la même sur plus grands écrans

		###CLASSES NON ABORDEES SUR LE COURS###

		*offset-[xs-lg]-[0-12] - Classe à utiliser directement sur une colonne (à côté du col-[xs-lg]-[0-12]); est utilisée pour décaler les colonnes et laisser un vide au milieu
		

		###COURS INTERESSANTS
		Vous pouvez revoir en + détaillé les notions de cet exercice sur le cours openClassrooms !
		*https://openclassrooms.com/courses/prenez-en-main-bootstrap/une-grille
		Autre cours :
		*http://bootstrap.twit.free.fr/index.php - même contenu que sur OC mais moins d'exemples pratiques
		*https://blog.lesieur.name/gerer-sa-cascade-de-grille-et-de-composant-avec-bootstrap/ - Quelques autres exemples d'imbrication

		###AUTRES INFOS
		/!\Entre Bootstrap 3.7 (présenté dans les cours ci-dessus) et Bootstrap 4, certaines choses ont changé !
		*Par exemple col-md-offset-4 devient offset-md-4.
		*col-#-push-* et col-#-pull-* sont remplacés par des classes "order" utilisant flexbox.
		*hidden-# et visible-# sont remplacés par la propriété display -> https://getbootstrap.com/docs/4.0/utilities/display/



--></html>