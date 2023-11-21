//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will... return true if temp is between -10 and 30, otherwise return false.
//It expects to receive... one number type parameter called currentTemp.
//It will return... a boolean data type, true or false.

function checkTemp(currentTemp){
  
  if (currentTemp >= -10 && currentTemp <= 30){
    return true;
  } else {
    return false;
  }
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var inputTemp = prompt("What is the current temperature?", "in Celsius please...");

if (checkTemp(inputTemp) === true){
  alert("You're good, have a nice walk!");
} else {
  alert("Yikes! This is no weather for dog walking!");
}