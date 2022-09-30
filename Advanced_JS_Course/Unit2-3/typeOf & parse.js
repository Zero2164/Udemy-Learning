//typeof

//typeof displays the type of the value or property placed after the operator - without prentices, this is a one sided operand.

//Examples:

typeof 99; //Prints: number

typeof true; //Prints: boolean

const mystery = 'who killed Mr. Robertson?';
typeof mystery; //Prints: string

typeof undefined; //Prints: undefined

typeof null; //Prints: object - weird quirk in JS, however is correct.



////////////////////////////////////////////////////////////

//parseInt and parseFloat
//Use to parse strings into numbers, but watch out for NaN!

//parseInt
//Returns an interger
//parseInt examples:
parseInt('24'); //Prints: 24
parseInt('24.987'); //Prints: 24
parseInt('28daysLater'); //Prints: 28


//parseFloat
//Returns the entire decimal number
//parseFloat examples:
parseFloat('24.987'); //Prints: 24.987
parseFloat('7'); //Prints: 7 
parseFloat('i ate 3 shramp'); //Prints: NaN

//Notes: a number can be extracted from parsed string in either parseInt/parseFloat as long as the string does not begin with NaN or a character that is not a number. 
//for example:
parseInt('99cents'); //Prints: 99 - valid and able to extract the number from the string
parseInt('thisIs 99cents'); //Prints: NaN - not valid, not able to extract the number from the string

