require('dotenv').config();
const express = require("express");
const app = express();
const data = require("./connection")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname +'/index.html');
});

app.get("/entry",(req,res)=>{
    res.sendFile(__dirname+"/index2.html")
})
// CRUD OPERATIONS

// CREATE

app.post("/emp",async(req,res)=>{
       let data1 = await data();
       let data2 = await data1.insertOne(req.body);
       res.redirect('/entry');
})

// READ
app.post("/get",async(req,res)=>{
    let data1 = await data();
    let data2 = await data1.findOne(req.body);
    console.log(req.body)
    res.send(data2);
})

// UPDATE
app.post("/get",async(req,res)=>{
    let data1 = await data();
    let data2 = await data1.findOne(req.body);
    res.send(data2);
})

app.listen(process.env.PORT||7000,()=>{
    console.log("Server is activated")
});