//Math Object

//Math Object contains properties and methods for mathematical constants and functions

//Examples:
//Finding PI value
Math.PI; //Prints: 3.141592653589793


//Rounding a number:
Math.round(4.9); //Prints: 5


//Absolute value:
Math.abs(-456); //Prints: 456


//Raises 2 to the 5th power:
Math.pow(2,5); //Prints: 32


//Removes decimal:
Math.floor(3.9999); //Prints: 3


/////////////////
//Math.random()

//Math.random() gives us a random decimal between 0 and 1 (non-inclusive)

//Example 1:

const step1 = Math.random(),
      step2 = step1 * 10,
      step3 = Math.floor(step2),
      step4 = step3 + 1;

Math.floor(Math.random() * 10) + 1;