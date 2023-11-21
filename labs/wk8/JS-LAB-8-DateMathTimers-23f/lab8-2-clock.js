/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = stopTime;
//create page load function
function stopTime(){

	//create variables for required HTML elements
	var hoursOut = document.getElementById("hoursOut");
	var minsOut = document.getElementById("minsOut");
	var secsOut = document.getElementById("secsOut");
	var startBtn = document.getElementById("btnStart");
	var stopBtn = document.getElementById("btnStop");
	//create time variable so all functions have access to it
	var currTime = new Date();
	
	//function for user-friendly Display
	function addZeroes(time){
		if (time < 10){
			return "0" + time;
		} else {
			return time
		}
	}
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayClock(){
		currTime = new Date();
		var hours = currTime.getHours();
		var mins = currTime.getMinutes();
		var secs = currTime.getSeconds();

		// function to validate and add zeroes.
		hoursOut.innerHTML = addZeroes(hours) + ":";
		minsOut.innerHTML = addZeroes(mins)+":";
		secsOut.innerHTML = addZeroes(secs);
		// if (hours <= 9){
		// 	hoursOut.innerHTML = "0"+hours+":";
		// }else{
		// 	hoursOut.innerHTML = hours+":";
		// }
		// if (mins <= 9){
		// 	minsOut.innerHTML = "0"+mins+":";
		// } else {
		// 	minsOut.innerHTML = mins+":";
		// }
		// if (secs <= 9){
		// 	secsOut.innerHTML = "0"+secs;
		// }else {
		// 	secsOut.innerHTML = secs;
		// }
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	var updateClock = null;
	function startClock(){
		updateClock = setInterval(displayClock, 1000);
	}
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock(){
		clearInterval(updateClock);
	}
	
	// SET EVENT LISTENERS
	startBtn.onclick = startClock;
	stopBtn.onclick = stopClock;
}