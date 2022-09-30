//Objects

//Objects are collections of properties
//Properties are a key value pair
//Rather than accessing data using an index, we use custom keys.


//example:
const fitbitData = {
    totalSteps : 308577,
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:13'
};

//create func to conform with modular code:
function presentData() {
    console.log('Here is your total miles: ', fitbitData.totalMiles);
};


//Properties and key value pairs

//Syntax for Object literals example:
{

}

//Creating object literal example:
const fitbitData = {
    //key - //letter or number which is converted to a string        
    totalSteps : 308577,
                //value - which can be any valid value in JS
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:13'
};


//Keys and accessing object properties:

const randomObj = {
    'destroyed variable' : 'hahah',
    'this counts as a key' : 'damn straight',
    'still 4 key' : 'hell yeah leet speak'
};

//Using square brackets, you can access keys that don't follow conventional JS rules
//Note: when using square brackets - use quotes around parsed value to ensure correct seaching, as keys are converted to strings.
       //however if the key is a variable or you are looking to store a variable with user input, then variable name is sufficient
randomObj["this counts as a key"]; //Prints: 'damn straight'

//searching with variable:
let searchVar = 'this counts as a key';
randomObj[searchVar]; //Prints: 'damn straight'


//Updating and Adding Properties:
randomObj[searchVar] = 'newKey';

