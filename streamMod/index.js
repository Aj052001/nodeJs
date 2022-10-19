const fs = require('fs')
const http = require('http')
const hostName ="127.0.0.1"
const portName = 8000;

const server  =  http.createServer();
server.on('request',(req,res)=>{

    //1st way   without streaming
//    fs.readFile("input.txt","utf-8",(err,data)=>{
//     if(err){ return console.error(err)}
//    res.end(data)
//    })


// 2nd way   with streaming
// const rstream = fs.createReadStream('ijnput.txt');
// rstream.on("data",(chunkdata)=>{
// res.write(chunkdata);
// })
// rstream.on("end",()=>{
// res.end();
// })
// rstream.on("error",(err)=>{
// console.log(err);
// res.end("File not found")
// })
// //    fs.readFile("input.txt","utf-8",(err,data)=>{
// //     if(err){ return console.error(err)}
// //    res.end(data)
// //    })

// 3rd way  
const rstream = fs.createReadStream('input.txt');
rstream.pipe(res);
});
server.listen(portName,hostName,()=>{
    console.log(`listening on port ${portName}`);
})