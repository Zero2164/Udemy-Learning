function rgbGame() {
    //Create Variables
    var difclty = 0;
    var gameStart = false;
    var colors = genRandColor(difclty);
    var circles = document.querySelectorAll(".circle");
    var colorDisp = document.getElementById("colorDisp");
    var pickedColor = pickColorDisp();
    var msgDisp = document.querySelector("#msg");
    var restBtn = document.getElementById("restBtn");
    var ezBtn = document.getElementById("ezBtn");
    var mdmBtn = document.getElementById("mdmBtn");
    var hrdBtn = document.getElementById("hrdBtn");
    var startG = document.getElementById("startGame");
    var gameBgn = document.getElementById("RGBColorApp");
    var quitG = document.getElementById("endGame");

    //loop through HTML div Element "circle"
    for (i = 0; i < circles.length; i++) {
        //add initial colors to circles
        circles[i].style.backgroundColor = colors[i];

        //add click listeners to circles
        circles[i].addEventListener("click", function () {
            //grab color of clicked circle
            var clickedColor = this.style.backgroundColor;
            //compare color of pickedColor
            if (clickedColor === pickedColor) {
                msgDisp.textContent = "Correct !!";
                document.querySelector("h1").style.backgroundColor = pickedColor;
                restBtn.classList.add("activeBtn2");
                restBtn.textContent = "Play Again ?"
                chngColors(clickedColor);
                //else change the color of the selected 
            } else {
                this.style.backgroundColor = "#232323";
                this.classList.add("activeCircle");
                msgDisp.textContent = "Try Again Fool !";
            };
        });
    };

    //Function to load StartGame! Animated Btn ON-Page Load
    function startGameBTN() {
        if (!gameStart) {
            //defines variables and assigns a position and setinterval for the start Game Button
            var pos = -10;
            var id = setInterval(frame, 5);
            //Function to define two positions for the button to move to
            function frame() {
                //If the targeted div has reached position "25" relative to the Viewing Window,
                if (pos == 25) {
                    //Clears the interval, and the function will no longer run
                    clearInterval(id);
                } else {
                    //Otherwise if the targeted div has not reached position "25" relative to the Viewing Window,
                    //Add 1 to the position var, and moving the targeted div's postion to the right,
                    pos++;
                    startG.style.right = pos + 'px';
                    startG.style.left = pos + 'px';
                };
            };
        };

    };
    startGameBTN();

    function notGameBegin() {
        startG.hidden = false;
        gameBgn.hidden = true;
    };
    notGameBegin();

    function gameBegin() {
        restBtn.hidden = true;
        startG.hidden = true;
        gameBgn.hidden = false;
    };

    function resetGame() {
        //pick a new random color from array
        pickedColor = pickColorDisp();
        //changec color display to match picked color
        colorDisp.textContent = pickedColor;
        //change colors of circles
        for (i = 0; i < circles.length; i++) {
            //change each color to match given color
            circles[i].style.backgroundColor = colors[i];
        };
        //reset h1 background color to default game-start color
        document.querySelector("h1").style.backgroundColor = "rgb(64, 160, 224)";
        //change button text content back to default
        restBtn.textContent = "New Colors !";
        //change button background back to default
        restBtn.classList.remove("activeBtn2");
        //change feedback display to be blank
        msgDisp.textContent = "";
    };

    function chngColors(color) {
        //loop through all circles
        for (i = 0; i < circles.length; i++) {
            //change each color to match given color
            circles[i].style.backgroundColor = color;
            circles[i].classList.remove("activeCircle");
        };
    };

    function pickColorDisp() {
        //Create a var to store the randomiser - 
        //Adding in the Math method and calling a function to return a random color
        var randomItem = Math.floor(Math.random() * colors.length);
        //return the selected color
        return colors[randomItem];
    };

    function genRandColor(num) {
        //make an Array
        var arr = [];
        //repeat num times
        for (var i = 0; i < num; i++) {
            //get random and push into arr
            arr.push(randomColor());
        };
        //return that Array
        return arr;
    }

    function randomColor() {
        //pick a "red" from 0 -255
        var r = Math.floor(Math.random() * 256)
        //pick a "green" from 0 -255
        var g = Math.floor(Math.random() * 256)
        //pick a "blue" from 0 -255
        var b = Math.floor(Math.random() * 256)
        //return arranged string with random rgb selection
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };

    restBtn.addEventListener("click", function () {
        //generate all new colors
        colors = genRandColor(difclty);
        //run resetGame function
        resetGame();
    });

    ezBtn.addEventListener("click", function () {
        //remove CSS Classes to provide feedback on selected difficulty
        mdmBtn.classList.remove("active");
        hrdBtn.classList.remove("active");
        //add CSS Class to provide feedback on selected difficulty
        ezBtn.classList.add("active");
        //enable non selected difficulty to enable ability to switch difficulty then reset game
        mdmBtn.disabled = false;
        hrdBtn.disabled = false;
        //disable already selected difficulty to prevent color changing
        ezBtn.disabled = true;
        //set the difficulty of the game to 3 colors
        difclty = 3;
        //generate the 3 random colors
        colors = genRandColor(difclty);
        //loop through all non-used circles to hide the HTML Elements for easy mode
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".notHrd")[i].hidden = true;
            document.querySelectorAll(".notMdm")[i].hidden = true;
        };
        //Show New Colors Button
        restBtn.hidden = false;
        //call resetGame function to change to new color set
        resetGame();
    });

    mdmBtn.addEventListener("click", function () {
        //remove CSS Classes to provide feedback on selected difficulty
        ezBtn.classList.remove("active");
        hrdBtn.classList.remove("active");
        //add CSS Class to provide feedback on selected difficulty
        mdmBtn.classList.add("active");
        //enable non selected difficulty to enable ability to switch difficulty then reset game
        ezBtn.disabled = false;
        hrdBtn.disabled = false;
        //disable already selected difficulty to prevent color changing
        mdmBtn.disabled = true;
        //set the difficulty of the game to 6 colors
        difclty = 6;
        //generate the 6 random colors
        colors = genRandColor(difclty);
        //loop through all non-used circles to hide the HTML Elements for basic mode
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".notHrd")[i].hidden = true;
            document.querySelectorAll(".notMdm")[i].hidden = false;
        };
        //Show New Colors Button
        restBtn.hidden = false;
        //call resetGame function to change to new color set
        resetGame();
    });

    hrdBtn.addEventListener("click", function () {
        //remove CSS Classes to provide feedback on selected difficulty
        ezBtn.classList.remove("active");
        mdmBtn.classList.remove("active");
        //add CSS Class to provide feedback on selected difficulty
        hrdBtn.classList.add("active");
        //enable non selected difficulty to enable ability to switch difficulty then reset game
        ezBtn.disabled = false;
        mdmBtn.disabled = false;
        //disable already selected difficulty to prevent color changing
        hrdBtn.disabled = true;
        //set the difficulty of the game to 9 colors
        difclty = 9;
        //generate the 9 random colors
        colors = genRandColor(difclty);
        //loop through all non-used circles to hide the HTML Elements for Hardcore mode
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".notMdm")[i].hidden = false;
            document.querySelectorAll(".notHrd ")[i].hidden = false;
        };
        //Show New Colors Button
        restBtn.hidden = false;
        //call resetGame function to change to new color set
        resetGame();
    });

    startG.addEventListener("click", function () {
        gameStart = true;
        gameBegin();
    });

    quitG.addEventListener("click", function () {
        //confirm prompt to enable a choice dynamic
        var yes = confirm("YOU WISH TO QUIT?");
        //test if the choice was yes - then calls hideClose function to hide ATLAS App HTML Elements, then unhide ATLAS start icon HTML Element
        if (yes) {
            location.reload();
          //Otherwise test if "cancel" is selected - then, do nothing
        } else {
          return false;
        };
      });

};

rgbGame();
