
// variables to store movie names, array of those movies, and a validinput checker.
var movie1 = "Avatar";
var movie2 = "Toy Story";
var movie3 = "Onward";
var movie4 = "Forrest Gump";
var movie5 = "Prince of Egypt";
var movie6 = "Big";
var movie7 = "Knives Out";
var validInput = false;

var movieList = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

var movieChoice = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");

// logic to ask user input and validate it. Loop to repeat if input is invalid.
while (validInput === false){
  if (movieChoice === null || movieChoice === "" || movieChoice === "Pick a number: 1-7"
|| movieChoice > 7 || isNaN(movieChoice)){
    alert("Please enter a number between 1 and 7!");
    movieChoice = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");
  } else {
    alert("Number " + movieChoice + " on the list is " + movieList[movieChoice - 1]);
    for (var i = 0; i < movieList.length; i++){
      console.log("Movie " + parseInt(i+1) + ": " + movieList[i]);
    }
    validInput = true;
  }
}