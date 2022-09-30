//Nested Arrays - Multi Dimensional Arrays

//Storing arrays inside of arrays:
//example:
const colors = [
    ['red', 'crimson'],
    ['purple', 'orchid'],
    ['yellow', 'golden rod'],
    ['blue', 'navy blue']
];

//accessing data out of the nested array:
//to access the color array value 'orchid' see the example below:
console.log(colors[1][1]);

//Similarly you may update the accessed data see the example below:
colors[1][0] = 'bright orange'; //changes 'purple' to 'bright orange'.

