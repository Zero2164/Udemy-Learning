function movieDataBaseApp() {
    //Variables
    var movieDB = [
        {
            title: "Avatar",
            seen: "yes",
            rate: "5"
        },
        {
            title: "Simpsons",
            seen: "yes",
            rate: "5"
        },
        {
            title: "Harry Potter",
            seen: "yes",
            rate: "5"
        },
        {
            title: "Frozen 2",
            seen: "no",
            rate: "0"
        },
        {
            title: "Kung Fu Panda",
            seen: "yes",
            rate: "3"
        },
    ];
    var input = prompt(" What would you like to do? ");

    //Movie DB App code:
    while (input !== "quit") {
        //handle input
        if (input === "find") {
            srchDB();
        } else if (input === "view") {
            viewMovieDB();
        } else if (input === "clear") {
            clearConsole();
        }
        //ask again for new input
        input = prompt(" What would you like to do? ");
    };
    alert(" OK, YOU HAVE NOW QUIT THE APP, PLEASE REFRESH TO START AGAIN! ");

    //FUNCTIONS:
    function srchDB() {
        //Set Variables:
        var search = prompt("Enter a movie title to find out more info!");
        var i = 0
        //Loop Search
        for (var i = 0; i < movieDB.length; i++) {
            //Test if Search input matches database values
            if (movieDB[i].title === search) {
                //Display feedback if true
                console.log("Movie Title: " + search);
                //Test if object is equal to 'seen' property
                if (movieDB[i].seen === "yes") {
                    //Display feedback if true
                    console.log("You have seen " + search);
                } else {
                    //Display feedback if false
                    console.log("You have not seen " + search);
                }
                //Dislay feedback if true
                console.log("Your current rating for " + search + " is " + movieDB[i].rate + "/5");
                //Alert to guide user on how to access returned info.
                alert(" Press 'F12' to see results! ");
                //Cancel loop if true
                return "success";
            };
        };
        //Loop Search
        for (var i = 0; i < movieDB.length; i++) {
            //Test if input does not match database values
            if (movieDB[i].title !== search) {
                //Display feedback if true
                alert("Movie Not Found in Database");
                //Cancel loop if true
                return "fail";
            };
        };
    };

    function viewMovieDB() {
        //Display Database
        console.log(movieDB);
        //Alert to guide user on how to access returned info.
        alert(" Press 'F12' to see the currently stored Movie Database! ");
    };

    function clearConsole() {
        //clear the console.log
        console.clear();
        //Display feedback of completed function.
        alert(" Console has been cleared!");
    };

};
movieDataBaseApp()



