console.log("hello i am second");

function sum (a,b){
    console.log(a+b);
}

function sub (a,b){
    console.log(a-b);
}
// console.log(module.exports)
//module.exports is a empty objects 
//module.exports={sum,sub};

module.exports.sum=sum;
module.exports.sub=sub;