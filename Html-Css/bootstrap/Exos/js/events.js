$("document").ready(function(){

	$(".titles").on("click", function(){
		$(this).next("div").slideToggle();
		$(this).next("span").toggleClass("arrowdwn");
		$(this).next().siblings(".borders").slideUp();

	});

});