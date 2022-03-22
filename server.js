
const express = require("express");

const server = express();

const mongoose = require("mongoose") 

const port = process.env.port || 3000;

const path = require("path");

const bodyParser = require("body-parser");

const staticPath = path.join(__dirname, "work");
server.use(bodyParser.json());
server.use(express.static(staticPath));

server.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/MYDBS")
var db = mongoose.connection;


server.get("/", (req,res) =>{
  res.set({
    "Allow-Access-alow-Orign": '*'
  })
    return res.redirect('index.html');
});



db.on('error',()=> console.log("error in connection"))
db.once("open", () => console.log("connection to database"))

server.post("/login",  (req,res) =>{
   var name = req.body.name;
   var email = req.body.email;
   var password = req.body.password;

   var dataObj = {
     "name": name,
     "email":email,
     "password":password
   }

   db.collection("users").insertOne(dataObj,(err,collection)=>{
     if(err){
       throw err;
     }
     console.log("Record insert successfully");
   });

return res.redirect('index.html');

})

server.listen(port, ()=>{
    console.log(`listning to port no ${port}`);
});