//DOM Events -

//DOM Events are everywhere
 //Clicking on a button
 //Hovering over a link
 //Dragging and Dropping
 //Pressing the Enter key

//DOM Event Process
  //We SELECT an element and then add an "Event Listener"
    //For Example:
    //Listen for a click on this <button>
    //Listen for a hover event on the <h1>
    //Listen for a keypress event on text input

//DOM Event Method:
 
//Syntax:
element.addEventListener(type, functionToCall);

//Example 1:
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log(" SOMEONE CLICKED THE BUTTON! ");
});