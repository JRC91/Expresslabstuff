//const exportsFromFileB = require('./fileB') // note the relative file path
//exportsFromFileB();
let pets = require('./fileC');
const fileB = require('./fileB');
fileB.tooLate('Here we go');
console.log(pets);
