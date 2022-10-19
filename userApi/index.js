const fs = require('fs')
const http = require('http');
const url  = require ('url')

const server = http.createServer((req,res)=>{
//ek bar hi load ho phli bar me data aa jaye uske bad hmm use bar bar use kr ske
    const data = fs.readFileSync("index.json","utf-8")
        const objdata = JSON.parse(data);
    

    if(req.url=='/'){
        res.end("Hello from home");
    }
     else if(req.url=='/about'){
        res.end("Hello from about");
    }
    else if(req.url=='/contact'){
        res.end("Hello from contact");
    }
    else if(req.url=='/userApi'){
        res.writeHead(200,{"content-type":"application/json"})
            res.end(objdata[0].data.name);
    }
        // res.end("Hello from userApi");
    
    else{
        res.writeHead(404,{"content-type":"text/html"})
        // res.write()
        res.end("<h1>Error 404 page not found</h1>"); 
    }
 

})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening on port no. 8000")
})