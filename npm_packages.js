const sh = require('superheroes');
console.log(sh.random());

const chalk = require('chalk')
console.log(chalk.blue("Este é o texto que ficará em azul."));

const moment = require('moment');
const time = new Date();
const parsedTime = moment(time).format("h:mm:ss");
console.log(parsedTime);