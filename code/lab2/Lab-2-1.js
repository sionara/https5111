//######## LAB 2-1 FILE DELETE CONFIRMATION ########
// alert("hey 2.1");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE
var userChoice = confirm("Would you like to delete the file?");

//2. IF USER CLICKS OKAY ADD yesMessage TO messageOut
if (userChoice === true){
  alert(messageOut + yesMessage);
}

//3. IF USER CLICKS ANYTHING BUT OKAY, ADD noMessage TO messageOut
else {
  alert(messageOut + noMessage);
}
//4. SEND FINAL POPUP MESSAGE TO USER
