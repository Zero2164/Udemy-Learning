//Arrays Problem Set:
function prob1() {
    console.log("///PROBLEM 1///");
    console.log(" - printReverse([1,  2,  3,  4]);")
    console.log(" - printReverse(['a', 'b', 'c', 'd']);")
    //PROBLEM  1:
    //Print Reverse();
    //Print the Array numbers in reverse-
    var array1 = [1,  2,  3,  4];
    //Print the Array str's in reverse
    var array2 = ["a", "b", "c", "d"];
    
    function printReverse(arr1) {
        for(var i = arr1.length - 1; i >= 0; i-- ) {
            console.log(arr1[i]);
        }
    }
    
    printReverse(array2); //Prints the Array Items in Reverse
    printReverse(array1); //Prints the Array Items in Reverse
}

function prob2() {
    console.log("///PROBLEM 2///");
    console.log(" - isUniform([1, 1, 1, 1])")
    //PROBLEM  2:
    //isUniform():
    //Print true if all items in the array are the same, and false otherwise
    var array3 = [1, 1, 1, 1];
    function isUniform(arr2){
        var first = arr2[0]
        for(var i = 1; i < arr2.length; i++) {
            if(arr2[i] !== first) {
               console.log("False");
            }
        }
        console.log("True");
    }

    isUniform(array3);
}

function prob3() {
    console.log("///PROBLEM 3///");
    console.log(" - sumArray([1, 2, 3, 4]);")
    console.log(" - sumArray([500, 500]);")
    //PROBLEM  3:
    //sumArray()
    //Adds all the numbers in an Array, then prints the total.
    
    //Print the Arrays numbers total:
    array5 = [1, 2, 3, 4];
    array6 = [500, 500];
    
    function sumArray(arr3){
        var total = 0;
        arr3.forEach(function(element) {
            total += element;
        });
        console.log(total);
    }
    
    sumArray(array5);
    sumArray(array6);
}

function prob4() {
    console.log("///PROBLEM 4///");
    console.log(" - max([1, 500, 3000, 2];)");
    //PROBLEM  4:
    //max();
    //Print the maximum number in the Array.
    var array7 = [1, 500, 3000, 2];

    function max(arr4) {
        var  max = arr4[0]
        for(var i = 1; i < arr4.length; i++ ) {
            if(arr4[i] > max) {
                max = arr4[i];
            }
        }
        console.log(max);
    }

    max(array7);
    console.log("///END OF PROBLEM SET///");
}

prob1();
prob2();
prob3();
prob4();



