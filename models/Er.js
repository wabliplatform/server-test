
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const erSchema = new Schema({
Underscoreid:String , 

er:Number 


})

module.exports = {
  Er : mongoose.model('Er', erSchema),
}

