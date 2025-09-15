//default get method 

fetch("www.example.com")

//POST Method Format
const responce = await fetch('https:api.example.com/data',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:"John",age:30})
});