const express = require("express");
const app = express();

const port = process.env.port || 3000;
const path = require("path");


// const staticPath = path.join(__dirname, "work");
app.set("view engine", "hbs");

// app.use(express.static(staticPath))

app.get("", (req,res)=>{
    res.render("index.hbs")
})

app.get("/", (req,res)=>{
    res.send("hello from app.js");
})

app.listen(port,()=>{
    console.log(`listning to port no ${port}`);
})



