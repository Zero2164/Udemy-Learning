//JS Scope Examples


//Example 1
function doMath() {
    var x = 40;
    console.log(x);
}
doMath(); //prints 40


x  //prints: not defined 
 //as its not within the fucntions "Scope"


//Example 2
var y = 99;

function doMoreMath() {
    console.log(y);
}
doMoreMath(); //prints: 99, 
                //as the var was set in the "Global" Scope. 


//Example 3
var y = 99;

function doMoreMath() {
    y = 100;
    console.log(y);
}
doMoreMath(); //prints: 100 
 //as function  overrides "Global" Scope by changing existing variable


 //Example 4
var phrase = "Hi There!";

function doSomething() {
    var phrase = "Goodbye!";
    console.log(phrase);
}
doSomething(); //prints: "Goodbye!" 
phrase; //prints: "Hi There!"
//The "Global" Scope's VAR "Phrase" remaind the same.
 //as the function defined a new variable within its "Scope"
 //This new VAR "Phrase" within function will only exist as long as the function does. 



//QUIZ 
var num = 8;
 
function doMath() {
     num += 1;
     if(num % 5 == 0) {
         return true 
     } else {
         return false
     }
 }
num += 1;
doMath(); //prints: true

//Example 5
function hi() {
    var name = "Kyle";
    console.log(name);
}

hi(); //prints:  "Kyle"

function bye() {
    console.log(name);
}

bye(); //prints: undefined
//as the VAR "name" is not accessible within both the function "bye" or "Global" Scope. 