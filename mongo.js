const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/contact")
.then(()=> console.log("connection succesful"))
.catch((err)=> console.log(err))
