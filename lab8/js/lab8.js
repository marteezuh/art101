// index.js - Lab 8: Anon Functions and Callbacks
// Author: Maritza Ortega
// Date:31 October 2024

let numbers = [1,2,3,4,5]

function doubelUp(x){
    let results = x**2;
    return results;}

console.log(numbers.map(doubelUp));

numbers.map(function(x){
    let results = Math.sqrt(x);
    return results;
})

var mapResults = numbers.map(function(x){
    let results = Math.sqrt(x);
    return results;
});
console.log("Results: ", mapResults);