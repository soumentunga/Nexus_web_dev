const express=require('express')

const app= express()

//Middleware
//route Handler
//request handeler

//app.use(route ,RH,[RH,RH,RH],RH,RH)
//we can write it aslo indivisually also 




app.use("/user",(req,res,next)=>{
    console.log("First")
    // res.send("First") //error because we can't send more than one responce in the header 
    next()
}
)

app.use("/user",(req,res,next)=>{
    console.log("Second")
    // res.send("Second") 
    next()
}
)
app.use("/user",(req,res,next)=>{
    console.log("third")
    // res.send("Third")
    next()
}
)

app.use("/user",(req,res,next)=>{
    console.log("Fourth")
    res.send("I am Fourth")
    next()
}
)






app.listen(4000,()=>{
    console.log("Listening at port no 4000")
})