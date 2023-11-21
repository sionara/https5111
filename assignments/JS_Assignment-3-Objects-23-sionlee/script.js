// initialize object

var GymBro = {
  maxBench: 135,
  drankProtein: false,
  isHappy: false,
  inspiredBy: "Arnold Schwarzenegger",
  didBench: function(){
    this.maxBench += 10;
    alert("New max bench is now " + this.maxBench);
  }
}

console.log(GymBro);
var hadProteinToday = prompt("Did you drink protein today?(Answer Yes or No.)", GymBro.drankProtein);
if (hadProteinToday === "Yes"){
  GymBro.drankProtein = true;
}

var wentToGym = prompt("Did you go to the gym today?(Answer Yes or No.)", GymBro.isHappy);
if (wentToGym === "Yes"){
  GymBro.isHappy = true;
}

GymBro.didBench();

console.log(GymBro);