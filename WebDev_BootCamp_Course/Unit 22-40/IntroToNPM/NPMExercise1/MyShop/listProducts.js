function randomFakeProductsNPrices () {
    //call faker package
var faker = require('faker');
var cat = require('cat-me');

console.log(cat());
console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");
//create for loop to generate 10 different products/prices
for(var i = 0; i < 10; i++) {
    //print in the console 10 different products with prices
    console.log(faker.commerce.product() + " - $" + faker.commerce.price());
}

}
randomFakeProductsNPrices ();