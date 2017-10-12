window.onload = function() {



	// 1. Change the color of the box to blue.

	$("#one").css("background-color", "blue");



	// 2.  Change the text to, "Well, more of a rectangle, really!".

	$("#two p").text("Well, more of a rectangle, really!");



	// 3. Increase the width to 300px to let the little block be more expressive. 

	$("#three p").text("Well, more of a rectangle, really!");
	$("#three").css("width", ($("#three").width() + 300).toString() + "px");



	// 4. Increase the nerdy block's font by 4px.
	// Hint: You need to remove "px", add the value, and add "px" back.
	// Hint: parseInt() might help you...

	new_font_size = parseInt($("#four").css("font-size")) - 4;
	$("#four").css("font-size", new_font_size + "px");



	// 5. On a click, banish the smart-aleck block by slowly, intimately, fading it out of existence.

	$("#five").click( function() {
		$("#five").fadeOut(5000);
	});



	// 6. Implement the two button's respective functions.

	$("#button_text").click( function() {
		$("#status").text($("#six p").text());
	});

	$("#button_html").click( function() {
		$("#status").text($("#six p").html());
	});



	// 7. Move the block right when mousing over. 
	// Challenge: Can you move it back when repeated?
	// Hint: How can you keep track of whether it's left or not? 
	// Or, whether it's TRUE or FALSE that it's been moved?

	toggle = true;
	$("#seven").mouseover( function() {

		if (toggle) { 
			$("#seven").animate({left: '+=250px'});
		} else {
			$("#seven").animate({left: '-=250px'});
		}

		toggle = !toggle;

	});



	// 8. Challenge: Change the block's color whenever you press DOWN on a KEY.

	colors = ["orange", "green", "blue", "purple", "red"]
	index = 0

	$(document).keydown( function(e) {

		$("#eight").css("background-color", colors[index])
		index = (index + 1) % colors.length

	});



}