//Welcome to fuck my background colour, starring my average coding skills...
//first lets define a function to contain it all
function fuckMyBG() {
    //Lets set some VAR's
    var butt = document.getElementById("OG");
    var butttwo = document.getElementById("lame");

    //one function to choose our random color
    function pickRandom() {

        var myArray = ["yellow", "green", "pink", "red", "purple", "blue"];

        var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

        return randomItem;

    };
    //a function dubbed the "Main Function"
    function mainFunc() {
        setInterval(function () { 
            document.body.style.backgroundColor = pickRandom();
            butttwo.disabled = false;
            butttwo.className = "active";
         }, 500);
    };
    //another function to clear the interval
    function stahp() {
            clearInterval(mainFunc);
            alert(" YAY NO MORE SEIZURES! ");
            location.reload();
            shutDownMainFunc();
    };
    //a function to shut down the Main Function
    function shutDownMainFunc() {
        butttwo.disabled = true;
        butttwo.className = "disable";
    };
    shutDownMainFunc();
    //a method to turn on the Main Function
    butt.onclick = mainFunc;
    //and finally method to turn off the Main Function
    butttwo.onclick = stahp;

};
fuckMyBG();