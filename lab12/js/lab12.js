// index.js - Lab 12: Conditionals
// Author: Maritza Ortega
// Date:14 November 2024

function sortingHat(str) {
    const length = str.length; 
    const mod = length % 4;     

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
$(document).ready(function() {
    $("#button").click(function() {
        // Get the value from the input field
        const name = $("#input").val().trim();

        // Ensure that the name is not empty
        if (name !== "") {
            // Run sortingHat function and store the result in 'house'
            const house = sortingHat(name);

            // Append a styled paragraph to the output div with the sorting result
            $("#output").html('<p style="font-size: 1.5em; color: #4CAF50; font-weight: bold;">The Sorting Hat has sorted you into ' + house + '!</p>');
        } else {
            // If the input is empty, prompt the user to enter a name
            $("#output").html('<p style="font-size: 1.5em; color: red;">Please enter a name for sorting.</p>');
        }
    });
});

