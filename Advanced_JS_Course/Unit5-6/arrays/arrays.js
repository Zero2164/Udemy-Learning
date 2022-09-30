//Arrays and Objects

//Collections of Data

//Arrays;
//Ordered collections of values.
//List of comments on an IG Post
//Collection of levels in a game
//Songs in a playlist

//examples:

//to make an empty array
let firstArray = [];

//create function to display all items in array
function displayItem(item) {
    console.log(item);
};

//function to contain modular code
function arrayDisplay() {
    console.log('==SIMPLE Array Display:==');
    //to push items into an array then store in firstArray variable
    firstArray.push('apple', 'banana', 'orange');
    //display array       //Utilising the index of each array item
    firstArray.forEach(displayItem); //Prints: ['apple', 'banana', 'orange'];
};
let secondArr = [];
//adding to array via index number
secondArr[542] = 'test';


//modyfying arrays:
let shoppingList = ['Chedder Cheese', 'Lite Milk'];

//function to contain modular code
function modArr() {
    console.log();
    console.log('===SHOPPING LIST===');
    shoppingList.forEach(displayItem); //Prints: ===SHOPPING LIST=== - Chedder Cheese - Lite Milk;
    //changing existing items in the array
    shoppingList[1] = 'Whole Milk';
    //Including new items non-efficiently
    shoppingList[2] = 'Ice Cream';
    console.log('===SHOPPING LIST *UPDATED*===');
    shoppingList.forEach(displayItem);  //Prints: ===SHOPPING LIST=== - Chedder Cheese - Whole Milk - Ice Cream;
};


//Additional Array Methods:

//Popular 4 Methods:
//Push //adds elements to the end of the array
//Pop //removes elements from the end of an array
//Shift //removes elements from the beginning of the array
//Unshift //adds elements to the beginning of the array 


//Push and Pop Example:
let playList = [
    'First Time I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life on Mars'
],
    newSong,
    action3 = document.querySelector('.addSong'),
    action4 = document.querySelector('.removeSong');

function addItemsToEnd() {
    console.log();
    console.log('==HERE IS YOUR SONGS PLAYLIST==');
    playList.forEach(displayItem);
};

function addSongz() {
    action3.addEventListener('click', function () {
        newSong = prompt('Enter the Song you would like to add to the list.');
        playList.push(newSong);
        console.clear();
        addItemsToEnd();
        newSong = '';
    });
};
addSongz();

function removeSongz() {
    action4.addEventListener('click', function () {
        if (playList.length > 0) {
            console.clear();
            console.log('!! LAST SONG ', '"' + playList[playList.length - 1] + '"', ' REMOVED !!');
            playList.pop();
        } else if (playList.length <= 0) {
            console.clear();
            console.log('NO MORE SONGS TO REMOVE');
            addItemsToEnd();
            return false;
        }
    });
}
removeSongz();


////////////////////////////////////////////////////////////////////////////


//Shift and Unshift Example:
let dishesToDo = ['big platter'];

function addDishes() {
    console.log();
    console.log('==DISHES TO DO==');
    dishesToDo.unshift('large plate');
    dishesToDo.forEach(displayItem);
};

function removeDishes() {
    console.log();
    console.log('==DISHES TO DO==');
    dishesToDo.shift();
    dishesToDo.forEach(displayItem);
};

////////////////////////////////////////////////////////////////////////////

//More Array methods:

//Concat //Used to merge two arrays into one new array without altering the existing merged arrays.
//Includes //Determins if the array is storing the entered value *exactly* returning 'true' or 'false'.
//IndexOf //Determins the value index and returns the index of the value in the array.
//Reverse //Reverses the contents of the array by mutating the array rather than making a copy.
//Join //Joins an array of values and turns them into 1 seperate string. - Default seperated by commas, you may specify what to seperate each value with in the parse section.
//Slice //Select and copy specified value in an array and cut/copy this section to a new value, you may specify what to seperate in the parse section.
//Splice //Method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//Sort //Method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

//Concat example:
//create variables to concat
let fruits = ['pear', 'mandarin', 'pineapple'],
    vegetables = ['carrot', 'beans', 'peas'],
    //concatenate then save the concatenated array to a variable. 
    //PLEASE NOTE: Order Matters if you wish to store the other variables first
    combinedVar = vegetables.concat(fruits);
//create function to conform with modular code
function runThisResult() {
    console.log();
    //create console.log note to denote new list
    console.log('== This is a list of the concatenated array ==');
    //then display new concatenated array
    combinedVar.forEach(displayItem);

};



//Includes example:
//create array variable
let ingrediants = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'egg',

];
//create variables - checking if exact value exists in array:
let checkWater = ingrediants.includes('water'); //Prints: true  
let checkFish = ingrediants.includes('fish'); //Prints: false  
//checking if exact value exists in array past a certain index:
let checkFromIndex = ingrediants.includes('flour', 3);  //Prints: false 
//create function to conform with modular code
function ingrediantsCheck() {
    console.log();
    console.log('Here is the current ingrediants list:');
    ingrediants.forEach(displayItem);
    console.log('==Checking if Ingrediants are in the ingrediants array==');
    console.log(' Is "water" on the list: ', checkWater, '\n', 'Is "fish" on the list: ', checkFish, '\n', 'Is "flour" on the list past list item 3: ', checkFromIndex);
};



//Join, Reverse, and IndexOf Examples:
//create array variable:
let reverseArr = [
    'T',
    'C',
    'E',
    'P',
    'S',
    'E',
    'R',
];
//create func to conform with modular code
function threeExamplesInOne() {
    console.log();
    console.log('==Join, Reverse, and IndexOf Examples:==', '\n', 'Here is the reverseArr:');
    reverseArr.forEach(displayItem);
    //IndexOf example:
    console.log('What is the IndexOf "R" in the word "Respect": ', reverseArr.indexOf('R')); //Prints: 0
    //Reverse example:
    console.log('What is the reverseArr reversed: ', reverseArr.reverse().toString()); //Prints: R,E,S,P,E,C,T;
    //Join example:
    console.log('What is the reversedArr look like joined together: ', reverseArr.join('')); //Prints: RESPECT;
};


//Slice example:
//create array variable:
let sliceMe = [
    'Shark',
    'Bear',
    'Potato',
    'Dolphin',
    'Lemur'
];

let foodArr = sliceMe.slice(2, 3);
let animalArrPt1 = sliceMe.slice(0, 2);
let animalArrPt2 = sliceMe.slice(3, 5);
//create func to conform with modular code
function displaySlicedArr() {
    console.log();
    console.log('==Here is example of slice method:==', '\n', 'Here is the unchanged Array:');
    sliceMe.forEach(displayItem);
    //display the sliced arrays in the console:
    console.log(' Here is the food array sliced from original array: ' + foodArr.toString(), '\n', 'Here is the food array sliced from original array:', animalArrPt1.join(', ') + ', ' + animalArrPt2.join(', '));
};


//Splice example:
//create array variable:
let games = [
    'Monopoly',
    'Family Fued',
    'Computer Games',
    'Submarine Vehicle',
    'Chinese Government',
    'Cluedo'
];

//create function to conform with modualr code
function spliceDice() {
    console.log();
    console.log('==Spliced Example==', '\n', 'Here is the original Array:');
    games.forEach(displayItem);
    //display the spliced items in the console and replace the original values with "Uno"
    let newArr = games.splice(3, 2, 'Uno').toString();
    console.log('Here is the spliced values: ', newArr);
    //display the spliced array in the console with the replacement
    console.log('Here is the spliced Array:');
    games.forEach(displayItem);
};


//Sort example (Part 1):
//Additional Notes:
//Part 2 (Learning to sort numvbers) will be covered in the functions section of the course. 

//create array variable:
let names = [
    'Cheyna',
    'Maggie',
    'Jolene',
    'Angie',
    'Octavia',
    'Aria'
];

//create function to conform with modualr code
function sortData() {
    console.log();
    console.log('==Here is an example of sorting arrays:==', '\n', 'Here is the original list of items:');
    //display original list of values
    names.forEach(displayItem);
    //store sorted names into a new variable
    let sortedNames = names.sort().toString();
    //display newly sorted values in console as a string
    console.log('Here is the sorted names (ascending): ', '\n', sortedNames);
};

