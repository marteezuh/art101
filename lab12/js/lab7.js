// index.js - Lab 12: Conditionals
// Author: Maritza Ortega
// Date:14 November 2024

function sortingHat(str) {
    // Calculate the length of the input string
    const length = str.length;

    // Use the modulus operator to determine which House the user belongs to
    const mod = length % 4;

    // Return the House based on the value of mod (0-3)
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

    // Check if the name is not empty
    if (name.trim() !== "") {
        // Run sortingHat function and store the result in house
        const house = sortingHat(name);

        // Append the result to the output div
        $("#output").html("<p>The Sorting Hat has sorted you into " + house + "!</p>");
    } else {
        // If the name is empty, prompt the user to enter a name
        $("#output").html("<p>Please enter a name for sorting.</p>");
    }
});
