var num = -10;

console.log("PRINTING ALL NUMBERS BETWEEN -10 and 19");
while(num < 20) {
    console.log(num);
    num += 1;
}

num = 10
console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 and 40");
while(num < 42) {
    console.log(num);
    num += 2;
}

num = 300
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 and 333");
while(num < 333) {
    if(num % 2 !==0){
     console.log(num);
    }
    num += 1
}

num = 5
console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
while(num < 50) {
    if(num % 5 === 0 && num % 3 === 0){
     console.log(num);
    }
    num += 1
}