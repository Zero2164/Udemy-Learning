//Conditionals make the decisions or logic of the code


//IF
if(age < 18){
    console.log("Sorry, you are not old enough to enter the venue");
}
//ELSE IF
else if(age < 21){
    console.log("You can enter, but cannot drink");
}
//ELSE
else {
    console.log("Come on in, you can drink!");
}

//Exercise 1

age = prompt("Bouncer: What is your age?");
console.log(age);
//IF age is less than 18
if(age < 18){
    alert("Sorry, you are not old enough to enter the venue");
    console.log("Sorry, you are not old enough to enter the venue");
}
//IF age is equal to 21
if(age === 21){
    alert("Happy 21st birthday!!");
    console.log("Happy 21st birthday!!");
}
//IF age is less than 0
if(age < 0){
    alert("Error! Please refresh the page!");
    console.log("Error! Please refresh the page!");
}
//IF age is odd
if(!age%2 ==0){
    alert("Your age is odd!");
    console.log("Your age is odd!");
}
//ELSE IF age is less than 21
else if(age < 21){
    alert("You can enter, but cannot drink");
    console.log("You can enter, but cannot drink");
}
//ELSE if age is anything else
else {
    alert("Come on in, you can drink!");
    console.log("Come on in, you can drink!");
}

