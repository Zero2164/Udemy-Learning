alert("BEFORE YOU ENTER, YOU MUST ANSWER THE FOLLOWING QUESTIONS...")

var firstName = prompt("What's your First Name?");
var lastName = prompt("What's your Last Name?");
var age = prompt("How old are you?");
var gen = prompt("What is your Gender?");

var fullName = firstName + " " + lastName

alert("Click \"OK\" if your full Name is, " + fullName);
alert("Click \"OK\" if you are " + age + " years old..");
alert("Click \"OK\" if you are " + gen);
console.log("Their gender is: " + gen);
console.log("Their full name is: " + firstName + " " + lastName)
console.log("Their age is: " + age)
alert("Perfeccttt....");