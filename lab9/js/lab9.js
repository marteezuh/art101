// index.js - Lab 9: Libraries and jQuery
// Author: Maritza Ortega
// Date:3 November 2024


$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Highlight Problems</button>");
$("#results").append("<button id='button-results'>Show Results</button>");

$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function() {
    $("#problems").toggleClass("highlight");
});

$("#button-results").click(function() {
    $("#results").toggleClass("visible");
});

