// index.js - Lab 7: Functions
// Author: Maritza Ortega
// Date:28 October 2024

// Constants

// Functions

function sortUserName() {
    // Prompt the user for their name
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");

    // Convert the string to an array, sort it, and convert it back to a string
    var sortedName = userName.split('').sort().join('');

    return sortedName;
}

// Call the function and output the result
document.writeln("Sorted letters of your name: " + sortUserName());

