//Variables

//LET
//Can change the stored value of let
let age = 72;

age //Prints 72

let hens = 4;
let roosters = 2;

hens + roosters //Prints 6

/////////////////////////////////////////////////////////////////
//Unary Operators

//Single operations that complete 

age++; //Prints 73 

age--; //Prints 72

!age; //Prints false
/////////////////////////////////////////////////////////////////

//CONST
//Can not change the value of const once set
const birthday = 22;

birthday += 1; //Prints "invalid assignment to const 'birthday'" as const cannot be altered, it is a const-ant variable. 

////////////////////////////

//Further Notes: 
//let cannot have the same name variable as const - even though they are different types of varibles, they are still grouped in the same category. 

 
/////////////////////////////////////////////////////////////////

//VAR

var tripDistance = 7.4;

tripDistance += 1;

tripDistance = 7.4

//Works like let, however let is much more powerful and var has been archived. Var will still work, but in modern JS it is no longer considered current Syntax.  
 
/////////////////////////////////////////////////////////////////

//Variable QUIZ:

//Q1:
let eggCount = 42;
eggCount + 2; //Prints 44, but as the value hasnt saved to eggCount, the value of eggCount is still 42.

//Q2:
const rating = 7.5;
rating = 8; //Prints invalid assignment to const 'rating', but the value of rating is still 7.5.

//Q3:
let wind_speed = 76;
wind_speed += 5;
wind_speed--; //Prints 80, however conventionally, this code has a variable name that is unprofessional, then the value of wind_speed is now 80. 