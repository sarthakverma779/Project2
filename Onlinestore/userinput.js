console.log('Executing user_input.js file');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command is :- ', command);

if(command === 'add') {
  console.log('Adding New Note');
} else if(command === 'read') {
  console.log('Reading Note');
} else if(command === 'remove') {
  console.log('Removing Note');
} else if(command === 'list') {
  console.log('Lisiting all content(notes)');
} else {
  console.log('Command not recognised');
}