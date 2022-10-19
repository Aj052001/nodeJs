// const event = require('events') aise bhi kar skte hai 

const EventEmitter = require('events');
const event = new EventEmitter();

//define 
//single bar

// event.on("sayMyName",()=>{
//     console.log("my name is ajay")
// })
// event.emit("sayMyName"); 

//multiple time
// event.on("sayMyName",()=>{
//     console.log("my name is ajay")
// });
// event.on("sayMyName",()=>{
//     console.log("my name is ravi")
// });
// event.on("sayMyName",()=>{
//     console.log("my name is rohit")
// });
// event.on("sayMyName",()=>{
//     console.log("my name is rahul")
// });
// event.emit("sayMyName"); 


//regestering for the event with callback parameters

event.on("checkPage",(sc,msg)=>
{
    console.log(`status code is ${sc} and the page is ${msg}`)
})
event.emit("checkPage",200,"ok");