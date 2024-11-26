// index.js - Lab 8: Anon Functions and Callbacks
// Author: Maritza Ortega
// Date:31 October 2024


var array = [1, 2, 3, 4, 5]; // Original array of numbers


function square(x) {
    return x * x;
}


console.log("Testing square function:");
console.log(square(2)); // 4
console.log(square(3)); // 9
console.log(square(4)); // 16


var squaredArray = array.map(square);
console.log("Squared Array:", squaredArray); // [1, 4, 9, 16, 25]


var doubledArray = array.map(function (x) {
    return x * 2;
});
console.log("Doubled Array:", doubledArray); // [2, 4, 6, 8, 10]


var mapResults = array.map(square);
console.log("Map Results (Squares):", mapResults); // [1, 4, 9, 16, 25]
