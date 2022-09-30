//create secret number
secretNumber = 14;

//ask user to guess
guess = Number(prompt("Guess a number!"));

//check if guess is right
if(guess === secretNumber){
    alert("You got it right!");
}

//check if guess is higher
else if(guess > secretNumber){
    alert("Too High!");
}

//check if guess is lower
else{
    alert("Too Low!");
}