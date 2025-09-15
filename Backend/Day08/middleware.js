const express=require('express')

const app= express()

//Maintain Logs through middleware
app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url} `)
    //authorization wagera vi kar sakte hai middleware me

    next()  //next line pe chale jao according to the request type
})



app.get("/user",(req,res)=>{
    
    res.send("Info About User")
})

app.post("/user",(req,res)=>{
    res.send("Info Saved")
})

app.delete("/user",(req,res)=>{
    res.send("Info Deleted")
})


app.listen(4000,()=>{
    console.log("Listening at port no 4000")
})


//Request Log file maintain karta hai middleware ka madat se 
//timing,kis type ki request,URL kya tha
