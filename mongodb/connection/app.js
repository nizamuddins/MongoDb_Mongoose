require('dotenv').config();
const express = require("express");
const app = express();
const data = require("./connection")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render('read');
});

app.get("/entry",(req,res)=>{
    res.render("create")
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
    res.send(data2);
})

// UPDATE
app.post("/update1",(req,res)=>{
    let keys = Object.keys(req.body);
    res.render(keys[0])
})

app.post("/update",async(req,res)=>{
    let r = req.body;
    let k = Object.keys(req.body);

    if(k.length == 0){
        let data1 = await data();
        let data2 = await data1.updateOne({'empName':r[k[0]][0]},{$set:{'empName':r[k[0]][1]}});
        res.redirect('/');
    }else if(k[1]=='empRole'){
        let data1 = await data();
        let data2 = await data1.updateOne({'empName':r[k[0]]},{$set:{'empRole':r[k[1]]}});
        res.redirect('/');
    }else{
        let data1 = await data();
        let data2 = await data1.updateOne({'empName':r.empName},{$set:{'empExp':r.empExp}});
        res.redirect('/');
    }
})

// DELETE
app.get("/delete",async(req,res)=>{
    res.render("delete")
})

app.post('/delete',async(req,res)=>{
    let data1 = await data();
    let data2 = await data1.deleteOne({"empName":req.body.empName});
    res.redirect('/');
})
app.listen(process.env.PORT||7000,()=>{
    console.log("Server is activated")
});