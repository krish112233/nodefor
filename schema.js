


const  mongoose = require("mongoose");

const Schemas = mongoose.Schema({
    name:String,
    email:String,
    password:String
});
module.exports = Schemas;