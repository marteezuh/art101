// index.js - Lab 8: Anon Functions and Callbacks
// Author: Maritza Ortega
// Date:31 October 2024




var array = [1, 4, 9, 16, 25];


function squareRoot(x) {
    return Math.sqrt(x);
}

var sqrtResults = array.map(squareRoot);


function displayResults() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h3>Square Root Results:</h3><ul>";
    
    sqrtResults.forEach(function(result) {
        outputDiv.innerHTML += `<li>${result}</li>`;
    });

    outputDiv.innerHTML += "</ul>";
}


window.onload = displayResults;
