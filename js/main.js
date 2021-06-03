// This is grabbing onto the HTML Element by ID
const form = document.getElementById("form");
const formItem = document.getElementById("formItem");

//  There needs to be something to catch the errors. Does each form element have to have its own id?



// Creating a new const to check the form and will use if/else statement + send error to console
// Need to check formItems to see if greater than 4 characters
// 
const formCheck = (form) = {

    if(formItem.text > 4 ) {

        console.log( "valid length")

    } else {

        console.log(" enter 5 or more characters")
    }

};



// Add Event Listener for button
form = addEventListener("submit", (e) => {
  e.preventDefault();
});
