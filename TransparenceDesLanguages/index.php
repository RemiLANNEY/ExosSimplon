<!doctype html>
<html lang="fr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
			  src="https://code.jquery.com/jquery-3.3.1.min.js"
			  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
			  crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>

    

    <title>Transparence des langages</title>
  </head>
  <body>
	<h1>Le même effet (presque) mais avec trois manières différentes</h1>
	<section id="Explications">
		Je vais transformer une image : a savoir l'agrandir et la déplacer au survol de la souris
	</section>

    <section id="css">
    	<h2>Avec CSS</h2>   
    	<img src="img/informatique.jpg" alt="modifier par css"> 	
    </section>

    <section id="javascript">
    	<h2>Avec JS</h2>    	
    	<img src="img/informatique.jpg" alt="modifier par JS" onmouseover = "transformImg(this)" onmouseout = "resetImg(this)">
    	
    </section>

	<section id="jQuerySection">		
    	<h2>Avec jQuery</h2> 
    	<div>
	    	<img src="img/informatique.jpg" alt="modifier par jQuery" id="jQuery">   	
	    </div>
    </section>	
    
	<script type="text/javascript" src="js/script.js"></script>

  </body>
</html>