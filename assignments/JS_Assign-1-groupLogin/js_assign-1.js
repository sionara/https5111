var isCorrectTeamNum; // variable to store team number input
var firstNameInList; // variable to store first name input

isCorrectTeamNum = prompt("Please provide your team number.");
if (isCorrectTeamNum !== "3"){
  alert("Sorry, access was denied."); // Deny access if team number is not 3.
} else {
  firstNameInList = prompt("Please provide your first name.")
  switch (firstNameInList) {
    // Check if the first name is part of the four members. Deny access if it name is not part of the list.
    case "Sarah":
    case "sarah":
      alert("Welcome back, Sarah Tadele!");
      break;
    case "Milin":
    case "milin":
      alert("Welcome back, Milin Vaniyawala!");
      break;
    case "Seyed":
    case "seyed":
      alert("Welcome back, Seyed Abbas Vaziri!");
      break;
    case "Lap Wang":
    case "lap wang":
      alert("Welcome back, Lap Wang Wong!");
      break;
    default:
      alert("Access denied!");
      break;
  }
}

