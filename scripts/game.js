window.onload = function() {

	$("#block")click( function () {
		alert("Game Over!")
		location.reload()
	});
	
	$(document).keydown( function(e) {

		CONSTANT = 100;

		minX = $(".container").offset().left;
		maxX = minX + $(".container").width() - $("#block").width();
		minY = $(".container").offset().top;
		maxY = minY + $(".container").height() - $("#block").height();

		if (e.which >= 37 && e.which <= 40) {
			e.preventDefault();
		}

		switch (e.which) {

		case 37:
			newValue = $("#block").offset().left - CONSTANT;
			if (newValue >= minX) $("#block").css("left", newValue);
			break;

		case 38:
			newValue = $("#block").offset().top - CONSTANT;
			if (newValue >= minY) $("#block").css("top", newValue);
			break;

		case 39:
			newValue = $("#block").offset().left + CONSTANT;
			if (newValue <= maxX) $("#block").css("left", newValue);
			break;

		case 40:
			newValue = $("#block").offset().top + CONSTANT;
			if (newValue <= maxY) $("#block").css("top", newValue);
			break;

		}

	});

}