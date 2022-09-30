//Array Iteration and forEach function

//Objectives:
//Use a for loop to iterate over an Array
//Use forEach to iterate over an Array
//Compare and contrast for loops and forEach

//forLoop to iterate info in the colors Array 
//Example 1:
var colors = ["red", "orange", "yellow", "green",];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//Prints: all the Array items inside the "colors" var, provided we establish an argument to end the loop


//forEach to iterate over an Array
//arr.forEach (someFunction)

//Example 1
var colors = ["red", "orange", "yellow", "green",];
colors.forEach(function(color) {
   //color function name is a placeholder, can be named anything
      console.log(color);
} ) ;
//Prints all the Array items inside the "colors" var until all items have been returned


//Both methods achieve the same result, however forEach is most common.
 //as you do not need to specify the loop ending arguments. 


 //Array Iteration Exercises:

 //Exercise 1:
 var nums = [1,2,3,4,5,6,7,8,9,10];
 var colors = ["red", "orange", "yellow", "green",];

 nums.forEach(function(color) {
     if(color% 3 === 0) {
         console.log(color);
     }
 });