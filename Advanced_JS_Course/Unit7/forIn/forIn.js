//For In Loops

//example

//create function to conform with Modular code
function displayForInLoopExample() {
    const sports = {
        soccer: 10,
        BasketBall: 10,
        Hockey: 10,
        VolleyBall: 10
    };

    //create title to display in console
    let title = '== HERE IS AN EXAMPLE OF THE FOR IN LOOP DISPLAYING THE KEY VALUES: ==';
    console.log(title);
    for (let prop in sports) {
        console.log(prop);
    };
};


