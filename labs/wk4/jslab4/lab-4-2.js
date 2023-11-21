//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.

function getAverage(num1, num2, num3, num4, num5){
  var avg = (num1 + num2 +num3+num4+num5)/5;
  return avg.toFixed(1);
}

console.log(getAverage(5,10,15,20,25));
//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var course1 = 50;
var course2 = 60;
var course3 = 70;
var course4 = 0;
var course5 = 0;
var avgGrade = getAverage(course1,course2,course3,course4,course5);

if ( avgGrade >= 70){
  alert("Success!");
} else {
  alert("Review required.");
}
console.log(avgGrade);