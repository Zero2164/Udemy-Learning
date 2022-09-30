//Ternary operator


//example 1 - 

//if else code converted to ternary operator.
if (num === 7) {
    console.log('lucky!');
} else {
    console.log('bad!');
};

//ternary operator completing if else code above
num === 7 ? console.log('lucky!') : console.log('bad!');


//Example 2: 
let status = 'offline',
    color;

//if else code converted to ternary operator.
if (status === 'offline') {
    color = 'red';
} else {
    color = 'green';
};


//ternary operator completing if else code above
let color = status === 'offline' ? 'red' : 'green';