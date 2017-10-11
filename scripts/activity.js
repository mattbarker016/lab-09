window.onload = function() {

	toggle = true
	$("#block").dblclick( function() {

		if (toggle) { 
			$(this).animate({left: '+=250px'});
		} else {
			$(this).animate({left: '-=250px'});
		}

		toggle = !toggle

	});

	colors = ["red", "orange", "green", "blue", "purple", "brown", "black"]
	index = 0

	$("#block").mouseenter( function() {

		$(this).css("background-color", colors[index])
		index = (index + 1) % colors.length

	});

	/**
		Question 1 - Changing font-size
		10 points

		Change the font size of the pokemon weight and pokemon item elements
		based on the selected value of #font-select

		target the .item and .weight classes
	**/
	$("#font-select").change(function() {
		// START CODE Q1

		var font = $("#font-select").val() + "px"
		$(".item").css('font-size', font);
		$(".weight").css('font-size', font);

		// END CODE Q1

	});

	/**
		Question 2 - Show/Hide
		10 points

		Show/hide the all sprite images when the box is checked/unchecked.

		Do not use jQuery show / hide functions, cell text formatting needs to be retained.

		In other words, the sprites should not be 'visible'.
	**/
	$("#hide-sprites").change(function() {
		// START CODE Q2

		if ($(".cell img").css('visibility') == "visible") {
			$(".cell img").css('visibility', "hidden");
		} else {
			$(".cell img").css('visibility', "visible");
		}

		// END CODE Q2

	})

	/**
		Question 3 - Adding a font-size
		15 points

		Add a font size to the select menu if the input is a number.
		You must check that it is a number.
		Look at the DOM to make sure you append the value to the right drop down menu.
		Also validate that it is between 5 - 22, otherwise ignore it completely

		Clear the add-font text field once the accepted number has been appended to
		the right drop down menu

		It is OK if the resulting selections do not display in order
	**/
	$("#add-font-size").click(function(){
		// START CODE Q3

		var number = $("#fontSizeInput").val();
		
		if ($.isNumeric(number) && number >= 5 && number <= 22) {
			var html = "<option value="+number+">"+number+" pixels</option>";
			$("#font-select").append(html);
			$("#fontSizeInput").val("");
		}

		// END CODE Q3

	});

}