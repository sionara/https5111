/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

window.onload = formValidation;

function formValidation(){
	var formHandle = document.forms.form_ship;
	
	formHandle.onsubmit = showThanks;

	function showThanks(){
		var thanksMsg = document.getElementById("thanks_msg");
		var custyName = formHandle.f_Name;
		var custyId = formHandle.f_Id;
		var custyPc = formHandle.f_pc;
		var dropDown = formHandle.f_speed;
		var thanksNameId = document.getElementById("thanksCustomer");
		
		//Changing the thank you message
		thanksNameId.innerHTML = custyName.value + "(" + custyId.value + ")";

		var thanksPc = document.getElementById("thanksPC");
		thanksPc.innerHTML = custyPc.value;

		var thanksSpeed = document.getElementById("thanksSpeed");
		shipInfo.name = dropDown.options[dropDown.selectedIndex].text;
		thanksSpeed.innerHTML = shipInfo.name;
		var thanksCost = document.getElementById("thanksCost");
		thanksCost.innerHTML = dropDown.value;
		// up till here

		//validation
		if (custyName.value === ""){
			var nameBox = document.getElementById("in_Name");
			nameBox.style.background = "red";
			nameBox.focus();
		
			return false;
		} else if (custyId.value === ""){
			var idBox = document.getElementById("in_Id");
			idBox.style.background = "red";
			idBox.focus();

			return false;
		} else if (custyPc.value === ""){
			var pcBox = document.getElementById("in_pc");
			pcBox.style.background = "red";
			pcBox.focus();

			return false;
		} else if (dropDown.value === "0"){
			var dropDownBox = document.getElementById("in_Speed");
			dropDownBox.style.background = "red";
			dropDownBox.focus();

			return false;
		}

		formHandle.style.display="none";
		thanksMsg.style.display="block";
		return false;
	}

}

