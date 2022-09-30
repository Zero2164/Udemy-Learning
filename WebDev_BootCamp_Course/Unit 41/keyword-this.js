//KEYWORD "This"


//Keyword This Rule 1 - Global Context -
console.log('this'); //Prints 'window'
//Input
function whatIsThis() {
    return this;
};
function variablesInThis () {
    //since the value of this is the window
    //all we are doing here is creating a global variable
    this.person = 'Kyle';
};

//Output
console.log(person); // Prints 'Kyle'
whatIsThis(); // Prints 'window'

//Use Strict to prevent global var creation
"use strict"


// ========================================================================================== //


//Keyword This Rule 2 - Implicit/Object Context 

//Strict Mode does not apply here due to this being decalred inside of an object

//Single Object
//Input
var person = {
    firstName: 'Kyle',
    sayHi: () => {
        return 'Hi ' + this.firstName;
    },
    determineContext: () => {
        return this === person;
    }
};
//Output
person.sayHi(); //Prints 'Hi Kyle';
person.determineContext(); //Prints true;

//Nested Object
//Input
var person = {
    firstName: 'Kyle',
    sayHi: function () {
        return 'Hi ' + this.firstName;
    },
    determineContext: function () {
        return this === person;
    },
    dog: {
        sayHello: function () {
            return 'Hello ' + this.firstName;
        },
        determineContext: function () {
            return this === person;
        },
    }
};
//Output
person.dog.sayHello(); //Prints 'Hello undefined';
person.dog.determineContext(); //Prints false;


// ========================================================================================== //


//Keyword This Rule 3 - Explicit Binding

//Choose what we want the context of 'this' to be using call, apply or bind

//Call() Example 1
//Input
var person = {
    firstName: 'Kyle',
    sayHi: function () {
        return 'Hi ' + this.firstName;
    },
    determineContext: function () {
        return this === person;
    },
    dog: {
        sayHello: function () {
            return 'Hello ' + this.firstName;
        },
        determineContext: function () {
            return this === person;
        },
    }
};
//Output
person.dog.sayHello.call(person); //Prints 'Hello Kyle';
person.dog.determineContext.call(person); //Prints true;


//Call() Example 2
//Input
var Kyle = {
    firstName: "Kyle",
    sayHi: function () {
        return "Hi " + this.firstName
    }
}
var Cheyna = {
    firstName: "Cheyna",
}
//Output
Kyle.sayHi(); //Print: Hi Kyle
//Call Call method
Kyle.sayHi.call(Cheyna); //Print: Hi Cheyna


//Apply() Example 1
//Input
var Kyle = {
    firstName: "Kyle",
    sayHi: function () {
        return "Hi " + this.firstName
    }, 
    addNumbers: function(a, b, c, d) {
        return this.firstName + " just calculated " + (a+b+c+d);
    }
}
var Cheyna = {
    firstName: "Cheyna",
}
//Output
//Call Apply method
Kyle.addNumbers.apply(Cheyna,[1, 2, 3, 4]); //Print: Cheyna just calculated 10


//Bind() Example 1
//Input
var Kyle = {
    firstName: "Kyle",
    sayHi: function () {
        return "Hi " + this.firstName
    }, 
    addNumbers: function(a, b, c, d) {
        return this.firstName + " just calculated " + (a+b+c+d);
    }
}
var Cheyna = {
    firstName: "Cheyna",
}
//Output
//Call Bind method
var CheynaCalc = Kyle.addNumbers.bind(Cheyna,1, 2); //Prints created bind function and saves it to the this keyword.
//Invoke Bind function with final parameters
CheynaCalc(3, 4); //Prints Cheyna just calculated 10


//Invoke this keyword with call(), apply(), and bind():
var colt = {
    firstName: 'Colt',
    sayHi: function() {
        setTimeout(function () {
            console.log("Hi " + this.firstName);
        }, 1000);
    }
}
colt.sayHi(); //Prints "Hi undefined" after(1000 milliseconds) as 'this' refers to the window object as it is called at a later point in time.

//To fix this use bind() to bind 'this' to the colt obj to refer to when the timeout interval is complete
var colt = {
    firstName: 'Colt',
    sayHi: function() {
        setTimeout(function () {
            console.log("Hi " + this.firstName);
          //call bind() method
        }.bind(this), 1000);
    }
}

colt.sayHi(); //Prints "Hi Colt" after(1000 milliseconds) as binded this was also invoked, which referred to the Colt obj


// ========================================================================================== //

//Keyword This Rule 4 - The 'new' keyword

//New keyword example:

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

var cheyna = new Person("Cheyna", "Frahm");

cheyna.firstName; // Prints 'Cheyna'
cheyna.lastName; //Prints 'Frahm'
