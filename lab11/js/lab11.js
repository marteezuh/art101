// index.js - Lab 11: JavaScript Events and Forms
// Author: Maritza Ortega
// Date:11 November 2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
    // Get the value of the input field when the button is clicked
    const userName = $("#user-name").val();

    // Check if the input is not empty
    if (userName.trim() !== "") {
        // Now let's sort the string
        const userNameSorted = sortString(userName);

        // Append a new div to our output div
        $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    } else {
        // If input is empty, show an error message
        $("#output").html('<div class="text"><p>Please enter your name.</p></div>');
    }
});
