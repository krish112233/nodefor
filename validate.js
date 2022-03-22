const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/validateBDS')
.then(()=> console.log("connection successful"))
.catch((err)=> comsole.log(err))


