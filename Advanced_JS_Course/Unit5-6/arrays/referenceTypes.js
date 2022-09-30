//Reference Types:

//Value type variables:
//value type variables store the value in memory. 
let fruit = 'orange'; //Prints: orange and stores the value to the fruit variable
let color = fruit; //Prints: orange and stores the value to the color variable
fruit = 'watermelon'; //Prints: watermelon and stores the value to the fruit variable


//Reference type variables:
//reference types store the reference to the original variable not the value of that variable.
let nums = [5,6,7];
let otherNums = nums;


//Const and Arrays:
//As arrays are reference type variables, you have the ability to update the contents of the array, provided the reference stays the same.
const myEggs = [
    'brown',
    'brown'
];
myEggs[0] = 'green'; //Prints: green
console.log(myEggs); //Prints: green, brown



