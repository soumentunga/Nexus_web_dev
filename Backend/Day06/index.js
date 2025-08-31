const express = require("express");

const app=express();

// ? char become Optional
// + char can be repeated multiple times
// * any number of character can arrive

app.use("/about/:id/:user",(req,res)=>{
    console.log(req.params)
    res.send({"name":"Soumen","Age":22,"Money":100});
})


// app.use("/contact",(req,res)=>{
//     res.send("I Am Your Contact Page");
// })

// app.use("/detail",(req,res)=>{
//     res.send("I Am your Detail Page");
// })



// app.use("/",(req,res)=>{
//     res.send("This Is Your Home Page");
// })





app.listen(4000,()=>{
    console.log("Server Listening at Port No 4000");
})