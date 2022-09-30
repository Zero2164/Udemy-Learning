//Exploring This and New Keywords:

//Example 1 - Creating an Object:
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
};

var firstHouse = new House(2, 2, 1000);
firstHouse.bedrooms; //Prints 2
firstHouse.bathrooms; //Prints 2
firstHouse.numSqft; //Prints 1000

//It first creates an empty object
//It then sets the keyword 'this' to be that empty object
//It adds the line `return this` to the end of the function, which follows it
//It adds a property onto the empty object called "__proto__" (a.k.a dunda proto) 
//which links the prototype property on the constructor function to the empty object.


//=============================================================================================================================================//


//Practice/Example 2 - Create a Dog Object - 
//Create a constructor function for a Dog
//Each Dog should have a name and age.
function Dog(name, age) {
    this.name = name;
    this.age = age;
    //BONUS - add a function for each Dog called "bark", which console.logs the name of the Dog added to the string "just barked"
    this.bark = function () {
        setTimeout(function () {
            console.log(name + " aged: " + age + ", just barked");
        }.bind(this), 10000);
    };
};

var spot = new Dog('Spot', 1);
var rufus = new Dog('Rufus', 2);

spot.bark();
rufus.bark();


//=============================================================================================================================================//


//Example 3 - Modular Objects - this, new, call/apply, and arguments keywords

//Define Car constructor with parameters and beginning this parameters
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    //we can also set properties on the keyword this
    //that are preset values
    this.numWheels = 4;
};

//then using the call() method, call the Car constructor 
//and redefine the this keyword to reference the Motorcycle constructor, then redefine the this parameters
function Motorcycle(make, model, year) {
    Car.call(this, make, model, year);
    //redefine the preset values with the new motorcycles this keyword
    this.numWheels = 2;
};

//or using the apply() method, call the Car constructor
//and redefine the this keyword to reference the Motorcycle constructor, then redefine the this parameters in an array
function Motorcycle(make, model, year) {
    Car.call(this, [make, model, year]);
    this.numWheels = 2;
};

//or using the apply() method, call the Car constructor
//new method arguments, can be used to define all the arguments passed into a function
function Motorcycle(make, model, year) {
    Car.call(this, arguments);
    this.numWheels = 2;
};


//=============================================================================================================================================//


//Example 4 - Prototypes 

//this is the constructor function 
function Person(name) {
    this.name = name;
}

Person.prototype;

var Kyle = new Person(23);
var Cheyna = new Person(20);

Cheyna.__proto__ === Person.prototype; // Prints true


//=============================================================================================================================================//


//Example 5 - Prototype Chain

var arr = [];

new Array === []; //Prints true

arr.__proto__ === Array.prototype; //Prints true

//JS will look at an objects proto for the method/function called, 
//and if not found will repeat the process for each proto in the chain - until it reaches the end of the proto chain


function Person(name) {
    this.name = name;
    this.sayHi = function () {
        return "Hi " + this.name;
    };
}

cheyna = new Person("Cheyna");
cheyna.sayHi(); //Prints "Hi Cheyna";

////////////////////////////////////////
//Refactor above Person Constructor

function Person(name) {
    this.name = name;
}
//Define new Constructor object in the window prototype
Person.prototype.sayHi = function () {
    return "Hi " + this.name;
};
//then create a new person using the new constructor
cheyna = new Person("Cheyna");
//and invoke the sayHi() function from the dunda proto of the window object
cheyna.sayHi();


//OOP Exercise:

//Create a constructor func for a Vehicle: 
function Vehicle(make, model, year) {
    //every obj created from this constructor should have a make, model, year property
    this.make = make;
    this.model = model;
    this.year = year;
    //Each object should also have a property call "isRunning", which should be set to false
    this.isRunning = false;
}

//Every Obj created from the Vehicle Constructor should have a function called "turnOn", which changes the isRunning property to true
Vehicle.prototype.turnOn = function () {
    isRunning = true;
    this.honk();
};
//Every Obj created from the Vehicle Constructor should have a function called "turnOff", which changes the isRunning property to false
Vehicle.prototype.turnOff = function () {
    isRunning = false;
};
//Every Obj created from the Vehicle Constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true
Vehicle.prototype.honk = function () {
    if (this.isRunning) {
        console.log('beep');
    }
};

var nissanMicra = new Vehicle("Nissan", "Micra", 2014);


