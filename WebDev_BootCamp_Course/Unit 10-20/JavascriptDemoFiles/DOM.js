//DOM - Document Object Manipulation

//Various DOM Selectors
document.URL //returns the URL
document.links // returns all the link-objects contained in a HTML
document.head //returns all elements inside the "HEAD" tag
document.body //returns all elements inside the "BODY" tag


//Different DOM Methods:
document.getElementById - //Selects the Element with specified ID
    document.getElementsByClassName - //Selects all elements with specified class name
    document.getElementsByTagName - //Selects all elements with a specified tag name
    document.querySelector - //Selects the first element that matches a given CSS-style selector
    document.querySelectorAll //Selects all elements that match a given CSS-style selector



//DOM Manipulation
//Changing an Element's Style
//adding/removing classes
//changing the count of a tag
//changing attributes(src, href, etc.)

//PROPERTIES:

//style - Property
//Select:
var tag = document.getElementById("highlight");

//Manipulate:
tag.style.color = "blue";
tag.style.fontSize = "70px";
tag.style.border = "10px solid red";
tag.style.marginTop = "200px";



//classList - Property - PLEASE NOTE: classList is technically not an Array
//To prevent wet-code, create classes in CSS
//Select
var tag = document.querySelector("h1")

//Then Manipulate with selected class in the CSS File:
//add - applies a CSS Class to the HTML Document
tag.classList.add("newClass");
//remove - removes the applied CSS Class from the HTML Document
tag.classList.remove("newClass");
//toggle - applies/removes a CSS Class depending on if the class has already been applied/or not. 
tag.classList.toggle("newClass");



//textContent - Property:
//returns all text within the selected element
//can be used to alter the text of the selected element
//Select
var tag = document.querySelector("p");

//Then Manipulate
tag.textContent;//return all text inside selected element
//ONLY Alter the text within the selected element by:
tag.textContent = "Blah Blah Blah!";



//innerHTML - Property
//Similar to textContent, except it returns a string of all the HTML contained in a given element

//Select
var tags = document.querySelector("p");

//Manipulate
tags.innerHTML //returns all of the "p" tags information as a string, including any "strong" tags, etc.
tags.innerHTML = "<p>Goodbye!</p>" //manipulates HTML "p" tag and HTML text.



//Attributes - Property
//Able to select and manipulate links/img  tags in HTML document

//Select
var links = document.getElementsByTagName("img")[0];

//Manipulate
links.getAttribute //returns the selected attribute details
//setAttribute takes 2 arguments, first select the Attribute, then change the Attributes target. 
links.setAttribute("src", "Photo.jpg") //Changes the src img within the selected HTML Attribute
links.setAttribute("href", "www.google.com") //Changes the href link within the selected HTML Attribute

