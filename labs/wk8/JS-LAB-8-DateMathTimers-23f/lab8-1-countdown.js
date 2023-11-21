/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = finalCountdown;
//create page load function
function finalCountdown(){

	//create variables for required HTML elements
	var countMsg = document.getElementById("countMsg");
	var todayData = document.getElementById("todayData");
	var finalData = document.getElementById("finalData");
	var dueData = document.getElementById("dueData");
	//create variables for now date and due date
	var todayDate = new Date();
	//var todayDate = new Date("December 15, 2023 18:00:00");
	var dueDate = new Date("December 15, 2023 18:00:00");
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var timeDiff = dueDate.getTime() - todayDate.getTime();
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var daysTillDue = Math.floor(timeDiff/86400000);
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayData.innerHTML = todayDate.toDateString();
	finalData.innerHTML = dueDate.toDateString();
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if (daysTillDue <= 0){
		countMsg.innerHTML = "The Deadline for the Final Assignment has passed!";
	} else{
		dueData.innerHTML = daysTillDue;
	}	
}