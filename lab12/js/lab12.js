// index.js - Lab 12: Conditionals
// Author: Maritza Ortega
// Date:14 November 2024

function sortingHat(str) {
    const length = str.length;  // Get the length of the string
    const mod = length % 4;     // Use modulus operator to get a value between 0 and 3

    // Return the corresponding house based on the modulus value
    switch(mod) {
        case 0:
            return "House Atreides";
        case 1:
            return "House Harkonnen";
        case 2:
            return "House Corrino";
        case 3:
            return "Fremen";
        default:
            return "Unknown";
    }
}

// Click listener for the submit button
$("#button").click(function() {
    // Get the value from the input field
    const name = $("#input").val();

    
    if (name.trim() !== "") {
        
        const house = sortingHat(name);

        
        $("#output").html('<p style="font-size: 1.5em; color: #4CAF50; font-weight: bold;">The Sorting Hat has sorted you into ' + house + '!</p>');
    } else {
   
        $("#output").html('<p style="font-size: 1.5em; color: red;">Please enter a name for sorting.</p>');
    }
});

