const mongoose = require('mongoose');
const { access } = require('fs');
mongoose.connect("mongodb://localhost/Demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temprament: String
});

const Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
// const ace = new Cat({
//     name: "Ace",
//     age: 1,
//     temprament: "Smart"
// });

// ace.save(function(err, cat) {
//  if(err) {
//      console.log("SOMETHING WENT WRONG!!");
//  } else {
//      console.log("WE JUST SAVED A CAT TO THE DB!");
//      console.log(cat);
//  }
// });

Cat.create({
    name: "Amira",
    age: 2,
    temprament: "Kind"
}, function (err, cat) {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    };
});

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats) {
    if(err) {
        console.log('OH NO!!');
        console.log(err);
    } else {
        console.log('All the Cats.....');
        console.log(cats);
    };
});