//Strings

//Strings are pieces of text or characters

//Some Examples of Strings are:
"This is a string" //Double Quotes

'This is also a string' //Single Quotes

'Double Quotes "OMG" inside of a string' //Double Quotes inside single quotes

//FURTHER NOTES:

//The Type of quote you use doesn't matter as long as it is consistent.

//Strings are indexed. Meaning each letter contained in the string has a value assigned to that letter starting from 0. 
//Example:
let name = "Kyle";

name[0]; //Prints K 


//Strings have a property called length - extension of indexing, but prints the amount of characters in the string.
//Example:
let firstName = "Kyle";
name.length; //Prints 4

//Strings are immutable, meaning the individual value of a String is not changeable.


//////////////////////////////////

//STRING Methods

//String methods follow this format:
thing.method()

//String methods can be located in the following mdn link:
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  //Notes:
  //Methods with the thumbs down are either not used or depricated

//Notes (General):
//Using String Methods will never alter the value of the original string unless saved to a variable.

//Common Methods:
  
//.toUpperCase()
  //transform all letter characters in a string to uppercase
  //example:
let msg = "this is a message";
               //require Parentheses to call the inbuilt JS Method. 
msg.toUpperCase(); //Prints: "THIS IS A MESSAGE"

//or save it to a variable:
msg = msg.toUpperCase(); //Prints: "THIS IS A MESSAGE"


//.toLowerCase()
 //transform all letter characters in a string to lowercase
 //example:
let food = "BANANA";

food.toLowerCase(); //Prints: "banana"

//or save it to a variable:
food = food.toLowerCase(); //Prints: "banana"


//.trim()
  //remove leading and trailing blank spaces in a string
  //example:
let color = "   purple              ";
color.trim(); //Prints: "purple" - without any spaces.


//Chaining string methods:
//examples:
let car = "     mazda   ";
    //String methods are ordered by first to last
     //In the example below trim() will run first then toUpperCase().
car.trim().toUpperCase(); //Prints: "MAZDA"



//indexOf()
//find the index number of a parsed string within the string variable.
//examples:
let tvShow = "catdog";

tvShow.indexOf("cat"); //Prints: 0
tvShow.indexOf("dog"); //Prints: 1
tvShow.indexOf("z"); //Prints: -1 - As its not listed or found within the index of the string characters.



//slice()
//slice all given characters in a variable within the parameters.
//examples: 
let sport = "baseball";

sport.slice(4); //Prints: ball - Slices all trailing characters from the 4th indice parameter provided.
sport.slice(0, 5); //Prints: baseb - Slices all characters not contained between the two indices parameters provided. 



//replace()
//specify a variable intended on being replaced, then replace the specified portion of the variable with a secondary specified parameter.
//examples:
let personOpinion = "baseball is entertaining";

personOpinion.replace('entertaining', 'boring and nobody watches it.'); //Prints: baseball is boring and nobody watches it.

//Notes:
//If the parameter specified to be changed is not contained within the target string, the string will be unchanged, but will not return false. 



//QUIZ:

//1
const age = "5" + "4"; //Prints: "54" and will store in the const variable.

//2 
"pecan pie"[7]; //Prints: "i"

//3
"PUP"[3] //Prints: undefined

//4
let song = "london calling";
song.toUpperCase(); //Prints: "LONDON CALLING", however does not store it as a variable
                                                //Which means the song variable is unchanged.

//5
let userInput = "   TODD@gmail.com"; //Prints: "   TODD@gmail.com"
let cleanInput = userInput.trim().toLowerCase(); //Prints: "todd@gmail.com" 
                                                         //and stores the value in the cleanInput variable   

//6
let park = "Yellowstone"; //Prints: "Yellowstone"
const index = park.indexOf('Stone'); //Prints: -1
                                     //as "Stone" doesn't match any characters in the park string.

//7
let yell = "GO AWAY!!"; //Prints: "GO AWAY!!"
let index = yell.indexOf("!"); //Prints: 7

//8
'GARBAGE!'.slice(2).replace("B", ''); //Prints: 'RAGE!', and does not store to any variable.



//////////////////////////////////
//String Escapes

//Example 1 - Single Quotes '' escape:
'He ain't happy';
//this is false as the single quote denotes the end of the string too early

'He ain\'t happy'; //Prints: 'He ain't happy'
//this is true as the single quote is "escaped" using the backslash - which is a method to include the trailing quotation mark in the string.

//Example 2 - Double Quotes "" escape:
"He said \"That chocolate is weird tasting\""; //Prints He said "That chocolate is weird tasting"
//this is true as the double quotes/the quoted message in the string is "escaped" from the string container.


//New Line escape method (\n):
    //Adds a new line within the string.
"Hello\nGoodBye"; //Prints: "Hello
                  //         Goodbye"


//Backslash in a string (\\):
"This is a string with a backslash (\\)"; //Prints: "This is a string with a backslash (\)"

//////////////////////////////////
//String Template Literals
//Use template literals to create a 'hybrid' string that will allow interpolating data into the string
`I am a template literal` //Prints: `I am a template literal`


//Embedding Information using specific method `${}`:
//this method interpolates data into a string.     
//Example 1: 
let username = 'Kyle';                                 // This username refers to a variable called "username"
`I am a template literal, here is the embedded info method ${username}`; //Prints: `I am a template literal, here is the embedded info method Kyle`

//Example 2:
const minAge = 21;

let yourAge = 19;

let bouncerNo = `You must be ${minAge} or older to enter. Come back in ${minAge - yourAge} years.`;


