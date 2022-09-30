//NOTEPAD;

///////////////////////////////////////////////////////////////////////////////////////////////////
//Creating a "Pick Random" function. 
 //That selects a random color in the array and forces the User to love it.
function pickRandom() {
    //Create Alert to advise User of your intentions with their daughter:
    alert('You will enter 3 of your fav colors, then I will randomly select one that you must love and nurture!! ');
    //Create an Array to store the entered colors:
    var myArray = [];
    //Create a loop to prompt the User 3 times:
    for(var i = 1; i < 4; i ++) {
        //Push each string into "My Array"
        myArray.push(prompt('Enter your ' + ('number ' + i) + ' favourite color'));
    };
      //Create a var to store the randomiser - 
                              //Adding in the Math method and calling a function to return a random color
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      //Create a Alert to provide feedback to the User of the result/color they will be forced to love and nurture
      alert('You random color for the day is: ' + randomItem);
      //Create a log of the chosen result/color
      console.log('I have chosen: ' + randomItem);
};  
pickRandom();

///////////////////////////////////////////////////////////////////////////////////////////////////

//DOM Meme - Google Homepage DOM Destroyer!
//Create a function to mess with the Google Homepage.
function meme() {
    //Create var to select the HTML Elements "body" Tag.
    var changeColor = document.querySelector("body");
    //Create var to select the HTML Elements "div" Tag.
    var changeSize = document.querySelector("div");
    //Create var to store a switch that will alternate based on if statements.
    var isTrue = true;
    //Create var to select HTML Elements "a" Tag.
    var mem = document.querySelector("a")
    //Create var to store a setinterval for the startInt function.
    var inter = setInterval(startint, 1000);

    //Import Pick Random function from "Library.js".
    function pickRandom() {

        var myArray = ["yellow", "green", "pink", "red", "purple", "blue"];

        var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

        return randomItem;

    };
    //Create a function to fuck w/ the selected Google Homepage HTML elements at a certain interval.
    function startint() {
        //Create a if Statement to test if the isTrue var is "true".
        if (isTrue) {
            //Change the color of the Google Homepage body HTML tag calling upon the pickRandom Function.
            changeColor.style.background = pickRandom();
            //Change the scale of the Google Homepage div HTML tag.
            changeSize.style.scale = "100%"
        } else {
            //Change the color of the Google Homepage body HTML tag calling upon the pickRandom Function.
            changeColor.style.background = pickRandom();
            //Change the scale of the Google Homepage div HTML tag again this time a different scale.
            changeSize.style.scale = "30%"
        }
        //Set the set the interval to false to switch the isTrue to "false" to cause the else statement to run.
        isTrue = false;
    };

    //Create a function to change the selected A Tag, to enable the User to Stop this nonSense.
    function change() {
        //Change the attribute of the selected a HTML tag to blank str "", in order to stop page redirection.
        mem.setAttribute("href", "");
        //Change the textContent of the selected a HTML tag to something more appropriate.
        mem.textContent = "CLICK ME TO STOP THIS"
        //Change the CSS of the selected a HTML tag to a more appropriate size.
        mem.style.fontSize = "50px";
        //Redirect onClick event to stahp function.
        mem.onclick = stahp;
    };

    //Create function to clear the interval, and return everything to normal.
    function stahp() {
        //Clear the interval of the var "inter".
        clearInterval(inter);
        //Create alert to provide feedback from onClick event.
        alert(" IT WORKED YOU SAVED ME!! ");
        //Reload the page completely.
        location.reload();
    };

    //Call the Change function on-page-load to make sure there is a way out of this mess :)
    change();

};
meme();
 
///////////////////////////////////////////////////////////////////////////////////////////////////
