//Default "forEach" example:

 //Define "Var" and add items to the Array
var nums = [1, 2, 3, 4, 5];
 //Create the forEach, with function.
nums.forEach(function(test) {
    console.log(test);
});
//Calls each item in the Array with the forEach loop



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Creating a custom forEach


//Create a "Function" for the forEach to call: 
function myForEach(arr, func) {
    //loop through the Array
    for(var i = 0; i < arr.length; i++) {
    //call "func" for each item in the Array
    func(arr[i]);
    }
}

 //Define "Var" and add items to the Array
var colors = ["red", "yellow", "green"];
//Call the function, requires two arguments
myForEach(colors, alert); 


//Create "Object" myForEach function taking the above defined argument "func"
Array.prototype.myForEach = function(func) {
     //loop through "this" Array - which refers to the specific array
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    }
}

 //Define "Var" and add items to the Array
var frnds = ["Charlie", "Jimmy", "Sheryl"]; 

//Call the "myForEach" function with an argument that Prints all items in "this" Array with the "str" "I Love" in front. 
frnds.myForEach(function(name){
    console.log("I Love " + name);
   });