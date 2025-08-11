const {sum,sub} = require ("./second")


console.log("hello i am First");
sum(5,2);
sub(5,2);

//CJS:common JS Module
//IIFE format=>
// (function(){
//     console.log("hello i am second");

// function sum (a,b){
//     console.log(a+b);
// }
// function sub (a,b){
//     console.log(a-b);
// }

// })();
