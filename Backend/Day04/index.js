const http = require('http');

const server = http.createServer((req,res)=>{
    // res.end("Hello Coder")
    if(req.url==="/"){
        res.end("Hello This Is Our Home Page")
    }
    else if(req.url==="/contact"){
        res.end("This is Contact Page")
    }
    else if(req.url=="/about"){
        res.end("This is Our About Page")
    }
    else
    {
        res.end("Error:No Page Found")
    }
})


server.listen(4000,()=>{
    console.log("I am Listening at Port No 4000");
})