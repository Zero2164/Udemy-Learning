//Booleans 

//====================================================================//
//comparison operators


//EQUAL TO - using type coercian
==
//Assuming y = null - EQUAL TO example - must be equal to the value
y = null;
y == undefined //true



//EQUAL VALUE AND TYPE - STRICT EQUALS
===
//Assuming y = null - EQUAL VALUE AND TYPE example - must be both equal in value and type
y = null;
y === undefined //false



//====================================================================//
//logic operators

//AND 
&&
//Assuming x = 5 and y = 9 - AND Example - Both sides must be true
x = 5;
x < 10 && x !==5  //false

//OR
||
//Assuming x = 5 and y = 9 - OR example - Only one side must be true
x = 5; 
y > 9 || x === 5  //true
//NOT
!
//Assuming x = 5 and y = 9 - NOT example - Reverses current statement
!(x === y) //true


//====================================================================//

// Truth and False Summary

//Exercise 1
x = 10
y = "a"

y === "b" || x >= 10  //true

//Exercise 2
x = 3;
y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y)  //false

//====================================================================//

//Truthy and Falsy

//Falsy Values

false
0
""
null
underfined
NaN

//Truthy Values

Everything Else is Truthy.

//====================================================================//

//Truth and Falsy Summary

//Exercise 1
str = ""
msg = "haha!"
isFunny = "false"

!((str || msg ) && isFunny)  //false