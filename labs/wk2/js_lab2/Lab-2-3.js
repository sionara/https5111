//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var inputJoinList; //user input for popup asking to join mailing list
var inputEmail; //user input for email address


//==== LOGIC =============
// set variable to user input for popup asking if they want to join mailing list.
inputJoinList = confirm("Would you like to join the mailing list?");

// logic to process if they would like to join mailing list.
if (inputJoinList === true){
  inputEmail = prompt("Please provide your email address.", "me@example.com");
  if (inputEmail === "" || inputEmail === null || inputEmail === "me@example.com"){
    alert("Thank you, but your email was not valid.");
  } else {
    alert("Thank you, our next newsletter will be sent to " + inputEmail);
  }
} // if they do not want to join, alert message will end the function.
  else {
  alert("Thank you, we will not bother you again.")
}

// } else {
//     switch(inputEmail.toLowerCase()) {
//       case inputEmail === true:
//         alert("Thank you, our next newsletter will be sent to "
//         + inputEmail);
//         break;

//       case inputEmail === false:
//         alert("Thank you, we will not bother you again.");
//         break;
//     }
// }