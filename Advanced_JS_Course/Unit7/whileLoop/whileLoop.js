//While Loop
//@collapse
//example of for loop:
//create function to confrom with modular code
function forLoopExample() {
    console.log('== THIS IS THE FOR LOOP: ==');
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }; //Prints: 0-5
};

//example of while loop
//create function to confrom with modular code
function whileLoopExample() {
    let j = 0;
    console.log();
    console.log('== THIS IS THE WHILE LOOP EQUIVALENT: ==');
    while (j <= 5) {
        console.log(j);
        j++;
    };
};

//Notes: While loops are not appropriate for the case above as creating a seperate variable outside the loop block is not "Best Practice".
//Thus, a for loop is more appropriate in this situation. However, while loops are good for some cases see common example below.


//Further Notes: While loops excel when the interval for the amount of times the loop runs, is unknown.
//example:

//create function to conform with modular code:
function guessGame() {

    //Guess Game Beginning Requirements:
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //declare let lives variable:
    let lives = 3;
    //create blank console.log entry to break up console.log entries.
    console.log();
    //denote in console the start of the game and the amount of lives the player has.
    console.log(' == GUESSING GAME! ==', '\n', `Lives: ${lives} `, ' Default Guess: 0');
    //declare const variable for the target number to be random at the start of the guessGame Function:
    const target = Math.floor(Math.random() * 10);
    //declare let variables for both guess and gameOver:
    let guess = Number(prompt('Guess a number between 0 and 10.')),
        gameOver = false,
        winner = false;
    //create function to contain Guess Game logic:
    function guessGameLogic() {
        //create function to display results of guess, and reduce lives by 1 then prompt the user to guess again.
        function guessAfterMath() {
            lives--;
            console.log(` Your Guess: ${guess}.`, `Remaining Lives: ${lives}.`);
            if (!gameOver || !winner) {
                guess = Number(prompt('Guess a number between 0 and 10.'));
            };
        };

        //create function to restart the Guessing Game:
        // function restartGame() {
        //     console.clear();
        //     guessGame();
        // };

        //create function to display winning condition:
        function winWinChicDin() {
            //create if statement to display the winning conditions if guess matches target.
            if (!gameOver) {
                const winWinText = `Congrats! Target: ${target} has been found by your Guess: ${guess}.`;
                winner = true;
                console.log(` Your Guess: ${guess}.`, `Remaining Lives: ${lives}.`, '\n', '\n', winWinText);
                alert(winWinText);
                return true;
            };
        };

        //create function to display game over condition:
        function gameOverLooser() {
            const gameOverText = 'Game Over Loser! You have lost all 3 lives. Select `~ Run Code ~` to Start Game Again!';
            gameOver = true;
            lives--;
            console.log(` Your Guess: ${guess}.`, `Remaining Lives: ${lives}.`, '\n', '\n', gameOverText);
            alert(gameOverText);
            return true;
        };

        //create function to contain guessGame logic:
        function guessGameConditions() {
            //create while loop to guess the target number and reduce lives, if the target number is guessed continues to if statement below.
            //if the target number is not guessed gameOver will be set to true.
            while (guess !== target) {
                //create if statement to check if the input is greater than 10 - if true to reset the game
                if (guess > 10) {
                    alert('Cannot guess more than 10. Guess again!');
                    //create if statement to check if the input is less than 0 - if true to reset the game
                } else if (guess < 0) {
                    alert('Cannot guess less than 0. Guess again!');
                    //create if statement to check if guess is equal to Not a Number or Null - if true to reset the game
                } else if (guess === null || isNaN(guess)) {
                    alert('That value is not acceptable in this game. Guess again!');
                };
                //create if statement to check if the lives have reached 0 (i.e 1) and thus displays loosing conditions
                if (lives <= 1) {
                    gameOverLooser();
                    return true;
                };
                //display results of guess, and reduce lives by 1 then ask the user to guess again.
                guessAfterMath();


            };
        };
        //invoke guessGame logic to the game
        guessGameConditions();
        //display winning conditions if guess matches the target number.
        winWinChicDin();
    };
    //invoke Guess Game Logic:
    guessGameLogic();
};



//Break; Keyword JS Method and loops
//example of break used below:

//create function to confrom with modular code:
function breakExample() {
    //create let variable to store count of while loop:
    let index = 1;
    console.log();
    console.log('== THIS IS THE BREAK METHOD EXAMPLE: ==');


    //create while loop increasing index by 1 until index has increased to 10
    while (index < 10) {
        //print index's current value in the console until index has increased to 10
        console.log(index);
        //increase index by 1 each time index is not 10
        index++;
        //create if statement to utilise the break JS method, when index has increased to 6.
        if (index === 6) {
            //once index has increased to 6, the code will break out of the loop cancelling the rest of the execution.
            break;
        };
    };
};
