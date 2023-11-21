//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shoppingCart = [];
var itemCost;
var runningTotal = 0;
var totalCosts;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (runningTotal < 35){
	//GET ITEM COST FROM USER
	itemCost = prompt("How much is your item?")
	
	//CONVERT USER INPUT TO A NUMBER
	itemCost = parseInt(itemCost);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	runningTotal += itemCost;
	
	//PUSH ITEM COST TO CART ARRAY
	shoppingCart.push(itemCost);

}
	


//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE
totalCosts = shoppingCart.join("|");
console.log("Item prices: " + totalCosts);
