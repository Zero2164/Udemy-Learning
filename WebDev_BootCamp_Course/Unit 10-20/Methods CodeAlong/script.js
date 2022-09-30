

function obj1() {
    var obj = {
        name: "Chuck",
        age: 45,
        isCool: false,
        friends: ["bob", "tina"],
        add: function (x, y) {
            return x + y;
        }
    }
    function firstExample() {
        console.log(obj.add(10, 7));
    }
    firstExample();
};
obj1();

//create Function to contain code
function obj2() {
    //add an Object
    var obj2 = {
        //define Fucntion within Object
        speak: function () {
            console.log("I'm Human 1 speaking");
        }
    };
    //add another Object
    var obj3 = {
        //define same Fucntion within Object
        speak: function () {
            console.log("I'm Human 2 speaking");
        }
    };
    //create Function to call both Object-Functions
    function secondExample() {
        console.log(obj2.speak());
        console.log(obj3.speak());
    };
    secondExample();
};
obj2();

function obj3() {
    var comments = {
        title: "The following comments are stored in an Object-Array:",
        data: ["Good Job!", "Bye", "Lame...."],
        print: function () {
            this.data.forEach(function (el) {
                console.log(el)
            });
        }
    };
    console.log(comments.title);
    console.log(comments.print());
};
obj3();