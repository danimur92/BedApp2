const express = require('express');
const bodyParser = require('body-parser');
console.log('1.inizializazione');
const patient = require('./routes/patient.route'); // Imports routes for the products
const app = express();



//Mongodb connection
var MongoClient = require('mongoose');
MongoClient.Promise = global.Promise;
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true })
module.exports = {MongoClient};

console.log('4.mongo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/patient', patient);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
