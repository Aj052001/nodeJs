
//create web server 
// const http = require('http');

// const server = http.createServer((req,res)=>{
// res.end("Hello from other sides ajay");
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening on port no. 8000")
// })

//handle with routing and http request and url
const http = require('http');
const url  = require ('url')

const server = http.createServer((req,res)=>{
    // console.log(req.url)

    if(req.url=='/'){
        res.end("Hello from home");
    }
     else if(req.url=='/about'){
        res.end("Hello from about");
    }
    else if(req.url=='/contact'){
        res.end("Hello from contact");
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        // res.write()
        res.end("<h1>Error 404 page not found</h1>"); 
    }
 

})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening on port no. 8000")
})