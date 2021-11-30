
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testSchema = new Schema({
Underscoreid:String , 

test:String 


})

module.exports = {
  Test : mongoose.model('Test', testSchema),
}

