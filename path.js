const path = require ("path")
// console.log("ajay")
// console.log(path.dirname("/home/ajay/ajay/placement/webd/nodejs/path.js"
// ))
// console.log(path.extname("/home/ajay/ajay/placement/webd/nodejs/path.js"
// ))
// console.log(path.basename("/home/ajay/ajay/placement/webd/nodejs/path.js"
// ))
const mpath = path.parse("/home/ajay/ajay/placement/webd/nodejs/path.js"
)

console.log(mpath.ext)