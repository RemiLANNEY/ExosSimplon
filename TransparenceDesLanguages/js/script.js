function transformImg(element){
	element.style.width="70px";
	element.style.transform = "translate(10px, -10px)";
}

function resetImg(element){
	element.style.width="";
	element.style.transform = "";
}








$("#jQuery").on("mouseenter", function(){
	$("#jQuery").animate({
		width: "300px",
		left: "+=100px",
		top: "-=10px"
	},"slow");
}).on("mouseleave", function(){
	$("#jQuery").css({
		width: "-=100px",
		left: "-=100px",
		top: "+=10px"
	});
});