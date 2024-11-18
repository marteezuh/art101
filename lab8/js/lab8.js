// index.js - Lab 8: Anon Functions and Callbacks
// Author: Maritza Ortega
// Date:31 October 2024


var array = [1, 2, 3, 4, 5];

function squareNumber(x) {
    var results = x * x;
    return results;
}

console.log(squareNumber(2)); // Output: 4
console.log(squareNumber(3)); // Output: 9

var squaredResults = array.map(squareNumber);
console.log("Results of squaring: ", squaredResults); // Output: [1, 4, 9, 16, 25]


var addedResults = array.map(function(x) {
    var results = x + 10;
    return results;
});

console.log("Results of adding 10: ", addedResults); // Output: [11, 12, 13, 14, 15]


var mapResults = array.map(squareNumber);
console.log("Map results (squared): ", mapResults); // Output: [1, 4, 9, 16, 25]
