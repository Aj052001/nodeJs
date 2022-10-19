const fs = require('fs')
// const bioData ={
//     name : "ajay",
//     age  :"21",
//     gender:"male"
// }
// // console.log(bioData)

// // console.log(bioData.age)


// //object ot json
// const  jsonData = JSON.stringify(bioData);
// // console.log(jsonData.name)


// //json to object
// const objData = JSON.parse(jsonData)
// console.log(objData.name)



// Task
const bioData ={
    name : "ajay",
    age  :"21",
    gender:"male"
}

//1.convert into json
const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

//2.create new file and add json data into file

// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log("done")
// })

//3.read json file
// const data = fs.readFile('json1.json',"utf-8",(err,data)=>{
//     console.log(data)
  
// })

//4. convert  back to object and show on web site
const data = fs.readFile('json1.json',"utf-8",(err,data)=>{
    const orgData = JSON.parse(data);
    console.log(data) 
    console.log(orgData)
})
