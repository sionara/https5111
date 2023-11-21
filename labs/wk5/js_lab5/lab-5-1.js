//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
  name: "Sion",
  age: 23,
  height: 173,
  weight: 72,
  displayHeightWeight: function(){
    alert(meObject.name + " weighs " + meObject.weight + "kgs and is " + meObject.height + "cm tall.");
  }
};

console.log(meObject.name); //output name property of meObject object
// alert(meObject.name + " weighs " + meObject.weight + "kgs and is " + meObject.height + "cm tall.");
meObject.displayHeightWeight();