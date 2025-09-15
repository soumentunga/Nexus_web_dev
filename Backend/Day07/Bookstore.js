const express=require('express')
const app= express()




const BookStore=[
    {id:1,name:"Harry Potter",author:"Soumen"},
    {id:2,name:"Friends",author:"Vikash"},
    {id:3,name:"Nexus",author:"Rohit Bhai"},
    {id:4,name:"DSA",author:"Maharaj"},
    {id:5,name:"Prem Kahani",author:"Anish"}
]

app.use(express.json());

app.get("/book",(req,res)=>{
    res.send(BookStore)
})

app.get("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const Book=BookStore.find(info=>info.id==id)
    res.send(Book)

})


app.post("/book",(req,res)=>{
    BookStore.push(req.body)
    console.log(req.body)
    res.send("Data Saved Sucessfully")
})



//root match:app.use =>initial dakh kar match kar rehe the 

//app.get,app.post,app.patch,app.put,app.delete =>full string match hone par hi match hoga jaise ham soch rahe hai waise hi
 













app.listen(4000,()=>{
    console.log("Server Listning at Port No 4000")
})