//variables for Prev() and Next()
//array of images
var images = ["tower1.png", "tower2.png", "tower3.png", "tower5.png", "baby-corn-1.jpg"];
//current image index
var currentImage = 0;

function Prev() {
	"use strict";
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

function Next() {
	"use strict";
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


window.onload = function date() {
    "use strict";
    // month variable
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        // get date
        whole_date = new Date(),
        month_text = months[whole_date.getMonth()],
        day = whole_date.getDate(),
        year = whole_date.getFullYear(),
        // set info for DOM
        span = document.createElement('span'),
        text = document.createTextNode(month_text + ' ' + day + ' ' + year),
        position = document.getElementsByTagName('footer')[0];
    // put date in footer
    span.appendChild(text);
    position.appendChild(span);

};
 
