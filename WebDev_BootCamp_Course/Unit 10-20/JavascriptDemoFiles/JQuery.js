//jQuery Selector
$("selectorGoesHere") //Prints all objects listed under DOM Element

//jQuery Common Selector Methods:

//css() Method:
//alter css properties of the selected DOM HTML Element
  //Select
  $("selectorGoesHere")
  //Manipulate
  //call .css() method
    //specify property argument to alter of the specified element
              //specify the value argument of specified property
  .css("property", "value"); //if no second argument, then the method will return value of the selected property of the selected DOM HTML ELement's 


//text() Method:
//return/update the text content of the selected DOM HTML Element 
  //Select
  $("selectorGoesHere")
  //Manipulate
  //call text() method
      //parse in argument to update all text content  of the selected HTML Element
  .text("inputNewTextHere"); //prints current text content of selected HTML Element - if left blank


//html() Method:
//return/update the inner html of the selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call the html() method
         //parse in argument to update all the HTML of the selected HTML Element
    .html("newHTMLValueGoesHere");


//attr() Method:
//return/update the attributes of the selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
        //call attr() Method
           //parse in argument to select attribute
                  //parse in argument to change the selected DOM HTML Element's attribute
    .attr("src", "URLGoesHere"); //if no second argument, then the method will return value of the selected attribute of the selected DOM HTML ELement's


//last() Method:
//return the last type of the selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
        //call last() Method
    .last(); //returns the last type of the selected DOM HTML Element


//val() Method:
//extracts the value of the selected DOM HTML Elements that have a value attribute
    //Select
    $("selectorGoesHere")
    //Manipulate
       //call .val() Method
    .val(""); //if no arguments provided, then the method will return the value of the selected DOM HTML Element


//addClass() Method:
//adds a class to the selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
       //call .addClass() Method
            //parse in class name of an already defined css class
    .addClass("classNameGoesHere");


//removeClass() Method:
//removes a class to the selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
       //call .removeClass() Method
            //parse in class name of an already defined css class
    .removeClass("classNameGoesHere");


//toggleClass() Method
//toggles a class on/off to the selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
       //call .toggleClass() Method
            //parse in class name of an already defined css class
    .toggleClass("classNameGoesHere");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//jQuery Common Event Methods:

//click() Event Method:
//used to trigger an Event once a selected DOM HTML Element is "clicked"
    //Select
    $("selectorGoesHere")
    //Manipulate
       //call .click() Event Method
         //parse in anon function to do something once the click() event has been triggered (MOST COMMON USECASE)
    .click(function(){}) 


//keypress() Event Method:
//used to trigger an Event on a selected DOM HTML Element, once a key has been pressed on the keyboard
    //Select
    $("selectorGoesHere")
    //Manipulate
       //call .keypress() Event Method
           //parse in anon function to do something when keypress() event has been triggered (MOST COMMON USECASE)
    .keypress(function(){})


//on() Event Method:
//used to trigger an Event on a selected DOM HTML Element when a specified event trigger, has been triggered
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call .on() Event Method
          //parse in a event trigger
                     //parse in an anon function to do something when the specified event trigger is triggered
    .on("eventTriggerGoesHere", function(){})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//jQuery Effects

//slideUp() Effect Method
//used to trigger slide-up effect on selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call slideUp() effect Method
            //parse in an interval
                          //parse an anon function to do something when the slide-up effect has finished the interval
    .slideUp("intervalGoesHere", function(){})


//slideDown() Effect Method
//used to trigger slide-down effect on selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call slideDown() effect Method
            //parse in an interval
                          //parse an anon function to do something when the slide-down effect has finished the interval
    .slideDown("intervalGoesHere", function(){})


//slideToggle() Effect Method
//used to trigger slide-toggle effect on selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call slideToggle() effect Method
            //parse in an interval
                          //parse an anon function to do something when the slide-toggle effect has finished the interval
    .slideDown("intervalGoesHere", function(){})


//fadeIn() Effect Method
//used to trigger fade-in effect on selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call fadeIn() effect Method
            //parse in an interval
                          //parse an anon function to do something when the fade-in effect has finished the interval
    .fadeIn("intervalGoesHere", function(){})


//fadeOut() Effect Method
//used to trigger fade-out effect on selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call fadeOut() effect Method
            //parse in an interval
                          //parse an anon function to do something when the fade-out effect has finished the interval
    .fadeOut("intervalGoesHere", function(){})


//fadeToggle() Effect Method
//used to trigger fade-toggle effect on selected DOM HTML Element
    //Select
    $("selectorGoesHere")
    //Manipulate
      //call fadeToggle() effect Method
            //parse in an interval
                          //parse an anon function to do something when the fade-toggle effect has finished the interval
    .fadeToggle("intervalGoesHere", function(){})