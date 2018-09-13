//Mongodb connection
var MongoClient = require('mongoose');

MongoClient.Promise = global.Promise;
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true })
module.exports = {MongoClient};

console.log('4.mongo');
