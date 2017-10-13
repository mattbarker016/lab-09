"use strict";
window.onload = function() {
	//array of images
	var images = ["tower1.png", "tower2.png", "tower3.png", "tower5.png", "baby-corn-1.jpg"];

	//current image index
	var currentImage = 0;

	$("#left").click(function() {
		if (currentImage > 0) {
			currentImage -= 1;
			$("#current_img").attr("src","images/" + images[currentImage]);
	        // move to previous image
	    } else if (currentImage === 0) {
			currentImage = images.length - 1;
			$("#current_img").attr("src","images/" + images[currentImage]);
	        //wrap around if last image
		}
	});

	$("#right").click(function() {
		if (currentImage < images.length - 1) {
			currentImage += 1;
			$("#current_img").attr("src","images/" + images[currentImage]);
	        // move to next image
		} else if (currentImage === images.length - 1) {
			currentImage = 0;
			$("#current_img").attr("src","images/" + images[currentImage]);
	        // wrap around if first image
		}
	});


	    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var newDate = new Date();
	    var month = months[newDate.getMonth()];
	    var day = newDate.getDate();
	    var year = newDate.getFullYear();

    $("#date").append(month + ' ' + day + ', ' + year);

};
