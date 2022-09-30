
//First Problem: Check if number is even
// function isEven(num) {
//     //return true if even
//     if(num % 2 === 0) { 
//         return true;
//      } 
//     //return false otherwise
//      else {
//         return false;
//      }
// }
function isEven(num) {
    return num % 2 === 0; 
 } 


//Second Problem: Finding if a number is factorial
function factorial(num) {
   //define a result variable
   var result = 1;
   //calculate factorial and store value in result
   for(var i = 2; i <= num; i++) {
      result *= i;
   }
   //return the result variable
   return result;
}



//Third Problem
function kebabToSnake(str) {
   //replace all "-" with "_"'s
   var newStr = str.replace(/-/g , "_")
   //return str
   return newStr;



}

