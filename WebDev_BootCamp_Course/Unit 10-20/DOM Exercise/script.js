
//Here are the answers to the DOM Selector Exercise
function answers() {
    var body = document.querySelector("body")
    body.style.background = "rgb(71, 71, 71)";
    body.style.fontSize = "30px";
    body.style.textAlign = "center";
    body.style.fontFamily = "sans-serif";


    var pTag = document.getElementsByTagName("p")
    pTag[3].style.color = "blue";
    
    var pTagOne = document.querySelector("p")
    pTagOne.style.color = "green";
    pTagOne.style.fontWeight = "1000";
    
    var pTagTwo = document.getElementById("first")
    pTagTwo.style.fontSize = "50px";
    
    var pTagThree = document.getElementsByClassName("special")
    pTagThree[1].style.color = "red";
};
answers();


//and here I added the spicy meme for fun....
function meme() {
    function pickRandom() {

        var myArray = ["yellow", "green", "pink", "red", "purple", "blue"];

        var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

        return randomItem;

    };

    var changeColor = document.querySelector("body"); //SELECT - the HTML tag

    var changeSize = document.querySelector("div");

    var isBlue = false;

    setInterval(function () { //MANIPULATE - that HTML tag's style property.
        if (isBlue) {
            changeColor.style.background = pickRandom();
        } else {
            changeColor.style.background = pickRandom();
        }
        isBlue = !isBlue;
    }, 1000);
}
meme();

