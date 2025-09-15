const express=require('express')
const app= express()




const BookStore=[
    {id:1,name:"Harry Potter",author:"Soumen"},
    {id:2,name:"Friends",author:"Vikash"},
    {id:3,name:"Nexus",author:"Rohit Bhai"},
    {id:4,name:"DSA",author:"Maharaj"},
    {id:5,name:"Prem Kahani",author:"Anish"},
    {id:6,name:"Hello",author:"Vikash"}
]

app.use(express.json());

app.get("/book",(req,res)=>{
    //quary parameter
    console.log(req.query)
    const Book=BookStore.filter(info=>info.author===req.query.author)
    
    res.send(Book)


})

app.get("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const Book=BookStore.find(info=>info.id===id)
    res.send(Book)

})


app.post("/book",(req,res)=>{
    BookStore.push(req.body)
    console.log(req.body)
    res.send("Data Saved Sucessfully")
})

app.patch("/book",(req,res)=>{
    console.log(req.body)
    const Book= BookStore.find(info=>info.id===req.body.id)
    if(req.body.author)
    Book.author=req.body.author
    if(req.body.name)
    Book.name=req.body.name
    res.send("Patch Updated")
})

app.put("/book",(req,res)=>{

    const Book = BookStore.find(info=>info.id===req.body.id)
    console.log(req.body)
    Book.author=req.body.author
    Book.name=req.body.name
    
    res.send("Put Changes Updated Sucessful")
})


app.delete("/book/:id",(req,res)=>{
    const id =parseInt(req.params.id)
    const index=BookStore.findIndex(info=>info.id===id)
    BookStore.splice(index,1)
    res.send("Sucessfully Deleted the Data");
})






app.listen(4000,()=>{
    console.log("Server Listning at Port No 4000")
})