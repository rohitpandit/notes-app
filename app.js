const validator = require('validator');

const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);
console.log(validator.isEmail('ram@ra.co'));
console.log(validator.isURL('sdfl.com'))