//-------------AFFICHER CACHER -------------------

$('#depart1').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !

});

$("#depart1").on("click", function(){
	$("#violet").hide("slow").show("slow");
	/*
	$("#violet").hide("slow");
	$("#violet").show("slow");
	*/
});

//-------------FONDU-------------------

$('#depart2').on("click", function(){
	jQuery.fx.off = false;
	
	//Inserez le code de votre animation ici !
	$("#jaune").fadeOut("slow").fadeIn("slow");
	$("#bleu").html("<p>tata yoyo</p>");

	$("#bleu > p").css("display", "none").fadeIn("slow").fadeOut("slow");

});

$("#orange").mouseenter(function(){
	$("#orange").fadeOut("slow").delay(100).fadeIn("slow").fadeOut("slow");
	
});

//-------------SLIDE-------------------

$('#depart3').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !	
	$("#noir").slideUp("fast");
});

$("#gris").on("click", function(){
	$(this).slideUp("fast").slideDown("fast");
	$("#marron").slideToggle("fast");
});
$("#marron").on("mouseenter",function(){
	$(this).slideToggle("fast");
});

//Inserez le code de votre animation ici !

//-------------ANIMATE-------------------

$('#depart4').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !
	$("#vert").animate({bottom: "100px", left:"50px"}, "slow")
	.animate({top: "100px", left:"190px"}, "fast")
	.delay(800)
	.animate({top: "-150px", left:"-200px"}, 10000);
	
});

//-------------DELAI DESACTIVER------------

$('#depart5').click(function(){
	jQuery.fx.off = false;

	//Inserez le code de votre animation ici !
	$("#pink").animate({left:"1000px"}, 20000);
});

$('#desactiver').click(function(){
	jQuery.fx.off = true;
	//Inserez le code de votre animation ici !
	$("#pink").stop();
});

$('.reload').click(function(){
	location.reload();
});

