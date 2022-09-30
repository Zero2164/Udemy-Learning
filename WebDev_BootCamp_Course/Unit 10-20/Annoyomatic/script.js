//Annoyomatic V1

// answer = prompt("Are we there yet?")

// while(answer !== "yes" && answer !== "yeah") {
//     answer = prompt("are we there yet?");
// }

// alert("Yay, we made it!")


//Annoyomatic V2


answer = prompt("Are we there yet?")

while(answer.indexOf("yes") === -1) {
    answer = prompt("Are we there yet?");
}

alert("Yay, we made it!")

