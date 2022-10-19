// const add=(a,b)=>{
// return a+b;
// }
// module.exports  = add;
const fs = require('fs');
const data = fs.readFile("ajay.txt","utf-8",(error,data)=>{
    console.log(data)
    // console.log("completed")
});
