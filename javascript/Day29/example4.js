console.log("i am fast ");

//for promise event loop is called mycrotask Queue work is same as callback queue
//priority of mycrotask queue is >> then the priroty of callback queue
//only promises goes to mycrotask queue all other things goes callback queue
//JavaScript promises and the Mutation Observer API both use the microtask queue to run their callbacks,

fetch("https://youtube.com")
.then(()=>console.log("Hello "));

console.log("I am last");