const fs = require("fs");
//Day-1

/* using syncronous way 


//folder bnane ke liye 

// fs.mkdirSync("ajay")
// fs.rmdirSync("ajay")
//file write ki
// fs.writeFileSync('ajay.txt',"welcome to node js ");
// over 
// fs.writeFileSync('ajay.txt',"welcome to node js and learn nodejd ajay singh bhati");

//without overwride
// fs.appendFileSync('ajay.txt',"rohit singh")


// const dat  = fs.readFileSync('ajay.txt');


// org = dat.toString();
// console.log(org);


//to rename 
// fs.renameSync('ajay.txt','rohit.txt');
// fs.renameSync('rohit.tx,"ravi.txt");

//to delete file
// fs.unlinkSync("ravi.txt")

// ******challange********
// fs.writeFileSync("bio.txt","ajay ");
// fs.appendFileSync("bio.txt","this is my first append")
// let a = fs.readFileSync("bio.txt")
// let d = a.toString();
// console.log(d);
// fs.renameSync("bio.txt","bhati.txt")
// fs.unlinkSync("bio.txt","ravi.txt")
//*******challenge end 
*/



//asynchronous way 
// fs.writeFile("ajay.txt","today is awesome day",(error)=>{
//     console.log("completed")
// })
// fs.unlink("ajay.txt",(error)=>{
//     console.log("completed")
// })
// fs.writeFile("ajay.txt","Today is awesome day",

// //callback function
// (error)=>{
// console.log("completed");
// console.log(error);
// });
// 
// fs.readFile('ajay.txt',"UTF-8",(error,data)=>{
//     console.log(data);
// })
//

//challange 2
// fs.mkdir("ajay",(error)=>{
//     console.log("completed");
// })

// fs.writeFile("ajay.txt","today is awesome day",(error)=>{
//     console.log("completed");
// })
// fs.appendFile("ajay.txt"," wow this a great for me ",(error)=>{
//     console.log("completed")
// })
// fs.readFile("ajay.txt","utf-8",(error,data)=>{
// console.log(data);
// })
// fs.rename("ajay.txt","ravi.txt",(error)=>{
//     console.log("completed")
// })
// fs.unlink("ravi.txt",(errir)=>{
//     console.log("completed")
// })
// fs.rmdir("ajay",(error)=>{
//     console.log("completed");
// })



//callback***********
// const funA = (arg)=> {
//    setTimeout(
//     function(){
//         console.log(`ajay singh funA`);
//        arg();
//     },3000)
   
// }
// const funB = ()=> {
//     console.log(`ajay singh funB`);
// }
// funA(funB);

//os module



