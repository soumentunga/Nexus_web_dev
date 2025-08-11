const fs=require('fs')

let a=10
let b="Hello"

console.log(b);

function sum(a,b){
    console.log(a+b);
}
const data =fs.readFileSync("./data.json","utf-8")
console.log(data);

// fs.readFile("./data.json","utf-8",(err,res)=>{
//     console.log(res)
// })


setTimeout(()=>{
    console.log("Hello Time is Out");
},3000)

console.log(a);
sum(3,4)
