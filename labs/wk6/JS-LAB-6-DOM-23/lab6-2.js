//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = mysteryBox;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function mysteryBox(){

	//GET DOM ELEMENTS WE'LL NEED
	var mysterybox = document.getElementById("mysteryBox");
	var buttonbox = document.getElementById("buttonBox");
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function seeSomething() {
		var seeSomething = confirm("Do you want to see something?");

		if (seeSomething === true){
			mysterybox.style.display = "none";
			buttonbox.style.display = "block";
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function showSurprise(){
		buttonbox.style.width = "600px";
		buttonbox.innerHTML = "<h2>SURPRISE!!</h2>";
		buttonbox.style.background = "orange";
	}

	//SETUP LISTENERS
	mysterybox.onmouseover = seeSomething;
	buttonbox.onclick = showSurprise;
}
//END onload FUNCTION
