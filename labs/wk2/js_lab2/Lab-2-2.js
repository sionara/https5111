//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		var correctUserName = "dart" ;// Correct user name
		var correctPassWord = "vader" ;// Correct password
		var inputUserName;// user name input
		var inputPassWord;// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var inputUserName = prompt("Please provide your username.", "Type username here.");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(inputUserName);

//5. CREATE POPUP BOX FOR PASSWORD
var inputPassWord = prompt("Please provide your password.", "Type password here.");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(inputPassWord);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (inputUserName === correctUserName && inputPassWord === correctPassWord){
	//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
	alert("Welcome back" + " " + inputUserName);
	console.log("Login successful");
} else {
	//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
	alert("Invalid username/password");
	console.log("Login Fail");
}
