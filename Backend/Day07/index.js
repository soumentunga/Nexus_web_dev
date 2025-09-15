const express = require("express");

const app=express();






























// app.use("/user",(req,res)=>{
//     res.send({"name":"Soumen"})
// })



//parsing karna parta hai
app.use(express.json());

app.get("/user",(req,res)=>{
    console.log(req);
    res.send({"name":"Soumen"})
})


app.post("/user",(req,res)=>{
    // console.log("Data Saved Sucessfuly");
    console.log(typeof(req.body.age));
    res.send("Data Save Sucessfully");
})


//get post patch put delete  =>API end Point


app.listen(4000,()=>{
    console.log("Server Listening at Port No 4000");
})