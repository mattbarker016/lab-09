window.onload = function() {

	// Keep track of the score and update it on the site.

	score = 0;
	function timer() {
		console.log("timer!");
		score += 1;
		$("#time").text("Time: "+score.toString());
	}

	// Manage the Start / Pause button with the timer function.

	timeout = null
	$("#start").click( function() {
		if (timeout !== null) {
			window.clearTimeout(timeout)
			timeout = null
			$("#start").text("Continue");
		} else {
			timeout = window.setInterval(timer, 1000);
			$("#start").text("Pause");
		}		
	})

	// On clicking the block, end and restart the game.

	$("#catch_me").click( function() {
		if (score < 2) {
			alert("Whoa there! You need to start the game or give slowpoke a chance!")
		} else {
			alert("Game over! You caught the block in " + String(score) + " seconds.")
		}
		location.reload()
	});

	// Constants

	b_width = $("#catch_me").width();
	b_height = $("#catch_me").height();
	CONSTANT = 100;

	minX = $(".container").position().left;
	maxX = minX + $(".container").width() - b_width;
	minY = $(".container").position().top;
	maxY = minY + $(".container").height() - b_height;
	midX = (minX + maxX) / 2;
	midY = (minY + maxY) / 2;

	// Initialize starting point for block.



	$("#catch_me").css("top", midY);
	$("#catch_me").css("left", midX);

	// Arrow key functionality
	
	$(document).keydown( function(e) {

		// Prevent scrolling via arrow keys

		if (e.which >= 37 && e.which <= 40) {
			e.preventDefault();
		}

		switch (e.which) {

		case 37:
			newValue = $("#catch_me").position().left - CONSTANT;
			if (newValue >= minX + b_width) $("#catch_me").css("left", newValue);
			break;

		case 38:
			newValue = $("#catch_me").position().top - CONSTANT;
			if (newValue >= minY + b_height) $("#catch_me").css("top", newValue);
			break;

		case 39:
			newValue = $("#catch_me").position().left + CONSTANT;
			if (newValue <= maxX - b_width) $("#catch_me").css("left", newValue);
			break;

		case 40:
			newValue = $("#catch_me").position().top + CONSTANT;
			if (newValue <= maxY + b_height) $("#catch_me").css("top", newValue);
			break;

		}

	});

}