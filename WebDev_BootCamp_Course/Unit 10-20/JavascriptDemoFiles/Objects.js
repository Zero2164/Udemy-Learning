//Objects in JS 

//Difference between Array and Object:
//Example 1:

//Array:
var personArr = ['Travis', '21', 'Melbourne'];

//Object:
  //Difference - is using curly brackets "{}" rather than square brackets "[]"
var personObj = {
//Also assigning keywords to the items within the Object (i.e 'name')
    name: 'Travis', 
    age: 21, 
    city: 'Melbourne'
};

//Then calling an item from the Object with its respective keyword via dot notation,
 //NOTE: dot notation is used for str's only, as number properties are invalid/ will not be accepted. (i.e. OBJECTNAME.1)
 //NOTE: dot notation will only accept single word properties, properties with spaces (i.e. "The One") will not be accepted. 
 //NOTE: dot notation will accept an underscore inbetween a property with two alphabetical characters (i.e. The_One).
console.log(personObj.name);

//You may also use bracket notation: 
 //NOTE: Bracket notation is best used for number properties, however will also accept str's.
 //NOTE: Bracket notation also is used for str properties that include spacing. (i.e. "The One")
console.log(personObj['name']);

//Whereas Arrays use and are bound by  indexing to call/associate items. For example:
console.log(personArr[0]);
 //This is less efficient as you have to memorise the exact index a value/data are stored.
  //Which if there was a mistake and the data/value had been input incorrectly, leads to inconsistancy. 



//Updating property data/values within Objects: 

//Create an Object and store values under some Properties.
var personObj2 = {
    name: "Julie",
    age: 22,
    city: "Perth"
};


//Call the Object and Property alias
                                 //then update the property's value 
personObj2.city = "Melbourne"; 
personObj2.name = "Cheyna"; 
personObj2.age = 20; 

personObj2;



//Creating Object/Array Data Structures: 
function objDataStructure () {
    var posts = [ //main Array and foundation for data structure.
        {   //embedded Object inside main Array "posts"
            title: "Cats are Awesome",
            author: "Kyle",   //Object property and data/value
            comments: ["At least I don't have weird teeth like Colt"] //embedded Array inside Object
        },
        {
             //additional embedded Object
             title: "Cats are mediocre",
             author: "Colt",
             comments: ["I'm better at coding than you..."]
        } 
    ]
    
    console.log(posts); 
}



//Objects Quiz:
//Exercise 1:
var someObj = {};

//Which of the following is invalid?
someObj._name = "Hedwig"; //valid
someObj.age = 6;          //valid
var prop = "color"        //valid
someObj[prop] = "red";    //valid
someObj.123 = true;       //invalid

///////////////
//Exercise 2:
var someObj2 = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

//Write code to retrieve "Malfoy" from someObj, making sure to go one "layer" at a time:
someObj2;
someObj2.friends
someObj2.friends[0]
someObj2.friends[0].name