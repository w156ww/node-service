const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');
mongoose.connect(dbConfig.test, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false});




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', (error, result) => {
    console.log('open')
});
// Schema
const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({name: 'Silence'});
console.log(silence.name);



const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});


Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})
