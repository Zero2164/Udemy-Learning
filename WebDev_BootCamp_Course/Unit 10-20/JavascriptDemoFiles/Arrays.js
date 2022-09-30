//Array Examples:

//Pushing data into the Array example:

var colors = ["Red", "Green", "Blue"]; 

colors.push("Purple");
                                                //"Push" the new data into the end of the Array.
colors; //prints ["Red", "Green", "Blue", "Purple"]; 



//Popping data out of the Array example:

var colors = ["Red", "Green", "Blue"]; 
                                //"Pop" the last entry of data out of the Array
colors.pop();  //Removes: "Blue"
                            //Returns all the colors that remain, after popping the data out
colors; //prints: ["Red", "Green"]



//Unishifting data into the beginning of an Array example:
var colors = ["Red", "Green", "Blue"]; 

colors.unshift("infrared"); //Adds: "infrared"
                //Returns all the colors including "infrared" at the beginning
colors; //prints: ["infrared", "Red", "Green", "Blue"]  



//Shifting data out of the beginning of the Array example:
var colors = ["Red", "Green", "Blue"]; 

colors.shift(); //Removes the first item in the Array - "Red"
                  //Returns all the colors excluding "Red"
colors; //prints: ["Green", "Blue"]; 



//IndexOf example:
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

//returns the first index at which a given element can be found
friends.indexOf("David"); //prints: 2
friends.indexOf("Liz"); //prints: , not 4

 //returns -1 if the element is not present. 
friends.indexOf("Hagrid"); //prints: -1



//Slice examples:
//Example 1:
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
 //Use Slice to copy the 2nd and 3rd fruits
 //Specify index where the new Array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);
 
 //This does not alter the original fruits Array
 //The citrus Array contains ['Orange', 'Lemon'];
 //The fruits Array contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//Example 2:
var nums = [1, 2, 3];
var otherNums = nums.slice();
//both Arrays are [1, 2, 3];



//Exercise 1:
var nums = [22, 67, 33, 96, 88];

//What does the following line print?
console.log(nums[nums.length]); //prints: undefined undefined
                                //As the numbers greatest value is 4, not the total length 5. 


//Exercise 2: 
var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];

//What is the result of this line?
console.log(friendGroups[2][0]); //prints: ["Mooney", "Wormtail", "Prongs"], "Mooney"






