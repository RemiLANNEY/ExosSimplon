$(window).on("load", function(){
	$(".cercle").each(function(){
		$(this).on("click", function(){
			$(this).toggleClass('full');
		});
	});

	$(".carre").each(function(){
		$(this).on("click", function(){
			var classList = $(this).attr('class').split(/\s+/);
			console.log(classList[2]);
			if($(this).hasClass("full")){
				$("."+classList[2]).removeClass("full");
			} else {
				$("."+classList[2]).addClass("full");
			}
		});
	});

	$(".losange").each(function(){
		$(this).on("click", function(){
			var classList = $(this).attr('class').split(/\s+/);
			if($(this).hasClass("full")){
				$("."+classList[2]+", ."+classList[1]).removeClass("full");
			} else {
				$("."+classList[2]+", ."+classList[1]).addClass("full");
			}
		});
	});

	$("#selectAll").on("click", function(){
		$("#wrapper div").addClass("full");
	});
	$("#DeselectAll").on("click", function(){
		$("#wrapper div").removeClass("full");
	});
});
