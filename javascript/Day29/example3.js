console.log("Hello Coder Army");

//callback function 1
setTimeout(()=>{
    const a =2+4;
    console.log(a);
},5000)
//callback function 2

setInterval(() => {
    console.log("I am very Fast");
}, 2000);

let b = 20;
let arr = [20,30,11];

for (let i of arr ){
    console.log (i*b);
}


//event loop => from callback queue to call stack when call stack will free 

//otherwise race around condition arise (data onconsistency can occure)

