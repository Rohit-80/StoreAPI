const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
 name : {
     type : String,
     required:[true, 'prodcut name must be provided']
 },
 CreateAt :{
     type : Date,
     default : Date.now()
 },
 price : {
     type : Number,
     required : [true,'Product price must be Provided']
 },
 featured : {
     type : Boolean,
     default : false
 },
 rating : {
     type : Number,
     default:4.5
 },
 company : {
     type : String,
     enum : {
         values : ['rohit','yash','ritesh','ameesha','shazia',],
         message : '{VALUE} is not supported'
     }

 }

});
const product = mongoose.model('Product',productSchema)


module.exports = product;