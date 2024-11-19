// index.js - Lab 13: Loops
// Author: Maritza Ortega
// Date:18 November 2024


function fizzBuzzBoom() {
    
    let oneLongString = "";

    // Loop through numbers 1 to 200
    for (let num = 1; num <= 200; num++) {
        let output = num; // Start with the number itself
        let suffix = ""; // Suffix for Fizz, Buzz, Boom

        // Check multiples and append appropriate strings
        if (num % 3 === 0) suffix += "Fizz!";
        if (num % 5 === 0) suffix += "Buzz!";
        if (num % 7 === 0) suffix += "Boom!";

        // If a suffix was added, use it; otherwise, just show the number
        oneLongString += output + (suffix ? " " + suffix : "") + "<br>";
    }

    // Display the results in the output div
    $("#output").html(oneLongString);
}

// Call the fizzBuzzBoom function to execute
fizzBuzzBoom();
