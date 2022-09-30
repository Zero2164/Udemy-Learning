//Pass functions in to other functions
//Example 1
function singSong() {
    console.log("Twinkle Twinkle..");
    console.log("How I wonder...");
}
//call singSong 
singSong(); //prints: console.log("Twinkle Twinkle..");
                  //  console.log("How I wonder...");

//setInterval repeats "funcName" at a "ms" interval
          //-funcName   -Interval
setInterval(singSong, 1000);



//Example 2

//Define one-time function with the setInterval Scope. 
setInterval(function(){
    console.log("This is an Anonymouse fucntion!");
    console.log("This is Awesome!");
}, 2000);

//You may then clear all "setInterval's" with the below code:
         //Ensure to pass in the intervals ID number
clearInterval();