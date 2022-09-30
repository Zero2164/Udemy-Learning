//For Of Loop

//syntax 
//for (variable of iterable) {Code to Loop}

//examples:

//create function to conform with modular code
function forOfLoopExample() {
    let subReddits = ['soccer', 'popHeads', 'cringe', 'books'], //for of loop example using an Array:
        thisStringTho = 'Hey'; //for of loop example using a String:

    //console/log the title
    console.log('== HERE IS AN EXAMPLE OF A FOR OF LOOP: ==');

    //array example
    console.log('\n', 'Array:');
    for (let elem of subReddits) {
        console.log(elem);
    };

    //string example
    console.log('\n', 'String:');
    for (let char of thisStringTho) {
        console.log(char.toUpperCase());
    };
};


//////////////////////////////////

//ITERATING OVER OBJECTS:
//New Method called 'Object.keys(parseObjectNameHere)

//example:

//create function to conform with modular code:
function displayMovieReviewsObj() {
    const movieReviews = {
        Arrival: 8,
        Alien: 9.5,
        'In Bruges': 8,
        Amadeul: 9.5,
        'Kill Bill': 9.5,
        'Little Miss Sunshine': 5,
        Coraline: 6
    };

    //create console.log entry for the title:
    console.log('\n', '== HERE IS AN EXAMPLE OF OBJECT.KEY BEING ITERATED WITH FOR LOOP displaying movieRatings: ==');

    //Call Object.keys to obtain all the key values in the movieReviews Object
    for (let movie of Object.keys(movieReviews)) {
        //display each key object
        console.log(movie, ':', movieReviews[movie]);
    };


    //Finding the Average Movie Ratings
    const ratings = Object.values(movieReviews);
    let total = 0;

    for(let r of ratings) {
        total += r;
    };
    let avrg = total / ratings.length;
    console.log('\n', '== HERE IS THE AVERAGE RATING OF ALL THE MOVIES ABOVE: ==', '\n', avrg.toPrecision());
};
