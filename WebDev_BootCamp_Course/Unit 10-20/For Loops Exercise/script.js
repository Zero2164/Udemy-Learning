//For Loops Exercises


//Exercise 1
console.log("PRINT ALL NUMBERS BETWEEN -10 and 19")

for(i = -10; i <= 19; i ++) {
    console.log(i);
}


//Exercise 2
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 and 40")

for(i = 10; i <= 40; i += 2) {
    console.log(i);
}


//Exercise 3

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 and 333")
for(i = 300; i <= 333; i ++) {
    if(i % 2 !==0){
        console.log(i);
       }
}


//Exercise 4

console.log("PRINTING ALL NUMBERS  DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50")

for(i = 5; i <= 50; i ++) {
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
       }
}