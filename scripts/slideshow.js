"use strict";

//variables for Prev() and Next()
//array of images
var images = ["tower1.png", "tower2.png", "tower3.png", "tower5.png", "baby-corn-1.jpg"];
//current image index
var currentImage = 0;

function prev() {
	if (currentImage > 0) {
		currentImage -= 1;
		document.getElementById("current_img").src = "images/" + images[currentImage];
        // move to previous image
    } else if (currentImage === 0) {
		currentImage = images.length - 1;
		document.getElementById("current_img").src = "images/" + images[currentImage];
        //wrap around if last image
	}
}

function next() {
	if (currentImage < images.length - 1) {
		currentImage += 1;
		document.getElementById("current_img").src = "images/" + images[currentImage];
        // move to next image
	} else if (currentImage === images.length - 1) {
		currentImage = 0;
		document.getElementById("current_img").src = "images/" + images[currentImage];
        // wrap around if first image
	}
}


window.onload = function() {

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var date = new Date();
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    $("#date").append(month + ' ' + day + ', ' + year);

};
