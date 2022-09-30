//FUNCTIONS:



//FUNCTIONS without ARGUMENTS without storing the output in RETURNS:

//Example 1
  //Capture code within function "Name" without an "Argument()".
function singSong( ) {
    console.log("Twinkle Twinkle, little star");
    console.log("How I wonder what you are");
    console.log("Up Above the world so high");
    console.log("Like a Diamond in the sky");
}
 //Request function "Name" 
singSong( ) ; //prints: 
                        //Twinkle Twinkle, little star
                        //How I wonder what you are
                        //Up Above the world so high
                        //Like a Diamond in the sky


//ARGUMENTS within FUNCTIONS without storing the output in RETURNS: 

//Example 1
 //Capture code within "Name" with an "Argument()" that requires input.
function square(num) {
  console.log(num * num);
}
 //Request function "Name" with "Argument()" input and times it by itself
square(10);  //prints: 100

//Example 2
 //Capture code within "Name" with multiple "Arguments(X, X, X)" that requires input

 function calcArea(length, width) {
  console.log("The Area of " + length + " times " + width + " = " + length * width);
}
 //Request function "Name" with multiple "Arguments(X, X)" that requires input
calcArea(40, 20); //prints: The Area of 40 times 20 = 800

//Example 3 
 //Capture code within "Name" with multiple "Arguments(X, X, X)" that requires input
 function greet(p1, p2, p3) {
  console.log("Hi " + p1 + ", ");
  console.log(p2 + ", ");
  console.log("and " + p3 + "!");
}
 //Request function "Name" with multiple "Arguments(X, X)" that requires input"
greet("Putin", "Trump", "Kyle"); //prints: Hi Putin, 
                                        // Trump, 
                                        // and Kyle!


//ARGUMENTS within FUNCTIONS and storing output in RETURNS: 

//Example 1
  //Capture code within "Name" with an "Argument()" that requires input.
  function square(num) {
    console.log(num * num);
    //Use "RETURN" to store the "ARGUMENT()" output
    return(num * num);
  }
 //Request function "Name" with multiple "Arguments(X, X)" that requires input,
 //then store it with the "RETURN" keyword, while still outputting a console.log
 "4 Squared is: " + square(4); //prints: 4 Squared is: 16

//Example 2
  //Capture code within "Name" with an "Argument()" that requires input.
  function square(num) {
    //Use "RETURN" to store the "ARGUMENT()" output
    return(num * num);
  }
  //Request function "Name" with multiple "Arguments(X, X)" that requires input,
 //then outputting the stored "Arguments(X, X)" via "RETURN" keyword. 
 //then storing inside "VAR"
 var result = square(104);
 console.log ("104 squared is: " + result); //prints: 104 squared is 10816


//FUNCTION DECLARATION vs FUNCTION EXPRESSION:

 //FUNCTION DECLARATION:
 function capitalize(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
 }


 //FUNCTION EXPRESSION:
 var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
 

//Example 1
var sayHi = function(){
  console.log("HELLO!!");
}

sayHi() //prints: Hello!!

//Then you may overwrite the "FUNCTION" "VAR" by defining a new "VAR"

sayHi = 34 //prints: 34
//The "VAR" now cancels out the "FUNCTION" as it is defined in a new "VAR"


//FUNCTIONS QUIZ Exercise 1:
function test(x,y) {
  return y - x;
}
test(10, 40); //prints: 30


//FUNCTIONS QUIZ Exercise 2:
function test(x) {
  return x*2;
  console.log(x);
  return x/2;
}
test(40); //prints: 80
