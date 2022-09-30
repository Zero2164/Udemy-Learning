//Object & Array Equality:

let nums = [1, 2, 3]; //Prints: 1, 2, 3 in object form in the console
// -> reference number may be = 348288742394;
let mystery = [1, 2, 3]; //Prints: 1, 2, 3 in object form in the console
// -> reference number may be = 999442894;

//However each array and object stores an internal reference to the array itself.
  //meaning that the first array "nums" has some type of numerical reference i.e - 23284728484
   //but the second array "mystery" has a completely different reference number, even though the data contained within each array is the same

//To truly create a duplicate copy of the original array "nums" you must refer or assign its reference number to the new variable:
let moreNums = nums;

/////////////

//The same referencing rules are applied to Objects and complex Object structures:
const user = {
    username: 'Garcia',
    email: 'garcia@gmail.com',
    notifications : []
};

//testing if 'notifications' arrays is empty
if(!user.notifications.length) {
    console.log('No New Notifications!');
};