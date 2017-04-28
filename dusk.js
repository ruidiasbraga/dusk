'use strict';

var random = 0;
var colors = [0, 0, 0];
var animationDuration = 2000;
var hour = 0;
var color = 0;

function changeColor(elementDOM) {

    hour = new Date().getHours();

    //Will get an valid rgb color
    color = parseInt(255 / 24 * hour);

    for (var i = 0; i < colors.length; i++) {

        // random number for color based on time of day
        random = Math.floor((Math.random() * (hour * 3)) + 1);

        // adds more randomness, if even number adds, otherwise, subtracts
        color = (random % 2 == 0) ? color + random : color - random;

        // if the values goes off the limits this will cap between 0 - 255
        color = (color > 255) ? 255 : color < 0 ? 0 : color;
        colors[i] = color;
    }

    if (document.getElementById(elementDOM)) document.getElementById(elementDOM).style.color = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}


function dusk(elementDOM, interval){
	if(document.getElementById(elementDOM)) setInterval(changeColor, interval, elementDOM);
}

dusk('title', 2000);