//https://www.npmjs.com/ npm link
const chalk = require ('chalk');
const validator = require('validator')
// console.log(chalk.red.inverse("hello world"))

const res = validator.isEmail("ajsinghb@gmail.com");
console.log(res? chalk.green.inverse(res) :chalk.red.inverse(res))