// index.js - Lab 8: Anon Functions and Callbacks
// Author: Maritza Ortega
// Date:31 October 2024



var array = [1, 12, 24, 48, 25];


function squareRoot(x) {
    var results = Math.sqrt(x);
    return results;
}


console.log("Test squareRoot function:");
console.log(squareRoot(4));  // Output: 2
console.log(squareRoot(16)); // Output: 4
console.log(squareRoot(25)); // Output: 5


var sqrtResults = array.map(squareRoot);
console.log("Square Root Results:", sqrtResults); 


var squaredResults = array.map(function(x) {
    var results = x * x;
    return results;
});

console.log("Squared Results:", squaredResults); 


var mapResults = array.map(squareRoot);
console.log("Results from squareRoot function with map():", mapResults); 
