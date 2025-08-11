// const add = require('./Calculator/add')
// const sub = require('./Calculator/sub')
// const mul = require('./Calculator/mul')

//Another method using Index 
//Notes :its a special property of Node Js that if noting Mention Specifically which file of a Folder  it will by Default import from index file of That folder.

const{add,sub,mul}=require('./Calculator')





console.log("Soumen Tunga");

add(3,4)
sub(8,2)
mul(2,4)