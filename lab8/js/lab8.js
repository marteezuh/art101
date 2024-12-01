// index.js - Lab 8: Anon Functions and Callbacks
// Author: Maritza Ortega
// Date:31 October 2024

// Step 1: Create a new array of numbers
var array = [100, 25, 49, 64, 81];

// Step 2: Create a named function to calculate the square root
function squareRoot(x) {
    return Math.sqrt(x);
}

// Step 3: Use map() with the named function to get square root results
var sqrtResults = array.map(squareRoot);

// Step 4: Log the results to the console
console.log("Square Root Results:", sqrtResults);

// Step 5: Display the results in the "output" div
function displayResults() {
    var outputDiv = document.getElementById("output");
    
    // Prepare HTML content to display results
    outputDiv.innerHTML = "<h3>Square Root Results:</h3><ul>";
    
    // Iterate over the results array and add them to the div
    sqrtResults.forEach(function(result) {
        outputDiv.innerHTML += `<li>${result}</li>`;
    });

    outputDiv.innerHTML += "</ul>";
}

// Step 6: Call the function to display results when the page loads
window.onload = function() {
    displayResults();
    // Optionally log results again on page load
    console.log("Results displayed on webpage.");
};
